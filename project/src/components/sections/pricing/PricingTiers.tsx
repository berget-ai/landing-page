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
    name: 'Inference',
    hobby: 'Pay as you go',
    pro: '€100 Token Credits',
    org: '€200 Token Credits',
    enterprise: 'Custom',
  },
  {
    name: 'Rate Limit',
    hobby: 'Some',
    pro: 'None',
    org: 'None',
    enterprise: 'None',
  },
  {
    name: 'Compute',
    hobby: 'PAYG',
    pro: '1 Controller, 3 Workers',
    org: '3 Controllers, 6 Workers',
    enterprise: 'Custom',
  },
  {
    name: 'Team Members',
    hobby: 'Up to 3',
    pro: 'Up to 5',
    org: 'Unlimited',
    enterprise: 'Unlimited',
  },
  {
    name: 'Support',
    hobby: 'Community',
    pro: 'Community',
    org: 'Email',
    enterprise: 'Dedicated',
  },
  {
    name: 'Pricing',
    hobby: 'List price',
    pro: '10% Discount',
    org: '12% Discount',
    enterprise: '14% Discount',
  },
]

export function PricingTiers() {
  const { t } = useTranslation()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Pay as you Go Plan */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-xl font-medium mb-2">Pay as you Go</h3>
        <p className="text-sm text-white/60 mb-4">API access</p>
        <div className="mb-8">
          <p className="text-3xl font-medium">€0</p>
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

      {/* Starter Plan */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-xl font-medium mb-2">Starter</h3>
        <p className="text-sm text-white/60 mb-4">Start building</p>
        <div className="mb-8">
          <p className="text-3xl font-medium">€250</p>
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

      {/* Developer Plan */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-xl font-medium mb-2">Developer</h3>
        <p className="text-sm text-white/60 mb-4">Grow your business</p>
        <div className="mb-8">
          <p className="text-3xl font-medium">€890</p>
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
        <h3 className="text-xl font-medium mb-2">Enterprise</h3>
        <p className="text-sm text-white/60 mb-4">At scale deployment</p>
        <div className="mb-8">
          <p className="text-3xl font-medium">Custom</p>
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