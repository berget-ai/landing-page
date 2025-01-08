import { Check, Info } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { PricingCard } from './PricingCard'
import { PricingTable } from './PricingTable'
import { ComparisonTable } from './pricing/ComparisonTable'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function Pricing() {
  const plans = [
    {
      name: 'Open source',
      price: '350',
      features: [
        'Controllers är också workers',
        'Vektordatabas',
        'Delad IP',
        'Support via community (Matrix)',
      ],
      cta: 'Get Started',
      variant: 'outline' as const,
      popular: false,
    },
    {
      name: 'Standard',
      price: '650',
      features: [
        'Separata controllers och workers',
        'Vektordatabas + Postgres',
        'Publik IPv4 adress',
        'Support via Signal',
      ],
      cta: 'Get Started',
      variant: 'default' as const,
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Contact us',
      features: [
        'Obegränsad CRM-kraft och support',
        'Justera storlek på kluster',
        'Obegränsad anpassning',
        '24x7 support',
      ],
      cta: 'Contact Sales',
      variant: 'secondary' as const,
      popular: false,
    },
  ]

  const { t } = useTranslation()

  return (
    <section className="py-24 relative" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-medium mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-white/60">
            {t('pricing.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>

        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-medium">{t('pricing.detailedPricing')}</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Info className="w-5 h-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('pricing.tooltip')}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <PricingTable />
        </div>

        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-medium">{t('pricing.compareWithAlternatives')}</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Info className="w-5 h-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('pricing.comparisonTooltip')}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <ComparisonTable />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
            <Check className="w-4 h-4" />
            <span className="text-sm">
              {t('pricing.moneyBackGuarantee')}
            </span>
          </div>
          <p className="text-white/60">
            {t('pricing.paymentInfo')}
          </p>
        </div>
      </div>
    </section>
  )
}
