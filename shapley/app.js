'use strict';
const experiments={2:ShapleyLab.create(2),3:ShapleyLab.create(3)};
let mode=3,lab=experiments[mode],draggedFeature=null,playing=false,playTimer=null,playGeneration=0,playingOrder='';
const $=id=>document.getElementById(id);
const fmt=n=>(n/100).toFixed(2);
const signed=n=>(n<0?'−':'+')+fmt(Math.abs(n));
const config={L:{name:'Lesion',asset:'leaf'},B:{name:'Background',asset:'background'},T:{name:'Texture',asset:'texture'}};
const cls=f=>f.toLowerCase()+'-text';
const shortName=mask=>lab.features.filter(f=>mask&ShapleyLab.BIT[f]).join(' + ')||'Reference';
const inputName=mask=>lab.features.filter(f=>mask&ShapleyLab.BIT[f]).map(f=>config[f].name).join(' + ')||'Reference input';
function tile(f,s){const present=Boolean(s.mask&ShapleyLab.BIT[f]);return `<button class="feature-tile ${present?'selected':''}" data-feature="${f}" aria-pressed="${present}" aria-label="${present?'Remove':'Add'} ${config[f].name.toLowerCase()}" draggable="${!present}"><span class="key">${f}</span><img src="assets/${config[f].asset}.png" alt=""><span class="feature-name ${cls(f)}">${f} · ${config[f].name}</span><span class="tile-action">${present?'Click to remove':'Click or drag to add'}</span></button>`;}
function slot(f,s){return s.mask&ShapleyLab.BIT[f]?`<button class="feature-slot present" data-remove="${f}" draggable="true" aria-label="Remove ${config[f].name.toLowerCase()} from input"><img src="assets/${config[f].asset}.png" alt="${config[f].name} present"><span class="remove-mark" aria-hidden="true">×</span></button>`:`<div class="feature-slot" aria-label="${f} absent"><span>${f}</span>absent</div>`;}
function renderChange(s){const el=$('last-change'),c=s.last;el.className='change-strip';if(!c){el.innerHTML='<span>Start with any feature.</span><strong>What will it add?</strong>';return;}
  const label=c.kind==='add'?`Added ${c.feature}`:c.kind==='remove'?`Removed ${c.feature}`:c.kind==='new'?'Back to reference':'Undid the last action';
  if(c.feature)el.classList.add(c.feature.toLowerCase()+'-change');
  el.innerHTML=`<div><strong>${label}</strong><small>${fmt(c.before)} → ${fmt(c.after)} · ${c.kind==='add'&&s.routeValid?'marginal contribution':'score change'}</small></div><span class="delta ${c.feature?cls(c.feature):''}">${signed(c.delta)}</span>`;
}
function renderRoute(s){
  $('route-mode').textContent=!s.routeValid?'Free exploration':s.route.length===mode?'Order recorded':s.route.length?'Recording additions':'Ready to record';
  if(!s.routeValid){$('route').innerHTML='<span class="empty-route">A feature was removed. Start a new order to record a fresh path.</span>';$('attempt-hint').textContent='New order starts again from 0.12.';return;}
  let mask=0;
  $('route').innerHTML='<span class="route-node">0.12<small>Reference</small></span>'+s.route.map(c=>{mask|=ShapleyLab.BIT[c.feature];return `<span class="route-step ${cls(c.feature)}">Add ${c.feature}<b>${signed(c.delta)}</b><span class="route-arrow" aria-hidden="true">⟶</span></span><span class="route-node">${fmt(c.after)}<small>${shortName(mask)}</small></span>`;}).join('')+(s.route.length?'':'<span class="empty-route">Choose any feature to begin.</span>');
  $('attempt-hint').textContent=s.route.length===mode?'Try another order. Observations stay.':s.route.length?'Add a remaining feature.':'Start with '+lab.features.join(', ')+'.';
}
function renderResults(s){const count=Object.keys(s.orders).length,total=lab.keys.length,a=lab.averages();
  $('order-count').textContent=`${count} / ${total}`;$('coverage-fill').style.width=(count/total*100)+'%';
  $('ledger-heading').innerHTML='<tr><th scope="col">Order</th>'+lab.features.map(f=>`<th scope="col" class="${cls(f)}">${f} adds</th>`).join('')+'</tr>';
  const current=s.routeValid?s.route.map(c=>c.feature).join(''):'';
  $('order-ledger').innerHTML=lab.keys.map(k=>`<tr class="${s.orders[k]?'':'unseen'} ${k===(playing?playingOrder:current)?'current-order':''}"><td>${k.split('').join(' → ')}<span class="order-state">${s.orders[k]?'Recorded':playing&&k===playingOrder?'Running…':'Not tried'}</span></td>${lab.features.map(f=>`<td class="${cls(f)}">${s.orders[k]?signed(s.orders[k][f]):'—'}</td>`).join('')}</tr>`).join('');
  $('play-orders').textContent=playing?'Pause animation':count===total?'All orders recorded':'Run remaining orders';$('play-orders').disabled=!playing&&count===total;
  $('play-status').textContent=playing?`Playing ${playingOrder.split('').join(' → ')} · manual actions pause playback.`:count===total?'All distinct orders count equally.':'Starts each remaining order from the reference.';
  $('averages').innerHTML=`<h3>Shapley values</h3><p class="hint">Average each column across all ${total} orders.</p><div class="average-grid">`+lab.features.map(f=>`<div class="average-row"><div><span class="average-name ${cls(f)}">${config[f].name} · φ<sub>${f}</sub></span><span class="calculation">${a?(mode===2?`(${fmt(s.orders.LB[f])} + ${fmt(s.orders.BL[f])}) / 2`:`${fmt(lab.keys.reduce((sum,k)=>sum+s.orders[k][f],0))} ÷ 6`):`All ${total} orders needed`}</span></div><span class="value ${cls(f)}">${a?fmt(a[f]):'—'}</span></div>`).join('')+'</div>'+(a?'':`<p class="average-placeholder">${total-count} more distinct ${total-count===1?'order':'orders'} to reveal the exact averages.</p>`);
  $('sum-check').innerHTML=a?`<div class="sum-check">0.12 ${lab.features.map(f=>`+ <span class="${cls(f)}">${fmt(a[f])}</span>`).join(' ')} = <strong>${fmt(lab.scores.at(-1))}</strong><small>Reference + contributions = model score</small></div>`:'';
  $('scope-note').innerHTML=`Explaining <strong>${lab.features.join(' + ')} (${fmt(lab.scores.at(-1))})</strong> vs. <strong>reference 0.12</strong>.`;
}
function render(focus){const s=lab.read();document.body.dataset.mode=mode;
  document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',Number(b.dataset.mode)===mode));
  $('mode-explanation').textContent=`${mode} features → ${mode}! = ${lab.keys.length} inclusion orders. Same rule: average each column.`;
  $('feature-buttons').innerHTML=lab.features.map(f=>tile(f,s)).join('');$('input-features').innerHTML=lab.features.map(f=>slot(f,s)).join('');
  $('input-coordinate').textContent=`(${lab.features.join(', ')}) = (${lab.features.map(f=>s.mask&ShapleyLab.BIT[f]?1:0).join(', ')})`;$('input-label').textContent=inputName(s.mask);$('current-score').textContent=fmt(s.score);$('score-fill').style.width=s.score+'%';$('score-meter').setAttribute('aria-label',`Model score ${fmt(s.score)} on a scale of 0 to 1`);$('undo').disabled=!s.canUndo;$('new-order').disabled=s.mask===0&&s.routeValid&&s.route.length===0;
  $('scorebook-heading').textContent=`FIXED MODEL · ALL ${lab.scores.length} INPUT COMBINATIONS`;
  $('model-scores').innerHTML=lab.scores.map((score,i)=>`<div class="model-score ${i===s.mask?'active':''}"><span>${shortName(i)}</span><strong>${fmt(score)}</strong></div>`).join('');renderChange(s);renderRoute(s);renderResults(s);if(focus)document.querySelector(focus)?.focus({preventScroll:true});
}
function announce(){const s=lab.read(),a=lab.averages();$('announcement').textContent=`${inputName(s.mask)}, score ${fmt(s.score)}.${s.last?' Score change '+signed(s.last.delta)+'.':''} ${Object.keys(s.orders).length} of ${lab.keys.length} orders recorded.${a?' Shapley values: '+lab.features.map(f=>config[f].name+' '+fmt(a[f])).join(', ')+'.':''}`;}
function stopPlayback(){clearTimeout(playTimer);playTimer=null;playing=false;playingOrder='';playGeneration++;}
function act(action,feature,present,focus){stopPlayback();if(action==='feature')lab.setFeature(feature,present);else if(action==='new')lab.newOrder();else if(action==='undo')lab.undo();else if(action==='reset')lab.reset();else throw new Error('Unknown action.');render(focus);announce();return summary();}
function setMode(next){if(next!==2&&next!==3)throw new Error('Choose 2 or 3 features.');stopPlayback();mode=next;lab=experiments[mode];render();announce();return summary();}
function runRemaining(){
  if(playing){stopPlayback();render();return summary();}
  const pending=lab.keys.filter(k=>!lab.read().orders[k]);if(!pending.length)return summary();
  playing=true;const generation=++playGeneration;let index=0,step=0;
  function tick(){if(!playing||generation!==playGeneration)return;
    if(step===0){playingOrder=pending[index];lab.newOrder();render();announce();step++;playTimer=setTimeout(tick,650);return;}
    lab.setFeature(pending[index][step-1],true);render();announce();step++;
    if(step>mode){index++;step=0;if(index===pending.length){stopPlayback();render();return;}}
    playTimer=setTimeout(tick,step===0?1100:850);
  }
  tick();return summary();
}
function summary(){const s=lab.read(),a=lab.averages();return {mode,features:Object.fromEntries(lab.features.map(f=>[f,Boolean(s.mask&ShapleyLab.BIT[f])])),score:s.score/100,recordedOrders:Object.keys(s.orders),totalOrders:lab.keys.length,routeValid:s.routeValid,playing,shapley:a?Object.fromEntries(lab.features.map(f=>[f,a[f]/100])):null};}
$('feature-buttons').addEventListener('click',e=>{const b=e.target.closest('[data-feature]');if(!b)return;const f=b.dataset.feature;act('feature',f,!(lab.read().mask&ShapleyLab.BIT[f]),`[data-feature="${f}"]`);});
$('input-features').addEventListener('click',e=>{const b=e.target.closest('[data-remove]');if(b)act('feature',b.dataset.remove,false,`[data-feature="${b.dataset.remove}"]`);});
$('new-order').addEventListener('click',()=>act('new'));$('undo').addEventListener('click',()=>act('undo'));$('reset').addEventListener('click',()=>act('reset'));$('reset').title='Clear the current mode; the other mode keeps its observations.';
$('play-orders').addEventListener('click',runRemaining);document.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>setMode(Number(b.dataset.mode))));
const dragType='application/x-shapley-feature';
document.addEventListener('dragstart',e=>{const b=e.target.closest('[data-feature],[data-remove]');if(!b)return;draggedFeature=b.dataset.feature||b.dataset.remove;e.dataTransfer.setData(dragType,draggedFeature);e.dataTransfer.effectAllowed='move';});
function finishDrag(){draggedFeature=null;$('drop-zone').classList.remove('drag-over');$('shelf').classList.remove('drag-over');}
document.addEventListener('dragend',finishDrag);
[['drop-zone',true],['shelf',false]].forEach(([id,present])=>{const zone=$(id);zone.addEventListener('dragover',e=>{if(!draggedFeature)return;e.preventDefault();e.dataTransfer.dropEffect='move';zone.classList.add('drag-over');});zone.addEventListener('dragleave',e=>{if(!zone.contains(e.relatedTarget))zone.classList.remove('drag-over');});zone.addEventListener('drop',e=>{if(!draggedFeature)return;e.preventDefault();const f=e.dataTransfer.getData(dragType);if(lab.features.includes(f))act('feature',f,present);finishDrag();});});
async function fullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();else $('announcement').textContent='Use the browser full-screen command.';}catch{$('announcement').textContent='Full screen is unavailable in this view. Open the page in a browser window to present.';}}
$('fullscreen').addEventListener('click',fullscreen);document.addEventListener('fullscreenchange',()=>{$('fullscreen').textContent=document.fullscreenElement?'Exit full screen':'Full screen';});
document.addEventListener('keydown',e=>{if(e.altKey||e.ctrlKey||e.metaKey||e.repeat||e.target.matches('input,textarea,select,[contenteditable=true]'))return;const key=e.key.toLowerCase();if(lab.features.includes(key.toUpperCase())){e.preventDefault();const f=key.toUpperCase();act('feature',f,!(lab.read().mask&ShapleyLab.BIT[f]));}else if(key==='n'){e.preventDefault();act('new');}else if(key==='z'){e.preventDefault();act('undo');}else if(key==='f'){e.preventDefault();fullscreen();}});
render();
if(document.modelContext?.registerTool){const life=new AbortController();try{Promise.resolve(document.modelContext.registerTool({name:'operate_shapley_lab',title:'Operate the Shapley experiment',description:'Set two- or three-feature mode, add/remove features, record distinct inclusion orders, run/pause remaining orders, undo, or reset the current mode. Each mode keeps its own observations. Changes this local experiment only.',inputSchema:{type:'object',properties:{action:{type:'string',enum:['set_feature','set_mode','new_order','undo','reset','run_remaining','pause']},feature:{type:'string',enum:['L','B','T']},present:{type:'boolean'},mode:{type:'integer',enum:[2,3]}},required:['action'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){
  if(!input||typeof input!=='object'||Object.keys(input).some(k=>!['action','feature','present','mode'].includes(k)))throw new Error('Invalid action input.');
  if(input.action==='set_feature'){if(!lab.features.includes(input.feature)||typeof input.present!=='boolean'||'mode'in input)throw new Error('Specify an available feature and boolean present.');return act('feature',input.feature,input.present);}
  if(input.action==='set_mode'){if(![2,3].includes(input.mode)||'feature'in input||'present'in input)throw new Error('Specify mode 2 or 3 only.');return setMode(input.mode);}
  if(!['new_order','undo','reset','run_remaining','pause'].includes(input.action)||'feature'in input||'present'in input||'mode'in input)throw new Error('Invalid action input.');
  if(input.action==='run_remaining')return playing?summary():runRemaining();if(input.action==='pause'){stopPlayback();render();return summary();}return act(input.action==='new_order'?'new':input.action);
}}, {signal:life.signal})).catch(()=>{});}catch{}window.addEventListener('pagehide',()=>{stopPlayback();life.abort();},{once:true});}
