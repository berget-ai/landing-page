import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { GradientBackground } from '@/components/common/GradientBackground'
import { NetworkBackground } from '../common/NetworkBackground'
import { ArrowRight, Shield } from 'lucide-react'

export function Hero() {
  const { t } = useTranslation()

  return (
    <GradientBackground>
      <NetworkBackground />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Shield className="w-4 h-4 mr-2" />
            <span className="text-sm">{t('hero.tagline')}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-ovo">
            {t('hero.title.part1')}
            <br />
            {t('hero.title.part2')}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8 font-sans">
            {t('hero.description')}
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#2D6A4F] hover:bg-white/90"
            >
              {t('hero.getStarted')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
            >
              {t('hero.learnMore')}
            </Button>
          </div>
        </div>
      </div>
    </GradientBackground>
  )
}
