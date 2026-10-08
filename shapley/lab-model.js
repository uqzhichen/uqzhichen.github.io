(function(root){
  'use strict';
  const SCORES=Object.freeze([12,62,32,92,14,66,36,98]);
  const BIT=Object.freeze({L:1,B:2,T:4});
  const permutations=xs=>xs.length===0?['']:xs.flatMap(x=>permutations(xs.filter(y=>y!==x)).map(p=>x+p));
  const copy=x=>JSON.parse(JSON.stringify(x));
  const initial=()=>({mask:0,route:[],routeValid:true,orders:{},last:null});
  function create(count=2){
    if(count!==2&&count!==3)throw new Error('Choose two or three features.');
    const features=Object.freeze(['L','B','T'].slice(0,count));
    const keys=Object.freeze(permutations(features));
    const scores=Object.freeze(SCORES.slice(0,2**count));
    let state=initial(),history=[];
    function read(){return {...copy(state),score:scores[state.mask],canUndo:history.length>0};}
    function setFeature(feature,present){
      if(!features.includes(feature)||typeof present!=='boolean')throw new Error('Choose an available feature and a boolean presence.');
      const bit=BIT[feature];if(Boolean(state.mask&bit)===present)return read();
      history.push(copy(state));const before=state.mask;
      state.mask=present?before|bit:before&~bit;
      state.last={kind:present?'add':'remove',feature,before:scores[before],after:scores[state.mask],delta:scores[state.mask]-scores[before]};
      if(present&&state.routeValid){
        state.route.push({...state.last});
        if(state.route.length===count){const key=state.route.map(s=>s.feature).join('');if(!state.orders[key])state.orders[key]=Object.fromEntries(state.route.map(s=>[s.feature,s.delta]));}
      }else if(!present){state.route=[];state.routeValid=state.mask===0;}
      return read();
    }
    function newOrder(){
      if(state.mask===0&&state.routeValid&&state.route.length===0)return read();
      history.push(copy(state));const before=scores[state.mask];state.mask=0;state.route=[];state.routeValid=true;state.last={kind:'new',before,after:scores[0],delta:scores[0]-before};return read();
    }
    function undo(){if(!history.length)return read();const before=scores[state.mask];state=history.pop();state.last={kind:'undo',before,after:scores[state.mask],delta:scores[state.mask]-before};return read();}
    function reset(){state=initial();history=[];return read();}
    function averages(){if(!keys.every(k=>state.orders[k]))return null;return Object.fromEntries(features.map(f=>[f,keys.reduce((sum,k)=>sum+state.orders[k][f],0)/keys.length]));}
    return {read,setFeature,newOrder,undo,reset,averages,features,keys,scores};
  }
  const api={create,SCORES,BIT};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.ShapleyLab=api;
})(typeof window!=='undefined'?window:globalThis);
