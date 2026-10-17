---
title: Amazon Route 53
description: Fast reference for AWS DNS, domains, hosted zones, and health checks.
---

# Amazon Route 53

> Source: [Amazon Route 53 101](https://psychedelic-cuticle-e74.notion.site/Amazon-R53-Route-53-101-4a929b4bf2b440528c0356bb7fd9cdf2)

## Core idea

Route 53 is AWS’s globally available, managed DNS service. It supports domain registration, DNS hosting, health checks, and recursive lookups through Route 53 Resolver.

## Remember

- **Registered domain:** Route 53 can act as the domain registrar. Registration creates a hosted zone and assigns four name servers.
- **Hosted zone:** stores the DNS records for a domain; Route 53 acts as the DNS hosting provider. Hosted zones have ongoing costs, separate from domain registration.
- Health checks can monitor endpoints and support routing traffic to healthy endpoints.
- If you delete and recreate a hosted zone, update the registered domain’s name server records to the new zone’s four name servers.
