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
image: /images/holy-grail.jpg
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
First, ask me about my secrets management needs before generating any code:
- What types of secrets do you need to manage (database URLs, API keys, certificates, etc.)?
- How many environments do you have (dev, staging, prod)?
- What operating system are you using for the kubeseal CLI?
- Do you have existing secrets to migrate?
- What is your preferred backup strategy for encryption keys?

Then set up sealed-secrets for Kubernetes secrets management. I need:
- Complete installation via Helm/Flux
- Step-by-step process to encrypt secrets for Git storage
- Examples of converting environment files to encrypted secrets
- Integration with application deployments
- Backup and recovery procedures for encryption keys
- Rotation strategies for both secrets and encryption keys

Important: All Kubernetes manifests should go in the /k8s directory and use FluxCD HelmRelease format for GitOps deployment.
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

## Solution 2: HashiCorp Vault - Enterprise Grade

For maximum security and compliance, Vault provides enterprise-grade secrets management with dynamic secrets, detailed auditing, and fine-grained access control.

<LLMPrompt title="🤖 HashiCorp Vault Setup with FluxCD">
First, ask me about my Vault requirements before generating any code:
- Do you need high availability (multiple Vault replicas)?
- What storage backend do you prefer (integrated storage, Consul, etc.)?
- What types of secrets will you store in Vault?
- Do you have compliance requirements (audit logging, etc.)?
- How many applications need to integrate with Vault?
- What are your backup and disaster recovery requirements?

Then set up HashiCorp Vault in my Kubernetes cluster using FluxCD. I need:
- Complete Vault installation via Helm/Flux
- Vault configuration for your availability requirements
- Kubernetes authentication setup
- Vault Secrets Operator for automatic secret injection
- Examples of storing and retrieving secrets
- Backup and disaster recovery procedures
- Integration with existing applications

Important: All Kubernetes manifests should go in the /k8s directory and use FluxCD HelmRelease format for GitOps deployment.
</LLMPrompt>

### Installing Vault with FluxCD

```yaml
# k8s/vault-namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: vault
---
# k8s/vault-helm-repo.yaml
apiVersion: source.toolkit.fluxcd.io/v1beta2
kind: HelmRepository
metadata:
  name: hashicorp
  namespace: vault
spec:
  interval: 1h
  url: https://helm.releases.hashicorp.com
---
# k8s/vault.yaml
apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: vault
  namespace: vault
spec:
  interval: 30m
  chart:
    spec:
      chart: vault
      version: '0.27.x'
      sourceRef:
        kind: HelmRepository
        name: hashicorp
        namespace: vault
  values:
    server:
      ha:
        enabled: true
        replicas: 3
      dataStorage:
        enabled: true
        size: 10Gi
      auditStorage:
        enabled: true
        size: 10Gi
    ui:
      enabled: true
      serviceType: ClusterIP
    injector:
      enabled: true
```

### Vault Secrets Operator

```yaml
# k8s/vault-secrets-operator.yaml
apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: vault-secrets-operator
  namespace: vault
spec:
  interval: 30m
  chart:
    spec:
      chart: vault-secrets-operator
      version: '0.4.x'
      sourceRef:
        kind: HelmRepository
        name: hashicorp
        namespace: vault
  values:
    defaultVaultConnection:
      enabled: true
      address: 'http://vault.vault.svc.cluster.local:8200'
```

### Using Vault Secrets in Applications

```yaml
# k8s/vault-secret.yaml
apiVersion: secrets.hashicorp.com/v1beta1
kind: VaultStaticSecret
metadata:
  name: app-secrets
spec:
  type: kv-v2
  mount: secret
  path: myapp
  destination:
    name: app-secrets
    create: true
  refreshAfter: 30s
  vaultAuthRef: vault-auth
---
apiVersion: secrets.hashicorp.com/v1beta1
kind: VaultAuth
metadata:
  name: vault-auth
spec:
  method: kubernetes
  mount: kubernetes
  kubernetes:
    role: myapp
    serviceAccount: default
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
  - apiGroups: ['']
    resources: ['secrets']
    resourceNames: ['app-secrets']
    verbs: ['get']
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
  schedule: '0 2 * * 0' # Weekly at 2 AM Sunday
  jobTemplate:
    spec:
      template:
        spec:
          containers:
            - name: rotate-secrets
              image: my-secret-rotator:latest
              env:
                - name: SECRET_NAME
                  value: 'app-secrets'
                - name: SECRET_KEY
                  value: 'database-password'
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
            summary: 'High number of secret access failures'
```

## Choosing the Right Solution

### Decision Matrix

Use this matrix to determine which secrets management approach fits your needs:

| Criteria                  | Manual Secrets    | Sealed Secrets    | HashiCorp Vault             |
| ------------------------- | ----------------- | ----------------- | --------------------------- |
| **Team Size**             | 1-3 developers    | 3-20 developers   | 20+ developers              |
| **Security Requirements** | Basic             | Medium            | High/Enterprise             |
| **Compliance Needs**      | None              | Basic             | Advanced (SOC2, GDPR, etc.) |
| **GitOps Workflow**       | ❌ Not compatible | ✅ Perfect fit    | ✅ Compatible               |
| **Setup Complexity**      | ⭐ Very simple    | ⭐⭐ Simple       | ⭐⭐⭐⭐ Complex            |
| **Operational Overhead**  | ⭐ Minimal        | ⭐⭐ Low          | ⭐⭐⭐⭐ High               |
| **Secret Rotation**       | Manual process    | Semi-automated    | Fully automated             |
| **Audit Trail**           | None              | Basic Git history | Comprehensive               |
| **Dynamic Secrets**       | ❌ Not supported  | ❌ Not supported  | ✅ Full support             |
| **Multi-Environment**     | Difficult         | Good              | Excellent                   |
| **Cost**                  | Free              | Free              | Free (self-hosted)          |

