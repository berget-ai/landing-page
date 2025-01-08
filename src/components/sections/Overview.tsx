import { motion } from 'framer-motion'
import { GitBranch, Database, Shield, Cloud, Link2, Cpu } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function Overview() {
  const { t } = useTranslation()

  return (
    <section className="py-32 relative overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 mb-6">
            <GitBranch className="w-4 h-4 mr-2" />
            <span className="text-sm">GitOps Architecture</span>
          </div>
          <h2 className="text-4xl font-medium mb-6">
            {t('overview.whatIsGitOps.title')}
          </h2>
          <p className="text-lg text-white/60">
            {t('overview.whatIsGitOps.description')}
          </p>
        </div>

        <div className="relative">
          {/* GitOps SVG Illustration */}

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
              <Shield className="w-5 h-5 text-white/60" />
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
  )
}
