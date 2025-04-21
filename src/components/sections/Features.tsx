import { motion } from 'framer-motion'
import { Globe, Shield, Server, Lock, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Feature } from '@/components/ui/feature-section-with-bento-grid'

export default function Features() {
  const { t } = useTranslation()

  const featureItems = [
    {
      icon: <Globe className="w-8 h-8 stroke-1 text-white" />,
      title: t('whyBerget.features.european.title'),
      description: t('whyBerget.features.european.description'),
      span: "col" as const,
      points: t('whyBerget.features.european.points', { returnObjects: true }) as string[]
    },
    {
      icon: <Shield className="w-8 h-8 stroke-1 text-white" />,
      title: t('whyBerget.features.privacy.title'),
      description: t('whyBerget.features.privacy.description'),
      span: "none" as const,
      points: t('whyBerget.features.privacy.points', { returnObjects: true }) as string[]
    },
    {
      icon: <Server className="w-8 h-8 stroke-1 text-white" />,
      title: t('whyBerget.features.alternative.title'),
      description: t('whyBerget.features.alternative.description'),
      span: "none" as const,
      points: t('whyBerget.features.alternative.points', { returnObjects: true }) as string[]
    },
    {
      icon: <Lock className="w-8 h-8 stroke-1 text-white" />,
      title: t('whyBerget.features.security.title'),
      description: t('whyBerget.features.security.description'),
      span: "col" as const,
      points: t('whyBerget.features.security.points', { returnObjects: true }) as string[]
    }
  ]

  // Transform the feature items to include the points in the description
  const gridItems = featureItems.map(item => {
    const pointsText = item.points.map(point => `• ${point}`).join('\n\n');
    return {
      icon: item.icon,
      title: item.title,
      description: `${item.description}\n\n${pointsText}`,
      span: item.span
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Feature 
        title={t('whyBerget.hero.title')}
        description={t('whyBerget.hero.description')}
        badge={t('whyBerget.hero.tagline')}
        items={gridItems}
      />
    </motion.div>
  )
}
