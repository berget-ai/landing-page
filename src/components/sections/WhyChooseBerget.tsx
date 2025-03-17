import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Shield, Server, Lock } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function WhyChooseBerget() {
  const { t } = useTranslation()

  return (
    <section className="py-32 relative bg-[#2D6A4F]/5 border-y border-[#40916C]/20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-30" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-[#52B788]">{t('whyBerget.title')}</h2>
          <p className="text-xl md:text-2xl text-white/80">
            {t('whyBerget.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
          {/* European Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#2D6A4F]/10 border border-[#40916C]/20 hover:bg-[#2D6A4F]/15 transition-all duration-300 transform hover:-translate-y-1 h-full"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#52B788] to-[#74C69D] flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#74C69D]">{t('whyBerget.features.european.title')}</h3>
            <p className="text-white/80 text-lg">
              {t('whyBerget.features.european.description')}
            </p>
          </motion.div>

          {/* Security & Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-[#2D6A4F]/10 border border-[#40916C]/20 hover:bg-[#2D6A4F]/15 transition-all duration-300 transform hover:-translate-y-1 h-full"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#52B788] to-[#74C69D] flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#74C69D]">{t('whyBerget.features.security.title')}</h3>
            <p className="text-white/80 text-lg">
              {t('whyBerget.features.security.description')}
            </p>
          </motion.div>

          {/* Alternative to Public Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-[#2D6A4F]/10 border border-[#40916C]/20 hover:bg-[#2D6A4F]/15 transition-all duration-300 transform hover:-translate-y-1 h-full"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFB700] to-[#FFB700]/80 flex items-center justify-center mb-6">
              <Server className="w-7 h-7 text-[#1A1A1A]" />
            </div>
            <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#74C69D]">{t('whyBerget.features.alternative.title')}</h3>
            <p className="text-white/80 text-lg">
              {t('whyBerget.features.alternative.description')}
            </p>
          </motion.div>

          {/* Data Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-2xl bg-[#2D6A4F]/10 border border-[#40916C]/20 hover:bg-[#2D6A4F]/15 transition-all duration-300 transform hover:-translate-y-1 h-full"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#74C69D] to-[#52B788] flex items-center justify-center mb-6">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#74C69D]">{t('whyBerget.features.privacy.title')}</h3>
            <p className="text-white/80 text-lg">
              {t('whyBerget.features.privacy.description')}
            </p>
          </motion.div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="secondary" className="px-8 py-6 text-lg">
            <Link to="/why-berget">
              {t('whyBerget.discoverMore')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
