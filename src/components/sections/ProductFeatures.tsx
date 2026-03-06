import { Cloud, Server, Cpu, ArrowRight } from 'lucide-react'
import {
  FeatureCards,
  Button,
  Section,
  SectionHeader,
  type FeatureCardProps,
} from '@berget-ai/ui'
import { useTranslation } from 'react-i18next'

type Icon = FeatureCardProps['icon']

export function ProductFeatures() {
  const { t } = useTranslation()

  return (
    <Section padding="xl" background="muted">
      <SectionHeader
        title={t('products.hero.title')}
        description={t('products.hero.description')}
      />

      <FeatureCards
        columns={3}
        features={[
          {
            icon: Cloud as Icon,
            title: t('products.serverless.title'),
            description: t('products.serverless.description'),
            items: t('products.serverless.features.integration.items', {
              returnObjects: true,
            }) as string[],
          },
          {
            icon: Server as Icon,
            title: t('products.dedicated.title'),
            description: t('products.dedicated.description'),
            badge: 'Coming Soon',
            items: t('products.dedicated.features.deployment.items', {
              returnObjects: true,
            }) as string[],
          },
          {
            icon: Cpu as Icon,
            title: t('products.platform.title'),
            description: t('products.platform.description'),
            badge: 'Coming Soon',
            items: t('products.platform.features.toolset.items', {
              returnObjects: true,
            }) as string[],
          },
        ]}
      />

      <div className="text-center mt-12">
        <Button asChild size="lg">
          <a href="/products">
            {t('products.hero.exploreMore')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </Section>
  )
}
