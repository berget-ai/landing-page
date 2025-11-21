---
title: CloudNativePG vs Bitnami PostgreSQL: Varför välja en native operator för din databas
description: En komplett guide till att drifta PostgreSQL i Kubernetes med CloudNativePG - från enkel setup till enterprise-grade produktion
date: 2025-10-24
author: Christian Landgren
tags:
  - DevOps
  - Kubernetes
  - PostgreSQL
  - CloudNativePG
  - Database
  - GitOps
image: /images/bitnami_vs_cloudnativepg.png
imageAlt: CloudNativePG vs Bitnami PostgreSQL comparison
email: christian@landgren.nu
language: sv
---

_När du ska drifta PostgreSQL i Kubernetes står du inför ett kritiskt val: ska du använda ett generiskt Helm chart eller en dedikerad PostgreSQL operator? Valet avgör inte bara hur enkelt det är att komma igång, utan även hur robust din lösning blir när den når produktion._

---

## Vad är problemet vi löser?

Att drifta en databas i produktion handlar om mycket mer än att bara starta en container. Vi behöver:

- **Driftsäkerhet**: Databasen måste vara tillgänglig 24/7
- **Redundans**: Inga enskilda punkter som kan orsaka driftstopp
- **Backup**: Automatiska, testade återställningar
- **Självhelande**: Systemet ska automatiskt återhämta sig från fel
- **Skalning**: Möjlighet att växa med din applikation
- **Säkerhet**: Kryptering, åtkomstkontroll och auditering

Traditionellt har dessa krav lösts med antingen dyra molntjänster (Amazon RDS, Google Cloud SQL) eller komplexa manuella installationer. Men med Kubernetes och rätt verktyg kan vi få samma funktionalitet med full kontroll och lägre kostnader.

---

## Jämförelsetabell: PostgreSQL i Kubernetes

| Funktion              | Bitnami PostgreSQL            | CloudNativePG                      | CrunchyData PGO              | Zalando Patroni       |
| --------------------- | ----------------------------- | ---------------------------------- | ---------------------------- | --------------------- |
| **Installation**      | Helm chart, 5 minuter         | Operator + CRDs, 10 minuter        | Operator, 15 minuter         | Manuell, 30+ minuter  |
| **High Availability** | Manuell konfiguration         | Automatisk failover inbyggt        | Automatisk failover          | Automatisk failover   |
| **Backup/Restore**    | Grundläggande, external tools | Inbyggd PITR, continuous WAL       | Inbyggd backup               | External tools krävs  |
| **Skalning**          | Manuell replica hantering     | Automatisk read replica management | Automatisk skalning          | Manuell skalning      |
| **Monitoring**        | Basic metrics                 | Inbyggd Prometheus exporter        | Prometheus exporter          | Basic metrics         |
| **Multi-tenancy**     | Ett cluster per chart         | Flera databaser per operator       | Flera databaser per operator | Komplex setup         |
| **Security**          | Standard TLS                  | Full cert-manager integration      | TLS stöd                     | TLS stöd              |
| **Recovery Time**     | Minuter till timmar           | Sekunder till minuter              | Minuter                      | Minuter till timmar   |
| **Version Support**   | Endast senaste version        | Multi-version support              | Multi-version support        | Multi-version support |
| **Learning Curve**    | Låg                           | Medium                             | Hög                          | Hög                   |
| **Production Ready**  | Med mycket konfiguration      | Out-of-the-box                     | Enterprise grade             | Kräver expertis       |

---

## Bitnami-problemet: Version lock-in och underhållskulden

Bitnami har en fundamental designfel som gör det olämpligt för produktion:

### 🚨 Endast senaste versionen stöds

Bitnami PostgreSQL image repository **stödjer bara den senaste PostgreSQL versionen**. Detta skapar allvarliga problem:

- **Oförmåga att uppgradera gradvis**: Du kan inte köra PostgreSQL 14 när 15 är senast
- **Breaking changes**: Tvingad uppgradering kan krossa din applikation
- **Kompatibilitetsproblem**: Tredjepartsverktyg kanske inte stödjer senaste versionen
- **Testning**: Omöjligt att testa uppgraderingar i isolerad miljö

