import { motion } from 'motion/react'
import { GitBranch, Cloud, Link2, Cpu, Network, Shield } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section, SectionHeader } from '@berget-ai/ui'

export function Overview() {
  const { t } = useTranslation()

  return (
    <Section padding="xl" className="overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />
      <SectionHeader
        tagline="GitOps Architecture"
        title={t('overview.whatIsGitOps.title')}
        description={t('overview.whatIsGitOps.description')}
      />

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
              <GitBranch className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-ovo mb-2">
              {t('overview.gitRepository.title')}
            </h3>
            <p className="text-white/80 mb-4">
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
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-ovo mb-2">
              {t('overview.bergetCluster.title')}
            </h3>
            <p className="text-white/80 mb-4">
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
              <Link2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-ovo mb-2">
              {t('overview.aiApis.title')}
            </h3>
            <p className="text-white/80 mb-4">
              {t('overview.aiApis.description')}
            </p>
            <div className="text-sm text-white/40">
              {t('overview.aiApis.hybridCloud')}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5">
            <Network className="w-5 h-5 text-white" />
            <span className="text-sm text-white/60">Network Isolation</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-sm text-white/60">Encrypted Storage</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5">
            <Cloud className="w-5 h-5 text-white" />
            <span className="text-sm text-white/60">Multi-Cloud Support</span>
          </div>
        </div>
      </div>
    </Section>
  )
}
