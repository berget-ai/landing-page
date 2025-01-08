import { motion } from 'framer-motion'
import { Shield, Lock, FileCheck, Scale, Building } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

export function Compliance() {
  const { t } = useTranslation()

  const regulations = [
    {
      name: t('compliance.regulations.gdpr.name'),
      description: t('compliance.regulations.gdpr.description'),
      icon: Shield,
      benefits: t('compliance.regulations.gdpr.benefits', {
        returnObjects: true,
      }),
    },
    {
      name: t('compliance.regulations.nis2.name'),
      description: t('compliance.regulations.nis2.description'),
      icon: Lock,
      benefits: t('compliance.regulations.nis2.benefits', {
        returnObjects: true,
      }),
    },
    {
      name: t('compliance.regulations.schrems2.name'),
      description: t('compliance.regulations.schrems2.description'),
      icon: Scale,
      benefits: t('compliance.regulations.schrems2.benefits', {
        returnObjects: true,
      }),
    },
    {
      name: t('compliance.regulations.iso27001.name'),
      description: t('compliance.regulations.iso27001.description'),
      icon: FileCheck,
      benefits: t('compliance.regulations.iso27001.benefits', {
        returnObjects: true,
      }),
    },
    {
      name: t('compliance.regulations.dora.name'),
      description: t('compliance.regulations.dora.description'),
      icon: Building,
      benefits: t('compliance.regulations.dora.benefits', {
        returnObjects: true,
      }),
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

          <h2 className="text-3xl font-medium mb-4">{t('compliance.title')}</h2>

          <p className="text-lg text-white/60">{t('compliance.description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regulations.map((regulation, index) => (
            <motion.div
              key={regulation.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent group-hover:from-white/10 transition-colors" />

              <div className="relative p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors h-full">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  <regulation.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-medium mb-2">{regulation.name}</h3>
                <p className="text-white/60 mb-6">{regulation.description}</p>

                <ul className="space-y-2">
                  {regulation.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-sm text-white/60"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="max-w-2xl text-center">
            <p className="text-lg text-white/60 mb-6">
              {t('compliance.callToAction')}
            </p>
            <Button size="lg" variant="secondary">
              {t('compliance.learnMore')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
