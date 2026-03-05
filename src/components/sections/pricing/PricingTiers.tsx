import { PricingCards } from '@berget-ai/ui'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export function PricingTiers() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const plans = ['payg', 'starter', 'developer', 'enterprise'] as const

  const tiers = plans.map((plan) => {
    const features = t(`pricing.tiers.${plan}.features`, { returnObjects: true })
    return {
      id: plan,
      name: t(`pricing.tiers.${plan}.name`),
      description: t(`pricing.tiers.${plan}.description`),
      price: t(`pricing.tiers.${plan}.price`),
      features: Array.isArray(features) ? features : [],
      ctaText: plan === 'enterprise' ? t('pricing.contactSales') : t('pricing.getStarted'),
      ctaVariant: (plan === 'enterprise' ? 'secondary' : 'default') as 'secondary' | 'default',
      onCtaClick: () => {
        const link = plan === 'enterprise' ? t('pricing.contactSaleslink') : t('pricing.getStartedlink')
        if (link.startsWith('http')) {
          window.location.href = link
        } else {
          navigate(link)
        }
      },
    }
  })

  return <PricingCards tiers={tiers} columns={4} />
}
