---
title: The DevOps Holy Grail: HTTPS and DNS Automation
description: Why HTTPS matters, the history of TLS, and how to automate certificates and DNS with cert-manager and external-dns - Part 2
date: 2025-07-24
author: Christian Landgren
tags:
  - DevOps
  - HTTPS
  - TLS
  - DNS
  - Security
  - Automation
image: /images/holy-grail.jpg
imageAlt: The DevOps Holy Grail - HTTPS and DNS Automation
email: christian@landgren.nu
language: en
---

In [Part 1](/blog/devops_holy_grail_part1), we built the foundation: containerization, CI/CD, Kubernetes basics, and GitOps with FluxCD. Now it's time to add the security and reliability features that make your system production-ready.

This isn't just about checking security boxes. It's about building systems that users trust and that scale without breaking.

## Why HTTPS Matters: More Than Just a Green Lock

HTTPS isn't optional anymore. It's the foundation of web security, and here's why it matters more than ever:

### The Security Imperative

**Data Protection**: Every request without HTTPS is visible to anyone between your user and your server. Passwords, API keys, personal data—all transmitted in plain text over HTTP.

**Authentication**: HTTPS proves your server is actually your server, not an imposter. Without it, users have no way to know they're talking to the real you.

**Integrity**: HTTPS ensures data isn't modified in transit. Without it, attackers can inject malicious code into your pages.

### The Business Impact

**SEO Rankings**: Google penalizes HTTP sites in search results. HTTPS is a ranking factor.

**Browser Warnings**: Modern browsers show scary warnings for HTTP sites, especially those with forms. Users abandon sites with security warnings.

**API Requirements**: Most modern APIs require HTTPS. Payment processors, social logins, and third-party services won't work over HTTP.

**Compliance**: GDPR, PCI DSS, and other regulations often require encrypted data transmission.

## The Evolution of HTTPS: From Expensive to Universal

HTTPS evolved from expensive, manual certificates that only large companies could afford to free, automated certificates available to everyone thanks to Let's Encrypt in 2016. Today, encrypting your services isn't just best practice—it's essential for security, SEO, and user trust.

## Automatic HTTPS with cert-manager: Set It and Forget It

cert-manager is an open-source Kubernetes add-on that automates the management and issuance of TLS certificates. Originally created by Jetstack (now part of Venafi), it's a CNCF project with strong community support and is used by thousands of organizations worldwide.

What makes cert-manager special:

