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
import { Info } from 'lucide-react'
import { SEOHelmet } from '@/components/common/Helmet'

export default function Page() {
  const { t } = useTranslation()

  const bullets = t('pricing.moneyBackBullets', {
    returnObjects: true,
  }) as string[]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PriceSpecification',
    priceCurrency: 'SEK',
    price: '0',
    name: 'Berget AI Pricing',
    description: 'Flexibel prismodell baserad på användning'
  };

  return (
    <>
      <SEOHelmet
        title="Priser - Berget AI | Transparent och Flexibel Prismodell"
        description="Utforska Berget AI:s transparenta och flexibla prismodell. Betala endast för det du använder med vår användningsbaserade prissättning."
        language="sv"
        type="website"
        path="/pricing"
        keywords={['Priser', 'AI-kostnader', 'Prismodell', 'Berget AI priser', 'Användningsbaserad prissättning']}
        image="/images/bergetdigitalist.png"
        jsonLd={jsonLd}
      />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-5xl font-medium mb-4">{t('pricing.title')}</h1>
            <p className="text-xl text-white/60">{t('pricing.description')}</p>
          </div>

          <div className="mb-8">
            <PricingTiers />
          </div>

          {/* Money Back Guarantee Section */}
          <div className="mb-24 max-w-6xl mx-auto">
            <p className="text-white/60 mb-4">
              {t('pricing.moneyBackDescription')}
            </p>
            <ul className="text-white/60 space-y-2 list-disc list-inside mb-4">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-white/60">{t('pricing.moneyBackNote')}</p>
          </div>

          <div className="mb-24 max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-medium">
                {t('pricing.detailedPricing')}
              </h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Info className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="max-w-xs">
                    <p>{t('pricing.tooltip')}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <DetailedPricing />
          </div>
        </div>
      </main>
    </>
  )
}
