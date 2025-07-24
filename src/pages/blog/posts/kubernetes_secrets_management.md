---
title: Kubernetes Secrets Management: From Leaky to Bulletproof
description: How to handle secrets in Kubernetes without compromising security or developer experience
date: 2025-07-24
author: Christian Landgren
tags:
  - Kubernetes
  - Security
  - DevOps
  - Secrets
  - GitOps
image: /src/assets/images/holy-grail.jpg
imageAlt: Kubernetes Secrets Management - Secure and Developer-Friendly
email: christian@landgren.nu
language: en
---

_A comprehensive guide to managing secrets in Kubernetes - from basic approaches to enterprise-grade solutions_

---

Secrets management is where most Kubernetes deployments go wrong. You've probably seen it: passwords hardcoded in YAML files, API keys committed to Git, or worse—production credentials shared in Slack channels.

This guide shows you how to build a secrets management system that's both secure and developer-friendly. No more choosing between security and productivity.

## The Problem: Secrets Everywhere

Modern applications need secrets everywhere:
- Database connection strings
- API keys for third-party services
- TLS certificates
- OAuth client secrets
- Service account tokens

The challenge? These secrets need to be:
- **Secure** - Never exposed in plain text
- **Accessible** - Available to applications at runtime
- **Rotatable** - Easy to update without downtime
- **Auditable** - Track who accessed what and when
- **Developer-friendly** - Simple to use in development and CI/CD

## Kubernetes Native Secrets: The Starting Point

Kubernetes has built-in Secret resources, but they're not actually secret:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
data:
  database-url: cG9zdGdyZXM6Ly91c2VyOnBhc3NAZGIuZXhhbXBsZS5jb20vbXlkYg==
  api-key: YWJjZGVmZ2hpams=
```

The problem? Those values are just base64 encoded, not encrypted. Anyone with cluster access can decode them:

```bash
kubectl get secret app-secrets -o jsonpath='{.data.database-url}' | base64 -d
# postgres://user:pass@db.example.com/mydb
```

**Never commit Kubernetes Secrets to Git.** They're not encrypted and provide no real security.

## Solution 1: Sealed Secrets - Git-Safe Encryption

Sealed Secrets solve the "secrets in Git" problem by encrypting secrets that only your cluster can decrypt.

<LLMPrompt title="🤖 Sealed Secrets Setup">
Set up sealed-secrets for Kubernetes secrets management. I need:
- Complete installation via Helm/Flux
- Step-by-step process to encrypt secrets for Git storage
- Examples of converting environment files to encrypted secrets
- Integration with application deployments
- Backup and recovery procedures for encryption keys
- Rotation strategies for both secrets and encryption keys

Show me how to encrypt DATABASE_URL, API_KEYS, and other sensitive environment variables safely.
</LLMPrompt>

### Installing Sealed Secrets

```yaml
# k8s/sealed-secrets.yaml
apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: sealed-secrets
  namespace: kube-system
spec:
  interval: 30m
  chart:
    spec:
      chart: sealed-secrets
      version: '2.15.x'
      sourceRef:
        kind: HelmRepository
        name: sealed-secrets
        namespace: flux-system
  values:
    fullnameOverride: sealed-secrets-controller
```

### Creating Encrypted Secrets

Install the kubeseal CLI:

```bash
# macOS
brew install kubeseal

# Linux
wget https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.24.0/kubeseal-0.24.0-linux-amd64.tar.gz
tar -xvzf kubeseal-0.24.0-linux-amd64.tar.gz
sudo install -m 755 kubeseal /usr/local/bin/kubeseal
```

Create secrets from environment files:

```bash
# Create a .env file (never commit this!)
cat > .env.production << EOF
DATABASE_URL=postgres://user:password@db.example.com/myapp
REDIS_URL=redis://redis.example.com:6379
API_KEY=super-secret-api-key
STRIPE_SECRET_KEY=sk_live_...
EOF

# Convert to Kubernetes secret and encrypt
kubectl create secret generic app-secrets \
  --from-env-file=.env.production \
  --dry-run=client -o yaml | \
  kubeseal --format yaml > k8s/secrets/app-secrets-sealed.yaml

# Clean up the plain text file
rm .env.production
```

The result is a SealedSecret that's safe to commit:

```yaml
# k8s/secrets/app-secrets-sealed.yaml
apiVersion: bitnami.com/v1alpha1
kind: SealedSecret
metadata:
  name: app-secrets
  namespace: default
