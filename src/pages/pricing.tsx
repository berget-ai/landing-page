import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { DetailedPricing } from '@/components/sections/pricing/DetailedPricing'
import { ComparisonTable } from '@/components/sections/pricing/ComparisonTable'
import { Button } from '@/components/ui/button'
import { Check, Info } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useTranslation } from 'react-i18next'

export default function PricingPage() {
  const { t } = useTranslation()
  
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl font-medium mb-4">{t('pricing.title')}</h1>
            <p className="text-lg text-white/60">{t('pricing.description')}</p>
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

          <div className="mb-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-medium">{t('pricing.compareWithAlternatives')}</h2>
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
              <span className="text-sm">{t('pricing.moneyBackGuarantee')}</span>
            </div>
            <p className="text-white/60">{t('pricing.paymentInfo')}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
