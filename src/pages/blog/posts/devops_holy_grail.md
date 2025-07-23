---
title: The DevOps Holy Grail: Build Once, Scale Forever
description: Build services that scale from weekend side-project to multi-region production without rewriting or replatforming
date: 2025-07-23
author: Christian Landgren
tags:
  - DevOps
  - Kubernetes
  - GitOps
  - CI/CD
  - Infrastructure
image: /src/assets/images/holy-grail.jpg
imageAlt: The DevOps Holy Grail - Simple to Start, Infinite to Scale
email: christian@landgren.nu
language: en
---

_How to create services that grow from weekend projects to enterprise platforms without breaking everything_

---

We've all been there. You start with a simple app, maybe a weekend project that shows promise. Before you know it, you're dealing with manual deployments, infrastructure that breaks when you look at it wrong, and a growing sense that you're one outage away from disaster.

After years of building and breaking systems—from quick internal tools to massive production APIs—we've discovered something remarkable: it's possible to build infrastructure that starts simple but scales like a tech giant's platform. No rewrites. No migrations. No late-night panic deployments.

This isn't theoretical architecture. It's battle-tested patterns from shipping real products, watching them grow, and learning from every failure along the way.

## The Holy Grail: Simple to Start, Infinite to Scale

Here's what we're after: a system so simple that one developer can spin it up on a laptop, yet robust enough that it won't crumble when you hit your first million users or hire your first infrastructure team.

The secret weapon? **Kubernetes as your universal runtime**, with Git as the single source of truth for everything. Not because it's trendy, but because it's the most mature abstraction we have for separating what you run from where you run it.

> **Pro tip:** Every code example in this guide works directly with AI coding assistants like Lovable, Bolt, or Aider. Even if you've never touched Kubernetes, you'll have a production-ready system running in minutes.

<LLMPrompt title="🤖 GitHub Actions CI/CD Setup">
Create a complete GitHub Actions CI/CD workflow for a Node.js application that:
- Runs tests on every push to main
- Builds a Docker image with automatic version tagging
- Publishes to GitHub Container Registry (ghcr.io)
- Uses semantic versioning (auto-increment patch versions)
- Includes a multi-stage Dockerfile optimized for production
- Sets up proper caching for faster builds

Please provide the complete .github/workflows/ci.yml file and a production-ready Dockerfile.
</LLMPrompt>

## The Golden Path: Build → Tag → Deploy → Scale → Sleep

Let's walk through building a system that automates itself. We'll start with nothing but an empty Git repository and end with enterprise-grade infrastructure.

### Step 1: Containerize Everything from Day One

Every project starts the same way—a clean directory and a simple structure:

```
my-service/
├── .github/workflows/ci.yml    # Automated builds
├── Dockerfile                  # Container definition
├── package.json               # Dependencies
├── src/index.ts              # Your actual code
└── k8s/                      # Kubernetes manifests
    ├── deployment.yaml
    ├── service.yaml
    └── ingress.yaml
```

The magic happens in `.github/workflows/ci.yml`. This single file:

- Runs your tests on every commit
- Builds a Docker image automatically
- Tags it with version numbers
- Publishes to GitHub Container Registry
- Triggers deployment to production

No Jenkins sprawl. No YAML nightmares. Just clean automation that works.

### Step 2: Make Kubernetes Your Friend, Not Your Enemy

Forget everything you've heard about Kubernetes being complex. With the right setup, it's actually simpler than managing virtual machines.

<LLMPrompt title="🤖 Kubernetes Manifests Setup">
Create production-ready Kubernetes manifests for a web application with:
- A Deployment with 2 replicas, proper resource limits (memory: 256Mi, CPU: 200m)
- Health checks (readiness and liveness probes)
- A Service to expose the application internally
- An Ingress for external HTTP/HTTPS traffic
- Proper labels and selectors for everything
- Rolling update strategy for zero-downtime deployments

The app runs on port 3000 internally and should be accessible at myapp.example.com
Please provide separate YAML files: deployment.yaml, service.yaml, and ingress.yaml
</LLMPrompt>

Your entire application lives in three files:

**deployment.yaml** - Runs your containers with resource limits

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-service
spec:
  replicas: 2
  selector:
    matchLabels:
      app: my-service
  template:
    spec:
      containers:
        - name: app
          image: ghcr.io/my-org/my-service:latest
          resources:
            requests:
              memory: '128Mi'
              cpu: '100m'
            limits:
              memory: '256Mi'
              cpu: '200m'