```bash
# Bitnami Docker Hub - endast PostgreSQL 16.x tillgängligt
docker pull bitnami/postgresql:latest  # PostgreSQL 16.x
docker pull bitnami/postgresql:14     # ERROR: Tag not found!
```

### 🔧 Underhållskulden växer

När du väljer Bitnami för produktion åtar du dig:

- **Manuell failover**: Inget automatiskt byte vid problem
- **External backup-lösningar**: Måste bygga eget backup-system
- **Monitoring setup**: Kräver egen Prometheus konfiguration
- **Security patches**: Måste hantera uppgraderingar manuellt
- **Scaling operations**: Manuell provisionering av replicas

### 💰 Den dolda kostnaden

"Gratis" Helm chart blir dyrt i produktion:

```
Initial setup: 2 timmar (Bitnami) vs 4 timmar (CloudNativePG)
Produktionssättning: 40 timmar (Bitnami) vs 8 timmar (CloudNativePG)
Drift under 1 år: 200 timmar (Bitnami) vs 20 timmar (CloudNativePG)
```

CloudNativePG är en investering som betalar sig efter första månaden i produktion.

---

## Två olika filosofier

### Bitnami PostgreSQL Helm Chart

Bitnami är känt för sina "one-size-fits-all" Helm charts som fungerar för de flesta användningsfall. Chartet baseras på:

- **StatefulSets** för att hantera PostgreSQL instanser
- **Generisk konfiguration** via values.yaml
- **Manuell skalning** och failover-hantering
- **Begränsad automation** av avancerade databasfunktioner

### CloudNativePG Operator

CloudNativePG är en **dedikerad PostgreSQL operator** byggd specifikt för Kubernetes:

- **Custom Resource Definitions (CRDs)** för deklarativ databashantering
- **Automatisk failover** och self-healing
- **Native streaming replication** med PostgreSQL
- **Inbyggd backup/restore** med object storage
- **Prometheus monitoring** och loggströmmar
- **Declarative management** av allt från users till extensions

---

## Installation med Helm

### Bitnami PostgreSQL (snabb start)

```bash
# Lägg till Bitnami repo
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

# Installera med grundläggande konfiguration
helm install postgres bitnami/postgresql \
  --set auth.postgresPassword=secretpassword \
  --set auth.database=myapp \
  --set primary.persistence.size=8Gi
```

### CloudNativePG (produktionsklar)

```bash
# Installera CloudNativePG operator
helm repo add cloudnative-pg https://cloudnative-pg.github.io/charts
helm repo update

# Installera operator
helm install cnpg cloudnative-pg/cloudnative-pg \
  --namespace cnpg-system --create-namespace

# Vänta på att operatorn är redo
kubectl wait --for=condition=Available --timeout=300s deployment/cnpg-controller-manager -n cnpg-system
```

<details>
<summary>📖 Se komplett CloudNativePG installation med CRDs</summary>

```bash
# Alternativ: Installera med manifest (för full kontroll)
kubectl apply -f https://raw.githubusercontent.com/cloudnative-pg/cloudnative-pg/release-1.22/releases/cnpg-1.22.0.yaml

# Verifiera installation
kubectl get pods -n cnpg-system
kubectl get crd | grep postgresql
```

</details>

---

## Multi-tenancy: Ett kluster, flera databaser

En av de största fördelarna med CloudNativePG är möjligheten att hantera flera databaser och miljöer i samma Kubernetes-kluster.

### Namespace-strategi

```bash
# Skapa namespaces för olika miljöer
kubectl create namespace development
kubectl create namespace staging
kubectl create namespace production
```

### En databas per namespace

<details>
<summary>📖 Se exempel: Development database</summary>

```yaml
# dev-cluster.yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgres-dev
  namespace: development
spec:
  instances: 1
  bootstrap:
    initdb:
      database: app_dev
      owner: app_user
      secret:
        name: postgres-credentials
  storage:
    size: 10Gi
```

</details>

<details>
<summary>📖 Se exempel: Production database med HA</summary>

