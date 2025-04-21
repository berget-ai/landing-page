import { motion } from 'framer-motion'
import { Cloud, Server, Cpu, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function ProductFeatures() {
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
            <h2 className="text-3xl md:text-4xl font-ovo mb-6">{t('products.hero.title')}</h2>
            <p className="text-xl text-white/80">
              {t('products.hero.description')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Serverless Inference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-[#74C69D]/20 h-full">
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-8">
                <Cloud className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-ovo mb-4">{t('products.serverless.title')}</h3>
              <p className="text-white/80 mb-6">{t('products.serverless.description')}</p>
              <ul className="space-y-3">
                {(t('products.serverless.features.integration.items', { returnObjects: true }) as string[]).map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                    </div>
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Dedicated Inference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-[#74C69D]/20 h-full">
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-8">
                <Server className="w-7 h-7 text-white" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-ovo">{t('products.dedicated.title')}</h3>
                <span className="px-4 py-1 text-xs font-medium bg-[#52B788]/10 text-[#52B788] rounded-full whitespace-nowrap">Coming Soon</span>
              </div>
              <p className="text-white/80 mb-6">{t('products.dedicated.description')}</p>
              <ul className="space-y-3">
                {(t('products.dedicated.features.deployment.items', { returnObjects: true }) as string[]).map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                    </div>
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Complete Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-[#74C69D]/20 h-full">
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-8">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-ovo">{t('products.platform.title')}</h3>
                <span className="px-4 py-1 text-xs font-medium bg-[#52B788]/10 text-[#52B788] rounded-full whitespace-nowrap">Coming Soon</span>
              </div>
              <p className="text-white/80 mb-6">{t('products.platform.description')}</p>
              <ul className="space-y-3">
                {(t('products.platform.features.toolset.items', { returnObjects: true }) as string[]).map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                    </div>
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/products">
              {t('products.hero.exploreMore')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
