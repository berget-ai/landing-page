import { Button, Section, SectionHeader } from '@berget-ai/ui'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { PricingTiers } from './pricing/PricingTiers'

export function PricingSection() {
  const { t } = useTranslation()

  return (
    <Section padding="lg">
      <SectionHeader
        title={t('pricing.section.title')}
        description={t('pricing.section.description')}
        maxWidth="sm"
      />

      <div className="mb-12">
        <PricingTiers />
      </div>

      <div className="text-center">
        <Button asChild size="lg">
          <a href="/pricing">
            {t('pricing.section.viewPricing')}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </Section>
  )
}