```yaml
# prod-cluster.yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgres-prod
  namespace: production
spec:
  instances: 3
  primaryUpdateStrategy: unsupervised
  bootstrap:
    initdb:
      database: app_prod
      owner: app_user
      secret:
        name: postgres-credentials
  storage:
    size: 100Gi
    storageClass: premium-ssd
  backup:
    retentionPolicy: '30d'
    barmanObjectStore:
      destinationPath: 's3://company-backups/postgres-prod'
      s3Credentials:
        accessKeyId:
          name: backup-credentials
          key: ACCESS_KEY_ID
        secretAccessKey:
          name: backup-credentials
          key: SECRET_ACCESS_KEY
```

</details>

### Fördelar med denna arkitektur

- **Kostnadseffektivt**: Dela operator och infrastruktur
- **Isolering**: Separata namespaces för säkerhet
- **Skalning**: Oberoende skalning per miljö
- **Management**: Centraliserad monitoring och backup
- **GitOps**: All konfiguration i version control

---

## Från utveckling till produktion: En praktisk guide

### Steg 1: Enkel development setup

Börja med en minimal CloudNativePG installation:

```yaml
# cluster-dev.yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgres-dev
  namespace: development
spec:
  instances: 1
  bootstrap:
    initdb:
      database: app_dev
      owner: app_user
      secret:
        name: postgres-credentials
  storage:
    size: 10Gi
```

```bash
# Skapa development cluster
kubectl apply -f cluster-dev.yaml
```

<details>
<summary>📖 Se komplett production setup med HA och backup</summary>

```yaml
# cluster-prod.yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgres-prod
  namespace: production
spec:
  instances: 3
  primaryUpdateStrategy: unsupervised

  postgresql:
    parameters:
      max_connections: '200'
      shared_buffers: '256MB'
      effective_cache_size: '1GB'

  bootstrap:
    initdb:
      database: app_prod
      owner: app_user
      secret:
        name: postgres-credentials
      postInitSQL:
        - CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
        - CREATE EXTENSION IF NOT EXISTS pgaudit;

  storage:
    size: 100Gi
    storageClass: premium-ssd

  backup:
    retentionPolicy: '30d'
    barmanObjectStore:
      destinationPath: 's3://company-backups/postgres-prod'
      s3Credentials:
        accessKeyId:
          name: backup-credentials
          key: ACCESS_KEY_ID
        secretAccessKey:
          name: backup-credentials
          key: SECRET_ACCESS_KEY

  monitoring:
    enabled: true

  resources:
    requests:
      memory: '2Gi'
      cpu: '1000m'
    limits:
      memory: '4Gi'
      cpu: '2000m'
```

</details>

### Steg 2: Connection pooling med PgBouncer

<details>
<summary>📖 Se PgBouncer integration exempel</summary>

```yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgres-staging
spec:
  instances: 2
  bootstrap:
    initdb:
      database: app_staging
      owner: app_user
      secret:
        name: postgres-credentials

  # PgBouncer för connection pooling
  externalClusters:
    - name: pgBouncerPooler
      connectionParameters:
        host: pgBouncerPooler.rw
        port: 5432
        dbname: app_staging
        user: app_user
        sslmode: require
      password:
        name: postgres-credentials
        key: PASSWORD

  storage:
    size: 10Gi
    storageClass: fast-ssd
  monitoring:
    enabled: true
```

</details>

---

## Connection strings och applikationsintegration

### Connection string format för CloudNativePG

```
# Standard format
postgresql://user:password@cluster-name-rw.namespace.svc.cluster.local:5432/database?sslmode=require

# Exempel för vår setup
postgresql://app_user:password@postgres-prod-rw.production.svc.cluster.local:5432/app_prod?sslmode=require
```

### Environment variables för olika miljöer

```yaml
# Kubernetes Secret för applikationen
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
stringData:
  # Development
  DATABASE_DEV_URL: 'postgresql://app_user:dev_password@postgres-dev-rw.development.svc.cluster.local:5432/app_dev?sslmode=disable'

  # Staging
  DATABASE_STAGING_URL: 'postgresql://app_user:staging_password@postgres-staging-rw.staging.svc.cluster.local:5432/app_staging?sslmode=require'

  # Production - Write
  DATABASE_WRITE_URL: 'postgresql://app_user:prod_password@postgres-prod-rw.production.svc.cluster.local:5432/app_prod?sslmode=require'

  # Production - Read (load balanced across replicas)
  DATABASE_READ_URL: 'postgresql://app_user:prod_password@postgres-prod-ro.production.svc.cluster.local:5432/app_prod?sslmode=require'
```

