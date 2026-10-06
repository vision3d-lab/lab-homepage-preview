---
title: "3D Reconstruction"
source: "https://unist.info/?page_id=1604"
---

**3D Reconstruction**

![d-nerf](/lab-media/ce499d1f2dd6d7b2.webp) ![NVS](/lab-media/d7666a5365c96f1f.webp)

**3D Reconstruction** focuses on recovering accurate and detailed 3D representations of objects or environments from partial, noisy real-world data, such as images, depth scans, or LiDAR measurements. The goal is to infer the underlying geometry and appearance, even with incomplete or ambiguous observations. This field supports a wide range of applications in robotics, autonomous systems, digital archiving, and AR/VR, and involves challenges like handling real-world noise, maintaining structural consistency, and generalizing to diverse scenes. We are actively researching tasks such as Dynamic 3D reconstruction, Novel View Synthesis and any related topics.

#### Dynamic 3D Reconstruction

<video src="/lab-media/12aca0b43b4a9fe5.mp4" poster="/lab-media/12aca0b43b4a9fe5-poster.webp" aria-label="app1" autoplay loop muted playsinline preload="metadata" width="960" height="455"></video>

**Dynamic 3D reconstruction** aims to recover animatable 3D models of articulated subjects—such as humans and animals— that change over time, from limited visual inputs like monocular images or videos. Unlike static reconstruction, it requires not only capturing the shape and texture but also modeling motion-capable structures, making it significantly more challenging under sparse or occluded observations. Our research explores learning-based methods with advanced 3D representations, such as 3D Gaussian Splatting, to produce animatable, realistic reconstructions from sparse observations.

**\[Publication\]**

– DogRecon: Canine Prior-Guided Animatable 3D Gaussian Dog Reconstruction From A Single Image (IJCV 2025)

#### Novel View Synthesis

**Novel View Synthesis (NVS)** is the task of photorealistic rendering of a scene from novel, unseen viewpoints, given one or more images captured from known camera poses. Although Neural Radiance Fields and 3D Gaussian Splatting have demonstrated photorealistic rendering, they often struggle with inaccurate initialization and inconsistent color appearance across different viewpoints. We address these limitations by developing robust scene representations and learning strategies that ensure geometric consistency, accurate appearance modeling even in challenging real-world conditions.

**\[Project\]**

– \[Done\] 산학 과제 (오늘의 집)
