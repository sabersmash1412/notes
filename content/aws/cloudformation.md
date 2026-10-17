---
title: AWS CloudFormation
description: Fast reference for infrastructure as code, templates, and stacks.
---

# AWS CloudFormation

> Source: [CloudFormation 101](https://psychedelic-cuticle-e74.notion.site/AWS-CloudFormation-CFN-101-80186a5de60d46faa77ba7b762bcef62)

## Core idea

CloudFormation (CFN) is AWS’s Infrastructure as Code service. A YAML or JSON template describes infrastructure so it can be created, updated, and deleted consistently and repeatably.

## Template → stack → resources

- A template declares **logical resources** and optional configuration. `Resources` is the only required section.
- A **stack** is the active, executable representation of a template. Running it creates, updates, or deletes the corresponding physical resources in the AWS account.
- Example resources include VPCs, S3 buckets, and EC2 instances.