<details>
<summary>📖 Se komplett TypeScript/Prisma integration</summary>

```typescript
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

```typescript
// lib/database.ts
import { PrismaClient } from '@prisma/client'

const getDatabaseUrl = () => {
  const env = process.env.NODE_ENV

  switch (env) {
    case 'production':
      // Primary för writes, read replica för reads
      return {
        write: process.env.DATABASE_WRITE_URL,
        read: process.env.DATABASE_READ_URL,
      }
    case 'staging':
      return process.env.DATABASE_STAGING_URL
    default:
      return process.env.DATABASE_DEV_URL
  }
}

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: getDatabaseUrl(),
    },
  },
  log:
    process.env.NODE_ENV === 'development'
      ? ['query', 'error', 'warn']
      : ['error'],
})
```

</details>

---

## Skalning och read/write separation

### Automatisk skalning av read replicas

```yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgres-prod
spec:
  instances: 3 # 1 primary + 2 replicas
  bootstrap:
    initdb:
      database: app_prod
      owner: app_user
      secret:
        name: postgres-credentials
---
# Service för read-only access
apiVersion: v1
kind: Service
metadata:
  name: postgres-prod-ro
spec:
  type: ClusterIP
  selector:
    cnpg.io/cluster: postgres-prod
    role: replica # Endast replicas
  ports:
    - port: 5432
      targetPort: 5432
```

CloudNativePG skapar automatiskt:

- **`postgres-prod-rw`**: Primary för writes
- **`postgres-prod-ro`**: Load-balanced replicas för reads
- **`postgres-prod-r`**: Round-robin över alla instanser

<details>
<summary>📖 Se TypeScript implementation med read/write split</summary>

```typescript
// lib/read-write-db.ts
import { PrismaClient } from '@prisma/client'

class ReadWriteDatabase {
  private writeClient: PrismaClient
  private readClient: PrismaClient

  constructor() {
    this.writeClient = new PrismaClient({
      datasources: {
        db: { url: process.env.DATABASE_WRITE_URL },
      },
    })

    this.readClient = new PrismaClient({
      datasources: {
        db: { url: process.env.DATABASE_READ_URL },
      },
    })
  }

  // Write operations go to primary
  async createUser(data: { email: string; name?: string }) {
    return this.writeClient.user.create({ data })
  }

  // Read operations go to replicas
  async getUser(id: number) {
    return this.readClient.user.findUnique({ where: { id } })
  }

  // Health check
  async healthCheck() {
    try {
      await this.readClient.$queryRaw`SELECT 1`
      await this.writeClient.$queryRaw`SELECT 1`
      return { status: 'healthy' }
    } catch (error) {
      return { status: 'unhealthy', error: error.message }
    }
  }
}

export const db = new ReadWriteDatabase()
```

</details>

---

## Backup och återställning i praktiken

### Automatisk backup scheduling

```yaml
# scheduled-backup.yaml
apiVersion: postgresql.cnpg.io/v1
kind: ScheduledBackup
metadata:
  name: daily-backup
spec:
  schedule: '0 2 * * *' # Varje natt kl 02:00
  cluster:
    name: postgres-prod
  method: barmanObjectStore
  retentionPolicy: '30d'
```

### Manuell backup

```bash
# Skapa omedelbar backup
kubectl create -f - <<EOF
apiVersion: postgresql.cnpg.io/v1
kind: Backup
metadata:
  name: manual-backup-$(date +%Y%m%d-%H%M%S)
spec:
  cluster:
    name: postgres-prod
  method: barmanObjectStore
