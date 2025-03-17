import { motion } from 'framer-motion'
import { Cloud, Server, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function ProductFeatures() {
  const { t } = useTranslation()

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-medium mb-4">
            {t('products.hero.title')}
          </h2>
          <p className="text-lg text-white/60">
            {t('products.hero.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Serverless Inference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
          >
            <Cloud className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-medium mb-3">
              {t('products.serverless.title')}
            </h3>
            <p className="text-white/60 mb-4">
              {t('products.serverless.description')}
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-sm text-white/60">
                • {t('products.serverless.features.integration.title')}
              </li>
              <li className="text-sm text-white/60">
                • {t('products.serverless.features.usage.title')}
              </li>
              <li className="text-sm text-white/60">
                • {t('products.serverless.features.infrastructure.title')}
              </li>
            </ul>
          </motion.div>

          {/* Dedicated Inference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
          >
            <Server className="w-8 h-8 mb-4 text-purple-400" />
            <h3 className="text-xl font-medium mb-3">
              {t('products.dedicated.title')}
            </h3>
            <p className="text-white/60 mb-4">
              {t('products.dedicated.description')}
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-sm text-white/60">
                • {t('products.dedicated.features.deployment.title')}
              </li>
              <li className="text-sm text-white/60">
                • {t('products.dedicated.features.control.title')}
              </li>
              <li className="text-sm text-white/60">
                • {t('products.dedicated.features.performance.title')}
              </li>
            </ul>
          </motion.div>

          {/* Complete Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
          >
            <Cpu className="w-8 h-8 mb-4 text-emerald-400" />
            <h3 className="text-xl font-medium mb-3">
              {t('products.platform.title')}
            </h3>
            <p className="text-white/60 mb-4">
              {t('products.platform.description')}
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-sm text-white/60">
                • {t('products.platform.features.toolset.title')}
              </li>
              <li className="text-sm text-white/60">
                • {t('products.platform.features.services.title')}
              </li>
              <li className="text-sm text-white/60">
                • {t('products.platform.features.infrastructure.title')}
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/products">
              {t('products.hero.exploreMore')}
              <Cloud className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
