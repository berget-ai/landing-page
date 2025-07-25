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
image: /images/holy-grail.jpg
imageAlt: The DevOps Holy Grail - Enterprise-Grade Features
email: christian@landgren.nu
language: en
---

In [Part 1](/blog/devops_holy_grail_part1), we built the foundation with CI/CD, Kubernetes, and GitOps. In [Part 2](/blog/devops_holy_grail_part2), we added automatic HTTPS and DNS management. Now it's time to add the enterprise-grade features that separate weekend projects from production platforms.

This isn't about over-engineering. It's about adding the pieces that become critical as you grow—before you desperately need them.

## Add a Real Backend: Self-Hosted Supabase

Most apps need a database, authentication, and file storage. Instead of cobbling together cloud services, deploy Supabase directly in your cluster:

<LLMPrompt title="🤖 Self-Hosted Supabase Deployment">
First, ask me about my specific setup before generating any code:
- What is your domain name?
- What subdomain do you want for Supabase APIs?
- What storage backend do you prefer (S3, MinIO, local storage)?
- Do you have existing PostgreSQL or need a new instance?
- What are your resource requirements (CPU/memory limits)?

Then help me deploy Supabase (open-source Firebase alternative) on Kubernetes using Helm. I need:

- Complete HelmRelease manifest for Supabase deployment via Flux
- PostgreSQL configuration with persistent storage
- Authentication service setup with proper secrets management
- File storage configuration with S3-compatible backend
- Real-time service configuration
- Ingress configuration to expose Supabase APIs

Important: All Kubernetes manifests should go in the /k8s directory and use FluxCD HelmRelease format for GitOps deployment.
</LLMPrompt>

```yaml:k8s/supabase.yaml
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

## Monitoring That Prevents Incidents

Most monitoring tells you what broke after it's too late. Let's build monitoring that prevents incidents:

<LLMPrompt title="🤖 Comprehensive Monitoring Setup">
First, ask me about my monitoring requirements before generating any code:
- What applications/services do you want to monitor?
- Do you prefer Loki or ELK stack for log aggregation?
- What alerting channels do you use (Slack, email, PagerDuty)?
- Do you need distributed tracing (Jaeger/Zipkin)?
- What are your retention requirements for metrics and logs?
- Do you have existing monitoring tools to integrate with?

Then help me create a comprehensive monitoring and observability setup for my GitOps Kubernetes application. I need:

- Prometheus and Grafana installation via Helm/Flux
- Pre-built dashboards for Kubernetes, application metrics, and business KPIs
- Alerting rules for common failure scenarios (pod crashes, high CPU, disk space)
- Log aggregation with chosen stack
- Distributed tracing setup if needed
- SLO/SLI monitoring for production services
- Cost monitoring and optimization recommendations
- Health check endpoints and uptime monitoring

Focus on actionable alerts that help prevent incidents rather than just reporting them.

Important: All Kubernetes manifests should go in the /k8s directory and use FluxCD HelmRelease format for GitOps deployment.
</LLMPrompt>

### Prometheus and Grafana Stack

```yaml:k8s/monitoring.yaml
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

```typescript:src/metrics.ts
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

```yaml:k8s/alerts.yaml
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

Managing multiple environments (staging, production, testing) is complex enough to deserve its own comprehensive guide. We've created a detailed walkthrough that covers everything from single-environment migration to advanced deployment strategies.

**[Read our complete Multi-Environment Deployments Guide](/blog/kubernetes_multi_environment_deployments)**

This guide covers:

- **Migration strategy** from single to multiple environments
- **Kustomize patterns** for base + overlay configuration
- **Environment-specific** secrets and configuration management
- **FluxCD setup** for multi-environment GitOps
- **Deployment workflows** with proper promotion pipelines
- **Best practices** for environment parity and drift prevention

The multi-environment patterns integrate seamlessly with the GitOps infrastructure we're building here.

## Production Database with PostgreSQL

Most applications need a reliable database. Here's how to deploy PostgreSQL with proper persistence and backups:

<LLMPrompt title="🤖 PostgreSQL Database Setup">
First, ask me about my database requirements before generating any code:
- What is your expected database size and traffic?
- Do you need high availability (multiple replicas)?
- What are your backup retention requirements?
- Do you have existing databases to migrate from?
- What resource limits do you want (CPU/memory/storage)?
- Do you need connection pooling with PgBouncer?

Then help me deploy PostgreSQL on Kubernetes with production-ready configuration. I need:

- PostgreSQL deployment with persistent storage
- Proper resource limits and health checks
- Database initialization with custom schemas
- Connection pooling if needed
- Monitoring integration with Prometheus
- Backup and restore procedures
- High availability configuration if required

Important: All Kubernetes manifests should go in the /k8s directory and use FluxCD HelmRelease format for GitOps deployment.
</LLMPrompt>

### PostgreSQL Deployment

```yaml:k8s/postgresql.yaml
apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: postgresql
  namespace: database
spec:
  interval: 30m
  chart:
    spec:
      chart: postgresql
      version: '13.x.x'
      sourceRef:
        kind: HelmRepository
        name: bitnami
        namespace: flux-system
  values:
    auth:
      postgresPassword: ${POSTGRES_PASSWORD}
      database: myapp
    primary:
      persistence:
        enabled: true
        size: 20Gi
        storageClass: fast-ssd
      resources:
        requests:
          memory: 256Mi
          cpu: 250m
        limits:
          memory: 512Mi
          cpu: 500m
    metrics:
      enabled: true
      serviceMonitor:
        enabled: true
```

