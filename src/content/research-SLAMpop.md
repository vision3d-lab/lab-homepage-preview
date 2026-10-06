---
title: "SLAM / Sensor Fusion"
source: "https://unist.info/?page_id=1604"
---

**SLAM/Sensor Fusion**

<video src="/lab-media/c20d1d238faf2a7b.mp4" poster="/lab-media/c20d1d238faf2a7b-poster.webp" aria-label="mast3rslam-ezgif.com-video-to-gif-converter" autoplay loop muted playsinline preload="metadata" width="800" height="450"></video> ![eventdepth](/lab-media/6ea75919faac1390.webp)

**Simultaneous Localization and Mapping (SLAM)** and sensor fusion are core technologies, enabling intelligent robots to perceive and navigate complex environments. SLAM allows a robot to build a map of an unknown space while simultaneously determining its own position within that map. **Sensor fusion** enhances this capability by integrating data from multiple complementary sensors—such as LiDAR, cameras and IMUs—to achieve more accurate, robust, and reliable state estimation. Leveraging SLAM and sensor fusion, our research aims to develop systems that can operate in dynamic, unstructured environments. To this end, we are actively researching tasks such as v**isual SLAM, collaborative SLAM, event camera-based perception** and any related topics.

#### Visual SLAM

**Visual Simultaneous Localization and Mapping (Visual SLAM)** is the task of estimating a system’s own state in real-time by analyzing visual patterns from sequential multi-view images. By extracting and tracking visual features across consecutive images, it reconstructs the 3D structure of the environment while continuously refining the camera’s trajectory. Our research focuses on developing algorithms to enhance robustness and reliability, particularly in challenging scenarios such as texture-less surfaces and dynamic environments.

**\[Project\]  
**– \[Done\] 멀티 카메라 기반의 슬램 시스템 개발 및 연구 (클로봇)

#### Collaborative SLAM

![CSEDataset_News-pdf](/lab-media/3b40a85ff74b15d6.webp) ![슬라이드15](/lab-media/e58f7a086cb56666.webp)

**Collaborative SLAM** goes a step further by addressing SLAM in multi-agent (robot) systems, where multiple agents work together to simultaneously build a shared map of an environment and localize themselves within it. With inter-robot interaction, agents can achieve more accurate and comprehensive mapping over larger or more complex areas. We explores algorithms and communication strategies that facilitate effective cooperation among agents in indoor environments (e.g., hospital, office), which are commonly encountered by home or service robots.

**\[Publication\]  
**– A Benchmark Dataset for Collaborative SLAM in Service Environments (RA-L 2024)

**\[Project\]  
**– \[On-going\] AI Bots 협업 플랫폼 및 자기 조직 인공지능 기술 개발 (정보통신기획평가원)

#### Event Camera-based Perception

![image (1)](/lab-media/1448f1aadcf58d4d.webp)

Compared to conventional cameras that capture full images at fixed intervals, event cameras asynchronously detect only changes in brightness at each pixel. This unique characteristic enables them to sense reliably in high-speed or low-light environments. To fully leverage the low-latency and illumination-robust nature of event cameras, we are researching both standalone and fused use of event sensors with other sensory modalities, addressing diverse tasks such as depth estimation, sensor calibration, and occupancy prediction. Furthermore, our goal is to extend these capabilities into platform-agnostic perception systems that can be deployed across various platforms, including ground robots, quadruped robots, and aerial drones.

**\[Project\]  
**– \[On-going\] 이기종 에이전트 간 적응 가능한 3차원 공간 인지를 위한 동적 이벤트 카메라 기반 융합 센서팩 개발 (한국연구재단)
