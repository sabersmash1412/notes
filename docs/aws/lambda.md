---
title: AWS Lambda
description: Fast reference for functions, runtimes, and execution limits.
---

# AWS Lambda

> Source: [AWS Lambda 101](https://psychedelic-cuticle-e74.notion.site/AWS-Lambda-101-1cb86c7395e780f3b01fd94a3c1a0e37)

## Core idea

Lambda is **Function as a Service (FaaS)**: AWS runs a function when invoked, making it a common building block for serverless and event-driven architectures.

## Remember

- A function includes code, a deployment package, a runtime (such as a language/version), resource settings, and an execution role.
- Configure memory directly; the available vCPU is allocated indirectly from that setting.
- A function runs for at most **15 minutes**. Billing is based on compute consumed while it runs.
- Assume execution environments are **stateless** and may be new for each invocation. Code must work without data left by a previous run.