EOF
```

<details>
<summary>📖 Se Point-in-time recovery exempel</summary>

```yaml
# recovery-cluster.yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgres-recovery
spec:
  instances: 1
  bootstrap:
    recovery:
      source: postgres-prod
      recoveryTarget:
        targetTime: '2025-10-24 14:30:00 UTC'
  externalClusters:
    - name: postgres-prod
      barmanObjectStore:
        destinationPath: 's3://company-backups/postgres-prod'
        s3Credentials:
          accessKeyId:
            name: backup-credentials
            key: ACCESS_KEY_ID
          secretAccessKey:
            name: backup-credentials
            key: SECRET_ACCESS_KEY
```

</details>

<details>
<summary>📖 Se backup verification script</summary>

```bash
#!/bin/bash
# verify-backup.sh

BACKUP_NAME=$1
if [ -z "$BACKUP_NAME" ]; then
    echo "Usage: $0 <backup-name>"
    exit 1
fi

echo "Verifying backup: $BACKUP_NAME"

# Kontrollera backup status
kubectl get backup $BACKUP_NAME -o jsonpath='{.status.phase}'

# Skapa temporärt recovery cluster för test
cat <<EOF | kubectl apply -f -
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: backup-verify-$BACKUP_NAME
spec:
  instances: 1
  bootstrap:
    recovery:
      source: postgres-prod
      recoveryTarget:
        backupID: $BACKUP_NAME
  externalClusters:
    - name: postgres-prod
      barmanObjectStore:
        destinationPath: "s3://company-backups/postgres-prod"
        s3Credentials:
          accessKeyId:
            name: backup-credentials
            key: ACCESS_KEY_ID
          secretAccessKey:
            name: backup-credentials
            key: SECRET_ACCESS_KEY
EOF

# Vänta på att cluster är redo
kubectl wait --for=condition=Ready cluster/backup-verify-$BACKUP_NAME --timeout=300s

# Testa anslutning och dataintegritet
kubectl exec -it backup-verify-$BACKUP_NAME-1 -- psql -U app_user -d app_prod -c "SELECT COUNT(*) FROM users;"

# Städa upp
kubectl delete cluster backup-verify-$BACKUP_NAME

echo "Backup verification completed successfully"
```

</details>

---

## Monitoring och observability

### Prometheus metrics

CloudNativePG exporterar automatiskt metrics till `/metrics` endpoint:

```yaml
# ServiceMonitor för Prometheus
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: postgres-prod-monitor
spec:
  selector:
    matchLabels:
      cnpg.io/cluster: postgres-prod
  endpoints:
    - port: metrics
      interval: 30s
```

### Viktiga metrics att övervaka

- **Connection count**: `pg_stat_database_numbackends{datname="app_prod"}`
- **Transaction rates**: `rate(pg_stat_database_xact_commit{datname="app_prod"}[5m])`
- **Replication lag**: `pg_replication_lag_bytes`
- **Database size**: `pg_database_size_bytes{datname="app_prod"}`
- **Cache hit ratio**: `pg_stat_database_blks_hit / (pg_stat_database_blks_hit + pg_stat_database_blks_read)`

<details>
<summary>📖 Se kompletta alerting regler</summary>

```yaml
# alerts.yaml
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: postgres-alerts
spec:
  groups:
    - name: postgres
      rules:
        - alert: PostgreSQLDown
          expr: up{job="postgres"} == 0
          for: 1m
          labels:
            severity: critical
          annotations:
            summary: 'PostgreSQL is down'

        - alert: PostgreSQLHighConnections
          expr: pg_stat_database_numbackends{datname="app_prod"} > 150
          for: 5m
          labels:
            severity: warning
          annotations:
            summary: 'High number of connections'

        - alert: PostgreSQLReplicationLag
          expr: pg_replication_lag_bytes > 104857600 # 100MB
          for: 2m
          labels:
            severity: warning
          annotations:
            summary: 'PostgreSQL replication lag is high'
```

</details>

---

## Security best practices

### TLS och kryptering

```yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgres-prod
spec:
  instances: 3
  enableSuperuserAccess: false
  
  # Cert-manager integration
  certificates:
    serverCASecret: postgres-ca
    serverTLSSecret: postgres-server-tls
    replicationTLSSecret: postgres-replication-tls
    
  postgresql:
    parameters:
      ssl: "on"
      log_connections: "on"
      pgaudit.log: "all, -misc"
