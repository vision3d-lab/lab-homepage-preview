---
title: "3D Perception"
source: "https://unist.info/?page_id=1604"
---

**3D Perception**

<video src="/lab-media/83b806d0a9b76463.mp4" poster="/lab-media/83b806d0a9b76463-poster.webp" aria-label="scene08_13_19-ezgif.com-crop" autoplay loop muted playsinline preload="metadata" width="904" height="411"></video> ![DE](/lab-media/a8c2dcfce8cc7340.webp)

**3D perception** plays a pivotal role in enabling intelligent agents—such as robots, autonomous vehicles, and AR/VR systems—to understand and interact with the physical world in a meaningful way. By perceiving, interpreting, and reasoning about their environments in three dimensions, these systems can make informed decisions, navigate complex scenes, and perform tasks with a high level of autonomy. Our group focuses on developing robust 3D perception systems that empower intelligent agents to operate reliably in real-world conditions. To this end, we are actively researching tasks such as **depth estimation**, **3D occupancy prediction**, **traversability estimation**, and any related topics.

#### Depth Estimation

![SlaBins_publicatoin그림_v2](/lab-media/f44572c65b3cf379.webp)

**Depth estimation** is the task of predicting the distance from the camera to points in a scene using 2D image inputs. It is a fundamental problem in 3D vision that enables machines to understand scene geometry for critical tasks such as obstacle avoidance, navigation, and 3D reconstruction. Traditional approaches often rely on pinhole camera models and assume uniform depth distributions. However, real-world applications—especially in driving scenarios using wide-angle or fisheye cameras—face unique challenges such as nonlinear distortion and varying depth scales across the field of view. Our research develops robust depth estimation algorithms, improving accuracy and reliability in diverse and challenging environments.

**\[Publication\]**

– SlaBins: Fisheye Depth Estimation using Slanted Bins on Road Environments (ICCV 2024)

**\[Project\]**

– \[Done\] 차량의 측면 카메라를 이용한 도로 환경 인식 알고리즘 개발 (42dot)

#### 3D Occupancy Prediction

![20250527100948](/lab-media/191fcc175aea0003.webp)

**3D Occupancy Prediction** estimates a complete 3D semantic voxel map from RGB images, including occluded areas. In this task, it is crucial to accurately predict the complete 3D scene from 2D images, which lack explicit geometric information. To address the 2D–3D discrepancy caused by camera perspective projection, our research explores techniques that incorporate geometric cues, such as vanishing points into learning frameworks to better understand the 3D scene from a single image.

**\[Publication\]**

– VPOcc: Exploiting Vanishing Point for 3D Semantic Occupancy Prediction (IROS 2025)

#### Traversability Estimation

![4_Research_1-project-teaser_240910_ETRI](/lab-media/57bbc83d6f109f72.webp)

**Traversibility estimation** aims to detect traversable areas in unstructured environments, enabling effectie local path planning. This task is critical for autonomous navigation in complex environments, such as off-road terrains, urban streets, or indoor spaces. Unlike simple obstacle detection, traversability estimation requires a deeper understanding of the scene’s geometric structure (e.g., slopes, steps), semantic context (e.g. grass vs. pavements), and dynamic elements (e.g., moving objects, changing terrain), making it an essential capability for safe and adaptive robot behavior.

**\[Project\]**

– \[On-going\] 다중 모빌리티 운용을 위한 AI 기반 응용기술 개발 (한국전자통신연구원)
