import { Shield, ArrowRight } from 'lucide-react'
import { HeroBlock, Button, Section, SectionHeader, type HeroBlockProps } from '@berget-ai/ui'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { SustainabilitySection } from '@/components/sections/SustainabilitySection'
import { PartnerQuotes } from '@/components/sections/PartnerQuotes'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { KeyBenefitsSection } from '@/components/sections/KeyBenefitsSection'
import Features from '@/components/sections/Features'

type TaglineIcon = HeroBlockProps['taglineIcon']

function WhyBergetPage() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen">
      <HeroBlock
        variant="moss"
        withPattern
        taglineIcon={Shield as TaglineIcon}
        tagline={t('whyBerget.hero.tagline')}
        title={t('whyBerget.hero.title')}
        description={t('whyBerget.hero.description')}
        actions={
          <>
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
          </>
        }
      />

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
      <Section padding="xl">
        <SectionHeader
          title={t('whyBerget.cta.title')}
          description={t('whyBerget.cta.description')}
          className="mb-8"
        />
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
      </Section>
    </main>
  )
}

export default WhyBergetPage
