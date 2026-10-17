---
title: Amazon EC2
description: Fast reference for virtual machines, AMIs, and instance states.
---

# Amazon EC2

> Source: [Amazon EC2 101](https://psychedelic-cuticle-e74.notion.site/Amazon-EC2-Elastic-Compute-Cloud-101-3ece929d9b2b448b8373b1f558864974)

## Core idea

EC2 is AWS’s default **Infrastructure as a Service (IaaS)** compute service. You provision virtual machines called **instances**, choosing the operating system and instance size.

## Remember

- Instances run in VPC subnets and are private unless you configure public access.
- An **AMI** is an image used to launch an instance with a particular configuration. AWS manages the physical host; you manage the instance and its OS.
- Instance storage can be on-host **Instance Store** or off-host **EBS**.
- **Running:** billed for compute and storage. **Stopped:** compute stops, but storage is still billed; the instance can restart. **Terminated:** deleted and cannot restart; instance charges stop.
