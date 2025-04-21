import { motion } from 'framer-motion'
import { Shield, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { SustainabilitySection } from '@/components/sections/SustainabilitySection'
import { PartnerQuotes } from '@/components/sections/PartnerQuotes'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { KeyBenefitsSection } from '@/components/sections/KeyBenefitsSection'
import Features from '@/components/sections/Features'

function WhyBergetPage() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D6A4F]/30 via-background to-background">
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,106,79,0.15)_0%,transparent_70%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#40916C]/15 text-[#52B788] mb-6">
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">
                {t('whyBerget.hero.tagline')}
              </span>
            </div>
            <h1 className="text-5xl font-medium mb-6 leading-tight">
              {t('whyBerget.hero.title')}
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {t('whyBerget.hero.description')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="/signup">
                  {t('whyBerget.hero.getStarted')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg"
                asChild
              >
                <Link to="/contact">{t('whyBerget.hero.bookDemo')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <KeyBenefitsSection />

      {/* Detailed Features */}
      <Features />

      {/* Partner Quotes */}
      <PartnerQuotes />

      {/* Compliance Section */}
      <ComplianceSection />

      {/* Sustainability Section */}
      <SustainabilitySection />

      {/* Call to Action */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              {t('whyBerget.cta.title')}
            </h2>
            <p className="text-lg text-white/60 mb-8">
              {t('whyBerget.cta.description')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="/signup">
                  {t('whyBerget.cta.createAccount')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg"
                asChild
              >
                <Link to="/contact">{t('whyBerget.cta.contactSales')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default WhyBergetPage