```

### Network policies

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: postgres-network-policy
spec:
  podSelector:
    matchLabels:
      cnpg.io/cluster: postgres-prod
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: my-application
    ports:
    - protocol: TCP
      port: 5432
```

CloudNativePG erbjuder inbyggt:
- **TLS encryption** med cert-manager integration
- **Role-based access control** (RBAC)
- **Audit logging** med PGAudit
- **Network policies** för nätverksisolering
- **Pod security policies** för container säkerhet

### Network policies

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: postgres-network-policy
spec:
  podSelector:
    matchLabels:
      cnpg.io/cluster: postgres-prod
  policyTypes:
    - Ingress
    - Egress
  ingress:
    - from:
        - podSelector:
            matchLabels:
              app: my-application
      ports:
        - protocol: TCP
          port: 5432
    - from:
        - namespaceSelector:
            matchLabels:
              name: monitoring
      ports:
        - protocol: TCP
          port: 9187 # Metrics
  egress:
    - to: []
      ports:
        - protocol: TCP
          port: 53 # DNS
        - protocol: UDP
          port: 53 # DNS
        - protocol: TCP
          port: 443 # S3 backups
```

---

## Varför CloudNativePG vinner i produktion

### 1. Declarative management

Allt från users till extensions hanteras deklarativt. Inga manuell SQL-skript i produktion.

### 2. Built-in high availability

Automatisk failover, synchronous replication, och self-healing är standard.

### 3. Native Kubernetes integration

Fullt stöd för Kubernetes concepts som RBAC, NetworkPolicies, och ResourceQuotas.

### 4. Enterprise-grade backup

Continuous WAL archiving, PITR, och cross-region disaster recovery.

### 5. Observability first-class citizen

Inbyggd Prometheus exporter, structured logging, och comprehensive metrics.

### 6. No vendor lock-in

Full open source (Apache 2.0) och fungerar med valfri Kubernetes distribution.

---

## Arkitekturval: Ett kluster per applikation vs en databas per applikation

När du kör flera applikationer som behöver PostgreSQL (t.ex. Odoo och Keycloak) står du inför ett viktigt arkitekturval. Låt oss jämföra två vanliga mönster:

### Alternativ 1: Ett PostgreSQL kluster per applikation

```
┌─────────────────┐    ┌─────────────────┐
│   odoo-ns       │    │  keycloak-ns    │
│                 │    │                 │
│ ┌─────────────┐ │    │ ┌─────────────┐ │
│ │ odoo-app    │ │    │ │keycloak-app │ │
│ └─────────────┘ │    │ └─────────────┘ │
│                 │    │                 │
│ ┌─────────────┐ │    │ ┌─────────────┐ │
│ │postgres-odoo│ │    │ │postgres-keyc│ │
│ │   cluster   │ │    │ │   cluster   │ │
│ └─────────────┘ │    │ └─────────────┘ │
└─────────────────┘    └─────────────────┘
```

**Fördelar:**
- ✅ **Full isolering** - varje applikation har sin egen PostgreSQL version
- ✅ **Oberoende skalning** - olika resursbehov per applikation
- ✅ **Enkel backup** - separata backup policies
- ✅ **Zero blast radius** - problem i en databas påverkar inte andra

**Nackdelar:**
- ❌ **Högre resursanvändning** - varje cluster kräver minst 3 instanser för HA
- ❌ **Mer administration** - flera clusters att hantera
- ❌ **Högre kostnad** - fler resources och storage

**Exempelkonfiguration:**

<details>
<summary>📖 Se Odoo PostgreSQL cluster</summary>

```yaml
# odoo-postgres.yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgres-odoo
  namespace: odoo
spec:
  instances: 3
  bootstrap:
    initdb:
      database: odoo
      owner: odoo_user
      secret:
        name: odoo-postgres-credentials
  storage:
    size: 50Gi
  backup:
    retentionPolicy: "30d"
    barmanObjectStore:
      destinationPath: "s3://backups/odoo-postgres"
