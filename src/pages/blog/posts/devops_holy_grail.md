---
title: The DevOps Holy Grail - Simple to Start, Infinite to Scale
description: Build services that scale from weekend side-project to multi-region production without rewriting or replatforming
date: 2025-07-23
author: Christian Landgren
tags:
  - DevOps
  - Kubernetes
  - GitOps
  - CI/CD
  - Infrastructure
image: /images/server-infrastructure.jpg
imageAlt: Modern server infrastructure with automated deployment pipelines
email: christian@landgren.nu
---

# The DevOps Holy Grail: Simple to Start, Infinite to Scale

After years of wrestling with cloud lock-in, brittle CI/CD chains, and manual infrastructure creep, we've distilled a set of principles and tools that make it possible to build services that scale from a weekend side-project to multi-region production — without rewriting or replatforming.

This isn't theory. It's the result of shipping dozens of internal tools, public APIs, and large-scale products — and watching what breaks, what ages poorly, and what turns into accidental complexity.

The goal is deceptively simple: **build a system that's trivial to start, but scales like a platform**. Something one person can run from a laptop, but that doesn't become a liability when you hire your first SRE or launch in five markets.

This guide outlines the core components of that system. All are open-source. All are mature. And all work with Kubernetes at the center — not because it's trendy, but because it's the best abstraction we've found for separating what you run from where you run it.

We'll show you how:

* CI/CD can be automated using GitHub Actions and Docker tags — no Jenkins, no YAML jungles.
* Kubernetes becomes your single system interface — with Git as the source of truth.
* Ingress, DNS, TLS and autoscaling are fully declarative — set it once and it self-heals.
* Deployments are Git commits. Production is a branch. Rollbacks are `git revert`.

If you've ever felt the tension between hacking fast and building right, this is for you.

Let's start with the core loop: build → tag → deploy → scale → sleep.

## From Zero to Docker: Building Your App for CI/CD

Everything starts from an empty Git repo. No cloud accounts. No infra yet. Just a clean directory, GitHub, and a terminal.

Let's say you're building a Node.js app. Here's the core layout you'll end up with:

```
my-service/
├── .github/
│   └── workflows/
│       └── ci.yml
├── Dockerfile
├── package.json
├── src/
│   └── index.ts
├── test/
│   └── ...
```

The `ci.yml` workflow handles:

* Checking out code
* Installing dependencies
* Running tests
* Building and tagging a Docker image
* Publishing to `ghcr.io`
* Auto-bumping patch versions

The output: versioned, reproducible containers for every commit to `main`.

## Deploy With Git: The Minimal Kubernetes Stack

With a container pushed, the next step is running it. We don't click around cloud consoles. We use Kubernetes — vanilla, portable, declarative.

Minimal deployment lives in `k8s/`:

```
my-service/
└── k8s/
    ├── deployment.yaml
    ├── service.yaml
    └── ingress.yaml
```

* `deployment.yaml` runs your container with basic resource limits
* `service.yaml` makes it reachable in-cluster
* `ingress.yaml` maps HTTP traffic to it via hostname (no TLS yet)

This is enough to `kubectl apply -f k8s/` and go live — but we're not here for manual deploys.

## Git Is the New Kubectl: Install FluxCD and Bootstrap Your Repo

We never want to run `kubectl` manually again. Instead, we install [FluxCD](https://fluxcd.io), which lets the cluster pull configuration directly from Git.

Install the CLI:

```bash
brew install fluxcd/tap/flux
```

Then bootstrap your repo:

```bash
flux bootstrap github \
  --owner=my-org \
  --repository=my-service \
  --branch=main \
  --path=k8s \
  --personal
```

This installs Flux, points it at your repo, and begins syncing everything in `k8s/` automatically.

## Self-Healing Infrastructure: Certs, DNS and Scaling — All From Git

Production needs TLS, DNS and elasticity. We manage these declaratively too.

### TLS with cert-manager

```yaml
# k8s/cert-manager.yaml
apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: cert-manager
...
```

Then add a ClusterIssuer:

```yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    email: you@example.com
    server: https://acme-v02.api.letsencrypt.org/directory
    privateKeySecretRef:
      name: letsencrypt-nginx
    solvers:
      - http01:
          ingress:
            class: nginx
```

Update your ingress with TLS and cert-manager will take care of the rest.

### DNS with external-dns

```yaml
# k8s/external-dns.yaml
apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: external-dns
...
```

It watches your ingress rules and syncs DNS records to Cloudflare, Route53 or others.

### Autoscaling with HPA

```yaml
# k8s/hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
spec:
  scaleTargetRef:
    kind: Deployment
    name: my-service
  minReplicas: 1
  maxReplicas: 5
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 60
```

Pods scale up/down automatically based on CPU usage.

## Project Structure So Far

```
my-service/
├── .github/workflows/ci.yml
├── Dockerfile
├── package.json
├── src/
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   ├── hpa.yaml
│   ├── cert-manager.yaml
│   ├── cluster-issuer.yaml
│   ├── external-dns.yaml
```

You've now built a fully Git-managed, autoscaling, TLS-secured, DNS-aware app with zero click-ops.

## Add Your Own Backend: Supabase With Flux and Helm

To add a real backend — database, auth, realtime, storage — use the [Supabase Helm chart](https://github.com/supabase-community/supabase-helm):

```yaml
# k8s/supabase.yaml
apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: supabase
  namespace: supabase
spec:
  values:
    auth:
      siteUrl: https://myservice.example.com
    postgresql:
      enabled: true
      auth:
        postgresPassword: ${SUPABASE_POSTGRES_PASSWORD}
    anonKey: ${SUPABASE_ANON_KEY}
    serviceRoleKey: ${SUPABASE_SERVICE_ROLE_KEY}
```

It deploys Postgres, auth, file storage and realtime — in your own cluster, Git-managed.

## Handling Secrets Like a Pro: From `.env` to Kubernetes Secrets

1. Create `.env.production`:

```dotenv
SUPABASE_POSTGRES_PASSWORD=...
SUPABASE_ANON_KEY=...
```

2. Convert to secret:

```bash
kubectl create secret generic supabase-secrets \
  --namespace=supabase \
  --from-env-file=.env.production \
  --dry-run=client -o yaml > k8s/supabase-secrets.yaml
```

3. Reference in your `HelmRelease` or `Deployment`

Done.

## Git-Safe Secrets: Using Sealed-Secrets for Production-Grade Encryption

If you want to commit secrets encrypted, use [sealed-secrets](https://github.com/bitnami-labs/sealed-secrets):

```bash
kubectl create secret generic supabase-secrets \
  --namespace=supabase \
  --from-env-file=.env.production \
  --dry-run=client -o json |
  kubeseal --format yaml --cert pub-cert.pem > k8s/secrets/supabase-secrets.yaml
```

Only your cluster can decrypt the result. Git-safe. Ops-safe.

## Get Started: Deploy This Entire Stack With Berget

Everything above runs on any vanilla Kubernetes cluster — and the fastest way to get one is with [**Berget**](https://berget.ai):

* ✅ Zero-lock-in Kubernetes
* ✅ Flux, cert-manager, ingress, monitoring included
* ✅ SSD storage, GPU options
* ✅ Starts at **1000 SEK/month**

Create a new production cluster in minutes:

```bash
npx berget auth login
npx berget cluster create --name example-prod
kubectl config use-context example-prod
kubectl apply -f k8s/
```

You now have a full-stack, autoscaling, TLS-secured, GitOps-native platform — in production — from an empty folder.

---

Welcome to the DevOps Holy Grail.
