import { Hero } from '@/components/sections/Hero'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { ProductFeatures } from '@/components/sections/ProductFeatures'
import { PricingSection } from '@/components/sections/PricingSection'
import { PartnerQuotes } from '@/components/sections/PartnerQuotes'
import { KeyBenefitsSection } from '@/components/sections/KeyBenefitsSection'
import { SEOHelmet } from '@/components/common/Helmet'

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Berget AI',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'SEK',
      description: 'Prismodell baserad på användning'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '100'
    }
  };

  return (
    <>
      <SEOHelmet
        title="Berget AI - Säker och Hållbar AI för Svenska Företag"
        description="Berget AI erbjuder en säker, GDPR-kompatibel AI-plattform byggd för svenska och europeiska företag. Kraftfull AI som respekterar din data och miljön."
        language="sv"
        type="website"
        path="/"
        keywords={['AI', 'Artificiell Intelligens', 'GDPR', 'Sverige', 'Europa', 'Säkerhet', 'Hållbarhet', 'ChatGPT', 'LLM']}
        image="/images/bergetdigitalist.png"
        jsonLd={jsonLd}
      />
      
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
    </>
  )
}
