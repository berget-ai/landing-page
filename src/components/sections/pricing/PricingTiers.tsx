import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function PricingTiers() {
  const { t } = useTranslation()

  const plans = ['payg', 'starter', 'developer', 'enterprise'] as const
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {plans.map((plan) => {
        const features = t(`pricing.tiers.${plan}.features`, { returnObjects: true })
        if (!Array.isArray(features)) return null

        return (
          <div key={plan} className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-medium mb-2">
              {t(`pricing.tiers.${plan}.name`)}
            </h3>
            <p className="text-sm text-white/60 mb-4">
              {t(`pricing.tiers.${plan}.description`)}
            </p>
            <div className="mb-8">
              <p className="text-3xl font-medium">
                {t(`pricing.tiers.${plan}.price`)}
              </p>
            </div>
            <Button 
              className="w-full mb-8" 
              variant={plan === 'enterprise' ? 'secondary' : 'default'}
            >
              {plan === 'enterprise' ? t('pricing.contactSales') : t('pricing.getStarted')}
            </Button>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
