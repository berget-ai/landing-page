import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { PricingTiers } from './pricing/PricingTiers'

export function PricingSection() {
  const { t } = useTranslation()

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">{t('pricing.section.title')}</h2>
          <p className="text-lg text-white/60">
            {t('pricing.section.description')}
          </p>
        </div>

        <div className="mb-12">
          <PricingTiers />
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/pricing">
              {t('pricing.section.viewPricing')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}