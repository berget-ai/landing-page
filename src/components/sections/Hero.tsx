import { useTranslation } from 'react-i18next'
import { HeroBlock, Button, type HeroBlockProps } from '@berget-ai/ui'
import { ArrowRight, Shield } from 'lucide-react'
import { useEnvironment } from '@/hooks/use-environment'

type TaglineIcon = HeroBlockProps['taglineIcon']

export function Hero() {
  const { t } = useTranslation()
  const { consoleUrl } = useEnvironment()

  return (
    <HeroBlock
      variant="moss"
      withPattern
      taglineIcon={Shield as TaglineIcon}
      tagline={t('hero.tagline')}
      title={`${t('hero.title.part1')} ${t('hero.title.part2')}`}
      description={t('hero.description')}
      className="min-h-screen"
      actions={
        <a href={consoleUrl}>
          <Button variant="default" size="lg">
            {t('hero.getStarted')} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      }
    />
  )
}