```

</details>

<details>
<summary>📖 Se Keycloak PostgreSQL cluster</summary>

```yaml
# keycloak-postgres.yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgres-keycloak
  namespace: keycloak
spec:
  instances: 3
  bootstrap:
    initdb:
      database: keycloak
      owner: keycloak_user
      secret:
        name: keycloak-postgres-credentials
  storage:
    size: 20Gi  # Mindre behovan för Keycloak
  backup:
    retentionPolicy: "30d"
    barmanObjectStore:
      destinationPath: "s3://backups/keycloak-postgres"
```

</details>

### Alternativ 2: En databas per applikation i delat kluster

```
┌─────────────────────────────────────────────────┐
│                postgres-ns                      │
│                                                 │
│  ┌─────────────────────────────────────────┐    │
│  │        shared-postgres-cluster          │    │
│  │                                         │    │
│  │  ┌─────────────┐  ┌─────────────────┐   │    │
│  │  │   odoo      │  │   keycloak      │   │    │
│  │  │  database   │  │   database      │   │    │
│  │  └─────────────┘  └─────────────────┘   │    │
│  │                                         │    │
│  │  ┌─────────────┐  ┌─────────────────┐   │    │
│  │  │ odoo_user   │  │ keycloak_user   │   │    │
│  │  └─────────────┘  └─────────────────┘   │    │
│  └─────────────────────────────────────────┘    │
│                                                 │
│  ┌─────────────────┐    ┌─────────────────┐    │
│  │    odoo-ns      │    │  keycloak-ns    │    │
│  │                 │    │                 │    │
│  │ ┌─────────────┐ │    │ ┌─────────────┐ │    │
│  │ │ odoo-app    │ │    │ │keycloak-app │ │    │
│  │ └─────────────┘ │    │ └─────────────┘ │    │
│  └─────────────────┘    └─────────────────┘    │
└─────────────────────────────────────────────────┘
```

**Fördelar:**
- ✅ **Resurseffektivt** - dela på 3 instanser för HA
- ✅ **Lägre kostnad** - mindre storage och compute overhead
- ✅ **Enkel administration** - ett cluster att övervaka
- ✅ **Konsoliderad backup** - en backup policy för alla

**Nackdelar:**
- ❌ **Delad PostgreSQL version** - alla appar måste köra samma version
- ❌ **Shared resources** - hög last i en app kan påverka andra
- ❌ **Komplexare access control** - noggrann user management
- ❌ **Potential blast radius** - problem kan påverka alla databaser

**Exempelkonfiguration:**

<details>
<summary>📖 Se delat PostgreSQL cluster med flera databaser</summary>

```yaml
# shared-postgres.yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: shared-postgres
  namespace: postgres
spec:
  instances: 3
  bootstrap:
    initdb:
      database: template1  # Temporär databas
      owner: postgres
      secret:
        name: postgres-admin-credentials
      postInitApplicationSQL:
        # Skapa databaser för varje applikation
        - CREATE DATABASE odoo OWNER odoo_user;
        - CREATE DATABASE keycloak OWNER keycloak_user;
        
        # Skapa applikationsanvändare
        - CREATE USER odoo_user WITH PASSWORD 'odoo_password';
        - CREATE USER keycloak_user WITH PASSWORD 'keycloak_password';
        
        # Ge rättigheter
        - GRANT ALL PRIVILEGES ON DATABASE odoo TO odoo_user;
        - GRANT ALL PRIVILEGES ON DATABASE keycloak TO keycloak_user;
        
  storage:
    size: 100Gi  # Delad storage för alla databaser
    
  backup:
    retentionPolicy: "30d"
    barmanObjectStore:
      destinationPath: "s3://backups/shared-postgres"
      
  monitoring:
    enabled: true
```

</details>

### Connection strings för delat kluster

```yaml
# Odoo application secret
apiVersion: v1
kind: Secret
metadata:
  name: odoo-secrets
  namespace: odoo
type: Opaque
stringData:
  DATABASE_URL: "postgresql://odoo_user:odoo_password@shared-postgres-rw.postgres.svc.cluster.local:5432/odoo?sslmode=require"

---
# Keycloak application secret  
apiVersion: v1
kind: Secret
metadata:
  name: keycloak-secrets
  namespace: keycloak
