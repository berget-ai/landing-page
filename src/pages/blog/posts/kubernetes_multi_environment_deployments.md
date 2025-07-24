---
title: Kubernetes Multi-Environment Deployments: From Single to Multiple Environments
description: How to migrate from a single environment to proper staging and production environments using Kustomize and GitOps
date: 2025-07-24
author: Christian Landgren
tags:
  - Kubernetes
  - GitOps
  - Kustomize
  - DevOps
  - Multi-Environment
image: /images/holy-grail.jpg
imageAlt: Kubernetes Multi-Environment Deployments - Staging and Production
email: christian@landgren.nu
language: en
---

_A comprehensive guide to migrating from single environment to proper multi-environment deployments with Kubernetes and GitOps_

---

Most teams start with a single environment and later realize they need separate staging and production environments. This transition is critical for maintaining stability while enabling rapid development, but it's also where many teams get stuck.

This guide shows you how to migrate from a single environment to a proper multi-environment setup using Kustomize and GitOps—without breaking your existing deployment or requiring a complete rewrite.

## Why Multiple Environments Matter

### Risk Reduction
Test changes in staging before they hit production. Catch integration issues, performance problems, and configuration errors early—when they're cheap to fix.

### Parallel Development
Multiple teams can work on different features without blocking each other. Staging becomes your integration testing ground where features come together safely.

### Compliance Requirements
Many industries require separate environments for audit trails and change management. Having proper environment separation isn't just good practice—it's often legally required.

### Customer Confidence
Demonstrate new features to stakeholders in staging before production release. Show, don't tell, and build confidence in your releases.

### Incident Response
When production breaks, having a working staging environment means you can test fixes before applying them to production. This dramatically reduces recovery time.

## The Problem with Single Environment Deployments

### Everything is Production
When you only have one environment, every change goes directly to production. There's no safety net, no place to test integrations, and no way to validate changes before users see them.

### No Testing Ground
New features, dependency updates, and configuration changes all get tested in production. This leads to more outages and less confidence in deployments.

### Difficult Collaboration
Multiple developers can't work on conflicting features simultaneously. Someone always has to wait, slowing down development velocity.

### Poor Change Management
Without proper environments, it's hard to implement proper change management processes. Everything becomes a "hotfix" because there's nowhere else to test.

## The Kustomize Pattern: Base + Overlays

Kustomize lets you define common configuration once and customize it per environment. This follows the DRY principle while maintaining environment-specific flexibility.

The key insight: **Base configuration represents your "default" environment** (typically staging-like), and **overlays modify this base** for specific environments.

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

## Directory Structure: Organizing for Scale

Here's how to structure your repository for multiple environments:

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
└── flux/                    # FluxCD configurations
    ├── staging.yaml         # Staging Kustomization
    └── production.yaml      # Production Kustomization
```

**Key Principle**: Base configuration represents your "default" environment (typically staging-like). Overlays modify this base for specific environments.

## Step 1: Create Base Configuration

Start by moving your existing manifests to the `base/` directory. This becomes your foundation that all environments build upon.

### Base Kustomization

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

# Common configuration for all environments
images:
  - name: my-app
    newTag: latest

# Conservative defaults
replicas:
  - name: my-service
    count: 2
```

### Base Deployment

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
          ports:
            - containerPort: 3000
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
            - name: LOG_LEVEL
              value: "debug"    # More verbose by default
          envFrom:
            - configMapRef:
                name: app-config
            - secretRef:
                name: app-secrets
          livenessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 30
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /ready
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 5
```

### Base Service

```yaml
# k8s/base/service.yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: my-service
  ports:
    - name: http
      port: 80
      targetPort: 3000
  type: ClusterIP
```

### Base ConfigMap

```yaml
# k8s/base/configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  # Common configuration for all environments
  APP_NAME: "my-service"
  PORT: "3000"
  # These can be overridden in overlays
  DATABASE_POOL_SIZE: "10"
  CACHE_TTL: "300"
```

## Step 2: Create Staging Overlay

Staging should be as close to production as possible, but with some differences for testing and debugging.

### Staging Kustomization

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

# Use staging-specific image tags
images:
  - name: my-app
    newTag: staging-latest

# Staging-specific labels
commonLabels:
  environment: staging
  
# Override some base configuration
configMapGenerator:
  - name: app-config
    behavior: merge
    literals:
      - LOG_LEVEL=debug
      - DEBUG_MODE=true
```