```

**service.yaml** - Makes your app reachable within the cluster

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: my-service
  ports:
    - port: 80
      targetPort: 3000
```

**ingress.yaml** - Routes internet traffic to your app

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-service
spec:
  rules:
    - host: myapp.example.com
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

That's it. Run `kubectl apply -f k8s/` and you're live on the internet.

### Step 3: Git Becomes Your Operations Team

Manual deployments are where dreams go to die. Instead, we use FluxCD to make your Git repository the single source of truth for production.

<LLMPrompt title="🤖 FluxCD GitOps Setup">
Help me set up GitOps with FluxCD for my Kubernetes application. I need:
- Step-by-step instructions to install Flux CLI on macOS/Linux
- Complete bootstrap command for GitHub repository integration
- Explanation of how FluxCD monitors Git and applies changes automatically
- Basic troubleshooting commands to check Flux status
- How to structure my repository for GitOps (which files go where)
- Examples of how deployments, rollbacks, and updates work with Git commits

My repository is at github.com/myorg/myservice and I want to deploy from the main branch.
</LLMPrompt>

Install the Flux CLI:

```bash
brew install fluxcd/tap/flux
```

Bootstrap your repository:

```bash
flux bootstrap github \
  --owner=your-username \
  --repository=my-service \
  --branch=main \
  --path=k8s \
  --personal
```

Now every commit to your `main` branch automatically deploys to production. Rollbacks become `git revert`. Deployments become pull requests. Your infrastructure is now code, with all the benefits that implies.

## Production-Grade Features That Configure Themselves

### Automatic HTTPS with cert-manager

<LLMPrompt title="🤖 Automatic HTTPS with cert-manager">
Set up automatic HTTPS certificates with cert-manager on Kubernetes. I need:
- Complete HelmRelease manifest to install cert-manager via Flux
- ClusterIssuer configuration for Let's Encrypt production certificates
- Updated Ingress manifest with TLS annotations for automatic certificate generation
- Explanation of how cert-manager automatically renews certificates
- Troubleshooting commands to check certificate status
- Support for multiple domains and wildcard certificates

My email is admin@example.com and I want certificates for myapp.example.com
</LLMPrompt>

Add this to `k8s/cert-manager.yaml`:

```yaml
apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: cert-manager
  namespace: cert-manager
spec:
  interval: 30m
  chart:
    spec:
      chart: cert-manager
      version: '1.13.x'
      sourceRef:
        kind: HelmRepository
        name: jetstack
```

Create a certificate issuer in `k8s/cluster-issuer.yaml`:

```yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    email: your-email@example.com
    server: https://acme-v02.api.letsencrypt.org/directory
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
      - http01:
          ingress:
            class: nginx
```

Add one annotation to your ingress and you get automatic, renewing HTTPS certificates. Forever.

### Automatic DNS with external-dns

<LLMPrompt title="🤖 Automatic DNS with external-dns">
Configure external-dns for automatic DNS management on Kubernetes. I need:
- HelmRelease manifest for external-dns installation via Flux
- Configuration for Cloudflare DNS provider (include other popular providers as options)
- Required API token setup and secret creation
- Ingress annotations for automatic DNS record creation
- Examples for different DNS providers (Route53, Google DNS, etc.)
- Troubleshooting steps to verify DNS automation is working

I'm using Cloudflare as my DNS provider and want DNS records created automatically when I add ingress rules.
</LLMPrompt>

```yaml
# k8s/external-dns.yaml
apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: external-dns
spec:
  values:
    provider: cloudflare # or route53, google, etc.
    cloudflare:
      apiToken: ${CLOUDFLARE_API_TOKEN}
```

Now your ingress rules automatically create DNS records. Add a new domain to your ingress, commit to Git, and the DNS updates itself.

### Automatic Scaling with HPA

<LLMPrompt title="🤖 Horizontal Pod Autoscaler Setup">
Create Kubernetes Horizontal Pod Autoscaler (HPA) configuration for production workloads. I need:
- Complete HPA manifest with CPU and memory-based scaling
- Metrics server setup if required
- Resource requests/limits in deployment for HPA to work properly
- Advanced scaling policies (scale-up/down behavior, stabilization windows)
- Custom metrics examples (HTTP requests, queue length, etc.)
- Monitoring and alerting for scaling events

