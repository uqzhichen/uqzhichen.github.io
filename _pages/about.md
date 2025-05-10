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

I am a Lecturer/Assistant Professor at the School of Mathematics, Physics and Computing, The University of Southern Queensland (UniSQ), Australia. Previously, I worked as an Associate Lecturer and Postdoctoral Research Fellow in School of EECS, The University of Queensland (UQ), working with Prof. Zi (Helen) Huang from August 2022 to January 2025. From January 2025 to April 2025, I worked as a research fellow in the ODeSI team of UQ Centre for Clinical Research (UQ-CCR). I obtained my PhD degree in 2023 from UQ, advised by Prof. Zi (Helen) Huang.

My research centers around developing generalizable and applicable ML/AI approaches. For fundemental research, I mainly explore the field of computer vision, particularly in **zero-shot learning**. For applied AI, I mainly conduct interdisciplinary research on **AI for Agriculture** and **AI for Healthcare**.

🚀 I am now looking for highly motivated Ph.D. students, Master Students, Research Assistants, and Visiting Scholars working on computer vision and related areas. 

My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>).

<span class='anchor' id='news'></span>
# 🔥 News

- *2025.04*: &nbsp; One paper on [Continual Learning](https://arxiv.org/pdf/2501.15454) has been accepted to IJCAI 2025!

- *2025.04*: &nbsp; One paper on [Continual Text-to-Video Retrieval](https://arxiv.org/pdf/2503.10111) has been accepted to SIGIR 2025!

- *2025.04*: &nbsp; I have joined the University of Southern Queensland as a Lecturer (Assistant Professor) after working as a Postdoc at UQ for two years!

- *2024.12*: &nbsp; One paper on [Source-free Open-Set Domain Adaptation](https://ojs.aaai.org/index.php/AAAI/article/view/34380/36535) has been accepted to AAAI 2025!

- *2024.10*: &nbsp; One paper on [Class-Agnostic Object Detection](https://arxiv.org/pdf/2406.14924) has been accepted to NeurIPS 2024!

- *2024.09*: &nbsp; Our [Coarse-to-Fine Prototype Refining Network for Point Cloud Completion and Reconstruction](https://arxiv.org/pdf/2409.08443) for CVPPA@ECCV 2025 challenge won the first place solution! 

- *2024.07*: &nbsp; One paper on [In-the-wild Multimodal Disease Recognition](https://dl.acm.org/doi/10.1145/3664647.3680599) has been accepted to ACM MM 2024!
- 
# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

### 2025

- ![SVIP image](https://uqzhichen.github.io/images/image.png)  
  **[SVIP – Semantically Contextualized Visual Patches for Zero‑Shot Learning](https://arxiv.org/pdf/2503.10252)**  
  **Zhi Chen**, Zecheng Zhao, Jingcai Guo, Jingjing Li, Zi Huang  
  *pre‑print* — **ZSL**  
  [arXiv](https://arxiv.org/abs/2503.10252)

- ![Retrieval image](https://uqzhichen.github.io/images/stablefusion.png)  
  **[Continual Text‑to‑Video Retrieval with Frame Fusion and Task‑Aware Routing](https://arxiv.org/pdf/2503.10111)**  
  Zecheng Zhao, **Zhi Chen**, Zi Huang, Shazia Sadiq, Tong Chen  
  *SIGIR 2025* (CORE A*) — **CL**  
  [arXiv](https://arxiv.org/pdf/2503.10111)

- ![CIL image](https://uqzhichen.github.io/images/continual1.png)  
  **[On the Discrimination and Consistency for Exemplar‑Free Class Incremental Learning](https://arxiv.org/pdf/2501.15454)**  
  Tianqi Wang, Jingcai Guo, Depeng Li, **Zhi Chen**  
  *pre‑print* — **CL**  
  [arXiv](https://arxiv.org/pdf/2501.15454)

- ![DA image](https://uqzhichen.github.io/images/aaai25.png)  
  **[Dynamic Target Distribution Estimation for Source‑free Open‑Set Domain Adaptation](https://ojs.aaai.org/index.php/AAAI/article/view/34380/36535)**  
  Zhiqi Yu, Zhichao Liao, Jingjing Li, **Zhi Chen**, Lei Zhu  
  *AAAI 2025* (CORE A*) — **DA**  
  [paper](https://ojs.aaai.org/index.php/AAAI/article/view/34380/36535)

- ![PI‑ML image](https://uqzhichen.github.io/images/placeholder.png)  
  **Physics‑Informed Machine Learning Offers Multi‑Scale Remote Estimation of Wheat Biomass Dynamics**  
  Qiaomin Chen*, **Zhi Chen*** et al.  
  *IEEE IGARSS 2025* — **AI for Science**  
  (paper link TBA)


### 2024

- ![DiPEx image](https://uqzhichen.github.io/images/dipex.png)  
  **[DiPEx: Dispersing Prompt Expansion for Class‑Agnostic Object Detection](https://arxiv.org/pdf/2406.14924)**  
  Jia Syuen Lim, Zhuoxiao Chen, **Zhi Chen**, Mahsa Baktashmotlagh, Xin Yu, Zi Huang, Yadan Luo  
  *NeurIPS 2024*  
  [arXiv](https://arxiv.org/pdf/2406.14924) / [code](https://github.com/jason-lim26/DiPEx/tree/master)

- ![MVPDR image](https://uqzhichen.github.io/images/mvpdr.png)  
  **[Benchmarking In‑the‑wild Multimodal Disease Recognition and a Versatile Baseline](https://dl.acm.org/doi/10.1145/3664647.3680599)**  
  Tianqi Wei, **Zhi Chen**, Zi Huang, Xin Yu  
  *ACM MM 2024* (CORE A*) — **AI for Science**  
  [arXiv](https://arxiv.org/abs/2408.03120) / [code](https://github.com/tqwei05/MVPDR) / [dataset](https://huggingface.co/datasets/uqtwei2/PlantWild)

- ![CF‑PRNet image](https://uqzhichen.github.io/images/cfprnet.png)  
  **[CF‑PRNet: Coarse‑to‑Fine Prototype Refining Network for Point Cloud Completion and Reconstruction](https://arxiv.org/pdf/2409.08443)**  
  **Zhi Chen**, Tianqi Wei, Zecheng Zhao, Jia Syuen Lim, Yadan Luo, Hu Zhang, Xin Yu, Scott Chapman, Zi Huang  
  *1st‑place solution, CVPPA@ECCV 2024* — **AI for Science**  
  [arXiv](https://arxiv.org/pdf/2409.08443) / [code](https://github.com/uqzhichen/CF-PRNet) / [competition](https://cvppa2024.github.io/challenges/)

- ![TAP image](https://uqzhichen.github.io/images/tap.png)  
  **[Track Any Peppers: Weakly Supervised Sweet Pepper Tracking Using VLMs](https://arxiv.org/pdf/2411.06702)**  
  Jia Syuen Lim, Yadan Luo, **Zhi Chen**, Tianqi Wei, Scott Chapman, Zi Huang  
  *2nd‑place solution, CVPPA@ECCV 2024* — **AI for Science**  
  [paper](https://arxiv.org/pdf/2411.06702) / [competition](https://cvppa2024.github.io/challenges/)

- ![PlantSeg image](https://uqzhichen.github.io/images/plantseg.png)  
  **[PlantSeg: A Large‑Scale In‑the‑wild Dataset for Plant Disease Segmentation](https://arxiv.org/pdf/2409.04038)**  
  Tianqi Wei, **Zhi Chen**, Xin Yu, Scott Chapman, Paul Melloy, Zi Huang  
  *pre‑print* — **AI for Science**  
  [arXiv](https://arxiv.org/pdf/2409.04038) / [code](https://github.com/tqwei05/PlantSeg) / [dataset](https://zenodo.org/records/13762907)

- ![Snap & Diagnose image](https://uqzhichen.github.io/images/snap.png)  
  **[Snap and Diagnose: An Advanced Multimodal Retrieval System for Identifying Plant Diseases in the Wild](https://arxiv.org/pdf/2408.14723)**  
  Tianqi Wei, **Zhi Chen**, Xin Yu, Scott Chapman, Paul Melloy, Zi Huang  
  *ACM Multimedia in Asia 2024* — **AI for Science**  
  [paper](https://arxiv.org/pdf/2408.14723)

- ![FastEdit image](https://uqzhichen.github.io/images/fastedit.png)  
  **[FastEdit: Fast Text‑Guided Single‑Image Editing via Semantic‑Aware Diffusion Fine‑Tuning](https://arxiv.org/pdf/2408.03355)**  
  **Zhi Chen**, Zecheng Zhao, Yadan Luo, Zi Huang  
  *pre‑print* — **Image Editing**  
  [arXiv](https://arxiv.org/pdf/2408.03355) / [code](https://github.com/JasonCodeMaker/FastEdit)

- ![PAKDD RL image](https://uqzhichen.github.io/images/pakdd.png)  
  **[Towards Cost‑Efficient Federated Multi‑Agent Reinforcement Learning with Learnable Aggregation](https://openreview.net/pdf?id=nbN8Ilbg8c)**  
  Yi Zhang, Sen Wang, **Zhi Chen**, Xuwei Xu, Stano Funiak, Frank de Hoog, Jiajun Liu  
  *PAKDD 2024* — **RL** (Best Student Paper)  
  [paper](https://openreview.net/pdf?id=nbN8Ilbg8c)

- ![ZSL survey image](https://uqzhichen.github.io/images/survey2.png)  
  **[On the Element‑Wise Representation and Reasoning in Zero‑Shot Image Recognition: A Systematic Survey](https://arxiv.org/pdf/2408.04879)**  
  Jingcai Guo, Zhijie Rao, **Zhi Chen**, Song Guo, Jingren Zhou, Dacheng Tao  
  *pre‑print* — **ZSL**  
  [arXiv](https://arxiv.org/pdf/2408.04879)

- ![Diabetes image](https://uqzhichen.github.io/images/diabetes2024.png)  
  **[Secondary Analysis of Newly Diagnosed Type 2 Diabetes Subgroups and Treatment Responses in the MARCH Cohort](https://www.sciencedirect.com/science/article/pii/S1871402123002321)**  
  Weihao Wang, Xiaobei Li, Fei Chen, Ran Wei, **Zhi Chen**, Jingjing Li, Jingtao Qiao, Qi Pan, Wenjing Yang, Lixin Guo  
  *Diabetes & Metabolic Syndrome: Clinical Research & Reviews 2024* — **AI for Science**  
  [paper](https://www.sciencedirect.com/science/article/pii/S1871402123002321)


### 2023




# 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 📖 Educations
- *2019.06 - 2022.04 (now)*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2015.09 - 2019.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China.
