---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

## Zero-Shot Learning
- Jingcai Guo, Zhijie Rao, **Zhi Chen**, Song Guo, Jingren Zhou, Dacheng Tao <br>
  [On the Element-Wise Representation and Reasoning in Zero-Shot Image Recognition: A Systematic Survey](https://arxiv.org/pdf/2408.04879). <br>
  *Pre-Print*.
  
- **Zhi Chen**, Pengfei Zhang, Jingjing Li, Sen Wang, Zi Huang <br>
  [Zero-Shot Learning by Harnessing Adversarial Samples](https://arxiv.org/pdf/2308.00313.pdf). <br>
  *ACM International Conference on Multimedia*.
  
- **Zhi Chen**, Yadan Luo, Sen Wang, Jingjing Li, Zi Huang <br>
  [Federated Zero-Shot Learning for Visual Recognition](https://arxiv.org/pdf/2209.01994). <br>
  preprint, 2022.

- **Zhi Chen**, Yadan Luo, Sen Wang, Jingjing Li, Zi Huang <br>
  [GSMFlow: Generation Shifts Mitigating Flow for Generalized Zero-Shot Learning](https://arxiv.org/abs/2207.01798) <br>
  *IEEE Transactions on Multimedia (TMM)*. 2022. (Core A*) (IF: 8.182)

- Hongzu Su, Jingjing Li, **Zhi Chen**, Lei Zhu, Ke Lu <br>
  [Distinguishing Unseen from Seen for Generalized Zero-shot Learning](https://openaccess.thecvf.com/content/CVPR2022/papers/Su_Distinguishing_Unseen_From_Seen_for_Generalized_Zero-Shot_Learning_CVPR_2022_paper.pdf),
  *The IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)* 2022. (Core A*)

- **Zhi Chen**, Yadan Luo, Ruihong Qiu, Sen Wang, Zi Huang, Jingjing Li, Zheng Zhang <br>
  [Semantics Disentangling for Generalized Zero-Shot Learning](https://arxiv.org/pdf/2101.07978.pdf) <br>
  *IEEE/CVF International Conference on Computer Vision (ICCV)* 2021. (Core A*)

- **Zhi Chen**, Yadan Luo, Sen Wang, Ruihong Qiu, Jingjing Li, Zi Huang <br>
  [Mitigating Generation Shifts for Generalized Zero-Shot Learning](https://arxiv.org/abs/2107.03163) <br>
  ACM International Conference on Multimedia (MM) 2021. (Core A*)

- **Zhi Chen**, Zi Huang, Jingjing Li, Zheng Zhang <br>
  [Entropy-Based Uncertainty Calibration for Generalized Zero-Shot Learning](https://arxiv.org/pdf/2101.03292.pdf) <br>
  *2021 Australasian Database Conference.* (Best student paper – Highly Commended)

- **Zhi Chen**, Jingjing Li, Yadan Luo, Zi Huang, Yang Yang <br>
  [CANZSL: Cycle-Consistent Adversarial Networks for Zero-Shot Learning from Natural Language](https://arxiv.org/pdf/1909.09822) <br>
  *The IEEE Winter Conference on Applications of Computer Vision (WACV)* 2020. (Core A)

- **Zhi Chen**, Sen Wang, Jingjing Li, Zi Huang <br>
  [Rethinking Generative Zero-Shot Learning: An EnsembleLearning Perspective for Recognising Visual Patches](https://arxiv.org/pdf/2007.13314.pdf) <br>
  *ACM International Conference on Multimedia 2020.* (Core A*)

## General Computer Vision and Machine Learning

- Jia Syuen Lim, Zhuoxiao Chen, **Zhi Chen**, Mahsa Baktashmotlagh, Xin Yu, Zi Huang, Yadan Luo <br>
  [DiPEx: Dispersing Prompt Expansion for Class-Agnostic Object Detection](https://arxiv.org/pdf/2406.14924) <br>
  *NeurIPS* 2024. (Core A*)


## Digital Agriculture
- Tianqi Wei, **Zhi Chen**, Xin Yu, Scott Chapman, Paul Melloy, Zi Huang
  [PlantSeg: A Large-Scale In-the-wild Dataset for Plant Disease Segmentation](https://arxiv.org/pdf/2409.04038)
  preprint 2024.
  
- **Zhi Chen**, Tianqi Wei, Zecheng Zhao, Jia Syuen Lim, Yadan Luo, Hu Zhang, Xin Yu, Scott Chapman, Zi Huang <br>
  [CF-PRNet: Coarse-to-Fine Prototype Refining Network for Point Cloud Completion and Reconstruction](https://arxiv.org/pdf/2409.08443) <br>
  *1st Place solution to CVPPA@ECCV2024: Shape Completion and Reconstruction of Sweet Peppers Challenge.*

- Jia Syuen Lim, Yadan Luo, **Zhi Chen**, Tianqi Wei, Scott Chapman, Zi Huang <br>
  [Track Any Peppers: Weakly Supervised Sweet Pepper Tracking Using VLMs](https://arxiv.org/pdf/2411.06702) <br>
  *2st Place solution to CVPPA@ECCV2024: Detection and Multi-Object Tracking of Sweet Peppers Challenge.*



  
{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