type: Opaque
stringData:
  DATABASE_URL: "postgresql://keycloak_user:keycloak_password@shared-postgres-rw.postgres.svc.cluster.local:5432/keycloak?sslmode=require"
```

### Rekommendation: Välj baserat på dina behov

| Scenario | Rekommendation | Anledning |
|----------|----------------|-----------|
| **Små team, få applikationer** | Delat kluster | Kostnadseffektivt, enkelt att hantera |
| **Enterprise, många applikationer** | Ett kluster per app | Full isolering, olika versionskrav |
| **Differentierade prestandakrav** | Ett kluster per app | Oberoende skalning och tuning |
| **Dev/Test miljöer** | Delat kluster | Snabbt att sätta upp, låg kostnad |
| **Produktion med kritiska applikationer** | Ett kluster per app | Zero blast radius, max tillgänglighet |
| **Mixed PostgreSQL versions** | Ett kluster per app | Varje app kan köra optimal version |

### Hybrid approach: Båda världarna

Många organisationer använder en hybrid strategi:

```bash
# Dev/Staging: Delat kluster för kostnadseffektivitet
shared-postgres-dev    # 3 instanser, 10 databaser
shared-postgres-staging # 3 instanser, 10 databaser

# Production: Separata clusters för kritiska applikationer
postgres-odoo-prod     # 3 instanser, 1 databas
postgres-keycloak-prod  # 3 instanser, 1 databas
postgres-logging-prod   # 3 instanser, 1 databas

# Internal tools: Delat kluster med lägre prioritet
postgres-tools-prod     # 3 instanser, 15 databaser
```

Denna approach ger dig **bästa av två världar**: kostnadseffektivitet där det är lämpligt och full isolering där det krävs.

---

## Migration från Bitnami till CloudNativePG

### Steg-för-steg migration

```bash
# 1. Ta backup av befintlig databas
kubectl exec -it bitnami-postgresql-0 -- pg_dump -U postgres app_prod > backup.sql

# 2. Installera CloudNativePG operator
helm install cnpg cloudnative-pg/cloudnative-pg --namespace cnpg-system --create-namespace

# 3. Skapa nytt CloudNativePG cluster
kubectl apply -f cluster-prod.yaml

# 4. Vänta på att cluster är redo
kubectl wait --for=condition=Ready cluster/postgres-prod --timeout=600s

# 5. Restore data
kubectl exec -it postgres-prod-1 -- psql -U app_user -d app_prod < backup.sql

# 6. Uppdatera applikationens connection strings
# Byt från: postgresql://user:pass@bitnami-postgresql:5432/app
# Till:     postgresql://user:pass@postgres-prod-rw:5432/app

# 7. Verifiera och ta bort gammal Bitnami deployment
kubectl delete deployment bitnami-postgresql
```

---

## Sammanfattning

CloudNativePG är inte bara ett alternativ till Bitnami PostgreSQL - det är en **arkitektonisk uppgradering** för databashantering i Kubernetes.

### Välj CloudNativePG om du behöver:

- ✅ **Produktionsklar high availability** med automatisk failover
- ✅ **Enterprise-grade backup och disaster recovery**
- ✅ **Declarative management** av hela databaslifecykeln
- ✅ **Native Kubernetes integration** med full observability
- ✅ **Skalbarhet** från dev till enterprise utan att byta verktyg

### Välj Bitnami om du behöver:

- ❌ **Snabb prototype** för utveckling (men byt innan produktion)
- ❌ **Enkel installation** utan avancerade krav
- ❌ **Generisk databas** utan PostgreSQL-specifika optimeringar

Frågan är inte _om_ du ska använda en PostgreSQL operator, utan _när_. Med CloudNativePG får du en lösning som växer med dina behov - från en enkel development databas till en globalt distribuerad, högpresterande produktionssystem.

---

**The future of database operations is declarative, automated, and cloud-native. CloudNativePG isn't just keeping up with that future—it's defining it.**

_Vill du ha hjälp att implementera CloudNativePG i din miljö? [Kontakta oss](/contact) för en kostnadsfri konsultation._
