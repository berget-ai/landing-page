import { Hero } from '@/components/sections/Hero'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { ProductFeatures } from '@/components/sections/ProductFeatures'
import { WhyChooseBerget } from '@/components/sections/WhyChooseBerget'
import { PricingSection } from '@/components/sections/PricingSection'
import { PartnerQuotes } from '@/components/sections/PartnerQuotes'
import { KeyBenefitsSection } from '@/components/sections/KeyBenefitsSection'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Products Overview */}
      <ProductFeatures />

      {/* Why Choose Berget */}
      <KeyBenefitsSection />

      {/* Expert Opinions */}
      <PartnerQuotes />

      {/* Compliance Section */}
      <ComplianceSection />

      {/* Pricing Section */}
      <PricingSection />
    </main>
  )
}
