import React from 'react';
import { 
  SlideTitle, 
  SlideHeading, 
  SlideText, 
  SlideList, 
  SlideListItem, 
  SlideCode, 
  SlideTable, 
  SlideTwoColumn, 
  SlideHighlight, 
  createTitleSlide
} from '../../../components/presentations/PresentationComponents';

// Import the main BlogPresentation component
import BlogPresentationMain from '../../../components/presentations/BlogPresentation';

const CloudNativePGPresentation: React.FC = () => {
  const slides = [
    createTitleSlide(
      "CloudNativePG vs Bitnami PostgreSQL",
      "Varför välja en native operator för din databas",
      "Christian Landgren | Berget"
    ),
    {
      id: 'problem',
      title: 'Vad är problemet vi löser?',
      content: (
        <>
          <SlideText>
            <SlideHighlight color="red">Att drifta en databas i produktion ≠ att starta en container</SlideHighlight>
          </SlideText>
          <SlideList>
            <SlideListItem icon="🛡️"><strong>Driftsäkerhet</strong>: 24/7 tillgänglighet</SlideListItem>
            <SlideListItem icon="🔄"><strong>Redundans</strong>: Inga enskilda fel punkter</SlideListItem>
            <SlideListItem icon="💾"><strong>Backup</strong>: Automatiska, testade återställningar</SlideListItem>
            <SlideListItem icon="🔧"><strong>Självhelande</strong>: Automatisk återhämtning</SlideListItem>
            <SlideListItem icon="📈"><strong>Skalning</strong>: Väx med din applikation</SlideListItem>
            <SlideListItem icon="🔒"><strong>Säkerhet</strong>: Kryptering och auditering</SlideListItem>
          </SlideList>
        </>
      ),
    },
    {
      id: 'comparison',
      title: 'Jämförelse: PostgreSQL i Kubernetes',
      content: (
        <SlideTable
          headers={['Funktion', 'Bitnami', 'CloudNativePG', 'CrunchyData']}
          rows={[
            ['<strong>Installation</strong>', 'Helm, 5 min', 'Operator, 10 min', 'Operator, 15 min'],
            ['<strong>High Availability</strong>', <SlideHighlight color="red">Manuell</SlideHighlight>, <SlideHighlight color="green">Automatisk</SlideHighlight>, <SlideHighlight color="green">Automatisk</SlideHighlight>],
            ['<strong>Backup/Restore</strong>', <SlideHighlight color="yellow">Grundläggande</SlideHighlight>, <SlideHighlight color="green">Enterprise</SlideHighlight>, <SlideHighlight color="green">Inbyggd</SlideHighlight>],
            ['<strong>Version Support</strong>', <SlideHighlight color="red">Endast senaste</SlideHighlight>, <SlideHighlight color="green">Multi-version</SlideHighlight>, <SlideHighlight color="green">Multi-version</SlideHighlight>],
            ['<strong>Production Ready</strong>', <SlideHighlight color="yellow">Med konfig</SlideHighlight>, <SlideHighlight color="green">Out-of-the-box</SlideHighlight>, <SlideHighlight color="green">Enterprise</SlideHighlight>],
          ]}
        />
      ),
    },
    {
      id: 'bitnami-problems',
      title: 'Bitnami-problemet: Version Lock-in',
      content: (
        <>
          <SlideText><SlideHighlight color="red">🚨 Endast senaste PostgreSQL versionen stöds!</SlideHighlight></SlideText>
          <SlideCode language="bash">
{`# Bitnami Docker Hub - endast PostgreSQL 16.x
docker pull bitnami/postgresql:latest  # PostgreSQL 16.x
docker pull bitnami/postgresql:14     # ERROR: Tag not found!`}
          </SlideCode>
          <SlideText><strong>Konsekvenser:</strong></SlideText>
          <SlideList>
            <SlideListItem color="red">Tvingad uppgradering kan krossa din applikation</SlideListItem>
            <SlideListItem color="red">Omöjligt att testa uppgraderingar gradvis</SlideListItem>
            <SlideListItem color="red">Tredjepartsverktyg kanske inte stödjer senaste version</SlideListItem>
          </SlideList>
        </>
      ),
    },
    {
      id: 'philosophies',
      title: 'Två olika filosofier',
      content: (
        <SlideTwoColumn
          left={
            <>
              <SlideHeading>Bitnami PostgreSQL</SlideHeading>
              <SlideList>
                <SlideListItem>StatefulSets</SlideListItem>
                <SlideListItem>Generisk konfiguration</SlideListItem>
                <SlideListItem>Manuell skalning</SlideListItem>
                <SlideListItem>Begränsad automation</SlideListItem>
                <SlideListItem>"One-size-fits-all"</SlideListItem>
              </SlideList>
            </>
          }
          right={
            <>
              <SlideHeading>CloudNativePG</SlideHeading>
              <SlideList>
                <SlideListItem>CRDs för deklarativ hantering</SlideListItem>
                <SlideListItem>Automatisk failover</SlideListItem>
                <SlideListItem>Native streaming replication</SlideListItem>
                <SlideListItem>Inbyggd backup/restore</SlideListItem>
                <SlideListItem>PostgreSQL-specifik optimering</SlideListItem>
              </SlideList>
            </>
          }
        />
      ),
    },
    {
      id: 'installation',
      title: 'Installation med Helm',
      content: (
        <SlideTwoColumn
          left={
            <>
              <SlideHeading>Bitnami (snabb start)</SlideHeading>
              <SlideCode language="bash">
{`helm repo add bitnami https://charts.bitnami.com/bitnami
helm install postgres bitnami/postgresql \\
  --set auth.postgresPassword=secret \\
  --set auth.database=myapp`}
              </SlideCode>
            </>
          }
          right={
            <>
              <SlideHeading>CloudNativePG (produktion)</SlideHeading>
              <SlideCode language="bash">
{`helm repo add cloudnative-pg \\
  https://cloudnative-pg.github.io/charts
helm install cnpg cloudnative-pg/cloudnative-pg \\
  --namespace cnpg-system --create-namespace`}
              </SlideCode>
            </>
          }
        />
      ),
    },
    {
      id: 'architecture-1',
      title: 'Arkitekturval: Multi-tenancy',
      content: (
        <>
          <SlideHeading>Alternativ 1: Ett kluster per applikation</SlideHeading>
          <SlideCode language="text">
{`┌─────────────┐    ┌─────────────┐
│   odoo-ns   │    │ keycloak-ns │
│ ┌─────────┐ │    │ ┌─────────┐ │
│ │postgres │ │    │ │postgres │ │
│ │  odoo   │ │    │ │keycloak │ │
│ └─────────┘ │    │ └─────────┘ │
└─────────────┘    └─────────────┘`}
          </SlideCode>
          <SlideText><SlideHighlight color="green">✅ Full isolering</SlideHighlight> | <SlideHighlight color="yellow">❌ Högre kostnad</SlideHighlight></SlideText>
        </>
      ),
    },
    {
      id: 'architecture-2',
      title: 'Arkitekturval: Multi-tenancy',
      content: (
        <>
          <SlideHeading>Alternativ 2: En databas per applikation i delat kluster</SlideHeading>
          <SlideCode language="text">
{`┌─────────────────────────────────┐
│          postgres-ns            │
│  ┌─────────────────────────┐    │
│  │   shared-postgres       │    │
│  │ ┌─────┐ ┌─────────────┐ │    │
│  │ │odoo │ │  keycloak   │ │    │
│  │ │ db  │ │    db       │ │    │
│  │ └─────┘ └─────────────┘ │    │
│  └─────────────────────────┘    │
└─────────────────────────────────┘`}
          </SlideCode>
          <SlideText><SlideHighlight color="green">✅ Resurseffektivt</SlideHighlight> | <SlideHighlight color="yellow">❌ Delad version</SlideHighlight></SlideText>
        </>
      ),
    },
    {
      id: 'recommendations',
      title: 'Rekommendation: Välj baserat på behov',
      content: (
        <SlideTable
          headers={['Scenario', 'Rekommendation', 'Anledning']}
          rows={[
            ['Små team, få appar', <SlideHighlight color="green">Delat kluster</SlideHighlight>, 'Kostnadseffektivt'],
            ['Enterprise, många appar', <SlideHighlight color="green">Ett kluster per app</SlideHighlight>, 'Full isolering'],
            ['Dev/Test miljöer', <SlideHighlight color="green">Delat kluster</SlideHighlight>, 'Snabbt och billigt'],
            ['Produktion, kritiska appar', <SlideHighlight color="green">Ett kluster per app</SlideHighlight>, 'Zero blast radius'],
          ]}
        />
      ),
    },
    {
      id: 'simple-setup',
      title: 'Enkel development setup',
      content: (
        <>
          <SlideCode language="yaml">
{`apiVersion: postgresql.cnpg.io/v1
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
    size: 10Gi`}
          </SlideCode>
          <SlideText><SlideHighlight color="green">✅ Klart på 2 minuter!</SlideHighlight></SlideText>
        </>
      ),
    },
    {
      id: 'production-setup',
      title: 'Production setup med HA',
      content: (
        <>
          <SlideCode language="yaml">
{`apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgres-prod
  namespace: production
spec:
  instances: 3                    # 1 primary + 2 replicas
  primaryUpdateStrategy: unsupervised  # Automatisk failover
  
  backup:
    retentionPolicy: "30d"
    barmanObjectStore:
      destinationPath: "s3://company-backups/postgres-prod"
      
  monitoring:
    enabled: true`}
          </SlideCode>
          <SlideText><SlideHighlight color="green">✅ Enterprise-grade på 5 minuter!</SlideHighlight></SlideText>
        </>
      ),
    },
    {
      id: 'connections',
      title: 'Connection strings',
      content: (
        <>
          <SlideCode language="text">
{`# Standard format
postgresql://user:password@cluster-rw.namespace.svc.cluster.local:5432/database?sslmode=require

# Exempel för vår setup
postgresql://app_user:password@postgres-prod-rw.production.svc.cluster.local:5432/app_prod?sslmode=require`}
          </SlideCode>
          <SlideText><strong>Automatiskt skapade services:</strong></SlideText>
          <SlideList>
            <SlideListItem><code>postgres-prod-rw</code> - Primary för writes</SlideListItem>
            <SlideListItem><code>postgres-prod-ro</code> - Load-balanced reads</SlideListItem>
            <SlideListItem><code>postgres-prod-r</code> - Round-robin alla instanser</SlideListItem>
          </SlideList>
        </>
      ),
    },
    {
      id: 'scaling',
      title: 'Skalning och read/write separation',
      content: (
        <>
          <SlideCode language="bash">
{`# Skala upp read replicas
kubectl patch cluster postgres-prod --type='merge' -p '{"spec":{"instances":5}}'

# Skapar automatiskt:
# - 1 primary (writes)
# - 4 replicas (reads)`}
          </SlideCode>
          <SlideText><strong>Application code:</strong></SlideText>
          <SlideCode language="typescript">
{`// Writes → postgres-prod-rw
const writeUrl = process.env.DATABASE_WRITE_URL

// Reads → postgres-prod-ro  
const readUrl = process.env.DATABASE_READ_URL`}
          </SlideCode>
        </>
      ),
    },
    {
      id: 'backup',
      title: 'Automatisk backup och recovery',
      content: (
        <>
          <SlideCode language="yaml">
{`# Schemalagd backup
apiVersion: postgresql.cnpg.io/v1
kind: ScheduledBackup
metadata:
  name: daily-backup
spec:
  schedule: "0 2 * * *"  # Varje natt kl 02:00
  cluster:
    name: postgres-prod
  retentionPolicy: "30d"`}
          </SlideCode>
          <SlideList>
            <SlideListItem color="green">✅ Continuous WAL archiving</SlideListItem>
            <SlideListItem color="green">✅ Point-in-time recovery</SlideListItem>
            <SlideListItem color="green">✅ Cross-region disaster recovery</SlideListItem>
          </SlideList>
        </>
      ),
    },
    {
      id: 'monitoring',
      title: 'Monitoring och observability',
      content: (
        <>
          <SlideText><strong>Inbyggda metrics:</strong></SlideText>
          <SlideList>
            <SlideListItem>📊 Connection count</SlideListItem>
            <SlideListItem>📈 Transaction rates</SlideListItem>
            <SlideListItem>⏱️ Replication lag</SlideListItem>
            <SlideListItem>💾 Database size</SlideListItem>
            <SlideListItem>🎯 Cache hit ratio</SlideListItem>
          </SlideList>
          <SlideCode language="bash">
{`# Prometheus exporter
kubectl get service postgres-prod -o jsonpath='{.spec.metrics}'`}
          </SlideCode>
        </>
      ),
    },
    {
      id: 'security',
      title: 'Security best practices',
      content: (
        <>
          <SlideList>
            <SlideListItem icon="🔒"><strong>TLS encryption</strong> med cert-manager integration</SlideListItem>
            <SlideListItem icon="👥"><strong>RBAC</strong> för access control</SlideListItem>
            <SlideListItem icon="📝"><strong>Audit logging</strong> med PGAudit</SlideListItem>
            <SlideListItem icon="🌐"><strong>Network policies</strong> för isolering</SlideListItem>
            <SlideListItem icon="🛡️"><strong>Pod security</strong> policies</SlideListItem>
          </SlideList>
          <SlideCode language="yaml">
{`# Enable TLS
certificates:
  serverTLSSecret: postgres-server-tls
  replicationTLSSecret: postgres-replication-tls`}
          </SlideCode>
        </>
      ),
    },
    {
      id: 'migration',
      title: 'Migration från Bitnami',
      content: (
        <SlideCode language="bash">
{`# 1. Backup befintlig databas
kubectl exec -it bitnami-postgresql-0 -- pg_dump > backup.sql

# 2. Installera CloudNativePG
helm install cnpg cloudnative-pg/cloudnative-pg

# 3. Skapa nytt cluster
kubectl apply -f cluster-prod.yaml

# 4. Restore data
kubectl exec -it postgres-prod-1 -- psql < backup.sql

# 5. Uppdatera connection strings
# Byt: bitnami-postgresql → postgres-prod-rw`}
        </SlideCode>
      ),
    },
    {
      id: 'cost',
      title: 'Kostnadsjämförelse',
      content: (
        <SlideTable
          headers={['Aspekt', 'Bitnami', 'CloudNativePG']}
          rows={[
            ['Initial setup', '2 timmar', '4 timmar'],
            ['Produktionssättning', <SlideHighlight color="red">40 timmar</SlideHighlight>, <SlideHighlight color="green">8 timmar</SlideHighlight>],
            ['Drift (1 år)', <SlideHighlight color="red">200 timmar</SlideHighlight>, <SlideHighlight color="green">20 timmar</SlideHighlight>],
            ['<strong>Totalt första året</strong>', <SlideHighlight color="red">242 timmar</SlideHighlight>, <SlideHighlight color="green">32 timmar</SlideHighlight>],
          ]}
        />
      ),
    },
    {
      id: 'when-choose',
      title: 'När ska du välja vad?',
      content: (
        <SlideTwoColumn
          left={
            <>
              <SlideHeading color="green">✅ Välj CloudNativePG</SlideHeading>
              <SlideList>
                <SlideListItem>Produktionsklar HA</SlideListItem>
                <SlideListItem>Enterprise backup</SlideListItem>
                <SlideListItem>Declarative management</SlideListItem>
                <SlideListItem>Native K8s integration</SlideListItem>
                <SlideListItem>Multi-version support</SlideListItem>
                <SlideListItem>Skalbarhet från dev→prod</SlideListItem>
              </SlideList>
            </>
          }
          right={
            <>
              <SlideHeading color="yellow">⚠️ Välj Bitnami</SlideHeading>
              <SlideList>
                <SlideListItem>Snabb prototype</SlideListItem>
                <SlideListItem>Enkel installation</SlideListItem>
                <SlideListItem>Accepterar version lock-in</SlideListItem>
                <SlideListItem>Generisk databas</SlideListItem>
                <SlideListItem><strong>Byt innan produktion!</strong></SlideListItem>
              </SlideList>
            </>
          }
        />
      ),
    },
    {
      id: 'takeaways',
      title: 'Key Takeaways',
      center: true,
      content: (
        <>
          <SlideText large center>
            <SlideHighlight color="blue">🎯 Frågan är inte OM du ska använda en PostgreSQL operator, utan NÄR</SlideHighlight>
          </SlideText>
          <SlideList>
            <SlideListItem>🚀 <strong>CloudNativePG</strong> = Arkitektonisk uppgradering</SlideListItem>
            <SlideListItem>💡 <strong>Bitnami</strong> = Bra för prototyping, dåligt för produktion</SlideListItem>
            <SlideListItem>⚡ <strong>Version lock-in</strong> kan kosta mer än hela implementationen</SlideListItem>
            <SlideListItem>🏗️ <strong>Hybrid approach</strong> = Bästa av två världar</SlideListItem>
          </SlideList>
        </>
      ),
    },
    {
      id: 'future',
      title: 'The future of database operations is...',
      center: true,
      content: (
        <>
          <SlideTitle large center>Declarative</SlideTitle>
          <SlideTitle large center>Automated</SlideTitle>
          <SlideTitle large center>Cloud-native</SlideTitle>
          <SlideText large center>
            <SlideHighlight color="blue">CloudNativePG isn't just keeping up with that future—it's defining it.</SlideHighlight>
          </SlideText>
        </>
      ),
    },
    {
      id: 'questions',
      title: 'Frågor?',
      center: true,
      content: (
        <>
          <SlideText large center>📧 christian@landgren.nu</SlideText>
          <SlideText large center>🌐 berget.ai</SlideText>
          <SlideText large center>💬 Kontakta oss för kostnadsfri konsultation!</SlideText>
        </>
      ),
    },
    {
      id: 'thanks',
      title: 'Tack!',
      center: true,
      content: (
        <>
          <SlideText large center>Läs hela blogginlägget på:</SlideText>
          <SlideText large center>
            <SlideHighlight color="blue">berget.ai/blog/cloudnativepg-vs-bitnami-postgresql</SlideHighlight>
          </SlideText>
        </>
      ),
    },
  ];

  return (
    <BlogPresentationMain
      title="CloudNativePG vs Bitnami PostgreSQL"
      subtitle="Varför välja en native operator för din databas"
      author="Christian Landgren"
      slides={slides}
      theme="white"
      transition="slide"
      showProgress={true}
      showControls={true}
      enableKeyboard={true}
      enableTouch={true}
      loop={false}
    />
  );
};

export default CloudNativePGPresentation;