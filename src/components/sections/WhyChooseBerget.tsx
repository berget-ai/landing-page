import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Shield, Server, Lock } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function WhyChooseBerget() {
  const { t } = useTranslation()

  return (
    <section className="py-24 relative bg-white/[0.02] border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-medium mb-4">{t('whyBerget.title')}</h2>
          <p className="text-lg text-white/60">
            {t('whyBerget.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* European Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
          >
            <Globe className="w-6 h-6 mb-4" />
            <h3 className="text-xl font-medium mb-3">{t('whyBerget.features.european.title')}</h3>
            <p className="text-white/60">
              {t('whyBerget.features.european.description')}
            </p>
          </motion.div>

          {/* Security & Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
          >
            <Shield className="w-6 h-6 mb-4" />
            <h3 className="text-xl font-medium mb-3">{t('whyBerget.features.security.title')}</h3>
            <p className="text-white/60">
              {t('whyBerget.features.security.description')}
            </p>
          </motion.div>

          {/* Alternative to Public Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
          >
            <Server className="w-6 h-6 mb-4" />
            <h3 className="text-xl font-medium mb-3">{t('whyBerget.features.alternative.title')}</h3>
            <p className="text-white/60">
              {t('whyBerget.features.alternative.description')}
            </p>
          </motion.div>

          {/* Data Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
          >
            <Lock className="w-6 h-6 mb-4" />
            <h3 className="text-xl font-medium mb-3">{t('whyBerget.features.privacy.title')}</h3>
            <p className="text-white/60">
              {t('whyBerget.features.privacy.description')}
            </p>
          </motion.div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="secondary">
            <Link to="/why-berget">
              {t('whyBerget.discoverMore')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
