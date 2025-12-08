---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}


<span class='anchor' id='about-me'></span>

I am a Lecturer/Assistant Professor at the School of Mathematics, Physics and Computing, The University of Southern Queensland (UniSQ), Australia. Previously, I worked as an Associate Lecturer and Postdoctoral Research Fellow in the School of EECS, The University of Queensland (UQ), working with Prof. Zi (Helen) Huang from August 2022 to January 2025. From January 2025 to April 2025, I worked as a research fellow in the ODeSI team of the UQ Centre for Clinical Research (UQ-CCR). I obtained my PhD degree in 2023 from UQ, advised by Prof. Zi (Helen) Huang.

My research centers around developing generalizable and applicable ML/AI approaches. For fundamental research, I mainly explore the field of computer vision, particularly in **zero-shot learning**. For applied AI, I mainly conduct interdisciplinary research on **AI for Agriculture** and **AI for Healthcare**.

🚀 I am now looking for highly motivated Ph.D. students, Master's Students, Research Assistants, and Visiting Scholars working on computer vision and related areas. 

<span class='anchor' id='news'></span>
# 🔥 News
- *2025.12*: &nbsp; I gave a talk on AI for Agriculture in the AI4Impact Research Symposium, hosted by UniSQ Business School and SRMIST India.

- *2025.12*: &nbsp; I gave a tutorial on zero-shot learning in [DICTA2025](https://dicta2025.dictaconference.org/workshop_tutorial.html). 

- *2025.11*: &nbsp; Our paper on Diffusion Quantization has been accepted to AAAI 2026, paper coming soon. 

- *2025.10*: &nbsp; My first-author paper "Distribution Zero-Shot Learning for Visual recognition" has been accepted to IEEE Transactions on Multimedia (JCR Q1, Core A*, IF:9.7). Paper coming soon.

- *2025.10*: &nbsp; My first-author paper on [Few-Shot Vision-Language Model Adaptation](https://arxiv.org/pdf/2510.09867) has been accepted to the journal Pattern Recognition (JCR Q1, Core A*, IF:7.6). 

- *2025.10*: &nbsp; My first author paper on [Single-Image Editing](https://arxiv.org/pdf/2408.03355) has been accepted to the Special Issue: Beneficial Noise Learning in the journal Pattern Recognition (JCR Q1) (Core A*).

- *2025.08*: &nbsp; Our [Global Wheat Full Semantic Organ Segmentation (GWFSS) Dataset](https://www.sciencedirect.com/science/article/pii/S2643651525000901) has been accepted to Plant Phenomics (JCR Q1, IF 6.4, No.1 Journal for Phenotyping). [Project Page](https://www.global-wheat.com/gwfss.html)

- *2025.08*: &nbsp; Our benchmark on [video generative models for video retrieval](https://arxiv.org/pdf/2507.02316) has been accepted to ACM MM Dataset Track. 

- *2025.07*: &nbsp; One paper on Test-Time Adaptation has been accepted to ACM MM 2025. Paper coming soon.

- *2025.06*: &nbsp; My first author paper on [Zero-Shot Learning](https://arxiv.org/abs/2503.10252) has been accepted to ICCV 2025.

- *2025.05*: &nbsp; Serve as Guest Editor for Complex & Intelligent Systems (JCR-Q1) ([Special Issue on Efficient AI for Resource-Constrained and Complex Applications](https://link.springer.com/collections/fcaeibbcig)).

- *2025.04*: &nbsp; One paper on [Continual Learning](https://arxiv.org/pdf/2501.15454) has been accepted to IJCAI 2025.

- *2025.04*: &nbsp; One paper on [Continual Text-to-Video Retrieval](https://arxiv.org/pdf/2503.10111) has been accepted to SIGIR 2025.

- *2025.04*: &nbsp; I have joined the University of Southern Queensland as a Lecturer (Assistant Professor) after working as a Postdoc at UQ for two years.

- *2024.12*: &nbsp; One paper on [Source-free Open-Set Domain Adaptation](https://ojs.aaai.org/index.php/AAAI/article/view/34380/36535) has been accepted to AAAI 2025.

- *2024.10*: &nbsp; One paper on [Class-Agnostic Object Detection](https://arxiv.org/pdf/2406.14924) has been accepted to NeurIPS 2024.

- *2024.09*: &nbsp; Our [Coarse-to-Fine Prototype Refining Network for Point Cloud Completion and Reconstruction](https://arxiv.org/pdf/2409.08443) for CVPPA@ECCV 2025 challenge won the first place solution! 

- *2024.07*: &nbsp; One paper on [In-the-wild Multimodal Disease Recognition](https://dl.acm.org/doi/10.1145/3664647.3680599) has been accepted to ACM MM 2024.


  
<span class='anchor' id='publications'></span>
# 📚 Publications 


<h3>2025</h3> 

<!-- <table  border="0" style="border: none; border-collapse: collapse; width: 100%; text-align: left;"> -->
<table style="width:100%;border:0px;border-spacing:10px 15px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/capel.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://arxiv.org/pdf/2510.09867">
    <papertitle>Cluster-Aware Prompt Ensemble Learning for Few-Shot Vision-Language Model Adaptation</papertitle>
    </a>
    <br>
    <strong>Zhi Chen</strong>, Xin Yu, Xiaohui Tao, Yan Li, Zi Huang
    <br>
    <em>Pattern Recognition (PR) (Core A*) (IF: 7.6)</em><br>
    <div><abbr style="background-color:#58D68D"><strong>VLM</strong></abbr></div>
    <a href="https://arxiv.org/pdf/2510.09867">Pre-print</a>
    <p></p>
    </td>
    </tr>
        <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/fastedit.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://arxiv.org/pdf/2408.03355">
    <papertitle>FastEdit: Fast Text-Guided Single-Image Editing via Semantic-Aware Diffusion Fine-Tuning</papertitle>
    </a>
    <br>
    <strong>Zhi Chen</strong>, Zecheng Zhao, Yadan Luo, Yan Li, Xiaohui Tao, Zi Huang
    <br>
    <em>Pattern Recognition (PR) (Core A*) (IF: 7.6)</em><br>
    <div><abbr style="background-color:#58D68D"><strong>Image Editing</strong></abbr></div>
    <a href="https://arxiv.org/pdf/2408.03355">Pre-print</a> / <a href="https://github.com/JasonCodeMaker/FastEdit">code</a>
    <p></p>
    </td>
    </tr>
    <tr>
     <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
     <img src="https://uqzhichen.github.io/images/gwfss_sample.png" width="180" height="100" alt="Paper 1 figure"/>
     </td>
     <td style="width:75%;vertical-align: middle;">
     <a href="https://www.sciencedirect.com/science/article/pii/S2643651525000901">
     <papertitle>The Global Wheat Full Semantic Organ Segmentation (GWFSS) Dataset</papertitle>
     </a>
     <br>
     Zijian Wang, ..., <Strong>Zhi Chen</Strong>, ... et, al.
     <br>
     <em>Plant Phenomics (Q1) (IF: 6.4)</em><br>
     <div><abbr style="background-color:#58D68D"><strong>AI for Science</strong></abbr></div>
     <a href="https://www.sciencedirect.com/science/article/pii/S2643651525000901">Paper</a> /
    <a href="https://www.global-wheat.com/gwfss.html">Project</a>
     <p></p><p></p><p></p>
     </td>
     </tr>
     <tr>
     <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
     <img src="https://uqzhichen.github.io/images/video_benchmark.png" width="180" height="100" alt="Paper 1 figure"/>
     </td>
     <td style="width:75%;vertical-align: middle;">
     <a href="https://arxiv.org/pdf/2507.02316">
     <papertitle>Are Synthetic Videos Useful? A Benchmark for Retrieval-Centric Evaluation of Synthetic Videos</papertitle>
     </a>
     <br>
     Zecheng Zhao, Selena Song, Tong Chen, <strong>Zhi Chen</strong>, Shazia Sadiq, Yadan Luo
     <br>
     <em>ACM MM 2025</em><br>
     <div><abbr style="background-color:#58D68D"><strong>Video</strong></abbr></div>
     <a href="https://arxiv.org/pdf/2507.02316">arXiv</a>
     <p></p><p></p><p></p>
     </td>
     </tr>
         <tr>
     <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
     <img src="https://uqzhichen.github.io/images/pataug.png" width="180" height="100" alt="Paper 1 figure"/>
     </td>
     <td style="width:75%;vertical-align: middle;">
     <a href="https://dl.acm.org/doi/pdf/10.1145/3746027.3755740">
     <papertitle>PatAug: Augmentation of Augmentation for Test-Time Adaptation</papertitle>
     </a>
     <br>
     Xinyao Li, Dan Zhang, Zhekai Du, Lei Zhu, <strong>Zhi Chen</strong>, Jingjing Li
     <br>
     <em>ACM MM 2025</em><br>
     <div><abbr style="background-color:#58D68D"><strong>DA</strong></abbr></div>
     <a href="https://dl.acm.org/doi/pdf/10.1145/3746027.3755740">Paper</a>
     <p></p><p></p><p></p>
     </td>
     </tr>
     <tr>
     <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
     <img src="https://uqzhichen.github.io/images/image.png" width="180" height="100" alt="Paper 1 figure"/>
     </td>
     <td style="width:75%;vertical-align: middle;">
     <a href="https://arxiv.org/pdf/2503.10252">
     <papertitle>SVIP: Semantically Contextualized Visual Patches for Zero-Shot Learning</papertitle>
     </a>
     <br>
     <strong>Zhi Chen</strong>, Zecheng Zhao, Jingcai Guo, Jingjing Li, Zi Huang 
     <br>
     <em>ICCV 2025</em><br>
     <div><abbr style="background-color:#58D68D"><strong>ZSL</strong></abbr></div>
     <a href="https://arxiv.org/abs/2503.10252">arXiv</a>
     <p></p><p></p><p></p>
     </td>
     </tr>
     <tr>
     <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
     <img src="https://uqzhichen.github.io/images/stablefusion.png" width="180" height="100" alt="Paper 1 figure"/>
     </td>
     <td style="width:75%;vertical-align: middle;">
     <a href="https://arxiv.org/pdf/2503.10111">
     <papertitle>Continual Text-to-Video Retrieval with Frame Fusion and Task-Aware Routing </papertitle>
     </a>
     <br>
     Zecheng Zhao, <strong>Zhi Chen</strong>, Zi Huang, Shazia Sadiq, Tong Chen
     <br>
     <em>SIGIR 2025 (Core A*)</em><br>
     <div><abbr style="background-color:#3279a8"><strong>CL</strong></abbr></div>
     <a href="https://arxiv.org/pdf/2503.10111">arXiv</a>
     <p></p><p></p><p></p>
     </td>
     </tr>
     <tr>
     <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
     <img src="https://uqzhichen.github.io/images/continual1.png" width="180" height="100" alt="Paper 1 figure"/>
     </td>
     <td style="width:75%;vertical-align: middle;">
     <a href="https://arxiv.org/pdf/2501.15454">
     <papertitle>On the Discrimination and Consistency for Exemplar-Free Class Incremental Learning</papertitle>
     </a>
     <br>
     Tianqi Wang, Jingcai Guo, Depeng Li, <strong>Zhi Chen</strong>
     <br>
     <em>IJCAI 2025</em><br>
     <div><abbr style="background-color:#3279a8"><strong>CL</strong></abbr></div>
     <a href="https://arxiv.org/pdf/2501.15454">arXiv</a>
     <p></p><p></p><p></p>
     </td>
     </tr>
     <tr>
     <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
     <img src="https://uqzhichen.github.io/images/aaai25.png" width="180" height="100" alt="Paper 1 figure"/>
     </td>
     <td style="width:75%;vertical-align: middle;">
     <a href="https://ojs.aaai.org/index.php/AAAI/article/view/34380/36535">
     <papertitle>Dynamic Target Distribution Estimation for Source-free Open-Set Domain Adaptation</papertitle>
     </a>
     <br>
     Zhiqi Yu, Zhichao Liao, Jingjing Li, <strong>Zhi Chen</strong>, Lei Zhu
     <br>
     <em>The 39th Annual AAAI Conference on Artificial Intelligence* AAAI 2025 (Core A*)</em><br>
     <div><abbr style="background-color:#fcce03"><strong>DA</strong></abbr></div>
     <a href="https://ojs.aaai.org/index.php/AAAI/article/view/34380/36535">paper</a>
     <p></p>
     </td>
     </tr>
      <tr>
     <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
     <img src="" width="180" height="100" alt="Paper 1 figure"/>
     </td>
     <td style="width:75%;vertical-align: middle;">
     <a href="">
     <papertitle>Physics-Informed Machine Learning Offers Multi-Scale Remote Estimation of Wheat Biomass Dynamics</papertitle>
     </a>
     <br>
     Qiaomin Chen*, <strong>Zhi Chen</strong>*, et al. (Co-First Author)
     <br>
     <em>IEEE International Geoscience and Remote Sensing Symposium 2025 (IGARSS)</em><br>
     <div><abbr style="background-color:#fcce03"><strong>AI for Science</strong></abbr></div>
     <a href="">paper</a>
     <p></p>
     </td>
     </tr>
  </tbody>
</table>
<h3>2024</h3> 
<!-- <table  border="0" style="border: none; border-collapse: collapse; width: 100%; text-align: left;"> -->
<table style="width:100%;border:0px;border-spacing:10px 15px;border-collapse:separate;margin-right:auto;margin-left:auto;"><tbody>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/dipex.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://arxiv.org/pdf/2406.14924">
    <papertitle>DiPEx: Dispersing Prompt Expansion for Class-Agnostic Object Detection</papertitle>
    </a>
    <br>
    Jia Syuen Lim, Zhuoxiao Chen, <strong>Zhi Chen</strong>, Mahsa Baktashmotlagh, Xin Yu, Zi Huang, Yadan Luo
    <br>
    <em>NeurIPS 2024</em><br>
    <a href="https://arxiv.org/pdf/2406.14924">arXiv</a> / <a href="https://github.com/jason-lim26/DiPEx/tree/master">code</a> 
    <p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/mvpdr.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://dl.acm.org/doi/10.1145/3664647.3680599">
    <papertitle>Benchmarking In-the-wild Multimodal Disease Recognition and A Versatile Baseline</papertitle>
    </a>
    <br>
    Tianqi Wei, <strong>Zhi Chen</strong>, Zi Huang, Xin Yu
    <br>
    <em>ACM International Conference on Multimedia (MM)* 2024. (Core A*)</em><br>
    <div><abbr style="background-color:#db7bc2"><strong>AI for Science</strong></abbr></div>
    <a href="https://arxiv.org/abs/2408.03120">arXiv</a> / <a href="https://github.com/tqwei05/MVPDR">code</a> / <a href="https://huggingface.co/datasets/uqtwei2/PlantWild">dataset</a> 
    <p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/cfprnet.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://arxiv.org/pdf/2409.08443">
    <papertitle>CF-PRNet: Coarse-to-Fine Prototype Refining Network for Point Cloud Completion and Reconstruction</papertitle>
    </a>
    <br>
    <strong>Zhi Chen</strong>, Tianqi Wei, Zecheng Zhao, Jia Syuen Lim, Yadan Luo, Hu Zhang, Xin Yu, Scott Chapman, Zi Huang
    <br>
    <em>1st Place solution to CVPPA@ECCV2024: Shape Completion and Reconstruction of Sweet Peppers Challenge.</em><br>
    <div><abbr style="background-color:#db7bc2"><strong>AI for Science</strong></abbr></div>
    <a href="https://arxiv.org/pdf/2409.08443">arXiv</a> / <a href="https://github.com/uqzhichen/CF-PRNet">code</a> / <a href="https://cvppa2024.github.io/challenges/">competition</a> 
    <p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/tap.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://arxiv.org/pdf/2411.06702">
    <papertitle>Track Any Peppers: Weakly Supervised Sweet Pepper Tracking Using VLMs</papertitle>
    </a>
    <br>
    Jia Syuen Lim, Yadan Luo, <strong>Zhi Chen</strong>, Tianqi Wei, Scott Chapman, Zi Huang
    <br>
    <em>2st Place solution to CVPPA@ECCV2024: Detection and Multi-Object Tracking of Sweet Peppers Challenge.</em><br>
    <div><abbr style="background-color:#db7bc2"><strong>AI for Science</strong></abbr></div>
    <a href="https://arxiv.org/pdf/2411.06702">paper</a> / <a href="https://cvppa2024.github.io/challenges/">competition</a> 
    <p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/plantseg.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://arxiv.org/pdf/2409.04038">
    <papertitle>PlantSeg: A Large-Scale In-the-wild Dataset for Plant Disease Segmentation</papertitle>
    </a>
    <br>
    Tianqi Wei, <strong>Zhi Chen</strong>, Xin Yu, Scott Chapman, Paul Melloy, Zi Huang
    <br>
    <em>preprint</em><br>
    <div><abbr style="background-color:#db7bc2"><strong>AI for Science</strong></abbr></div>
    <a href="https://arxiv.org/pdf/2409.04038">arXiv</a> / <a href="https://github.com/tqwei05/PlantSeg">code</a> / <a href="https://zenodo.org/records/13762907">dataset</a>
    <p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/snap.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://arxiv.org/pdf/2408.14723">
    <papertitle>Snap and Diagnose: An Advanced Multimodal Retrieval System for Identifying Plant Diseases in the Wild</papertitle>
    </a>
    <br>
    Tianqi Wei, <strong>Zhi Chen</strong>, Xin Yu, Scott Chapman, Paul Melloy, Zi Huang
    <br>
    <em>ACM International Conference on Multimedia in Asia 2024. </em><br>
    <div><abbr style="background-color:#db7bc2"><strong>AI for Science</strong></abbr></div>
    <a href="https://arxiv.org/pdf/2408.14723">paper</a> 
    <p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/pakdd.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://openreview.net/pdf?id=nbN8Ilbg8c">
    <papertitle>Towards Cost-Efficient Federated Multi-Agent Reinforcement Learning with Learnable Aggregation</papertitle>
    </a>
    <br>
    Yi Zhang, Sen Wang, <strong>Zhi Chen</strong>, Xuwei Xu, Stano Funiak, Frank de Hoog, Jiajun Liu 
    <br>
    <em>The Pacific-Asia Conference on Knowledge Discovery and Data Mining* (PAKDD) 2024. (Best Student Paper Award)</em><br>
    <div><abbr style="background-color:#58D68D"><strong>RL</strong></abbr></div>
    <a href="https://openreview.net/pdf?id=nbN8Ilbg8c">paper</a>
    <p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/survey2.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://arxiv.org/pdf/2408.04879">
    <papertitle>On the Element-Wise Representation and Reasoning in Zero-Shot Image Recognition: A Systematic Survey</papertitle>
    </a>
    <br>
    Jingcai Guo, Zhijie Rao, <strong>Zhi Chen</strong>, Song Guo, Jingren Zhou, Dacheng Tao 
    <br>
    <em>pre-print</em><br>
    <div><abbr style="background-color:#58D68D"><strong>ZSL</strong></abbr></div>
    <a href="https://arxiv.org/pdf/2408.04879">arXiv</a>
    <p></p><p></p><p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/diabetes2024.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://www.sciencedirect.com/science/article/pii/S1871402123002321">
    <papertitle>Secondary analysis of newly diagnosed type 2 diabetes subgroups and treatment responses in the MARCH cohort</papertitle>
    </a>
    <br>
    Weihao Wang, Xiaobei Li, Fei Chen, Ran Wei, <strong>Zhi Chen</strong>, Jingjing Li, Jingtao Qiao, Qi Pan, Wenjing Yang, Lixin Guo
    <br>
    <em>Diabetes & Metabolic Syndrome: Clinical Research & Reviews.* 2024. (IF:10.0)</em><br>
    <div><abbr style="background-color:#7bd5db"><strong>AI for Science</strong></abbr></div>
    <a href="https://www.sciencedirect.com/science/article/pii/S1871402123002321">paper</a>
    <p></p>
    </td>
    </tr></tbody>
</table>
<h3>2023</h3> 
<table style="width:100%;border:0px;border-spacing:10px 15px;border-collapse:separate;margin-right:auto;margin-left:auto;"><tbody>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/haszsl.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://arxiv.org/pdf/2308.00313.pdf">
    <papertitle>Zero-Shot Learning by Harnessing Adversarial Samples</papertitle>
    </a>
    <br>
    <strong>Zhi Chen</strong>, Pengfei Zhang, Jingjing Li, Sen Wang, Zi Huang 
    <br>
    <em>ACM International Conference on Multimedia 2023</em><br>
    <div><abbr style="background-color:#58D68D"><strong>ZSL</strong></abbr></div>
    <a href="https://arxiv.org/pdf/2308.00313.pdf">arXiv</a> / <a href="https://github.com/uqzhichen/HASZSL">code</a> 
    <p></p><p></p><p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/fedzsl.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://arxiv.org/pdf/2209.01994">
    <papertitle>Federated Zero-Shot Learning for Visual Recognition</papertitle>
    </a>
    <br>
    <strong>Zhi Chen</strong>, Yan Luo, Sen Wang, Jingjing Li, Zi Huang
    <br>
    <em>pre-print</em><br>
    <div><abbr style="background-color:#58D68D"><strong>ZSL</strong></abbr></div>
    <a href="https://arxiv.org/pdf/2209.01994">arXiv</a>
    <p></p><p></p><p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/calsfda.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://arxiv.org/pdf/2308.00313.pdf">
    <papertitle>Cal-SFDA: Source-Free Domain-adaptive Semantic Segmentation with Differentiable Expected Calibration Error</papertitle>
    </a>
    <br>
    Zixin Wang, Yadan Luo, <strong>Zhi Chen</strong>, Sen Wang, Zi Huang
    <br>
    <em>ACM International Conference on Multimedia 2023</em><br>
    <div><abbr style="background-color:#fcce03"><strong>DA</strong></abbr></div>
    <a href="https://arxiv.org/pdf/2308.03003">arXiv</a> / <a href="https://github.com/Jo-wang/Cal-SFDA">code</a> 
    <p></p><p></p><p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/taxi.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://link.springer.com/chapter/10.1007/978-3-031-47843-7_4">
    <papertitle>Optimizing Taxi Route Planning Based on Taxi Trajectory Data Analysis</papertitle>
    </a>
    <br>
    Xinyi Yang, <strong>Zhi Chen</strong>, Yadan Luo
    <br>
    <em>Australasian Database Conference* (ADC) 2023.</em><br>
    <div><abbr style="background-color:#58D68D"><strong>AI for Transport</strong></abbr></div>
    <a href="https://link.springer.com/chapter/10.1007/978-3-031-47843-7_4">paper</a>
    <p></p>
    </td>
    </tr></tbody>
</table>
<h3>2022</h3> 
<table style="width:100%;border:0px;border-spacing:10px 15px;border-collapse:separate;margin-right:auto;margin-left:auto;"><tbody>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/gsmflow.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://arxiv.org/abs/2207.01798">
    <papertitle>GSMFlow: Generation Shifts Mitigating Flow for Generalized Zero-Shot Learning</papertitle>
    </a>
    <br>
    <strong>Zhi Chen</strong>, Yadan Luo, Sen Wang, Jingjing Li, Zi Huang 
    <br>
    <em>IEEE Transactions on Multimedia (TMM) (JCR Q1, Core A*, IF: 9.7)</em><br>
    <div><abbr style="background-color:#58D68D"><strong>ZSL</strong></abbr></div>
    <a href="https://arxiv.org/abs/2207.01798">paper</a> / <a href="https://github.com/uqzhichen/GSMFlow_TMM">code</a> 
    <p></p><p></p><p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/distinguish.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://openaccess.thecvf.com/content/CVPR2022/papers/Su_Distinguishing_Unseen_From_Seen_for_Generalized_Zero-Shot_Learning_CVPR_2022_paper.pdf">
    <papertitle>Distinguishing Unseen from Seen for Generalized Zero-shot Learning</papertitle>
    </a>
    <br>
    Hongzu Su, Jingjing Li, <strong>Zhi Chen</strong>, Lei Zhu, Ke Lu 
    <br>
    <em>The IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2022. (Core A*)</em><br>
    <div><abbr style="background-color:#58D68D"><strong>ZSL</strong></abbr></div>
    <a href="https://openaccess.thecvf.com/content/CVPR2022/papers/Su_Distinguishing_Unseen_From_Seen_for_Generalized_Zero-Shot_Learning_CVPR_2022_paper.pdf">Paper</a> /  <a href="https://github.com/TL-UESTC/OOD_Paddle">code</a>  
    <p></p><p></p><p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/pixel1.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://dl.acm.org/doi/abs/10.1145/3503161.3548079">
    <papertitle>Pixel Exclusion: Uncertainty-aware Boundary Discovery for Active Cross-Domain Semantic Segmentation</papertitle>
    </a>
    <br>
    Fuming You, Jingjing Li, <strong>Zhi Chen</strong>, Lei Zhu
    <br>
    <em>ACM International Conference on Multimedia* (MM) 2022. (Core A*)</em><br>
    <div><abbr style="background-color:#fcce03"><strong>DA</strong></abbr></div>
    <a href="https://dl.acm.org/doi/abs/10.1145/3503161.3548079">paper</a>
    <p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/diabetes2022.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://www.sciencedirect.com/science/article/pii/S1871402123002321">
    <papertitle>Application of novel subgroups of Chinese inpatients with diabetes based on machine learning paradigm</papertitle>
    </a>
    <br>
    Weihao Wang, <strong>Zhi Chen</strong>,  Sen Wang, Fei Chen, Mingqun Deng, Qi Pan, Lixin Guo 
    <br>
    <em>Diabetes & Metabolic Syndrome: Clinical Research & Reviews. 2022. (JCR Q1) (IF:10.0) (Co-first Author)</em><br>
    <div><abbr style="background-color:#7bd5db"><strong>AI for Science</strong></abbr></div>
    <a href="https://www.sciencedirect.com/science/article/abs/pii/S1871402122001709">paper</a>
    <p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/flu.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://link.springer.com/chapter/10.1007/978-3-031-15512-3_12">
    <papertitle>FluMA: An Intelligent Platform for Influenza Monitoring and Analysis</papertitle>
    </a>
    <br>
    Xi Chen, <strong>Zhi Chen</strong>, Zijian Wang, Ruihong Qiu, Yadan Luo
    <br>
    <em>Australasian Database Conference* 2022</em><br>
    <div><abbr style="background-color:#7bd5db"><strong>AI for Science</strong></abbr></div>
    <a href="https://link.springer.com/chapter/10.1007/978-3-031-15512-3_12">paper</a>
    <p></p>
    </td>
    </tr></tbody>
</table>
<h3>2021</h3> 
<table style="width:100%;border:0px;border-spacing:10px 15px;border-collapse:separate;margin-right:auto;margin-left:auto;"><tbody>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/sdgzsl.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://openaccess.thecvf.com/content/ICCV2021/papers/Chen_Semantics_Disentangling_for_Generalized_Zero-Shot_Learning_ICCV_2021_paper.pdf">
    <papertitle>Semantics Disentangling for Generalized Zero-Shot Learning</papertitle>
    </a>
    <br>
    <strong>Zhi Chen</strong>, Yadan Luo, Ruihong Qiu, Sen Wang, Zi Huang, Jingjing Li, Zheng Zhang<br>
    <em>ICCV 2021. (Core A*)</em><br>
    <div><abbr style="background-color:#58D68D"><strong>ZSL</strong></abbr></div>
    <a href="https://openaccess.thecvf.com/content/ICCV2021/papers/Chen_Semantics_Disentangling_for_Generalized_Zero-Shot_Learning_ICCV_2021_paper.pdf">paper</a> / <a href="https://github.com/uqzhichen/SDGZSL">code</a> 
    <p></p><p></p><p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/mitigating.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://arxiv.org/abs/2107.03163">
    <papertitle>Mitigating Generation Shifts for Generalized Zero-Shot Learning</papertitle>
    </a>
    <br>
    <strong>Zhi Chen</strong>, Yadan Luo, Sen Wang, Ruihong Qiu, Jingjing Li, Zi Huang  <br>
    <em>ACM International Conference on Multimedia (MM) 2021. (Core A*)</em><br>
    <div><abbr style="background-color:#58D68D"><strong>ZSL</strong></abbr></div>
    <a href="https://arxiv.org/abs/2107.03163">paper</a> / <a href="https://github.com/uqzhichen/GSMFlow">code</a> 
    <p></p><p></p><p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/entropyzsl.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://arxiv.org/pdf/2101.03292.pdf">
    <papertitle>Entropy-Based Uncertainty Calibration for Generalized Zero-Shot Learning</papertitle>
    </a>
    <br>
    <strong>Zhi Chen</strong>, Zi Huang, Jingjing Li, Zheng Zhang <br>
    <em>2021 Australasian Database Conference. (Best student paper – Highly Commended)</em><br>
    <div><abbr style="background-color:#58D68D"><strong>ZSL</strong></abbr></div>
    <a href="https://arxiv.org/pdf/2101.03292.pdf">arXiv</a> 
    <p></p><p></p><p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/dasssd.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://dl.acm.org/doi/10.1145/3474085.3475482">
    <papertitle>Domain Adaptive Semantic Segmentation without Source Data</papertitle>
    </a>
    <br>
    Fuming You, Jingjing Li, Lei Zhu, <strong>Zhi Chen</strong>, Zi Huang
    <br>
    <em>ACM International Conference on Multimedia* (MM) 2021. (Core A*)</em><br>
    <div><abbr style="background-color:#fcce03"><strong>DA</strong></abbr></div>
    <a href="https://dl.acm.org/doi/10.1145/3474085.3475482">paper</a> / <a href="https://github.com/fumyou13/LDBE">code</a> 
    <p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/hash1.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://dl.acm.org/doi/10.1145/3474085.3475346">
    <papertitle>Local Graph Convolutional Networks for Cross-Modal Hashing</papertitle>
    </a>
    <br>
    Yudong Chen, Sen Wang, Jianlin Lu, <strong>Zhi Chen</strong>, Zheng Zhang, Zi Huang
    <br>
    <em>ACM International Conference on Multimedia* (MM) 2021. (Core A*)</em><br>
    <div><abbr style="background-color:#58D68D"><strong>Hashing</strong></abbr></div>
    <a href="https://dl.acm.org/doi/10.1145/3474085.3475346">paper</a> /<a href="https://github.com/chenyd7/LGCNH">code</a>  
    <p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/casualrec.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://arxiv.org/abs/2107.02390">
    <papertitle>CausalRec: Causal Inference for Visual Debiasing in Visually-Aware Recommendation</papertitle>
    </a>
    <br>
    Ruihong Qiu, Sen Wang, <strong>Zhi Chen</strong>, Hongzhi Yin, Zi Huang
    <br>
    <em>ACM International Conference on Multimedia* (MM) 2021. (Core A*)</em><br>
    <div><abbr style="background-color:#58D68D"><strong>Rec</strong></abbr></div>
    <a href="https://arxiv.org/abs/2107.02390">paper </a> / <a href="https://github.com/RuihongQiu/CausalRec?tab=readme-ov-file">code</a>  
    <p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/diabetes2021.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://onlinelibrary.wiley.com/doi/epdf/10.1002/dmrr.3427">
    <papertitle>Application of new international classification of adult-onset diabetes in Chinese inpatients with diabetes mellitus</papertitle>
    </a>
    <br>
    Weihao Wang, Xiaobei Pei, Lina Zhang, <strong>Zhi Chen</strong>, Dong Lin, Xiaoye Duan, Jingwen Fan, Qi Pan, Lixin Guo
    <br>
    <em>Diabetes/Metabolism Research and Reviews. 2021.* (IF: 8.02)</em><br>
    <div><abbr style="background-color:#7bd5db"><strong>AI for Science</strong></abbr></div>
    <a href="https://onlinelibrary.wiley.com/doi/epdf/10.1002/dmrr.3427">arXiv</a>
    <p></p>
    </td>
    </tr></tbody>
</table>
<h3>2020</h3> 
<table style="width:100%;border:0px;border-spacing:10px 15px;border-collapse:separate;margin-right:auto;margin-left:auto;"><tbody>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/canzsl.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://arxiv.org/pdf/1909.09822">
    <papertitle>CANZSL: Cycle-Consistent Adversarial Networks for Zero-Shot Learning from Natural Language</papertitle>
    </a>
    <br>
    <strong>Zhi Chen</strong>, Jingjing Li, Yadan Luo, Zi Huang, Yang Yang <br>
    <em>The IEEE Winter Conference on Applications of Computer Vision (WACV) 2020. (Core A)</em><br>
    <div><abbr style="background-color:#58D68D"><strong>ZSL</strong></abbr></div>
    <a href="https://arxiv.org/pdf/1909.09822">arXiv</a> / <a href="https://github.com/uqzhichen/CANZSL">code</a>  
    <p></p><p></p><p></p>
    </td>
    </tr>
    <tr>
    <td style="width: 25%; vertical-align: middle;padding-bottom: 20px;">
    <img src="https://uqzhichen.github.io/images/mpgan.png" width="180" height="100" alt="Paper 1 figure"/>
    </td>
    <td style="width:75%;vertical-align: middle;">
    <a href="https://arxiv.org/pdf/2007.13314.pdf">
    <papertitle>Rethinking Generative Zero-Shot Learning: An Ensemble Learning Perspective for Recognising Visual Patches</papertitle>
    </a>
    <br>
    <strong>Zhi Chen</strong>, Sen Wang, Jingjing Li, Zi Huang <br>
    <em>ACM International Conference on Multimedia 2020.* (Core A*)</em><br>
    <div><abbr style="background-color:#58D68D"><strong>ZSL</strong></abbr></div>
    <a href="https://arxiv.org/pdf/2007.13314.pdf">paper</a> /  <a href="https://github.com/uqzhichen/MPGAN">code</a>
    <p></p><p></p><p></p>
    </td>
    </tr></tbody></table>


<span class='anchor' id='teachings'></span>
# 🧑🏻‍🏫 Teachings
##  As Instructor
### DATA7002 Responsible Data Science (Co-Instructor with Dr. Michael Vincent, Dr. Hamish MacDonald, Dr. Slava Vaisman) (SECaT: 4.28/5.0)
*School of Electrical Engineering and Computer Science, University of Queensland*, 2rd Term 2024
<ul style="margin-top:-14px;">
  <li> <a href="https://course-profiles.uq.edu.au/course-profiles/DATA7002-63216-7460#course-overview">Course webpage</a></li>
  <li>Topics Covered: Responsible Machine Learning, Fairness-Aware Machine Learning</li>
</ul>

### Cloud Computing (Co-Instructor with A/Prof. Sen Wang) (SECaT: 4.53/5.0)
*School of Electrical Engineering and Computer Science, University of Queensland*, 2rd Term 2024
<ul style="margin-top:-14px;">
  <li> <a href="https://course-profiles.uq.edu.au/course-profiles/INFS3208-62044-7460#course-overview">Course webpage </a></li>
  <li>Topics Covered: Vector Databases, NoSQL Databases, RDD Computing, Spark Framework</li>
</ul>

### Advanced Database Systems (Co-Instructor with Prof. Shazia Sadiq and A/Prof. Sen Wang) (SECaT: 4.63/5.0)
*School of Electrical Engineering and Computer Science, University of Queensland*, 2rd Term 2024
<ul style="margin-top:-14px;">
  <li> <a href="https://course-profiles.uq.edu.au/course-profiles/INFS3208-62044-7460#course-overview">Course webpage</a> </li>
  <li>Topics Covered: Column-Oriented Databases, Data Lakes, Data Lakehouses</li>
</ul>

### DATA7002 Responsible Data Science (Co-Instructor with Dr. Michael Vincent, Dr. Hamish MacDonald, Dr. Slava Vaisman) (SECaT: 4.21/5.0)
*School of Electrical Engineering and Computer Science, University of Queensland*, 2rd Term 2023
<ul style="margin-top:-14px;">
  <li> <a href="https://course-profiles.uq.edu.au/course-profiles/DATA7002-63216-7460#course-overview">Course webpage</a></li>
  <li>Topics Covered: Responsible Machine Learning, Fairness-Aware Machine Learning</li>
</ul>

<span class='anchor' id='services'></span>
# 👔 Services

##  Conference Service

- IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2022-2024 <br>
- IEEE/CVF International Conference on Computer Vision (ICCV) 2023 <br>
- European Conference on Computer Vision (ECCV) 2022, 2024 <br>
- ACM International Conference on Multimedia (MM) 2021-2024 (Outstanding Reviewer @ 2024) <br>
- AAAI Conf. on Artificial Intelligence (AAAI) 2022-2024 <br>
- IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP) 2023 <br>

##  Journal Editorship
- IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI) 2024 <br>
- International Journal of Computer Vision (IJCV) 2024 <br>
- IEEE Transactions on Multimedia (TMM) 2022-2023 <br> 
- IEEE Transactions on Circuits and Systems for Video Technology (TCSVT) 2023-2024<br>
- IEEE Transactions on Cognitive and Developmental Systems (TCDS) 2023<br>