- **Fully automated** certificate lifecycle management
- **Multiple certificate authorities** supported (Let's Encrypt, HashiCorp Vault, Venafi, self-signed)
- **Kubernetes-native** with custom resources and operators
- **Production-ready** with extensive monitoring and observability
- **Free and open source** with commercial support available

cert-manager brings Let's Encrypt automation to Kubernetes. Install it once, and never think about certificates again.

<LLMPrompt title="🤖 cert-manager Setup with Let's Encrypt">
First, ask me about my certificate requirements before generating any code:
- What is your email address for Let's Encrypt notifications?
- What domains do you need certificates for?
- Do you need wildcard certificates?
- What DNS provider do you use (for DNS-01 challenges if needed)?
- Do you have existing certificates to migrate from?

Then set up cert-manager in my Kubernetes cluster for automatic HTTPS certificates. I need:

- Complete cert-manager installation via Helm/Flux
- ClusterIssuer configuration for Let's Encrypt production certificates
- Updated Ingress manifests with TLS annotations for automatic certificate generation
- Explanation of how cert-manager automatically renews certificates
- Troubleshooting commands to check certificate status
- Support for multiple domains and wildcard certificates if needed
- Integration with existing GitOps workflow

Important: All Kubernetes manifests should go in the /k8s directory and use FluxCD HelmRelease format for GitOps deployment.
</LLMPrompt>

### Installing cert-manager

```yaml
# k8s/cert-manager-namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: cert-manager
---
# k8s/cert-manager-helm-repo.yaml
apiVersion: source.toolkit.fluxcd.io/v1beta2
kind: HelmRepository
metadata:
  name: jetstack
  namespace: cert-manager
spec:
  interval: 1h
  url: https://charts.jetstack.io
---
# k8s/cert-manager.yaml
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
        namespace: cert-manager
  values:
    installCRDs: true
    global:
      leaderElection:
        namespace: cert-manager
```

### Creating a Certificate Issuer

```yaml
# k8s/cluster-issuer.yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    # Let's Encrypt production server
    server: https://acme-v02.api.letsencrypt.org/directory
    email: admin@example.com
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
      # HTTP-01 challenge for regular domains
      - http01:
          ingress:
            class: nginx
      # DNS-01 challenge for wildcard certificates
      - dns01:
          cloudflare:
            email: admin@example.com
            apiTokenSecretRef:
              name: cloudflare-api-token
              key: api-token
        selector:
          dnsNames:
            - '*.example.com'
```

### Using Certificates in Ingress

```yaml
# k8s/ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-app
  annotations:
    # Tell cert-manager to create a certificate
    cert-manager.io/cluster-issuer: letsencrypt-prod
    # Force HTTPS redirects
    nginx.ingress.kubernetes.io/ssl-redirect: 'true'
spec:
  tls:
    - hosts:
        - myapp.example.com
        - api.myapp.example.com
      secretName: myapp-tls # cert-manager creates this automatically
  rules:
    - host: myapp.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: my-app
                port:
                  number: 80
```

### How Automatic Renewal Works

cert-manager handles the entire certificate lifecycle:

1. **Issuance**: When you create an Ingress with cert-manager annotations, it automatically requests certificates from Let's Encrypt
2. **Validation**: cert-manager proves you control the domain using HTTP-01 or DNS-01 challenges
3. **Storage**: Certificates are stored as Kubernetes Secrets
4. **Renewal**: cert-manager automatically renews certificates 30 days before expiration
5. **Updates**: New certificates are automatically deployed to your Ingress controllers

**You never touch certificates manually again.**

### Monitoring Certificate Health

```yaml
# k8s/certificate-monitoring.yaml
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: certificate-alerts
spec:
  groups:
    - name: certificates
      rules:
        - alert: CertificateExpiringSoon
          expr: certmanager_certificate_expiration_timestamp_seconds - time() < 7 * 24 * 3600
          for: 1h
          annotations:
            summary: 'Certificate expiring soon'
            description: 'Certificate {{ $labels.name }} expires in less than 7 days'

        - alert: CertificateNotReady
          expr: certmanager_certificate_ready_status == 0
          for: 10m
          annotations:
            summary: 'Certificate not ready'
            description: 'Certificate {{ $labels.name }} is not ready'
```

## DNS Automation: Why Manual DNS is a Liability

Managing DNS records manually doesn't scale. Here's why automation matters:

### The Manual DNS Problem

**Human Error**: Typos in DNS records cause outages. A missing dot, wrong IP, or incorrect TTL can break everything.

**Slow Changes**: Manual DNS updates take time. In incident response, every minute matters.

**Inconsistency**: Different team members make changes differently. No standard process leads to configuration drift.

**No Audit Trail**: Who changed what DNS record when? Manual changes are hard to track.

**Scaling Issues**: Adding new services means updating DNS records. This doesn't scale with microservices.

### The Business Case for DNS Automation

**Faster Deployments**: New services get DNS records automatically. No waiting for ops team.

**Reduced Outages**: Automated DNS reduces human error, the leading cause of outages.

**Better Security**: Automated DNS can implement security policies consistently.

**Cost Savings**: Less manual work means lower operational costs.

## Automatic DNS with external-dns

external-dns is an open-source Kubernetes controller that automatically manages DNS records for your services. Originally developed by the Kubernetes community, it's now maintained by the Kubernetes SIG Network and is widely adopted across the ecosystem.

Key features of external-dns:

- **Multi-provider support** - Works with 20+ DNS providers (Cloudflare, Route53, Google DNS, Azure DNS, etc.)
- **Kubernetes-native** - Watches Ingress, Service, and other Kubernetes resources
- **Declarative** - DNS records are managed through Kubernetes annotations
- **Safe by default** - Configurable policies prevent accidental changes
- **Open source** with active community development

external-dns watches your Kubernetes Ingress and Service resources and automatically creates DNS records.

<LLMPrompt title="🤖 external-dns Setup for Automatic DNS Management">
First, ask me about my DNS setup before generating any code:
- What DNS provider do you use (Cloudflare, Route53, Google DNS, Azure DNS, etc.)?
- What domains do you want external-dns to manage?
- Do you have API credentials/tokens for your DNS provider?
- Do you want to manage all DNS records or only specific ones?
- What is your preferred DNS record TTL?

Then set up external-dns for automatic DNS management in my Kubernetes cluster. I need:

- Complete external-dns installation via Helm/Flux
- Configuration for your specific DNS provider
- Required API token setup and secret creation
- Ingress annotations for automatic DNS record creation
- Examples for your chosen DNS provider
- Troubleshooting steps to verify DNS automation is working
- Integration with existing GitOps workflow

Important: All Kubernetes manifests should go in the /k8s directory and use FluxCD HelmRelease format for GitOps deployment.
</LLMPrompt>

### Installing external-dns

```yaml
# k8s/external-dns-namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: external-dns
---
# k8s/external-dns-helm-repo.yaml
apiVersion: source.toolkit.fluxcd.io/v1beta2
kind: HelmRepository
metadata:
  name: external-dns
  namespace: external-dns
spec:
  interval: 1h
  url: https://kubernetes-sigs.github.io/external-dns/
---
# k8s/external-dns.yaml
apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: external-dns
  namespace: external-dns
spec:
  interval: 30m
  chart:
    spec:
      chart: external-dns
      version: '1.14.x'
      sourceRef:
        kind: HelmRepository
        name: external-dns
        namespace: external-dns
  values:
    provider: cloudflare
    env:
      - name: CF_API_TOKEN
        valueFrom:
          secretKeyRef:
            name: cloudflare-api-token
            key: api-token
    txtOwnerId: 'my-cluster'
    policy: sync # or 'upsert-only' for safer operation
    sources:
      - ingress
      - service
    domainFilters:
      - example.com # Only manage records for this domain
```

### Creating DNS Provider Secrets

```yaml
# k8s/cloudflare-secret.yaml (encrypted with sealed-secrets)
apiVersion: bitnami.com/v1alpha1
kind: SealedSecret
metadata:
  name: cloudflare-api-token
  namespace: external-dns
spec:
  encryptedData:
    api-token: AgBy3i4OJSWK+PiTySYZZA9rO43cGDEQAx...
  template:
    metadata:
      name: cloudflare-api-token
      namespace: external-dns
```

### Using DNS Automation in Ingress

```yaml
# k8s/ingress-with-dns.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-app
  annotations:
    # cert-manager creates certificates
    cert-manager.io/cluster-issuer: letsencrypt-prod
    # external-dns creates DNS records
    external-dns.alpha.kubernetes.io/hostname: myapp.example.com,api.myapp.example.com
    external-dns.alpha.kubernetes.io/ttl: '300'
spec:
  tls:
    - hosts:
        - myapp.example.com
        - api.myapp.example.com
      secretName: myapp-tls
  rules:
    - host: myapp.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: my-app
                port:
                  number: 80
    - host: api.myapp.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: my-api
                port:
                  number: 80
```

### Multi-Provider DNS Setup

external-dns supports multiple DNS providers:

```yaml
# For AWS Route53
values:
  provider: aws
  aws:
    region: us-west-2
    zoneType: public
  serviceAccount:
    annotations:
      eks.amazonaws.com/role-arn: arn:aws:iam::ACCOUNT:role/external-dns

# For Google Cloud DNS
values:
  provider: google
  google:
    project: my-project
    serviceAccountSecret: google-service-account

# For Azure DNS
values:
  provider: azure
  azure:
    resourceGroup: my-resource-group
    tenantId: my-tenant-id
    subscriptionId: my-subscription-id
```

## The Complete Automation Stack

When you combine cert-manager and external-dns, deploying a new service becomes trivial:

```yaml
# k8s/new-service.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: new-service
spec:
  replicas: 2
  selector:
    matchLabels:
      app: new-service
  template:
    metadata:
      labels:
        app: new-service
    spec:
      containers:
        - name: app
          image: my-org/new-service:latest
          ports:
            - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: new-service
spec:
  selector:
    app: new-service
  ports:
    - port: 80
      targetPort: 8080
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: new-service
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
    external-dns.alpha.kubernetes.io/hostname: new.example.com
spec:
  tls:
    - hosts:
        - new.example.com
      secretName: new-service-tls
  rules:
    - host: new.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: new-service
                port:
                  number: 80
```

**Commit this to Git, and within minutes you have:**

- A running service
- Automatic DNS record creation
- Automatic HTTPS certificate
- Automatic certificate renewal

## Security Best Practices

### Certificate Security

**Use Production Let's Encrypt**: The staging server has rate limits but issues untrusted certificates. Only use it for testing.

**Monitor Certificate Health**: Set up alerts for certificate expiration and renewal failures.

**Secure Private Keys**: cert-manager stores private keys in Kubernetes Secrets. Ensure your cluster has proper RBAC.

### DNS Security

**Limit Domain Scope**: Use `domainFilters` to prevent external-dns from managing unintended domains.

**Use Least Privilege**: DNS provider API tokens should have minimal required permissions.

**Monitor DNS Changes**: Set up alerts for unexpected DNS record changes.

**Backup DNS Configuration**: Keep backups of your DNS zone files.

## Troubleshooting Common Issues

### Certificate Problems

```bash
# Check certificate status
kubectl get certificates -A

# Check certificate details
kubectl describe certificate myapp-tls

# Check cert-manager logs
kubectl logs -n cert-manager deployment/cert-manager

# Check certificate challenges
kubectl get challenges -A
```

### DNS Problems

```bash
# Check external-dns logs
kubectl logs -n external-dns deployment/external-dns

# Verify DNS records were created
dig myapp.example.com

# Check external-dns events
kubectl get events -n external-dns
```

## What's Next?

With automatic HTTPS and DNS in place, you now have:

- **Secure communications** with automatic HTTPS certificates
- **Reliable DNS** that updates automatically with your services
- **Zero-maintenance security** through automated certificate renewal
- **Professional appearance** with proper SSL certificates and custom domains

In **[Part 3](/blog/devops_holy_grail_part3)**, we'll add enterprise-grade features:

- **Self-hosted backends** with Supabase
- **Bulletproof secrets management**
- **Comprehensive monitoring** that prevents incidents
- **Multi-environment deployments**
- **Advanced deployment strategies**

---

<LLMPrompt title="🚀 Complete HTTPS and DNS Automation Setup" defaultExpanded={true}>
First, ask me about my specific setup before generating any code:
- What DNS provider do you use (Cloudflare, Route53, Google DNS, etc.)?
- What is your domain name?
- What services do you want to expose and their desired hostnames?
- What is your email address for Let's Encrypt notifications?
- Do you need wildcard certificates?
- Do you have existing DNS records or certificates to migrate?

Then help me implement automatic HTTPS and DNS management for my Kubernetes cluster:

1. cert-manager installation via Flux with Let's Encrypt integration
2. ClusterIssuer configuration for both HTTP-01 and DNS-01 challenges
3. external-dns installation and configuration for your DNS provider
4. Proper secrets management for DNS provider API tokens
5. Ingress manifests with automatic certificate and DNS record creation
6. Monitoring and alerting for certificate and DNS health
7. Troubleshooting procedures for common issues
8. Integration with existing GitOps workflow

Important: All Kubernetes manifests should go in the /k8s directory and use FluxCD HelmRelease format for GitOps deployment.

Provide everything needed for production-ready HTTPS and DNS automation.
</LLMPrompt>

_Ready for Part 3? We'll add the enterprise features that scale your infrastructure from startup to enterprise without breaking._