### Staging Deployment Patch

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
            - name: DEBUG_MODE
              value: "true"   # Enable debug features
```

### Staging Ingress

```yaml
# k8s/overlays/staging/ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-service
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
    external-dns.alpha.kubernetes.io/hostname: staging.example.com
    # Staging-specific annotations
    nginx.ingress.kubernetes.io/auth-type: basic
    nginx.ingress.kubernetes.io/auth-secret: basic-auth
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

## Step 3: Create Production Overlay

Production needs higher resource limits, more replicas, stricter security, and production-specific configuration.

### Production Kustomization

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
  - network-policy.yaml

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

# Production-specific labels
commonLabels:
  environment: production

# Production configuration
configMapGenerator:
  - name: app-config
    behavior: merge
    literals:
      - LOG_LEVEL=info
      - DEBUG_MODE=false
      - DATABASE_POOL_SIZE=20
```

### Production Deployment Patch

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
            - name: DEBUG_MODE
              value: "false" # No debug features in production
      # Production-specific security context
      securityContext:
        runAsNonRoot: true
        runAsUser: 1000
        fsGroup: 2000
```

### Production Ingress

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
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
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

### Production Auto-Scaling

```yaml
# k8s/overlays/production/hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-service-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-service
  minReplicas: 5
  maxReplicas: 20
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
    - type: Resource
      resource:
        name: memory
        target:
          type: Utilization
          averageUtilization: 80
  behavior:
    scaleUp:
      stabilizationWindowSeconds: 60
      policies:
        - type: Percent
          value: 50
          periodSeconds: 60
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
        - type: Percent
          value: 10
          periodSeconds: 60
```

## Step 4: Environment-Specific Secrets

Each environment needs its own secrets with appropriate values.

### Staging Secrets

```bash
# Create staging secrets
kubectl create secret generic app-secrets \
  --from-literal=DATABASE_URL="postgres://staging-user:staging-pass@staging-db.example.com/myapp" \
  --from-literal=API_KEY="staging-api-key-12345" \
  --from-literal=REDIS_URL="redis://staging-redis.example.com:6379" \
  --namespace=staging \
  --dry-run=client -o yaml | \
  kubeseal --format yaml > k8s/overlays/staging/secrets.yaml
```

### Production Secrets

```bash
# Create production secrets (be extra careful here!)
kubectl create secret generic app-secrets \
  --from-literal=DATABASE_URL="postgres://prod-user:secure-pass@prod-db.example.com/myapp" \
  --from-literal=API_KEY="prod-api-key-67890" \
  --from-literal=REDIS_URL="redis://prod-redis.example.com:6379" \
  --namespace=production \
  --dry-run=client -o yaml | \
  kubeseal --format yaml > k8s/overlays/production/secrets.yaml
```

## Step 5: FluxCD Configuration for Multiple Environments

Configure FluxCD to manage both environments with different policies.

### Staging FluxCD Configuration

```yaml
# k8s/flux/staging.yaml
apiVersion: kustomize.toolkit.fluxcd.io/v1beta2
kind: Kustomization
metadata:
  name: my-service-staging
  namespace: flux-system
spec:
  interval: 5m  # Frequent updates for staging
  path: "./k8s/overlays/staging"
  prune: true
  sourceRef:
    kind: GitRepository
    name: my-service
  targetNamespace: staging
  # Staging can auto-deploy
  suspend: false
  # Health checks
  healthChecks:
    - apiVersion: apps/v1
      kind: Deployment
      name: my-service
      namespace: staging
  # Retry configuration
  retryInterval: 2m
  timeout: 5m
```

### Production FluxCD Configuration

```yaml
# k8s/flux/production.yaml
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
  # Production deployments can be gated
  suspend: false
  # Depends on staging being healthy
  dependsOn:
    - name: my-service-staging
  # Health checks
  healthChecks:
    - apiVersion: apps/v1
      kind: Deployment
      name: my-service
      namespace: production
  # More conservative retry policy
  retryInterval: 5m
  timeout: 10m
```

## Step 6: Deployment Workflow

Create a deployment workflow that promotes changes from staging to production.

