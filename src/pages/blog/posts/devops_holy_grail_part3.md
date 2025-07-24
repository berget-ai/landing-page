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

_Building on Parts 1 and 2, let's add enterprise-grade features that scale with your business - Part 3_

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

## Multi-Environment Deployments: From Single to Multiple Environments

Most teams start with a single environment and later realize they need separate staging and production environments. This transition is critical for maintaining stability while enabling rapid development.

### Why Multiple Environments Matter

**Risk Reduction**: Test changes in staging before they hit production. Catch integration issues, performance problems, and configuration errors early.

**Parallel Development**: Multiple teams can work on different features without blocking each other. Staging becomes your integration testing ground.

**Compliance Requirements**: Many industries require separate environments for audit trails and change management.

**Customer Confidence**: Demonstrate new features to stakeholders in staging before production release.

### The Kustomize Pattern: Base + Overlays

Kustomize lets you define common configuration once and customize it per environment. This follows the DRY principle while maintaining environment-specific flexibility.

<LLMPrompt title="🤖 Multi-Environment Migration Setup">
First, ask me about my current setup and requirements before generating any code:
- Do you currently have a single environment or multiple environments?
- What environments do you need (staging, production, development, testing)?
- What differences exist between your environments (resource limits, replicas, domains, etc.)?
- Do you use different databases or external services per environment?
- What is your current directory structure for Kubernetes manifests?
- Do you need different secrets or configuration per environment?

Then help me migrate from single environment to multi-environment setup using Kustomize:

1. Restructure existing manifests into base configuration
2. Create environment-specific overlays for each environment
3. Set up proper namespace separation
4. Configure environment-specific ingress and domains
5. Handle secrets and configuration differences
6. Update FluxCD configuration for multiple environments
7. Create deployment workflows for each environment

Important: All Kubernetes manifests should go in the /k8s directory and use FluxCD HelmRelease format for GitOps deployment.

Provide a complete migration plan from single to multi-environment setup.
</LLMPrompt>

### Directory Structure: Organizing for Scale

```
k8s/
├── base/                    # Common resources (default: staging-like)
│   ├── deployment.yaml      # Base deployment configuration
│   ├── service.yaml         # Service definition
│   ├── configmap.yaml       # Common configuration
│   └── kustomization.yaml   # Base kustomization
├── overlays/
│   ├── staging/             # Staging environment (default)
│   │   ├── kustomization.yaml
│   │   ├── ingress.yaml     # staging.example.com
│   │   └── secrets.yaml     # Staging secrets
│   └── production/          # Production environment
│       ├── kustomization.yaml
│       ├── ingress.yaml     # app.example.com
│       ├── hpa.yaml         # Production auto-scaling
│       ├── secrets.yaml     # Production secrets
│       └── resources.yaml   # Higher resource limits
```

**Key Principle**: Base configuration represents your "default" environment (typically staging-like). Overlays modify this base for specific environments.

### Base Configuration: The Foundation

```yaml
# k8s/base/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - deployment.yaml
  - service.yaml
  - configmap.yaml

commonLabels:
  app: my-service
  
# Default to staging-like configuration
namespace: staging
```

```yaml
# k8s/base/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-service
spec:
  replicas: 2  # Conservative default
  selector:
    matchLabels:
      app: my-service
  template:
    metadata:
      labels:
        app: my-service
    spec:
      containers:
        - name: app
          image: my-app:latest
          resources:
            requests:
              memory: "128Mi"
              cpu: "100m"
            limits:
              memory: "256Mi"  # Staging-appropriate limits
              cpu: "200m"
          env:
            - name: ENVIRONMENT
              value: "staging"  # Default environment
```

### Staging Overlay: Minimal Changes

```yaml
# k8s/overlays/staging/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

namespace: staging

resources:
  - ../../base
  - ingress.yaml
  - secrets.yaml

# Staging uses base configuration mostly as-is
patchesStrategicMerge:
  - deployment-patch.yaml

images:
  - name: my-app
    newTag: staging-latest
```

```yaml
# k8s/overlays/staging/deployment-patch.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-service
spec:
  template:
    spec:
      containers:
        - name: app
          env:
            - name: ENVIRONMENT
              value: "staging"
            - name: LOG_LEVEL
              value: "debug"  # More verbose logging in staging
```