Configure for: min 2 pods, max 10 pods, target 70% CPU utilization, with gradual scaling policies.
</LLMPrompt>

```yaml
# k8s/hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-service-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-service
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
```

Your app now scales up during traffic spikes and scales down during quiet periods. Automatically. No pager duty required.

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

## Secrets That Don't Leak

Never commit secrets to Git, but do commit encrypted secrets. Use sealed-secrets:

<LLMPrompt title="🤖 Secure Secrets Management">
Set up secure secrets management for Kubernetes using sealed-secrets. I need:
- Installation of sealed-secrets controller via Helm/Flux
- Step-by-step process to encrypt secrets for Git storage
- Examples of converting environment files to encrypted secrets
- Integration with application deployments (how to reference encrypted secrets)
- Backup and recovery procedures for encryption keys
- Rotation strategies for both secrets and encryption keys
- Alternative approaches (External Secrets Operator, Vault integration)

Show me how to encrypt DATABASE_URL, API_KEYS, and other sensitive environment variables.
</LLMPrompt>

```bash
# Create secret from environment file
kubectl create secret generic app-secrets \
  --from-env-file=.env.production \
  --dry-run=client -o json | \
  kubeseal --format yaml > k8s/secrets/app-secrets.yaml
```

The encrypted result can safely live in Git. Only your cluster can decrypt it.

## Deploy Anywhere: The Berget Advantage

This entire stack runs on any Kubernetes cluster. The fastest way to get one is with [Berget](https://berget.ai)—zero-lock-in Kubernetes with all the tools pre-installed:

```bash
npx berget auth login
npx berget cluster create --name my-production-cluster
kubectl config use-context my-production-cluster
kubectl apply -f k8s/
```

Minutes later, you have enterprise-grade infrastructure running in production.

## What You've Built

Let's take a step back. With these simple patterns, you now have:

- **Automated CI/CD** that builds and deploys on every commit
- **Automatic HTTPS** certificates that renew themselves
- **DNS management** that updates when you change domains
- **Auto-scaling** that handles traffic spikes without intervention
- **Self-hosted backend** with database, auth, and storage
- **Encrypted secrets** that are Git-safe but production-ready
- **Zero-downtime deployments** through Kubernetes rolling updates
- **Easy rollbacks** with `git revert`

All managed through code, all versioned in Git, all completely portable between clouds.

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

## The Path Forward

This isn't just about tools—it's about a mindset shift. Infrastructure as code isn't a nice-to-have anymore; it's the foundation that lets small teams move fast without breaking things.

Start small. Add one piece at a time. Let your system grow with your needs, not against them.

<LLMPrompt title="🤖 Migration Strategy Planning">
Create a step-by-step migration plan to move my existing application to this GitOps setup. I need:
- Assessment checklist for current infrastructure and dependencies
- Phased migration strategy (containerization → CI/CD → Kubernetes → GitOps)
- Risk mitigation strategies and rollback plans for each phase
- Team training recommendations and skill development paths
- Cost analysis and ROI calculations for the migration
- Timeline estimates for different complexity levels
- Post-migration optimization and scaling strategies

My current setup: [describe your current infrastructure - VMs, manual deployments, etc.]
</LLMPrompt>

The holy grail isn't about finding the perfect tool. It's about building systems that adapt, scale, and heal themselves—so you can focus on building products that matter.

---

<LLMPrompt title="🚀 Complete GitOps Stack Implementation" defaultExpanded={true}>
I want to implement the entire GitOps DevOps stack described in this guide. Help me create:

1. A complete project structure with all necessary files
2. GitHub Actions workflow for CI/CD with Docker builds
3. Kubernetes manifests (deployment, service, ingress, HPA)
4. FluxCD setup with GitOps automation
5. cert-manager for automatic HTTPS
6. external-dns for automatic DNS management
7. sealed-secrets for secure secrets management
8. Supabase deployment for backend services
9. Monitoring setup with Prometheus/Grafana
10. Documentation and README files

Technology stack: [Node.js/Python/Go/etc.], [Cloudflare/Route53] for DNS
Domain: [your-domain.com]
Cloud provider: [AWS/GCP/DigitalOcean/etc.]

Provide everything needed to go from empty repository to production deployment.
</LLMPrompt>

_Ready to get started? Clone the example repository and have your first GitOps deployment running in under 10 minutes. The future of DevOps is declarative, and it's here today._