### GitHub Actions Workflow

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
          
      - name: Commit staging deployment
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add k8s/overlays/staging/kustomization.yaml
          git commit -m "deploy: update staging to ${{ github.sha }}" || exit 0
          git push

  deploy-production:
    runs-on: ubuntu-latest
    needs: deploy-staging
    if: github.ref == 'refs/heads/main'
    environment: production  # Requires approval in GitHub
    steps:
      - uses: actions/checkout@v3
      
      - name: Update production image
        run: |
          cd k8s/overlays/production
          kustomize edit set image my-app:v${{ github.run_number }}
          
      - name: Commit production deployment
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add k8s/overlays/production/kustomization.yaml
          git commit -m "deploy: update production to v${{ github.run_number }}" || exit 0
          git push
```

## Migration Strategy: Zero-Downtime Transition

Here's how to migrate from single environment to multi-environment without downtime:

### Phase 1: Prepare Base Configuration

1. **Create base directory**: Move existing manifests to `k8s/base/`
2. **Create base kustomization**: Define common resources
3. **Test locally**: Verify `kustomize build k8s/base` works

### Phase 2: Create Staging Environment

1. **Create staging overlay**: Start with minimal changes from base
2. **Deploy to staging namespace**: Test the new structure
3. **Verify staging works**: Ensure all functionality works in staging

### Phase 3: Migrate Production

1. **Create production overlay**: Add production-specific configuration
2. **Update FluxCD**: Point to new overlay structure
3. **Monitor deployment**: Watch for any issues during migration

### Phase 4: Clean Up

1. **Remove old manifests**: Delete the old single-environment files
2. **Update documentation**: Document the new structure
3. **Train team**: Ensure everyone understands the new workflow

## Best Practices for Multi-Environment Success

### Environment Parity

Keep environments as similar as possible:

```yaml
# Use the same base image
images:
  - name: my-app
    newTag: v1.2.3  # Same version across environments

# Scale resources proportionally, not differently
# Production: 4 CPUs, 8GB RAM
# Staging: 1 CPU, 2GB RAM (1/4 of production)
```

### Configuration Management

Use environment variables for differences:

```yaml
# k8s/base/configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  # Same across environments
  APP_NAME: "my-service"
  # Different per environment (overridden in overlays)
  LOG_LEVEL: "info"
  DEBUG_MODE: "false"
```

### Secret Management

Keep secrets separate and secure:

```bash
# Never commit plain text secrets
# Always use sealed-secrets or external secret management
kubeseal --format yaml < staging-secrets.yaml > k8s/overlays/staging/secrets.yaml
kubeseal --format yaml < production-secrets.yaml > k8s/overlays/production/secrets.yaml
```

### Monitoring and Alerting

Monitor both environments differently:

```yaml
# Staging: Warn on errors
- alert: StagingHighErrorRate
  expr: rate(http_requests_total{status=~"5..",env="staging"}[5m]) > 0.1
  for: 5m

# Production: Page on errors
- alert: ProductionHighErrorRate
  expr: rate(http_requests_total{status=~"5..",env="production"}[5m]) > 0.01
  for: 1m
```

## Troubleshooting Common Issues

### Kustomize Build Failures

```bash
# Test your kustomization locally
kustomize build k8s/overlays/staging
kustomize build k8s/overlays/production

# Common issues:
# - Missing resources in base
# - Incorrect patch syntax
# - Namespace mismatches
```

### FluxCD Sync Issues

```bash
# Check FluxCD status
flux get kustomizations

# Check specific environment
kubectl describe kustomization my-service-staging -n flux-system

# Force reconciliation
flux reconcile kustomization my-service-staging
```

### Environment Drift

```bash
# Compare environments
kubectl get deployment my-service -n staging -o yaml > staging-deployment.yaml
kubectl get deployment my-service -n production -o yaml > production-deployment.yaml
diff staging-deployment.yaml production-deployment.yaml
```

## What's Next?

With proper multi-environment deployments, you now have:

- **Risk-free deployments** through staging validation
- **Parallel development** without conflicts
- **Proper change management** with environment promotion
- **Compliance-ready** audit trails
- **Scalable processes** that work for any number of environments

This foundation integrates perfectly with the GitOps infrastructure from our [DevOps Holy Grail series](/blog/devops_holy_grail):

- **[Part 1](/blog/devops_holy_grail_part1)** - Basic GitOps setup with CI/CD
- **[Part 2](/blog/devops_holy_grail_part2)** - HTTPS and DNS automation
- **[Part 3](/blog/devops_holy_grail_part3)** - Enterprise features and monitoring

With multi-environment deployments, you can ship faster while breaking less—the true goal of modern DevOps.

---

_Ready to implement multi-environment deployments? Start with staging, validate your approach, then promote to production with confidence._
