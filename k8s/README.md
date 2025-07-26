# Kubernetes Multi-Environment Deployment

Detta repository använder Kustomize och FluxCD för att hantera multi-environment deployments med GitOps-principer.

## Katalogstruktur

```
k8s/
├── base/                    # Gemensamma resurser
│   ├── kustomization.yaml   # Bas-kustomization
│   ├── namespace.yaml       # Namespace definition
│   ├── deployment.yaml      # Bas deployment
│   ├── service.yaml         # Service definition
│   ├── ingress.yaml         # Bas ingress med ConfigMap
│   └── nginx.conf           # Nginx konfiguration
└── overlays/
    ├── stage/               # Stage-miljö
    │   ├── kustomization.yaml
    │   └── ingress-patch.yaml
    └── production/          # Production-miljö
        ├── kustomization.yaml
        ├── ingress-patch.yaml
        └── ingress-redirects.yaml
```

## Viktiga principer

### 1. Base konfiguration
- Innehåller alla gemensamma resurser med konservativa standardvärden
- Definierar namespace, deployment, service och grundläggande ingress
- Använder säkerhetsheaders via ConfigMap

### 2. Environment-specifika overlays
- **Stage**: Använder `stage.berget.ai` domän med lägre rate limits
- **Production**: Använder `berget.ai` huvuddomän med högre rate limits och redirects

### 3. Image management
FluxCD image policies hanterar automatisk uppdatering:
```yaml
# Stage
newTag: '1.3.101-rc.13' # {"$imagepolicy": "flux-system:landingpage-stage:tag"}

# Production  
newTag: '1.3.100' # {"$imagepolicy": "flux-system:landingpage:tag"}
```

### 4. Security headers
Varje miljö har sin egen ConfigMap med säkerhetsheaders:
- Content Security Policy
- HSTS headers
- X-Frame-Options
- Rate limiting per miljö

### 5. Domain handling
- **Stage**: `stage.berget.ai`
- **Production**: `berget.ai` med redirects från `www.berget.ai`, `berget.cloud`, `www.berget.cloud`

## CI/CD Pipeline

### GitHub Actions Workflow (`.github/workflows/docker-build-push.yml`)

Workflow:en hanterar automatisk versionshantering och Docker image builds:

1. **Trigger**: Körs på push till `main` branch (exklusive `k8s/**` ändringar)
2. **Versionshantering**: 
   - Automatisk `npm version prerelease --preid=rc` för nya RC-versioner
   - Pushar uppdaterad version tillbaka till repository
3. **Docker build**:
   - Bygger och pushar till GitHub Container Registry (`ghcr.io`)
   - Taggar med både specifik version och `latest`
   - Använder Docker BuildKit cache för snabbare builds
4. **FluxCD integration**: FluxCD upptäcker nya images och uppdaterar deployments automatiskt

### Deployment flow

1. **Code push** → GitHub Actions bygger ny image
2. **FluxCD** upptäcker ny image via image policy
3. **Stage deployment** uppdateras automatiskt med RC-version
4. **Production deployment** uppdateras med stable version efter manuell release

## Användning

### Lokal utveckling
```bash
# Testa kustomize build
kustomize build k8s/overlays/stage
kustomize build k8s/overlays/production

# Applicera till kluster
kubectl apply -k k8s/overlays/stage
kubectl apply -k k8s/overlays/production
```

### FluxCD setup
```bash
# Skapa Kustomization för stage
flux create kustomization berget-website-stage \
  --source=berget-website \
  --path="./k8s/overlays/stage" \
  --prune=true \
  --interval=5m

# Skapa Kustomization för production  
flux create kustomization berget-website-production \
  --source=berget-website \
  --path="./k8s/overlays/production" \
  --prune=true \
  --interval=10m
```

## Säkerhet

- **Rate limiting**: 50 req/min (stage), 200 req/min (production)
- **HTTPS**: Automatiska Let's Encrypt certifikat via cert-manager
- **Security headers**: Comprehensive CSP, HSTS, och andra säkerhetsheaders
- **Network policies**: Ingress-kontrollerad trafik

## Monitoring

- **Health checks**: Liveness och readiness probes
- **Resource limits**: CPU och memory begränsningar
- **Logging**: Strukturerad loggning via nginx

Detta mönster ger en skalbar, säker och automatiserad deployment pipeline som följer GitOps-principer.