### Database Connection in Applications

```yaml:k8s/app-with-database.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  template:
    spec:
      containers:
        - name: app
          image: my-app:latest
          env:
            - name: DATABASE_URL
              valueFrom:
                secretKeyRef:
                  name: app-secrets
                  key: DATABASE_URL
            - name: DB_HOST
              value: postgresql.database.svc.cluster.local
            - name: DB_PORT
              value: '5432'
```

## Backup and Disaster Recovery with Velero

Velero is an open-source, free tool that provides backup and restore capabilities for your entire Kubernetes cluster, including persistent volumes. Originally developed by VMware (formerly Heptio), it's now a CNCF project with a strong community and enterprise support.

<LLMPrompt title="🤖 Velero Backup Setup">
First, ask me about my backup requirements before generating any code:
- What storage backend do you use (AWS S3, Google Cloud Storage, Azure, MinIO)?
- What are your backup retention requirements (daily, weekly, monthly)?
- Which namespaces/applications need backup?
- Do you need cross-cluster disaster recovery?
- What is your RTO/RPO requirements?
- Do you have existing backup solutions to integrate with?

Then set up Velero for Kubernetes cluster backup and disaster recovery. I need:

- Complete Velero installation via Helm/Flux
- Configuration for your chosen storage backend
- Scheduled backups for applications and persistent volumes
- Backup retention policies matching your requirements
- Restore procedures for different scenarios
- Monitoring and alerting for backup failures
- Cross-cluster disaster recovery if needed

Important: All Kubernetes manifests should go in the /k8s directory and use FluxCD HelmRelease format for GitOps deployment.
</LLMPrompt>

### Installing Velero

```yaml:k8s/velero-namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: velero
---
```

```yaml:k8s/velero.yaml
apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: velero
  namespace: velero
spec:
  interval: 30m
  chart:
    spec:
      chart: velero
      version: '5.x.x'
      sourceRef:
        kind: HelmRepository
        name: vmware-tanzu
        namespace: flux-system
  values:
    configuration:
      backupStorageLocation:
        - name: default
          provider: aws
          bucket: my-backup-bucket
          config:
            region: eu-west-1
            s3ForcePathStyle: true
            s3Url: https://s3.eu-west-1.amazonaws.com
      volumeSnapshotLocation:
        - name: default
          provider: aws
          config:
            region: eu-west-1
    credentials:
      useSecret: true
      secretContents:
        cloud: |
          [default]
          aws_access_key_id=${AWS_ACCESS_KEY_ID}
          aws_secret_access_key=${AWS_SECRET_ACCESS_KEY}
```

### Scheduled Backups

```yaml:k8s/backup-schedule.yaml
apiVersion: velero.io/v1
kind: Schedule
metadata:
  name: daily-backup
  namespace: velero
spec:
  schedule: '0 2 * * *' # Daily at 2 AM
  template:
    includedNamespaces:
      - default
      - database
      - monitoring
    excludedResources:
      - events
      - events.events.k8s.io
    storageLocation: default
    ttl: 720h0m0s # 30 days retention
---
apiVersion: velero.io/v1
kind: Schedule
metadata:
  name: weekly-full-backup
  namespace: velero
spec:
  schedule: '0 1 * * 0' # Weekly on Sunday at 1 AM
  template:
    includedNamespaces:
      - '*'
    storageLocation: default
    ttl: 2160h0m0s # 90 days retention
```

### Backup Monitoring

```yaml:k8s/backup-monitoring.yaml
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: velero-alerts
  namespace: velero
spec:
  groups:
    - name: velero.rules
      rules:
        - alert: VeleroBackupFailure
          expr: increase(velero_backup_failure_total[1h]) > 0
          for: 5m
          annotations:
            summary: 'Velero backup failed'
            description: 'Backup {{ $labels.schedule }} has failed'

        - alert: VeleroBackupPartialFailure
          expr: increase(velero_backup_partial_failure_total[1h]) > 0
          for: 5m
          annotations:
            summary: 'Velero backup partially failed'
            description: 'Backup {{ $labels.schedule }} has partial failures'
```

### Restore Procedures

```bash
# List available backups
velero backup get

# Restore from specific backup
velero restore create --from-backup daily-backup-20240124-020000

# Restore specific namespace
velero restore create --from-backup daily-backup-20240124-020000 \
  --include-namespaces database

# Restore with different namespace mapping
velero restore create --from-backup daily-backup-20240124-020000 \
  --namespace-mappings old-namespace:new-namespace
```

## The Complete Picture

With all three parts of this guide, you now have:

- **Automated CI/CD** that builds and deploys on every commit
- **Automatic HTTPS** certificates that renew themselves
- **DNS management** that updates when you change domains
- **Auto-scaling** that handles traffic spikes without intervention
- **Self-hosted backend** with database, auth, and storage
- **Comprehensive monitoring** that prevents incidents
- **Multi-environment** deployments with proper isolation
- **Production database** with PostgreSQL and proper persistence
- **Backup and disaster recovery** with Velero
- **Bulletproof secrets management** (see our [dedicated guide](/blog/kubernetes_secrets_management))

All managed through code, all versioned in Git, all completely portable between clouds.

## The Path Forward

This isn't just about tools—it's about a mindset shift. Infrastructure as code isn't a nice-to-have anymore; it's the foundation that lets small teams move fast without breaking things.

Start small. Add one piece at a time. Let your system grow with your needs, not against them.

The holy grail isn't about finding the perfect tool. It's about building systems that adapt, scale, and heal themselves—so you can focus on building products that matter.
