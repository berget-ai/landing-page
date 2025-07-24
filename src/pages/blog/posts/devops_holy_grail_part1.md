---
title: The DevOps Holy Grail: From Zero to Production
description: Build services that scale from weekend side-project to production without breaking everything - Part 1
date: 2025-07-24
author: Christian Landgren
tags:
  - DevOps
  - Kubernetes
  - GitOps
  - CI/CD
  - Infrastructure
image: /images/holy-grail.jpg
imageAlt: The DevOps Holy Grail - Simple to Start, Infinite to Scale
email: christian@landgren.nu
language: en
---

_How to create services that grow from weekend projects to enterprise platforms without breaking everything - Part 1_

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

Let's walk through building a system that automates itself. We'll start with nothing but an empty Git repository and end with production-ready infrastructure.

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

## Deploy Anywhere: The Berget Advantage

This entire stack runs on any Kubernetes cluster. The fastest way to get one is with [Berget](https://berget.ai)—zero-lock-in Kubernetes with all the tools pre-installed:

```bash
npx berget auth login
npx berget cluster create --name my-production-cluster
kubectl config use-context my-production-cluster
kubectl apply -f k8s/
```

Minutes later, you have enterprise-grade infrastructure running in production.

## What You've Built So Far

Let's take a step back. With these simple patterns, you now have:

- **Automated CI/CD** that builds and deploys on every commit
- **GitOps deployments** that sync automatically with Git
- **Auto-scaling** that handles traffic spikes without intervention
- **Zero-downtime deployments** through Kubernetes rolling updates
- **Easy rollbacks** with `git revert`

All managed through code, all versioned in Git, all completely portable between clouds.

## What's Next?

This foundation gives you everything you need to run basic production workloads. But there's so much more we can automate...

In **[Part 2](/blog/devops_holy_grail_part2)**, we'll add security and reliability:

- **Automatic HTTPS** with cert-manager and Let's Encrypt
- **DNS automation** with external-dns
- **Security best practices** and monitoring

In **[Part 3](/blog/devops_holy_grail_part3)**, we'll add enterprise-grade features:

- **Self-hosted Supabase** for database, auth, and storage
- **Comprehensive monitoring** with Prometheus and Grafana
- **Migration strategies** for existing applications
- **Advanced patterns** for multi-environment deployments
- **Bulletproof secrets management** (see our [dedicated guide](/blog/kubernetes_secrets_management))

---

_Ready for Part 2? We'll show you how to add automatic HTTPS and DNS management that makes your system production-ready._

<LLMPrompt title="🚀 Complete Basic GitOps Stack" defaultExpanded={true}>
I want to implement the basic GitOps stack from Part 1. Help me create:

1. A complete project structure with all necessary files
2. GitHub Actions workflow for CI/CD with Docker builds
3. Kubernetes manifests (deployment, service, ingress, HPA)
4. FluxCD setup with GitOps automation
5. cert-manager for automatic HTTPS
6. external-dns for automatic DNS management

Technology stack: [Node.js/Python/Go/etc.], [Cloudflare/Route53] for DNS
Domain: [your-domain.com]
Cloud provider: [AWS/GCP/DigitalOcean/etc.]

Provide everything needed to go from empty repository to production deployment.
</LLMPrompt>
