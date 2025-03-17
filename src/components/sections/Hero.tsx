import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { GradientBackground } from '@/components/common/GradientBackground'
import { NetworkBackground } from '../common/NetworkBackground'
import { ArrowRight, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Hero() {
  const { t } = useTranslation()

  return (
    <>
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
                variant="default"
                asChild
              >
                <Link to="/signup">
                  {t('hero.getStarted')} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
              >
                {t('hero.learnMore')}
              </Button>
            </div>
          </div>
        </div>
      </GradientBackground>
    </>
  )
}
