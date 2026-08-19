---
title: "Boiling Bubble 3D Reconstruction"
date: 2025-08-01
summary: "Developed a computer-vision pipeline to segment boiling bubbles and estimate three-dimensional geometry and volume from video."
featured: false
weight: 4
tags: ["Research", "Python", "Simulation"]
status: "Research"
---

## Objective

Develop an automated computer-vision workflow for detecting, segmenting, and measuring flow-boiling bubbles from experimental imagery, replacing manual image analysis with a repeatable pipeline capable of extracting useful geometric properties such as bubble diameter, projected area, and estimated 3D volume.

## Requirements & Constraints

- Reliably detect and segment individual bubbles across changing bubble sizes, shapes, contrast levels, and image conditions.
- Create a consistent labeled dataset for training and evaluating detection and instance-segmentation models.
- Convert pixel-based model outputs into physically meaningful geometric measurements using calibrated image dimensions.
- Estimate bubble volume from 2D experimental imagery while minimizing reconstruction error.
- Reduce repetitive manual image-processing work and enable analysis of larger experimental datasets.
- Maintain a reproducible workflow that can be reused as additional boiling experiments and imagery are collected.
- Generate quantitative outputs suitable for use in ongoing heat-transfer research and potential publication.

## Engineering Work

- Built and annotated a custom microscopy-image dataset for training, validating, and evaluating bubble detection and instance-segmentation models.
- Developed computer-vision workflows for identifying individual bubbles and extracting segmented bubble boundaries from experimental imagery.
- Created a Python/OpenCV analysis pipeline that converted segmented contours into calibrated geometric properties, including equivalent diameter, projected area, and estimated three-dimensional volume.
- Automated approximately **95% of the image-analysis workflow**, reducing reliance on repetitive manual processing and improving consistency between analyzed images.
- Evaluated the geometric reconstruction workflow against reference cases, achieving **less than 2% volumetric error** under the tested conditions.
- Generated quantitative bubble-property datasets and visualizations used to support ongoing flow-boiling research, with the work potentially contributing to a future peer-reviewed publication.

## Outcome

The project produced an end-to-end workflow connecting machine-learning-based image segmentation with quantitative engineering analysis. Rather than using the detection models only to identify bubbles, the segmented outputs became the starting point for extracting physically useful measurements from experimental data.

The resulting pipeline substantially reduced manual image-analysis effort while providing a repeatable method for estimating bubble geometry and volume. The generated measurements are being used to support ongoing research into flow-boiling behavior and may contribute to a future research publication.

## Key Learning

This project showed me how computer vision can be used as an engineering measurement tool rather than simply as an image-classification problem. Building the dataset made it clear that model performance depends heavily on annotation quality, representative training examples, and consistent definitions of what should and should not be considered a bubble.

The project also reinforced the importance of validating the complete measurement pipeline rather than evaluating only model accuracy. Even a well-segmented image can produce inaccurate physical measurements if calibration, contour processing, or geometric assumptions are incorrect. Connecting the segmentation output to volume estimation required considering both machine-learning performance and the physical assumptions used to reconstruct three-dimensional bubble geometry.
