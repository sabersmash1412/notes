---
title: Amazon CloudWatch
description: Fast reference for metrics, logs, and alarms.
---

# Amazon CloudWatch

> Source: [Amazon CloudWatch 101](https://psychedelic-cuticle-e74.notion.site/Amazon-CloudWatch-CW-101-488fe83ca8b44579a9288f600e2fb682)

## Core idea

CloudWatch collects and manages operational data for monitoring AWS resources, applications, and on-premises systems.

## Three parts

- **Metrics:** measurements over time. A datapoint is a timestamp and value; a metric is an ordered series of datapoints.
- **Logs:** log data from AWS services, applications, or on-premises systems.
- **Alarms:** watch a metric against a threshold and trigger a notification (often through SNS) or event. States: `INSUFFICIENT_DATA`, `OK`, and `ALARM`.

## Organize the data

- **Namespace** groups related metrics (for example, `AWS/EC2`).
- **Dimensions** split a metric into views, such as separate EC2 instances. Specify dimensions when you need a metric for one resource rather than a broader group.
- AWS gathers some metrics and logs natively. Configure the CloudWatch Agent for data it does not collect natively, such as processes inside an EC2 instance or data from outside AWS.
