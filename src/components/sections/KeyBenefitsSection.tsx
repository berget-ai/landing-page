import {
  Check,
  Globe,
  Heart,
  Leaf,
  Library,
  Lock,
  Server,
  Shield,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { t } from 'i18next'

export function KeyBenefitsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#2D6A4F]/5" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              {t('whyBerget.benefits.title')}
            </h2>
            <p className="text-lg text-white/60">
              {t('whyBerget.benefits.description')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-32">
          {/* EU Based */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:bg-white/[0.04] transition-colors"
          >
            <div className="w-14 h-14 flex items-center justify-center mb-8">
              <Library className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-medium mb-4">
              {t('whyBerget.benefits.euBased.title')}
            </h3>
            <p className="text-white/60 mb-6">
              {t('whyBerget.benefits.euBased.description')}
            </p>
            <ul className="space-y-3">
              {(
                t('whyBerget.benefits.euBased.features', {
                  returnObjects: true,
                }) as string[]
              ).map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#52B788]" />
                  </div>
                  <span className="text-sm text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:bg-white/[0.04] transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-medium mb-4">
              {t('whyBerget.benefits.flexible.title')}
            </h3>
            <p className="text-white/60 mb-6">
              {t('whyBerget.benefits.flexible.description')}
            </p>
            <ul className="space-y-3">
              {(
                t('whyBerget.benefits.flexible.features', {
                  returnObjects: true,
                }) as string[]
              ).map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#52B788]" />
                  </div>
                  <span className="text-sm text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sustainable AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:bg-white/[0.04] transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl  flex items-center justify-center mb-8">
              <Leaf className="w-7 h-7 text-[#74C69D]" />
            </div>
            <h3 className="text-xl font-medium mb-4">
              {t('whyBerget.benefits.sustainable.title')}
            </h3>
            <p className="text-white/60 mb-6">
              {t('whyBerget.benefits.sustainable.description')}
            </p>
            <ul className="space-y-3">
              {(
                t('whyBerget.benefits.sustainable.features', {
                  returnObjects: true,
                }) as string[]
              ).map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#52B788]" />
                  </div>
                  <span className="text-sm text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
