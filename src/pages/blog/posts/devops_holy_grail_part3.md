---
title: The DevOps Holy Grail: Enterprise-Grade Features
description: Add bulletproof backends, secrets management, and monitoring to your GitOps infrastructure - Part 3
date: 2025-07-24
author: Christian Landgren
tags:
  - DevOps
  - Kubernetes
  - GitOps
  - Monitoring
  - Security
image: /src/assets/images/holy-grail.jpg
imageAlt: The DevOps Holy Grail - Enterprise-Grade Features
email: christian@landgren.nu
language: en
---

_Building on Parts 1 and 2, let's add enterprise-grade features that scale with your business - Part 3_

---

In [Part 1](/blog/devops_holy_grail_part1), we built the foundation with CI/CD, Kubernetes, and GitOps. In [Part 2](/blog/devops_holy_grail_part2), we added automatic HTTPS and DNS management. Now it's time to add the enterprise-grade features that separate weekend projects from production platforms.

This isn't about over-engineering. It's about adding the pieces that become critical as you grow—before you desperately need them.

## Add a Real Backend: Self-Hosted Supabase

Most apps need a database, authentication, and file storage. Instead of cobbling together cloud services, deploy Supabase directly in your cluster:

<LLMPrompt title="🤖 Self-Hosted Supabase Deployment">
Help me deploy Supabase (open-source Firebase alternative) on Kubernetes using Helm. I need:
- Complete HelmRelease manifest for Supabase deployment via Flux
- PostgreSQL configuration with persistent storage
- Authentication service setup with proper secrets management
- File storage configuration with S3-compatible backend
- Real-time service configuration
- Ingress configuration to expose Supabase APIs

My app domain is myapp.example.com and I want Supabase APIs at api.myapp.example.com
</LLMPrompt>

```yaml
# k8s/supabase.yaml
apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: supabase
  namespace: supabase
spec:
  chart:
    spec:
      chart: supabase
      sourceRef:
        kind: HelmRepository
        name: supabase-community
  values:
    auth:
      siteUrl: https://myapp.example.com
    postgresql:
      enabled: true
      auth:
        postgresPassword: ${POSTGRES_PASSWORD}
    storage:
      enabled: true
```

You now have Postgres, authentication, real-time subscriptions, and file storage—all running in your own infrastructure, managed through Git.

## Bulletproof Secrets Management

Secrets management is critical but complex enough to deserve its own deep dive. We've created a comprehensive guide that covers everything from basic sealed-secrets to enterprise Vault integration.

**[Read our complete Secrets Management Guide](/blog/kubernetes_secrets_management)**

This guide covers:

- Sealed Secrets for Git-safe encryption
- HashiCorp Vault for enterprise environments
- Development workflows that developers actually use
- Security best practices and compliance

The secrets management patterns integrate seamlessly with the GitOps infrastructure we're building here.

## Monitoring That Prevents Incidents

Most monitoring tells you what broke after it's too late. Let's build monitoring that prevents incidents:

<LLMPrompt title="🤖 Comprehensive Monitoring Setup">
Help me create a comprehensive monitoring and observability setup for my GitOps Kubernetes application. I need:
- Prometheus and Grafana installation via Helm/Flux
- Pre-built dashboards for Kubernetes, application metrics, and business KPIs
- Alerting rules for common failure scenarios (pod crashes, high CPU, disk space)
- Log aggregation with Loki or ELK stack
- Distributed tracing setup (Jaeger/Zipkin)
- SLO/SLI monitoring for production services
- Cost monitoring and optimization recommendations
- Health check endpoints and uptime monitoring

Focus on actionable alerts that help prevent incidents rather than just reporting them.
</LLMPrompt>

### Prometheus and Grafana Stack

```yaml
# k8s/monitoring.yaml
apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: kube-prometheus-stack
  namespace: monitoring
spec:
  chart:
    spec:
      chart: kube-prometheus-stack
      sourceRef:
        kind: HelmRepository
        name: prometheus-community
  values:
    grafana:
      adminPassword: ${GRAFANA_ADMIN_PASSWORD}
      ingress:
        enabled: true
        hosts:
          - grafana.myapp.example.com
    prometheus:
      prometheusSpec:
        retention: 30d
        storageSpec:
          volumeClaimTemplate:
            spec:
              resources:
                requests:
                  storage: 50Gi
```

### Application-Level Metrics

Add health checks and metrics to your application:

```typescript
// src/metrics.ts
import express from 'express'
import promClient from 'prom-client'

const app = express()

// Create metrics
const httpRequestDuration = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
})

const httpRequestsTotal = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code'],
})

// Health check endpoint
app.get('/health', (req, res) => {
  res
    .status(200)
    .json({ status: 'healthy', timestamp: new Date().toISOString() })
})

// Metrics endpoint
app.get('/metrics', (req, res) => {
  res.set('Content-Type', promClient.register.contentType)
  res.end(promClient.register.metrics())
})
```

### Alerting Rules

```yaml
# k8s/alerts.yaml
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: app-alerts
spec:
  groups:
    - name: app.rules
      rules:
        - alert: HighErrorRate
          expr: rate(http_requests_total{status_code=~"5.."}[5m]) > 0.1
          for: 2m
          annotations:
            summary: 'High error rate detected'
            description: 'Error rate is {{ $value }} errors per second'

        - alert: PodCrashLooping
          expr: rate(kube_pod_container_status_restarts_total[15m]) > 0
          for: 5m
          annotations:
            summary: 'Pod is crash looping'
            description: 'Pod {{ $labels.pod }} is restarting frequently'
```

## Multi-Environment Deployments

As you grow, you'll need staging, testing, and production environments. Here's how to structure them:

```
k8s/
├── base/                    # Common resources
│   ├── deployment.yaml
│   ├── service.yaml
│   └── kustomization.yaml
├── overlays/
│   ├── staging/
│   │   ├── kustomization.yaml
│   │   └── ingress.yaml
│   └── production/
│       ├── kustomization.yaml
│       ├── ingress.yaml
│       └── hpa.yaml
```

### Base Configuration

```yaml
# k8s/base/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - deployment.yaml
  - service.yaml

commonLabels:
  app: my-service
```

### Environment-Specific Overlays

```yaml
# k8s/overlays/production/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

namespace: production

resources:
  - ../../base
  - hpa.yaml

patchesStrategicMerge:
  - ingress.yaml

replicas:
  - name: my-service
    count: 3
```

## The Complete Picture

With all three parts of this guide, you now have:

- **Automated CI/CD** that builds and deploys on every commit
- **Automatic HTTPS** certificates that renew themselves
- **DNS management** that updates when you change domains
- **Auto-scaling** that handles traffic spikes without intervention
- **Self-hosted backend** with database, auth, and storage
- **Bulletproof secrets management** (see our [dedicated guide](/blog/kubernetes_secrets_management))
- **Comprehensive monitoring** that prevents incidents
- **Multi-environment** deployments with proper isolation
- **Advanced deployment** strategies for zero-risk releases

All managed through code, all versioned in Git, all completely portable between clouds.

## The Path Forward

This isn't just about tools—it's about a mindset shift. Infrastructure as code isn't a nice-to-have anymore; it's the foundation that lets small teams move fast without breaking things.

Start small. Add one piece at a time. Let your system grow with your needs, not against them.

The holy grail isn't about finding the perfect tool. It's about building systems that adapt, scale, and heal themselves—so you can focus on building products that matter.
