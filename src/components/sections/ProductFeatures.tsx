import { Cloud, Server, Cpu, ArrowRight } from 'lucide-react'
import { FeatureCards, Button, Section, SectionHeader, type FeatureCardProps } from '@berget-ai/ui'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

type Icon = FeatureCardProps['icon']

export function ProductFeatures() {
  const { t } = useTranslation()

  return (
    <Section padding="xl" className="bg-[#2D6A4F]/5 border-y border-[#40916C]/20">
      <SectionHeader
        title={t('products.hero.title')}
        description={t('products.hero.description')}
        className="mb-16"
      />

      <FeatureCards
        columns={3}
        className="max-w-7xl mx-auto"
        features={[
          {
            icon: Cloud as Icon,
            title: t('products.serverless.title'),
            description: t('products.serverless.description'),
            items: t('products.serverless.features.integration.items', { returnObjects: true }) as string[],
          },
          {
            icon: Server as Icon,
            title: t('products.dedicated.title'),
            description: t('products.dedicated.description'),
            badge: 'Coming Soon',
            items: t('products.dedicated.features.deployment.items', { returnObjects: true }) as string[],
          },
          {
            icon: Cpu as Icon,
            title: t('products.platform.title'),
            description: t('products.platform.description'),
            badge: 'Coming Soon',
            items: t('products.platform.features.toolset.items', { returnObjects: true }) as string[],
          },
        ]}
      />

      <div className="text-center mt-12">
        <Button asChild size="lg">
          <Link to="/products">
            {t('products.hero.exploreMore')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  )
}
