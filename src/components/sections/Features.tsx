import { Bot, Lock, Server } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { FeatureCard } from './FeatureCard'
import { FeatureCarousel } from './features/FeatureCarousel'

export function Features() {
  const { t } = useTranslation()

  return (
    <section className="py-40 relative" id="features">
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
              title="Dedicated inference for your scaling needs"
              description="Host any model, open-source, fine-tuned or one that you trained yourself on our dedicated infrastructure as you scale. Load any model, select GPU instances and deploy your own dedicated inference service and endpoint in a heartbeat."
            />
          </div>

          {/* Network Preview */}
          <div className="space-y-12">
            <FeatureCard
              icon={Lock}
              title="Safe and compliant AI"
              description="With our inference services, your data never leaves the EU, or even our data center. No data - such as prompts and responses - is stored and cannot be accessed by anyone but yourself. This greatly simplifies compliance with EU regulations such as EU AI Act, GDPR, Nis-2 and Dora."
            />

            <FeatureCard
              icon={Server}
              title="Production-grade performance"
              description="Run inference at scale with predictable cost. You pay for the dedicated resources that serves your model, ensuring production-grade latency and throughput for your applications."
            />
          </div>
        </div>
      </div>

      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium">
              Open Weights models are winning the game
            </h2>
            <p className="text-lg text-white/60 mt-4">
              Open weights models are the future of AI. They are moving faster
              than the closed ones and you can trust that no one is using your
              data for training.
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
