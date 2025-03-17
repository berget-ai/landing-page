import { motion } from 'framer-motion'
import { Github, Lock, Database, Server, Cpu, GitBranch, Cloud, Link2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModelsSection } from '@/components/sections/ModelsSection'
import { useTranslation } from 'react-i18next'

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
              Built by Developers for Developers
            </h1>
            <p className="text-xl text-white/60 mb-8">
              A flexible and developer-friendly platform designed for efficiency, scalability, and control.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto space-y-24">
          {/* Full Flexibility and Control */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                <Github className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Full Flexibility and Control</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Simple user experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>No-lock-in, everything is synched with GitHub so you can move at any time</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>No forced PaaS —choose the services you need and pay only for the resources they use</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Empower your workflow with seamless infrastructure management</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Security & Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Security & Privacy Built In</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Developed with OWASP standards to ensure top-tier security</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Inference runs entirely within our secure network—your data never traverses the internet</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Zero retention—your data is never stored or retained</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Resource Control */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-orange-500/5 via-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6">
                <Server className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Resource Control and Persistence</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Define your entire infrastructure as code, synced to GitHub for full back-up and fallback</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Persistent environments, while you only incur charges for consumed resources</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Manage your organization's resources with ease—role-based access, organization-wide quotas, and full cost transparency</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Transparent Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-green-500/5 via-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Transparent Pricing</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Pay only for the resources you consume—no hidden service fees</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Full visibility and control over resource allocation and costs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Start small and scale effortlessly as your needs grow</span>
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
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 mb-6">
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
                    className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="mb-4">
                      <GitBranch className="w-8 h-8 text-blue-400" />
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
                    className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="mb-4">
                      <Cpu className="w-8 h-8 text-purple-400" />
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
                    className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="mb-4">
                      <Link2 className="w-8 h-8 text-green-400" />
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
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5">
                    <Database className="w-5 h-5 text-white/60" />
                    <span className="text-sm text-white/60">Dedicated Databases</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5">
                    <Lock className="w-5 h-5 text-white/60" />
                    <span className="text-sm text-white/60">Encrypted Storage</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5">
                    <Cloud className="w-5 h-5 text-white/60" />
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
            <h2 className="text-3xl font-medium mb-6">Ready to Start Building?</h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Join the growing community of developers building the future of AI with Berget.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="secondary">View Documentation</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
