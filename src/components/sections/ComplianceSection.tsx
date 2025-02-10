import { motion } from 'framer-motion'
import { Shield, Network, Lock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

export function ComplianceSection() {
  const { t } = useTranslation()

  const regulations = [
    {
      name: t('compliance.regulations.gdpr.name'),
      description: t('compliance.regulations.gdpr.description'),
      icon: Shield,
      benefits: t('compliance.regulations.gdpr.benefits', { returnObjects: true }) as string[],
    },
    {
      name: t('compliance.regulations.nis2.name'),
      description: t('compliance.regulations.nis2.description'),
      icon: Network,
      benefits: t('compliance.regulations.nis2.benefits', { returnObjects: true }) as string[],
    },
    {
      name: t('compliance.regulations.schrems2.name'),
      description: t('compliance.regulations.schrems2.description'),
      icon: Lock,
      benefits: t('compliance.regulations.schrems2.benefits', { returnObjects: true }) as string[],
    },
  ]

  return (
    <section className="py-32 relative bg-white/[0.02] border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-10 blur-[100px]" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-sm mb-6">
            <Shield className="w-4 h-4" />
            <span>{t('compliance.tagline')}</span>
          </div>

          <h2 className="text-3xl font-medium mb-4">
            {t('compliance.title')}
          </h2>

          <p className="text-lg text-white/60">
            {t('compliance.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regulations.map((regulation, index) => (
            <motion.div
              key={regulation.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
            >
              <regulation.icon className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-medium mb-2">{regulation.name}</h3>
              <p className="text-white/60 mb-4">{regulation.description}</p>
              <ul className="space-y-2">
                {Array.isArray(regulation.benefits) && regulation.benefits.map((benefit: string) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-2 text-sm text-white/60"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="secondary">
            {t('compliance.learnMore')}
          </Button>
        </div>
      </div>
    </section>
  )
}