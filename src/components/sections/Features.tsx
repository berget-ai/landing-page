import { motion } from 'framer-motion'
import { Globe, Shield, Server, Lock, Check } from 'lucide-react'
import { t } from 'i18next'

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto space-y-24">
      {/* European Innovation & Sovereignty */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative group"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative p-12 rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-white/10">
          <div className="flex items-start gap-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#52B788] to-[#74C69D] flex items-center justify-center shrink-0">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-6">
                {t('whyBerget.features.european.title')}
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed text-lg">
                {t('whyBerget.features.european.description')}
              </p>
              <ul className="space-y-6">
                {(
                  t('whyBerget.features.european.points', {
                    returnObjects: true,
                  }) as string[]
                ).map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                      <Check className="w-5 h-5 text-[#52B788]" />
                    </div>
                    <span className="text-lg text-white/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative group"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative p-12 rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-white/10">
          <div className="flex items-start gap-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#52B788] to-[#74C69D] flex items-center justify-center shrink-0">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-6">
                {t('whyBerget.features.privacy.title')}
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed text-lg">
                {t('whyBerget.features.privacy.description')}
              </p>
              <ul className="space-y-6">
                {(
                  t('whyBerget.features.privacy.points', {
                    returnObjects: true,
                  }) as string[]
                ).map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                      <Check className="w-5 h-5 text-[#52B788]" />
                    </div>
                    <span className="text-lg text-white/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="relative group"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#2D6A4F]/5 via-[#40916C]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative p-12 rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-white/10">
          <div className="flex items-start gap-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFB700] to-[#FFB700]/80 flex items-center justify-center shrink-0">
              <Server className="w-8 h-8 text-[#1A1A1A]" />
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-6">
                {t('whyBerget.features.alternative.title')}
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed text-lg">
                {t('whyBerget.features.alternative.description')}
              </p>
              <ul className="space-y-6">
                {(
                  t('whyBerget.features.alternative.points', {
                    returnObjects: true,
                  }) as string[]
                ).map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                      <Check className="w-5 h-5 text-[#52B788]" />
                    </div>
                    <span className="text-lg text-white/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Security & Privacy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="relative group"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative p-12 rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-white/10">
          <div className="flex items-start gap-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#74C69D] to-[#52B788] flex items-center justify-center shrink-0">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-6">
                {t('whyBerget.features.security.title')}
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed text-lg">
                {t('whyBerget.features.security.description')}
              </p>
              <ul className="space-y-6">
                {(
                  t('whyBerget.features.security.points', {
                    returnObjects: true,
                  }) as string[]
                ).map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                      <Check className="w-5 h-5 text-[#52B788]" />
                    </div>
                    <span className="text-lg text-white/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
