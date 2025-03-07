import { PricingTiers } from '@/components/sections/pricing/PricingTiers'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { DetailedPricing } from '@/components/sections/pricing/DetailedPricing'
import { Info, Check } from 'lucide-react'

export default function PricingPage() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-medium mb-4">{t('pricing.title')}</h1>
          <p className="text-lg text-white/60">{t('pricing.description')}</p>
        </div>

        <div className="mb-8">
          <PricingTiers />
        </div>

        {/* Money Back Guarantee Section - Moved here */}
        <div className="mb-24 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 w-fit">
            <Check className="w-4 h-4" />
            <span className="text-sm">{t('pricing.moneyBackGuarantee')}</span>
          </div>
          <p className="text-white/60 mb-4">
            The above price plans include pre-paid compute and tokens at a discount compared to list price. Any usage above the included amount is charged on top, and any remaining balance is rolled over to the next month.
          </p>
          <ul className="text-white/60 space-y-2 list-disc list-inside mb-4">
            <li>Credit Card pre-payment for all plans</li>
            <li>Invoice possible for Enterprise customers</li>
            <li>Automatic top-up of wallet at a set threshold</li>
          </ul>
          <p className="text-white/60">
            Prices above are for monthly pre-payments. Yearly payments come with a 10% extra discount to the above price plans
          </p>
        </div>

        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium">{t('pricing.detailedPricing')}</h2>
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
          <DetailedPricing />
        </div>
      </div>
    </main>
  )
}