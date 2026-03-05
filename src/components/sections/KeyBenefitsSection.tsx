import { Heart, Leaf, Library } from 'lucide-react'
import { t } from 'i18next'
import { FeatureCards, Section, SectionHeader, type FeatureCardProps } from '@berget-ai/ui'

type Icon = FeatureCardProps['icon']

const getFeatures = (key: string): string[] => {
  const result = t(key, { returnObjects: true }) as string[] | string
  return Array.isArray(result) ? result.filter((item): item is string => typeof item === 'string') : []
}

export function KeyBenefitsSection() {
  return (
    <Section padding="xl" background="muted" className="overflow-hidden">
      <SectionHeader
        title={t('whyBerget.benefits.title')}
        description={t('whyBerget.benefits.description')}
      />

      <FeatureCards
        columns={3}
        features={[
          {
            icon: Library as Icon,
            title: t('whyBerget.benefits.euBased.title'),
            description: t('whyBerget.benefits.euBased.description'),
            items: getFeatures('whyBerget.benefits.euBased.features'),
          },
          {
            icon: Heart as Icon,
            title: t('whyBerget.benefits.flexible.title'),
            description: t('whyBerget.benefits.flexible.description'),
            items: getFeatures('whyBerget.benefits.flexible.features'),
          },
          {
            icon: Leaf as Icon,
            iconColor: 'text-[#74C69D]',
            title: t('whyBerget.benefits.sustainable.title'),
            description: t('whyBerget.benefits.sustainable.description'),
            items: getFeatures('whyBerget.benefits.sustainable.features'),
          },
        ]}
      />
    </Section>
  )
}
