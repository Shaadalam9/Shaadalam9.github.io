---
layout: publication
sitemap: false
title: "Comparison of path following in ships using modern and traditional controllers"
authors: Sanjeev Kumar, R.S., Alam, M. S., Reddy, B., & Somayajula, A.S.
pdf: sanjeec2023.pdf
image: sanjeev2023.png
display: Proceedings of the Sixth International Conference in Ocean Engineering (ICOE2023)
year: 2023
doi: 10.48550/arXiv.2310.14940
# code: https://github.com/MarineAutonomy/Deep-Reinforcement-Learning-Based-Control-for-Ship-Navigation
abstract: "Vessel navigation is difficult in restricted waterways and in the presence of static and dynamic obstacles. This difficulty can be attributed to the high-level decisions taken by humans during these maneuvers, which is evident from the fact that 85% of the reported marine accidents are traced back to human errors. Artificial intelligence-based methods offer us a way to eliminate human intervention in vessel navigation. Newer methods like Deep Reinforcement Learning (DRL) can optimize multiple objectives like path following and collision avoidance at the same time while being computationally cheaper to implement in comparison to traditional approaches. Before addressing the challenge of collision avoidance along with path following, the performance of DRL-based controllers on the path following task alone must be established. Therefore, this study trains a DRL agent using Proximal Policy Optimization (PPO) algorithm and tests it against a traditional PD controller guided by an Integral Line of Sight (ILOS) guidance system. The Krisco Container Ship (KCS) is chosen to test the different controllers. The ship dynamics are mathematically simulated using the Maneuvering Modelling Group (MMG) model developed by the Japanese. The simulation environment is used to train the deep reinforcement learning-based controller and is also used to tune the gains of the traditional PD controller. The effectiveness of the controllers in the presence of wind is also investigated."
---