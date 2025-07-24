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
image: /src/assets/images/holy-grail.jpg
imageAlt: The DevOps Holy Grail - HTTPS and DNS Automation
email: christian@landgren.nu
language: en
---

_Building on Part 1's foundation, let's add automatic HTTPS and DNS management - the security and reliability features that separate hobby projects from production systems - Part 2_

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

## A Brief History of TLS: From Netscape to Let's Encrypt

Understanding where HTTPS came from helps appreciate why automation matters:

### The Early Days (1994-2000)

**SSL 1.0** (1994): Netscape's first attempt. Never released due to security flaws.

**SSL 2.0** (1995): First public version. Quickly found to have major vulnerabilities.

**SSL 3.0** (1996): More secure, but still had issues. Became the foundation for TLS.

### The TLS Era (1999-Present)

**TLS 1.0** (1999): The Internet Engineering Task Force (IETF) took over from Netscape, creating Transport Layer Security.

**TLS 1.1** (2006): Fixed vulnerabilities in TLS 1.0.

**TLS 1.2** (2008): Major security improvements. Still widely used today.

**TLS 1.3** (2018): Faster, more secure. Removes legacy cryptography.

### The Certificate Authority Problem

For decades, getting HTTPS certificates was:
- **Expensive**: $100-500+ per year per domain
- **Complex**: Manual processes, CSR generation, validation emails
- **Fragile**: Manual renewal every 1-2 years, easy to forget
- **Exclusive**: Only big companies could afford certificates for all their domains

This created a two-tier internet: secure sites for those who could afford it, insecure sites for everyone else.

### The Let's Encrypt Revolution (2016)

Let's Encrypt changed everything:
- **Free**: No cost for certificates
- **Automated**: API-driven certificate issuance and renewal
- **Open**: Transparent, auditable processes
- **Universal**: Anyone can get certificates

**The Impact**: HTTPS adoption went from ~40% to ~95% of web traffic in just a few years.

## Automatic HTTPS with cert-manager: Set It and Forget It

cert-manager brings Let's Encrypt automation to Kubernetes. Install it once, and never think about certificates again.

<LLMPrompt title="🤖 cert-manager Setup with Let's Encrypt">
Set up cert-manager in my Kubernetes cluster for automatic HTTPS certificates. I need:
- Complete cert-manager installation via Helm/Flux
- ClusterIssuer configuration for Let's Encrypt production certificates
- Updated Ingress manifests with TLS annotations for automatic certificate generation
- Explanation of how cert-manager automatically renews certificates
- Troubleshooting commands to check certificate status
- Support for multiple domains and wildcard certificates
- Integration with existing GitOps workflow

My email is admin@example.com and I want certificates for myapp.example.com and *.myapp.example.com
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
            - "*.example.com"
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
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
spec:
  tls:
    - hosts:
        - myapp.example.com
        - api.myapp.example.com
      secretName: myapp-tls  # cert-manager creates this automatically
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
            summary: "Certificate expiring soon"
            description: "Certificate {{ $labels.name }} expires in less than 7 days"
        
        - alert: CertificateNotReady
          expr: certmanager_certificate_ready_status == 0
          for: 10m
          annotations:
            summary: "Certificate not ready"
            description: "Certificate {{ $labels.name }} is not ready"
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

external-dns watches your Kubernetes Ingress and Service resources and automatically creates DNS records.

<LLMPrompt title="🤖 external-dns Setup for Automatic DNS Management">
Set up external-dns for automatic DNS management in my Kubernetes cluster. I need:
- Complete external-dns installation via Helm/Flux
- Configuration for Cloudflare DNS provider (include other popular providers as options)
- Required API token setup and secret creation
- Ingress annotations for automatic DNS record creation
- Examples for different DNS providers (Route53, Google DNS, etc.)
- Troubleshooting steps to verify DNS automation is working
- Integration with existing GitOps workflow

I'm using Cloudflare as my DNS provider and want DNS records created automatically when I add ingress rules.
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
    txtOwnerId: "my-cluster"
    policy: sync  # or 'upsert-only' for safer operation
    sources:
      - ingress
      - service
    domainFilters:
      - example.com  # Only manage records for this domain
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
    external-dns.alpha.kubernetes.io/ttl: "300"
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
I want to implement automatic HTTPS and DNS management for my Kubernetes cluster. Help me set up:

1. cert-manager installation via Flux with Let's Encrypt integration
2. ClusterIssuer configuration for both HTTP-01 and DNS-01 challenges
3. external-dns installation and configuration for my DNS provider
4. Proper secrets management for DNS provider API tokens
5. Ingress manifests with automatic certificate and DNS record creation
6. Monitoring and alerting for certificate and DNS health
7. Troubleshooting procedures for common issues
8. Integration with existing GitOps workflow

My setup: [DNS provider - Cloudflare/Route53/etc.], [Domain name]
Services to expose: [List your services and desired hostnames]

Provide everything needed for production-ready HTTPS and DNS automation.
</LLMPrompt>

_Ready for Part 3? We'll add the enterprise features that scale your infrastructure from startup to enterprise without breaking._
