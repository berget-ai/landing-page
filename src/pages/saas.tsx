import { motion } from 'framer-motion'
import { Shield, Lock, Database, Server, Bot, ArrowRight, Check } from 'lucide-react'
import { Button, Card, HeroBlock, Section, SectionHeader } from '@berget-ai/ui'
import { Link } from 'react-router-dom'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { PricingTiers } from '@/components/sections/pricing/PricingTiers'
import { ProductFeatures } from '@/components/sections/ProductFeatures'
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
      <HeroBlock
        variant="gradient"
        withPattern
        title={t('saas.hero.title')}
        description={t('saas.hero.description')}
        actions={
          <>
            <Button size="lg" asChild>
              <Link to="/signup">
                {t('saas.hero.startBuilding')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">{t('saas.hero.bookDemo')}</Link>
            </Button>
          </>
        }
      />

      {/* Questions Section */}
      <Section padding="xl" background="muted">
        <div className="max-w-4xl mx-auto space-y-12">
            {questions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="highlight" padding="lg">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">{item.question}</h3>
                      <p className="text-white/60">{item.answer}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
        </div>
      </Section>

      {/* Expert Opinions */}
      <PartnerQuotes />

      {/* Benefits Section */}
      <Section padding="xl">
        <SectionHeader
          title="Everything You Need to Scale"
          description="Built specifically for SaaS companies who need to move fast while staying compliant"
        />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="highlight" padding="md">
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
                </Card>
              </motion.div>
            ))}
          </div>
      </Section>

      {/* Products Overview */}
      <ProductFeatures />

      {/* Compliance Section */}
      <ComplianceSection />

      {/* Pricing Section */}
      <Section padding="xl">
        <SectionHeader
          title="Simple, Transparent Pricing"
          description="Start small and scale as you grow. No upfront commitments, pay only for what you use."
        />

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
      </Section>
    </main>
  )
}
