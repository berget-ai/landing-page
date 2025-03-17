import { motion } from 'framer-motion'
import { Github, Lock, Database, Server, Cpu, GitBranch, Cloud, Link2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModelsSection } from '@/components/sections/ModelsSection'
import { useTranslation } from 'react-i18next'
import { TerminalCarousel } from '@/components/terminal/TerminalCarousel'

export default function DevelopersPage() {
  const { t } = useTranslation()
  
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/50">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] pointer-events-none" />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-medium mb-6">
              Infrastruktur för AI-utvecklare
            </h1>
            <p className="text-xl text-white/60 mb-8">
              Kör dina AI-modeller och applikationer i en säker, EU-baserad miljö med full kontroll över din kod och data.
            </p>
          </div>
          
          <div className="mt-16">
            <TerminalCarousel />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto space-y-24">
          {/* GitOps Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#2D6A4F]/5 via-[#40916C]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-[#40916C]/20">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2D6A4F] to-[#40916C] flex items-center justify-center mb-6">
                <Github className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">GitOps-baserad infrastruktur</h2>
              <p className="text-white/80 mb-4">
                Slipp komplexa Terraform-skript och AWS-konsolen. Definiera din infrastruktur med enkla YAML-filer i ditt Git-repo.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span><strong>Automatisk synkronisering</strong> - ändringar i ditt repo appliceras automatiskt på din infrastruktur</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span><strong>Versionskontroll</strong> - full historik och möjlighet att rulla tillbaka ändringar</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span><strong>Portabilitet</strong> - din infrastruktur är definierad i kod som kan flyttas mellan miljöer</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span><strong>CI/CD-integration</strong> - koppla ihop med dina befintliga CI/CD-pipelines</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* OpenAI-kompatibelt API */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#2D6A4F]/5 via-[#40916C]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-[#40916C]/20">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2D6A4F] to-[#40916C] flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">OpenAI-kompatibelt API</h2>
              <p className="text-white/80 mb-4">
                Använd samma kod och bibliotek som du redan använder med OpenAI, men med full kontroll över dina data.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span><strong>Minimal kodändring</strong> - byt bara API-nyckel och endpoint för att migrera från OpenAI</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span><strong>Stöd för populära bibliotek</strong> - fungerar med LangChain, LlamaIndex och andra ramverk</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span><strong>GDPR-kompatibelt</strong> - all data stannar inom EU och lagras aldrig</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span><strong>CO₂-spårning</strong> - få information om koldioxidavtryck för varje API-anrop</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Kubernetes-kluster */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#2D6A4F]/5 via-[#40916C]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-[#40916C]/20">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFB700] to-[#FFB700]/80 flex items-center justify-center mb-6">
                <Server className="w-6 h-6 text-[#1A1A1A]" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Kubernetes utan komplexitet</h2>
              <p className="text-white/80 mb-4">
                Få fördelarna med Kubernetes utan att behöva hantera infrastrukturen själv.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span><strong>Förkonfigurerade kluster</strong> - kom igång på minuter istället för dagar</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span><strong>Standardiserade Helm charts</strong> - installera databaser, caching och andra tjänster med ett kommando</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span><strong>GPU-stöd</strong> - kör dina egna modeller på dedikerade GPU:er när du behöver</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span><strong>Autoskalning</strong> - skala automatiskt upp och ner baserat på belastning</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Utvecklarverktyg */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#2D6A4F]/5 via-[#40916C]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-[#40916C]/20">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#40916C] to-[#2D6A4F] flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Utvecklarverktyg som förenklar</h2>
              <p className="text-white/80 mb-4">
                Verktyg som hjälper dig att bygga, testa och driftsätta dina AI-applikationer snabbare.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span><strong>CLI-verktyg</strong> - hantera dina resurser direkt från terminalen</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span><strong>Loggning och övervakning</strong> - inbyggd integration med Prometheus och Grafana</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span><strong>Kostnadsövervakning</strong> - se exakt vad som kostar och optimera dina resurser</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span><strong>Utvecklarmiljöer</strong> - förkonfigurerade miljöer för snabb utveckling</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Models Section */}
          <ModelsSection />
      
          {/* GitOps Section */}
          <section className="py-32 relative overflow-hidden bg-white/[0.02] border-y border-white/5">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#2D6A4F]/10 mb-6">
                  <GitBranch className="w-4 h-4 mr-2" />
                  <span className="text-sm">GitOps</span>
                </div>
                <h2 className="text-4xl font-medium mb-6">
                  Manage infrastructure and applications with GitOps
                </h2>
                <p className="text-lg text-white/60">
                  {t('overview.whatIsGitOps.description')}
                </p>
              </div>

              <div className="relative">
                {/* GitOps Architecture Diagram */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Git Repository */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors"
                  >
                    <div className="mb-4">
                      <GitBranch className="w-8 h-8 text-[#2D6A4F]" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">
                      {t('overview.gitRepository.title')}
                    </h3>
                    <p className="text-white/60 mb-4">
                      {t('overview.gitRepository.description')}
                    </p>
                    <div className="text-sm text-white/40">
                      {t('overview.gitRepository.sync')}
                    </div>
                  </motion.div>

                  {/* Berget Cluster */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="p-6 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors"
                  >
                    <div className="mb-4">
                      <Cpu className="w-8 h-8 text-[#40916C]" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">
                      {t('overview.bergetCluster.title')}
                    </h3>
                    <p className="text-white/60 mb-4">
                      {t('overview.bergetCluster.description')}
                    </p>
                    <div className="text-sm text-white/40">
                      {t('overview.bergetCluster.security')}
                    </div>
                  </motion.div>

                  {/* External Connections */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="p-6 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors"
                  >
                    <div className="mb-4">
                      <Link2 className="w-8 h-8 text-[#FFB700]" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">
                      {t('overview.aiApis.title')}
                    </h3>
                    <p className="text-white/60 mb-4">
                      {t('overview.aiApis.description')}
                    </p>
                    <div className="text-sm text-white/40">
                      {t('overview.aiApis.hybridCloud')}
                    </div>
                  </motion.div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-[#2D6A4F]/5">
                    <Database className="w-5 h-5 text-[#2D6A4F]/80" />
                    <span className="text-sm text-white/60">Dedicated Databases</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-[#2D6A4F]/5">
                    <Lock className="w-5 h-5 text-[#40916C]/80" />
                    <span className="text-sm text-white/60">Encrypted Storage</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-[#2D6A4F]/5">
                    <Cloud className="w-5 h-5 text-[#FFB700]/80" />
                    <span className="text-sm text-white/60">Multi-Cloud Support</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="container mx-auto px-4 py-24 text-center"
          >
            <h2 className="text-3xl font-medium mb-6">Redo att börja bygga?</h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Kom igång på under 5 minuter med vårt CLI-verktyg och bygg din första AI-applikation.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">Skapa konto</Button>
              <Button size="lg" variant="secondary">Läs dokumentationen</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
