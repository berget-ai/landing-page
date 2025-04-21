import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Shield, Server, Lock } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function WhyChooseBerget() {
  const { t } = useTranslation()

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-30" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-ovo mb-6 tracking-tight">{t('whyBergetSection.title')}</h2>
          <p className="text-xl text-white/80 leading-relaxed">
            {t('whyBergetSection.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 max-w-6xl mx-auto">
          {/* European Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl group"
          >
            <div className="absolute inset-0 bg-black/40 z-10 transition-opacity group-hover:opacity-60" />
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop" 
              alt="European Innovation" 
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-20 p-8 h-full flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-auto">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div className="mt-auto">
                <h3 className="text-2xl font-ovo mb-4 text-white">{t('whyBergetSection.features.european.title')}</h3>
                <p className="text-lg text-white/90 backdrop-blur-sm bg-black/20 p-4 rounded-xl">
                  {t('whyBergetSection.features.european.description')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Security & Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl group"
          >
            <div className="absolute inset-0 bg-black/40 z-10 transition-opacity group-hover:opacity-60" />
            <img 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop" 
              alt="Security and Privacy" 
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-20 p-8 h-full flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-auto">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div className="mt-auto">
                <h3 className="text-2xl font-ovo mb-4 text-white">{t('whyBergetSection.features.security.title')}</h3>
                <p className="text-lg text-white/90 backdrop-blur-sm bg-black/20 p-4 rounded-xl">
                  {t('whyBergetSection.features.security.description')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Alternative to Public Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl group"
          >
            <div className="absolute inset-0 bg-black/40 z-10 transition-opacity group-hover:opacity-60" />
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop" 
              alt="Alternative to Public Cloud" 
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-20 p-8 h-full flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-auto">
                <Server className="w-7 h-7 text-white" />
              </div>
              <div className="mt-auto">
                <h3 className="text-2xl font-ovo mb-4 text-white">{t('whyBergetSection.features.alternative.title')}</h3>
                <p className="text-lg text-white/90 backdrop-blur-sm bg-black/20 p-4 rounded-xl">
                  {t('whyBergetSection.features.alternative.description')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Data Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl group"
          >
            <div className="absolute inset-0 bg-black/40 z-10 transition-opacity group-hover:opacity-60" />
            <img 
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop" 
              alt="Data Privacy" 
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-20 p-8 h-full flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-auto">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <div className="mt-auto">
                <h3 className="text-2xl font-ovo mb-4 text-white">{t('whyBergetSection.features.privacy.title')}</h3>
                <p className="text-lg text-white/90 backdrop-blur-sm bg-black/20 p-4 rounded-xl">
                  {t('whyBergetSection.features.privacy.description')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="px-8 py-6 text-lg">
            <Link to="/why-berget">
              {t('whyBergetSection.discoverMore')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