spec:
  encryptedData:
    DATABASE_URL: AgBy3i4OJSWK+PiTySYZZA9rO43cGDEQAx...
    REDIS_URL: AgAKAoiQm7QDhDqf0jRqm6oOHLwDeHBb16...
    API_KEY: AgAjklfmn2j3h4g5f6d7s8a9q0w1e2r3t4...
  template:
    metadata:
      name: app-secrets
      namespace: default
```

### Using Encrypted Secrets in Deployments

```yaml
# k8s/deployment.yaml
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
          envFrom:
            - secretRef:
                name: app-secrets
          # Or individual environment variables:
          env:
            - name: DATABASE_URL
              valueFrom:
                secretKeyRef:
                  name: app-secrets
                  key: DATABASE_URL
```

### Key Management and Rotation

**Backup your encryption keys:**

```bash
kubectl get secret -n kube-system sealed-secrets-key -o yaml > sealed-secrets-master-key.yaml
```

Store this backup securely (password manager, encrypted storage, etc.). Without it, you can't decrypt your secrets if you rebuild your cluster.

**Rotate secrets regularly:**

```bash
# Update your .env file with new values
cat > .env.production << EOF
DATABASE_URL=postgres://user:new-password@db.example.com/myapp
API_KEY=new-super-secret-api-key
EOF

# Re-encrypt and commit
kubectl create secret generic app-secrets \
  --from-env-file=.env.production \
  --dry-run=client -o yaml | \
  kubeseal --format yaml > k8s/secrets/app-secrets-sealed.yaml

git add k8s/secrets/app-secrets-sealed.yaml
git commit -m "rotate: update application secrets"
git push

# Clean up
rm .env.production
```

## Solution 2: External Secrets Operator - Cloud Integration

For teams using cloud providers, External Secrets Operator integrates with AWS Secrets Manager, Azure Key Vault, Google Secret Manager, and more.

<LLMPrompt title="🤖 External Secrets Operator Setup">
Set up External Secrets Operator for Kubernetes with cloud provider integration. I need:
- Installation via Helm/Flux
- Configuration for AWS Secrets Manager, Azure Key Vault, and Google Secret Manager
- SecretStore and ClusterSecretStore examples
- ExternalSecret manifests that sync cloud secrets to Kubernetes
- Automatic rotation and refresh policies
- RBAC and security best practices

Show me how to sync secrets from [AWS/Azure/GCP] to Kubernetes automatically.
</LLMPrompt>

### Installation

```yaml
# k8s/external-secrets.yaml
apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: external-secrets
  namespace: external-secrets-system
spec:
  chart:
    spec:
      chart: external-secrets
      sourceRef:
        kind: HelmRepository
        name: external-secrets
  values:
    installCRDs: true
```

### AWS Secrets Manager Integration

```yaml
# k8s/secret-store-aws.yaml
apiVersion: external-secrets.io/v1beta1
kind: ClusterSecretStore
metadata:
  name: aws-secrets-manager
spec:
  provider:
    aws:
      service: SecretsManager
      region: us-west-2
      auth:
        jwt:
          serviceAccountRef:
            name: external-secrets-sa
            namespace: external-secrets-system
---
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: app-secrets
spec:
  refreshInterval: 1h
  secretStoreRef:
    name: aws-secrets-manager
    kind: ClusterSecretStore
  target:
    name: app-secrets
    creationPolicy: Owner
  data:
    - secretKey: database-url
      remoteRef:
        key: myapp/database
        property: url
    - secretKey: api-key
      remoteRef:
        key: myapp/api
        property: key
```

## Solution 3: HashiCorp Vault - Enterprise Grade

For maximum security and compliance, Vault provides enterprise-grade secrets management with dynamic secrets, detailed auditing, and fine-grained access control.

### Vault Integration

```yaml
# k8s/vault-secrets.yaml
apiVersion: external-secrets.io/v1beta1
kind: SecretStore
metadata:
  name: vault-backend
spec:
  provider:
    vault:
      server: "https://vault.example.com"
      path: "secret"
      version: "v2"
      auth:
        kubernetes:
          mountPath: "kubernetes"
          role: "myapp"
          serviceAccountRef:
            name: vault-auth
---
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: vault-secrets
spec:
  refreshInterval: 30m
  secretStoreRef:
    name: vault-backend
    kind: SecretStore
  target:
    name: app-secrets
  data:
    - secretKey: database-password
      remoteRef:
        key: myapp/database
        property: password
