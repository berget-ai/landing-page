import { Bot, Lock, Server } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { FeatureCard } from './FeatureCard'
import { FeatureCarousel } from './features/FeatureCarousel'

export function Features() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-40 relative" id="features">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80" />
      <FeatureCarousel />

      <div className="container mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Serverless Inference */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-medium">{t('features.modelInference.title')}</h2>
              <p className="text-lg text-white/60">{t('features.modelInference.description1')}</p>
              <p className="text-lg text-white/60">{t('features.modelInference.description2')}</p>
              <div className="flex gap-4">
                <Button variant="secondary">{t('features.modelInference.viewModels')}</Button>
                <Button variant="outline">{t('features.modelInference.learnMore')}</Button>
              </div>
            </div>

            <FeatureCard
              icon={Bot}
              title={t('features.dedicatedInference.title')}
              description={t('features.dedicatedInference.description')}
            />
          </div>

          {/* Network Preview */}
          <div className="space-y-12">
            <FeatureCard
              icon={Lock}
              title={t('features.safeCompliantAI.title')}
              description={t('features.safeCompliantAI.description')}
            />

            <FeatureCard
              icon={Server}
              title={t('features.productionGradePerformance.title')}
              description={t('features.productionGradePerformance.description')}
            />
          </div>
        </div>
      </div>

      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium">
              {t('features.openWeightsTitle')}
            </h2>
            <p className="text-lg text-white/60 mt-4">
              {t('features.openWeightsDescription')}
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/ai-agents-illustration.png"
              alt="AI agents illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>
    </section>
  )
}
