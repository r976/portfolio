---
title: "Wall-Climbing Robot"
date: 2026-03-01
summary: "Designed a tracked robotic platform using propeller-generated suction for traversal across vertical building surfaces."
featured: true
weight: 2
tags: ["CAD", "Prototyping", "Robotics"]
status: "Prototype"
---

## Objective

Design and prototype a wall-climbing robot capable of maintaining adhesion to vertical surfaces while carrying its own propulsion, electronics, and structural hardware. The project focused on developing a lightweight mechanical architecture that could generate sufficient normal force for wall retention while remaining maneuverable, manufacturable, and easy to iterate.

## Requirements & Constraints

- Generate enough adhesion force to support the full robot mass on a vertical surface.
- Maintain wall contact during both stationary operation and movement.
- Accommodate changing surface conditions, including differences in roughness, flatness, and leakage.
- Package two brushless motors, 5-inch propellers, a 4S battery, electronics, and drivetrain components within a compact chassis.
- Minimize vehicle mass to reduce the adhesion force required for reliable wall climbing.
- Protect the propulsion system and surrounding components from propeller interference.
- Use primarily 3D-printed structural components to support rapid prototyping and low-cost iteration.
- Maintain sufficient chassis stiffness while allowing the robot to conform to surface irregularities.
- Provide accessible mounting and interface points for electronics, wiring, motors, and drivetrain hardware.
- Develop a testable architecture so thrust and adhesion performance could be measured and compared against the robot’s weight.

## Engineering Work

- Led a four-person mechanical subteam responsible for the chassis, adhesion system, drivetrain integration, and mechanical subsystem interfaces.
- Developed the primary vehicle architecture in Fusion 360 around dual brushless motors, 5-inch propellers, a 4S battery, and 3D-printed structural components.
- Designed and iterated chassis concepts to improve wall contact and reduce adhesion losses caused by surface leakage, geometric misalignment, and structural flexibility.
- Built early physical prototypes using FDM-printed components and basic hardware, using fit, stiffness, and subsystem integration issues to guide redesign.
- Defined thrust, vehicle-mass, static-adhesion, and wall-retention tests to compare available adhesion force against the force required to support the robot.
- Transitioned portions of the mechanical design workflow toward Siemens NX to improve assembly organization and align the project with more industry-standard CAD practices.

## Outcome

The project progressed from an initial concept into a testable mechanical prototype with integrated propulsion, electronics, and structural hardware. Early testing provided a basis for evaluating thrust and adhesion performance and helped identify the most important design challenges, including surface leakage, chassis stiffness, mass distribution, and maintaining consistent contact with the wall.

The prototype and test results are being used to guide subsequent design iterations, with the goal of improving adhesion reliability, maneuverability, and overall mechanical robustness before full wall-climbing validation.

## Key Learning

This project reinforced the importance of treating a robotic system as an interaction between multiple subsystems rather than optimizing each component independently. Increasing structural stiffness, changing the chassis geometry, moving the battery, or modifying the propulsion system could all affect adhesion performance, mass distribution, and vehicle stability.

It also demonstrated the value of rapid physical testing. CAD and theoretical force estimates were useful for establishing an initial design direction, but real prototypes exposed issues such as leakage, flexibility, fit, and integration constraints that were difficult to predict analytically. The project strengthened my experience with mechanical system design, rapid prototyping, subsystem integration, team leadership, and test-driven iteration.