```

## Development Workflow: Making It Developer-Friendly

The best secrets management system is one developers actually use. Here's how to make it seamless:

### Local Development

```bash
# .env.local (gitignored)
DATABASE_URL=postgres://localhost:5432/myapp_dev
API_KEY=dev-api-key-not-secret
```

### Staging Environment

```bash
# Create staging secrets
kubectl create secret generic app-secrets \
  --from-literal=DATABASE_URL="postgres://staging-db/myapp" \
  --from-literal=API_KEY="staging-api-key" \
  --namespace=staging \
  --dry-run=client -o yaml | \
  kubeseal --format yaml > k8s/overlays/staging/secrets.yaml
```

### Production Environment

```bash
# Production secrets (extra careful here)
kubectl create secret generic app-secrets \
  --from-env-file=.env.production \
  --namespace=production \
  --dry-run=client -o yaml | \
  kubeseal --format yaml > k8s/overlays/production/secrets.yaml
```

## Security Best Practices

### 1. Principle of Least Privilege

```yaml
# k8s/rbac.yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: app-secrets-reader
rules:
  - apiGroups: [""]
    resources: ["secrets"]
    resourceNames: ["app-secrets"]
    verbs: ["get"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: app-secrets-binding
subjects:
  - kind: ServiceAccount
    name: my-app
roleRef:
  kind: Role
  name: app-secrets-reader
  apiGroup: rbac.authorization.k8s.io
```

### 2. Secret Rotation

Automate secret rotation with CronJobs:

```yaml
# k8s/secret-rotation.yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: rotate-database-password
spec:
  schedule: "0 2 * * 0"  # Weekly at 2 AM Sunday
  jobTemplate:
    spec:
      template:
        spec:
          containers:
            - name: rotate-secrets
              image: my-secret-rotator:latest
              env:
                - name: SECRET_NAME
                  value: "app-secrets"
                - name: SECRET_KEY
                  value: "database-password"
          restartPolicy: OnFailure
```

### 3. Audit and Monitoring

Monitor secret access:

```yaml
# k8s/secret-monitoring.yaml
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: secrets-monitoring
spec:
  groups:
    - name: secrets.rules
      rules:
        - alert: SecretAccessFailure
          expr: increase(apiserver_audit_total{verb="get",objectRef_resource="secrets"}[5m]) > 10
          for: 2m
          annotations:
            summary: "High number of secret access failures"
```

## Choosing the Right Solution

| Solution | Best For | Pros | Cons |
|----------|----------|------|------|
| **Sealed Secrets** | Small to medium teams, GitOps workflows | Simple, Git-friendly, no external dependencies | Manual key management, limited rotation |
| **External Secrets** | Cloud-native teams | Integrates with cloud providers, automatic sync | Requires cloud services, more complex |
| **Vault** | Enterprise, compliance-heavy environments | Maximum security, dynamic secrets, detailed audit | Complex setup, requires dedicated infrastructure |

## Integration with GitOps

All these solutions work seamlessly with GitOps workflows:

```yaml
# k8s/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - deployment.yaml
  - service.yaml
  - secrets/app-secrets-sealed.yaml  # Safe to commit!

namespace: production
```

## What's Next?

This secrets management foundation integrates perfectly with the GitOps infrastructure from our [DevOps Holy Grail series](/blog/devops_holy_grail):

- **[Part 1](/blog/devops_holy_grail_part1)** - Basic GitOps setup with CI/CD
- **[Part 2](/blog/devops_holy_grail_part2)** - Enterprise features and monitoring

With proper secrets management, you can build systems that are both secure and developer-friendly—no more choosing between the two.

---

<LLMPrompt title="🚀 Complete Secrets Management Setup" defaultExpanded={true}>
I want to implement a complete secrets management solution for my Kubernetes cluster. Help me set up:

1. Sealed Secrets controller installation via Flux
2. Development workflow for creating and encrypting secrets
3. Multi-environment secret management (dev/staging/prod)
4. Secret rotation procedures and automation
5. RBAC for least-privilege access
6. Monitoring and alerting for secret access
7. Backup and recovery procedures for encryption keys
8. Integration with existing GitOps workflow

My setup: [Kubernetes cluster type], [Cloud provider if any], [Current CI/CD system]
Secrets needed: [Database credentials, API keys, certificates, etc.]

Provide everything needed for production-ready secrets management.
</LLMPrompt>
