import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface PricingFeature {
  name: string
  hobby: boolean | string
  pro: boolean | string
  org: boolean | string
  enterprise: boolean | string
}

const features: PricingFeature[] = [
  {
    name: 'Build & Deploy',
    hobby: true,
    pro: true,
    org: true,
    enterprise: true,
  },
  {
    name: 'Free Pipeline Minutes',
    hobby: '500/month',
    pro: '500/user/month',
    org: '500/user/month',
    enterprise: 'Custom',
  },
  {
    name: 'Free Bandwidth',
    hobby: '100 GB',
    pro: '500 GB',
    org: '1 TB',
    enterprise: 'Custom',
  },
  {
    name: 'Team Members',
    hobby: 'Up to 10',
    pro: 'Unlimited',
    org: 'Unlimited',
    enterprise: 'Custom',
  },
  {
    name: 'Log Retention',
    hobby: '7 days',
    pro: '14 days',
    org: '30 days',
    enterprise: '30 days',
  },
  {
    name: 'Support',
    hobby: 'Community',
    pro: 'Email',
    org: 'Chat',
    enterprise: 'Dedicated',
  },
]

export function PricingTiers() {
  const { t } = useTranslation()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Hobby Plan */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-xl font-medium mb-2">{t('pricing.tiers.hobby.name')}</h3>
        <p className="text-sm text-white/60 mb-4">{t('pricing.tiers.hobby.description')}</p>
        <div className="mb-8">
          <p className="text-3xl font-medium">$0</p>
          <p className="text-sm text-white/60">+ {t('pricing.computeCosts')}</p>
        </div>
        <Button className="w-full mb-8">{t('pricing.getStarted')}</Button>
        <div className="space-y-4">
          {features.map((feature) => (
            <div key={feature.name} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">{feature.name}</p>
                <p className="text-sm text-white/60">
                  {typeof feature.hobby === 'boolean' ? '' : feature.hobby}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Plan */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-xl font-medium mb-2">{t('pricing.tiers.pro.name')}</h3>
        <p className="text-sm text-white/60 mb-4">{t('pricing.tiers.pro.description')}</p>
        <div className="mb-8">
          <p className="text-3xl font-medium">$19</p>
          <p className="text-sm text-white/60">{t('pricing.perUserMonth')} + {t('pricing.computeCosts')}</p>
        </div>
        <Button className="w-full mb-8">{t('pricing.getStarted')}</Button>
        <div className="space-y-4">
          {features.map((feature) => (
            <div key={feature.name} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">{feature.name}</p>
                <p className="text-sm text-white/60">
                  {typeof feature.pro === 'boolean' ? '' : feature.pro}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Organization Plan */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-xl font-medium mb-2">{t('pricing.tiers.org.name')}</h3>
        <p className="text-sm text-white/60 mb-4">{t('pricing.tiers.org.description')}</p>
        <div className="mb-8">
          <p className="text-3xl font-medium">$29</p>
          <p className="text-sm text-white/60">{t('pricing.perUserMonth')} + {t('pricing.computeCosts')}</p>
        </div>
        <Button className="w-full mb-8">{t('pricing.getStarted')}</Button>
        <div className="space-y-4">
          {features.map((feature) => (
            <div key={feature.name} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">{feature.name}</p>
                <p className="text-sm text-white/60">
                  {typeof feature.org === 'boolean' ? '' : feature.org}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enterprise Plan */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-xl font-medium mb-2">{t('pricing.tiers.enterprise.name')}</h3>
        <p className="text-sm text-white/60 mb-4">{t('pricing.tiers.enterprise.description')}</p>
        <div className="mb-8">
          <p className="text-3xl font-medium">{t('pricing.tiers.enterprise.custom')}</p>
          <p className="text-sm text-white/60">+ {t('pricing.computeCosts')}</p>
        </div>
        <Button variant="secondary" className="w-full mb-8">{t('pricing.contactSales')}</Button>
        <div className="space-y-4">
          {features.map((feature) => (
            <div key={feature.name} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">{feature.name}</p>
                <p className="text-sm text-white/60">
                  {typeof feature.enterprise === 'boolean' ? '' : feature.enterprise}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
