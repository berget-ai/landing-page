import { Shield, Network, Lock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { FeatureCards, Section, SectionHeader, type FeatureCardProps } from '@berget-ai/ui'

type Icon = FeatureCardProps['icon']

export function ComplianceSection() {
  const { t } = useTranslation()

  return (
    <Section padding="xl" background="muted">
      <SectionHeader
        title={t('compliance.title')}
        description={t('compliance.description')}
        tagline={t('compliance.tagline')}
      />

      <FeatureCards
        columns={3}
        features={[
          {
            icon: Shield as Icon,
            title: t('compliance.regulations.gdpr.name'),
            description: t('compliance.regulations.gdpr.description'),
            items: Array.isArray(t('compliance.regulations.gdpr.benefits', { returnObjects: true }))
              ? t('compliance.regulations.gdpr.benefits', { returnObjects: true }) as string[] : [],
          },
          {
            icon: Network as Icon,
            title: t('compliance.regulations.nis2.name'),
            description: t('compliance.regulations.nis2.description'),
            items: Array.isArray(t('compliance.regulations.nis2.benefits', { returnObjects: true }))
              ? t('compliance.regulations.nis2.benefits', { returnObjects: true }) as string[] : [],
          },
          {
            icon: Lock as Icon,
            title: t('compliance.regulations.schrems2.name'),
            description: t('compliance.regulations.schrems2.description'),
            items: Array.isArray(t('compliance.regulations.schrems2.benefits', { returnObjects: true }))
              ? t('compliance.regulations.schrems2.benefits', { returnObjects: true }) as string[] : [],
          },
        ]}
      />
    </Section>
  )
}
