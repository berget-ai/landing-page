import { motion } from 'framer-motion'
import { Shield, Network, Lock } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function ComplianceSection() {
  const { t } = useTranslation()

  return (
    <section className="py-32 relative bg-[#2D6A4F]/5 border-y border-[#40916C]/20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background opacity-30" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-sm mb-6">
              <Shield className="w-4 h-4 text-white" />
              <span>{t('compliance.tagline')}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-ovo mb-6">
              {t('compliance.title')}
            </h2>

            <p className="text-xl text-white/80">
              {t('compliance.description')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* GDPR Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-green/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-[#74C69D]/20 h-full">
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-8">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-ovo mb-4">{t('compliance.regulations.gdpr.name')}</h3>
              <p className="text-white/80 mb-6">{t('compliance.regulations.gdpr.description')}</p>
              <ul className="space-y-3">
                {(Array.isArray(t('compliance.regulations.gdpr.benefits', { returnObjects: true }))
                  ? t('compliance.regulations.gdpr.benefits', { returnObjects: true }) as string[]
                  : [] as string[]
                ).map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                    </div>
                    <span className="text-sm text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* NIS2 Ready */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-green/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-[#74C69D]/20 h-full">
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-8">
                <Network className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-ovo mb-4">{t('compliance.regulations.nis2.name')}</h3>
              <p className="text-white/80 mb-6">{t('compliance.regulations.nis2.description')}</p>
              <ul className="space-y-3">
                {(Array.isArray(t('compliance.regulations.nis2.benefits', { returnObjects: true }))
                  ? t('compliance.regulations.nis2.benefits', { returnObjects: true }) as string[]
                  : [] as string[]
                ).map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                    </div>
                    <span className="text-sm text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Schrems II */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-green/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-[#74C69D]/20 h-full">
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-8">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-ovo mb-4">{t('compliance.regulations.schrems2.name')}</h3>
              <p className="text-white/80 mb-6">{t('compliance.regulations.schrems2.description')}</p>
              <ul className="space-y-3">
                {(Array.isArray(t('compliance.regulations.schrems2.benefits', { returnObjects: true }))
                  ? t('compliance.regulations.schrems2.benefits', { returnObjects: true }) as string[]
                  : [] as string[]
                ).map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                    </div>
                    <span className="text-sm text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