### Production Overlay: Production-Ready Configuration

```yaml
# k8s/overlays/production/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

namespace: production

resources:
  - ../../base
  - ingress.yaml
  - hpa.yaml
  - secrets.yaml
  - monitoring.yaml

patchesStrategicMerge:
  - deployment-patch.yaml

# Production uses specific image tags, not latest
images:
  - name: my-app
    newTag: v1.2.3

# Scale up for production
replicas:
  - name: my-service
    count: 5
```

```yaml
# k8s/overlays/production/deployment-patch.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-service
spec:
  template:
    spec:
      containers:
        - name: app
          resources:
            requests:
              memory: "256Mi"
              cpu: "200m"
            limits:
              memory: "512Mi"  # Higher limits for production
              cpu: "500m"
          env:
            - name: ENVIRONMENT
              value: "production"
            - name: LOG_LEVEL
              value: "info"  # Less verbose in production
```

### Environment-Specific Ingress Configuration

```yaml
# k8s/overlays/staging/ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-service
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
    external-dns.alpha.kubernetes.io/hostname: staging.example.com
spec:
  tls:
    - hosts:
        - staging.example.com
      secretName: staging-tls
  rules:
    - host: staging.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: my-service
                port:
                  number: 80
```

```yaml
# k8s/overlays/production/ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-service
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
    external-dns.alpha.kubernetes.io/hostname: app.example.com
    # Production-specific annotations
    nginx.ingress.kubernetes.io/rate-limit: "100"
    nginx.ingress.kubernetes.io/rate-limit-window: "1m"
spec:
  tls:
    - hosts:
        - app.example.com
      secretName: production-tls
  rules:
    - host: app.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: my-service
                port:
                  number: 80
```

### FluxCD Configuration for Multiple Environments

```yaml
# k8s/flux-staging.yaml
apiVersion: kustomize.toolkit.fluxcd.io/v1beta2
kind: Kustomization
metadata:
  name: my-service-staging
  namespace: flux-system
spec:
  interval: 5m
  path: "./k8s/overlays/staging"
  prune: true
  sourceRef:
    kind: GitRepository
    name: my-service
  targetNamespace: staging
```

```yaml
# k8s/flux-production.yaml
apiVersion: kustomize.toolkit.fluxcd.io/v1beta2
kind: Kustomization
metadata:
  name: my-service-production
  namespace: flux-system
spec:
  interval: 10m  # Less frequent updates in production
  path: "./k8s/overlays/production"
  prune: true
  sourceRef:
    kind: GitRepository
    name: my-service
  targetNamespace: production
  # Production requires manual approval
  suspend: false
```

### Deployment Workflow: Staging First, Then Production

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy-staging:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Update staging image
        run: |
          cd k8s/overlays/staging
          kustomize edit set image my-app:staging-${{ github.sha }}
          git add .
          git commit -m "deploy: update staging to ${{ github.sha }}"
          git push

  deploy-production:
    runs-on: ubuntu-latest
    needs: deploy-staging
    if: github.ref == 'refs/heads/main'
    environment: production  # Requires approval
    steps:
      - uses: actions/checkout@v3
      - name: Update production image
        run: |
          cd k8s/overlays/production
          kustomize edit set image my-app:v${{ github.run_number }}
          git add .
          git commit -m "deploy: update production to v${{ github.run_number }}"
          git push
```

### Migration Strategy: From Single to Multi-Environment

1. **Create Base Configuration**: Move existing manifests to `k8s/base/`
2. **Create Staging Overlay**: Minimal changes from base
3. **Test Staging**: Ensure staging works identically to current setup
4. **Create Production Overlay**: Add production-specific configuration
5. **Update FluxCD**: Configure separate Kustomizations for each environment
6. **Migrate Secrets**: Create environment-specific sealed secrets
7. **Update CI/CD**: Deploy to staging first, then production

This approach ensures zero downtime during migration while setting up proper environment separation.

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

```yaml
# k8s/postgresql.yaml
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

```yaml
# k8s/app-with-database.yaml
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

```yaml
# k8s/velero-namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: velero
---
# k8s/velero.yaml
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

```yaml
# k8s/backup-schedule.yaml
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

```yaml
# k8s/backup-monitoring.yaml
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
