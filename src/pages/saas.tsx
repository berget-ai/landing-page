import { motion } from 'framer-motion'
import { Shield, Lock, Database, Server, Bot, ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { PricingTiers } from '@/components/sections/pricing/PricingTiers'
import { ProductFeatures } from '@/components/sections/ProductFeatures'
import { NetworkBackground } from '@/components/common/NetworkBackground'
import { PartnerQuotes } from '@/components/sections/PartnerQuotes'
import { useTranslation } from 'react-i18next'

export default function SaaSPage() {
  const { t } = useTranslation()

  const questions = [
    {
      question: "Is AI at the core of your product innovation, but you are concerned about the costs when you scale?",
      answer: "Our pay-as-you-go pricing and dedicated GPU options ensure you only pay for what you use, with significant discounts as you scale.",
      icon: Bot,
    },
    {
      question: "Do you want complete control of the models you use and be able to use your own models, fine-tuned or trained, in your applications, but do not want to have your own GPU cluster?",
      answer: "Deploy any model - open source, fine-tuned, or custom trained - on our infrastructure. No need to manage your own GPU cluster.",
      icon: Server,
    },
    {
      question: "Are your customers concerned about data privacy and are you awake at night wondering where your customers' data ends up?",
      answer: "All data stays within our EU infrastructure. Zero data retention policy means your customers' data is never stored or used for training.",
      icon: Shield,
    },
    {
      question: "Do you get stuck in complicated legal discussions about your cloud partners and reviewing endless Data Processing Agreements?",
      answer: "Our EU-based infrastructure and comprehensive compliance framework simplifies legal requirements. One agreement covers all your needs.",
      icon: Lock,
    },
    {
      question: "Do your developer teams want full freedom on how they setup their environments, and not have to get limited by cloud providers PaaS straightjackets?",
      answer: "Full flexibility in how you set up your environment. No vendor lock-in, no forced PaaS solutions - just the tools you need.",
      icon: Database,
    },
  ]

  const benefits = [
    {
      title: "Simplified Compliance",
      description: "One agreement covers GDPR, NIS2, and EU AI Act requirements",
      features: [
        "Built-in GDPR compliance",
        "NIS2-ready infrastructure",
        "EU AI Act alignment",
        "Data stays in EU",
      ]
    },
    {
      title: "Cost-Effective Scaling",
      description: "Pay only for what you use with predictable pricing",
      features: [
        "No upfront investments",
        "Volume-based discounts",
        "Reserved capacity options",
        "Transparent pricing",
      ]
    },
    {
      title: "Developer Freedom",
      description: "Give your team the tools they need without restrictions",
      features: [
        "Any framework or tool",
        "Full infrastructure control",
        "GitOps workflows",
        "No vendor lock-in",
      ]
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D6A4F] via-[#40916C] to-[#FFB700]">
          <NetworkBackground />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-medium mb-6">
                {t('saas.hero.title')}
              </h1>
              <p className="text-xl text-white/80 mb-8">
                {t('saas.hero.description')}
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/signup">
                    {t('saas.hero.startBuilding')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">{t('saas.hero.bookDemo')}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-24 relative bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {questions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#2D6A4F]/5 to-transparent group-hover:from-[#2D6A4F]/10 transition-colors" />
                <div className="relative p-8 rounded-3xl border border-[#40916C]/20 group-hover:border-[#40916C]/30 transition-colors">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-[#2D6A4F]/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">{item.question}</h3>
                      <p className="text-white/60">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Opinions */}
      <PartnerQuotes />

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-medium mb-4">Everything You Need to Scale</h2>
            <p className="text-lg text-white/60">
              Built specifically for SaaS companies who need to move fast while staying compliant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors"
              >
                <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
                <p className="text-white/60 mb-6">{benefit.description}</p>
                <ul className="space-y-3">
                  {benefit.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#FFB700]" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <ProductFeatures />

      {/* Compliance Section */}
      <ComplianceSection />

      {/* Pricing Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-medium mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-white/60">
              Start small and scale as you grow. No upfront commitments, pay only for what you use.
            </p>
          </div>

          <div className="mb-12">
            <PricingTiers />
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/signup">
                Start Building Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
