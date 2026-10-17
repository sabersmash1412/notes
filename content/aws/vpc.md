---
title: Amazon VPC
description: Fast reference for AWS virtual networks, subnets, and defaults.
---

# Amazon VPC

> Source: [Amazon VPC 101](https://psychedelic-cuticle-e74.notion.site/Amazon-VPC-Virtual-Private-Cloud-101-9a8137f149aa4919b7c20b208873715f) · [AWS Public vs Private Services](https://psychedelic-cuticle-e74.notion.site/AWS-Public-vs-Private-Services-de910c9be302471089a33afc4feef728)

## Core idea

A VPC is a virtual private network in one AWS account and one region. Resources such as EC2 instances run in its subnets.

## Remember

- **VPC CIDR** defines the address range. A subnet is a smaller slice of that range; subnet CIDRs cannot be changed after creation.
- A VPC can have subnets in multiple Availability Zones, so a single AZ failure need not take down the whole VPC.
- **Custom VPC:** private and isolated by default. Configure networking to reach other VPCs, on-premises networks, AWS public services, or the internet.
- **Default VPC:** at most one per region; AWS creates it with CIDR `172.31.0.0/16`, one `/20` subnet per AZ, an internet gateway, security group, and network ACL. Resources receive public IPv4 addresses by default.
- “Public AWS service” means it has a public endpoint; it does **not** mean unauthenticated access. Services such as S3 do not need to be deployed inside your VPC.
