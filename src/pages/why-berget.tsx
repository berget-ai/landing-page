import { motion } from 'framer-motion'
import { Globe, Shield, Server, Lock, ArrowRight, Check, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { SustainabilitySection } from '@/components/sections/SustainabilitySection'
import { PartnerQuotes } from '@/components/sections/PartnerQuotes'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function WhyBergetPage() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen pt-24">
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
              <span className="text-sm font-medium">{t('whyBerget.hero.tagline')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-medium mb-6 leading-tight">
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
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link to="/contact">{t('whyBerget.hero.bookDemo')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#2D6A4F]/5" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-medium mb-6">{t('whyBerget.benefits.title')}</h2>
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
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#52B788] to-[#74C69D] flex items-center justify-center mb-8">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-4">{t('whyBerget.benefits.euBased.title')}</h3>
              <p className="text-white/60 mb-6">{t('whyBerget.benefits.euBased.description')}</p>
              <ul className="space-y-3">
                {(t('whyBerget.benefits.euBased.features', { returnObjects: true }) as string[]).map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#52B788]" />
                    </div>
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Flexible Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#74C69D] to-[#52B788] flex items-center justify-center mb-8">
                <Server className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-4">{t('whyBerget.benefits.flexible.title')}</h3>
              <p className="text-white/60 mb-6">{t('whyBerget.benefits.flexible.description')}</p>
              <ul className="space-y-3">
                {(t('whyBerget.benefits.flexible.features', { returnObjects: true }) as string[]).map((feature, index) => (
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
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFB700] to-[#FFB700]/80 flex items-center justify-center mb-8">
                <Leaf className="w-7 h-7 text-[#1A1A1A]" />
              </div>
              <h3 className="text-xl font-medium mb-4">{t('whyBerget.benefits.sustainable.title')}</h3>
              <p className="text-white/60 mb-6">{t('whyBerget.benefits.sustainable.description')}</p>
              <ul className="space-y-3">
                {(t('whyBerget.benefits.sustainable.features', { returnObjects: true }) as string[]).map((feature, index) => (
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

          {/* Detailed Features */}
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
                    <h2 className="text-2xl font-medium mb-6">{t('whyBerget.features.european.title')}</h2>
                    <p className="text-white/80 mb-8 leading-relaxed text-lg">
                      {t('whyBerget.features.european.description')}
                    </p>
                    <ul className="space-y-6">
                      {(t('whyBerget.features.european.points', { returnObjects: true }) as string[]).map((point, index) => (
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

            {/* Data Privacy & Compliance */}
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
                    <h2 className="text-2xl font-medium mb-6">{t('whyBerget.features.privacy.title')}</h2>
                    <p className="text-white/80 mb-8 leading-relaxed text-lg">
                      {t('whyBerget.features.privacy.description')}
                    </p>
                    <ul className="space-y-6">
                      {(t('whyBerget.features.privacy.points', { returnObjects: true }) as string[]).map((point, index) => (
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

            {/* Alternative to Public Cloud */}
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
                    <h2 className="text-2xl font-medium mb-6">{t('whyBerget.features.alternative.title')}</h2>
                    <p className="text-white/80 mb-8 leading-relaxed text-lg">
                      {t('whyBerget.features.alternative.description')}
                    </p>
                    <ul className="space-y-6">
                      {(t('whyBerget.features.alternative.points', { returnObjects: true }) as string[]).map((point, index) => (
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
                    <h2 className="text-2xl font-medium mb-6">{t('whyBerget.features.security.title')}</h2>
                    <p className="text-white/80 mb-8 leading-relaxed text-lg">
                      {t('whyBerget.features.security.description')}
                    </p>
                    <ul className="space-y-6">
                      {(t('whyBerget.features.security.points', { returnObjects: true }) as string[]).map((point, index) => (
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
        </div>
      </section>

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
            <h2 className="text-3xl md:text-4xl font-medium mb-6">{t('whyBerget.cta.title')}</h2>
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
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
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