import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Shield, Server, Lock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'

export function WhyChooseBerget() {
  const { t } = useTranslation()

  const features = [
    {
      Icon: Globe,
      name: t('whyBergetSection.features.european.title'),
      description: t('whyBergetSection.features.european.description'),
      href: "/why-berget",
      cta: t('whyBergetSection.learnMore'),
      background: (
        <img 
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop" 
          alt="European Innovation" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
        />
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: Shield,
      name: t('whyBergetSection.features.security.title'),
      description: t('whyBergetSection.features.security.description'),
      href: "/why-berget",
      cta: t('whyBergetSection.learnMore'),
      background: (
        <img 
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop" 
          alt="Security and Privacy" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
        />
      ),
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: Server,
      name: t('whyBergetSection.features.alternative.title'),
      description: t('whyBergetSection.features.alternative.description'),
      href: "/why-berget",
      cta: t('whyBergetSection.learnMore'),
      background: (
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop" 
          alt="Alternative to Public Cloud" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
        />
      ),
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Lock,
      name: t('whyBergetSection.features.privacy.title'),
      description: t('whyBergetSection.features.privacy.description'),
      href: "/why-berget",
      cta: t('whyBergetSection.learnMore'),
      background: (
        <img 
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop" 
          alt="Data Privacy" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
        />
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-6xl mx-auto"
        >
          <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </motion.div>

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
