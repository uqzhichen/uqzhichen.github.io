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

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
