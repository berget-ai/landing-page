# Domain Configuration

This document describes the domain configuration for the Berget AI landing page.

## Production Domains

### Primary Domain
- **berget.ai** - Main landing page domain
  - Served via: `k8s/overlays/production/ingress-patch.yaml`
  - TLS: Managed by cert-manager with Let's Encrypt
  - External DNS: Automatic DNS record management
  - Rate limit: 200 requests/minute

### Redirect Domains
The following domains redirect to `https://berget.ai/`:
- **www.berget.ai** - WWW subdomain
- **berget.cloud** - Alternative domain
- **www.berget.cloud** - WWW subdomain of alternative domain
- **bergetai.se** - Swedish domain
- **www.bergetai.se** - WWW subdomain of Swedish domain

Configuration:
- Served via: `k8s/overlays/production/ingress-redirects.yaml`
- TLS: Managed by cert-manager with Let's Encrypt
- External DNS: Automatic DNS record management
- Rate limit: 50 requests/minute
- Redirect type: Permanent (301)

## Stage Environment

- **stage.berget.ai** - Staging environment
  - Served via: `k8s/overlays/stage/ingress-patch.yaml`
  - TLS: Managed by cert-manager with Let's Encrypt
  - External DNS: Automatic DNS record management

## Security Features

All domains are configured with:
- **TLS/SSL**: Automatic certificate management via cert-manager
- **HSTS**: Strict-Transport-Security header with preload
- **CSP**: Content Security Policy
- **X-Frame-Options**: DENY
- **Rate Limiting**: Protection against abuse
- **CORS**: Configured origin policies

## DNS Management

DNS records are automatically managed by:
- **External DNS**: Kubernetes controller that synchronizes Kubernetes Ingress resources with DNS providers
- Annotations: `external-dns.alpha.kubernetes.io/hostname`

## Infrastructure Components

```
┌─────────────────────────────────────────────┐
│         Internet Traffic                     │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────────┐
│  NGINX Ingress Controller                    │
│  - TLS Termination                           │
│  - Rate Limiting                             │
│  - Security Headers                          │
└──────────────┬───────────────────────────────┘
               │
       ┌───────┴────────┐
       │                │
       ▼                ▼
┌─────────────┐  ┌─────────────┐
│ berget.ai   │  │  Redirects  │
│ Ingress     │  │  Ingress    │
└──────┬──────┘  └──────┬──────┘
       │                │
       │                │ (301 → berget.ai)
       ▼                │
┌─────────────────────┐ │
│ berget-website      │ │
│ Service             │◄┘
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│ berget-website      │
│ Deployment          │
│ (3 replicas)        │
└─────────────────────┘
```

## Verification

To verify the domain configuration:

```bash
# Build and validate manifests
kustomize build k8s/overlays/production

# Check for domain references
grep -r "berget\." k8s/
```

## Related Files

- `k8s/base/ingress.yaml` - Base ingress configuration
- `k8s/base/nginx.conf` - NGINX container configuration
- `k8s/overlays/production/ingress-patch.yaml` - Production domain configuration
- `k8s/overlays/production/ingress-redirects.yaml` - Domain redirects
- `k8s/overlays/stage/ingress-patch.yaml` - Staging domain configuration
