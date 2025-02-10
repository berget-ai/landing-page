import { Hero } from '@/components/sections/Hero'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { ProductFeatures } from '@/components/sections/ProductFeatures'
import { WhyChooseBerget } from '@/components/sections/WhyChooseBerget'
import { PricingSection } from '@/components/sections/PricingSection'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Products Overview */}
      <ProductFeatures />

      {/* Why Choose Berget */}
      <WhyChooseBerget />

      {/* Compliance Section */}
      <ComplianceSection />

      {/* Pricing Section */}
      <PricingSection />
    </main>
  )
}