### When to Choose Each Solution

#### Choose **Manual Secrets** when:

- 🏠 **Small team** (1-3 developers)
- 🚀 **Rapid prototyping** or proof-of-concept
- 💰 **Minimal budget** for infrastructure
- 🔒 **Low security requirements**
- ⚡ **Need to move fast** without setup overhead

**Example scenario:** Weekend side project, startup MVP, internal tools

#### Choose **Sealed Secrets** when:

- 👥 **Medium team** (3-20 developers)
- 🔄 **GitOps workflow** is important
- 🛡️ **Moderate security** requirements
- 📝 **Want secrets in Git** (encrypted)
- 🎯 **Balance of simplicity and security**

**Example scenario:** Growing startup, SaaS product, team collaboration needed

#### Choose **HashiCorp Vault** when:

- 🏢 **Large organization** (20+ developers)
- 🔐 **High security** requirements
- 📋 **Compliance** mandates (SOC2, HIPAA, GDPR)
- 🔄 **Dynamic secrets** needed
- 📊 **Detailed auditing** required
- 🌍 **Multi-environment** complexity

**Example scenario:** Enterprise software, financial services, healthcare, regulated industries

### Quick Decision Tree

```
Do you have compliance requirements?
├─ Yes → Use Vault
└─ No
   ├─ Do you use GitOps?
   │  ├─ Yes → Use Sealed Secrets
   │  └─ No → Manual or Sealed Secrets
   └─ Team size > 20?
      ├─ Yes → Consider Vault
      └─ No → Sealed Secrets or Manual
```

### Migration Path

Most teams follow this evolution:

1. **Start with Manual** - Get to production quickly
2. **Move to Sealed Secrets** - When team grows or GitOps is adopted
3. **Upgrade to Vault** - When compliance or enterprise features are needed

Each step builds on the previous, so you're never starting from scratch.

## Manual Secrets Management (Option 3)

For small teams or simple deployments, manual secrets management can be the right choice:

### When Manual Makes Sense

- **Small teams** (1-3 developers) with direct cluster access
- **Simple applications** with few secrets
- **Rapid prototyping** where setup time matters more than automation
- **Learning environments** where you want to understand the basics first

### Manual Secrets Workflow

```bash
# Create secrets directly in cluster
kubectl create secret generic app-secrets \
  --from-literal=DATABASE_URL="postgres://..." \
  --from-literal=API_KEY="secret-key" \
  --namespace=production

# Or from environment file (never commit the .env file!)
kubectl create secret generic app-secrets \
  --from-env-file=.env.production \
  --namespace=production
```

### Manual Secrets Best Practices

1. **Never commit secrets to Git**
2. **Use separate namespaces** for different environments
3. **Document secret names** and purposes
4. **Rotate secrets regularly** with calendar reminders
5. **Use RBAC** to limit who can access secrets
6. **Keep backups** of critical secrets in a password manager

### Manual Secrets Limitations

- ❌ No version control for secrets
- ❌ Difficult to share across team
- ❌ Manual rotation process
- ❌ No audit trail
- ❌ Doesn't work with GitOps

## Integration with GitOps

Different solutions have different GitOps compatibility:

### Sealed Secrets + GitOps ✅

```yaml
# k8s/kustomization.yaml - Safe to commit!
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - deployment.yaml
  - service.yaml
  - secrets/app-secrets-sealed.yaml # Encrypted, safe in Git

namespace: production
```

### Vault + GitOps ✅

```yaml
# k8s/kustomization.yaml - Safe to commit!
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - deployment.yaml
  - service.yaml
  - vault-secret.yaml # References Vault, no actual secrets

namespace: production
```

### Manual Secrets + GitOps ❌

Manual secrets don't work with GitOps since secrets can't be stored in Git repositories.

## What's Next?

This secrets management foundation integrates perfectly with the GitOps infrastructure from our [DevOps Holy Grail series](/blog/devops_holy_grail):

- **[Part 1](/blog/devops_holy_grail_part1)** - Basic GitOps setup with CI/CD
- **[Part 2](/blog/devops_holy_grail_part2)** - Enterprise features and monitoring

With proper secrets management, you can build systems that are both secure and developer-friendly—no more choosing between the two.

---

<LLMPrompt title="🚀 Complete Secrets Management Setup" defaultExpanded={true}>
First, ask me about my specific setup and requirements before generating any code:
- What type of Kubernetes cluster are you using?
- What CI/CD system do you currently use?
- What types of secrets do you need to manage (database credentials, API keys, certificates, etc.)?
- Do you have compliance requirements that might need HashiCorp Vault?
- How many environments do you need (dev/staging/prod)?
- Do you have existing secrets management to migrate from?

Then help me implement a complete secrets management solution for my Kubernetes cluster:

1. Sealed Secrets controller installation via Flux
2. Development workflow for creating and encrypting secrets
3. Multi-environment secret management for your environments
4. Secret rotation procedures and automation
5. RBAC for least-privilege access
6. Monitoring and alerting for secret access
7. Backup and recovery procedures for encryption keys
8. Integration with existing GitOps workflow
9. HashiCorp Vault setup if needed for enterprise requirements

Important: All Kubernetes manifests should go in the /k8s directory and use FluxCD HelmRelease format for GitOps deployment.

Provide everything needed for production-ready secrets management.
</LLMPrompt>
