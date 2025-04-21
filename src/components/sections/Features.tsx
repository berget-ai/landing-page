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
      span: 'col' as const,
      points: t('whyBerget.features.european.points', {
        returnObjects: true,
      }) as string[],
    },
    {
      icon: <Shield className="w-8 h-8 stroke-1 text-white" />,
      title: t('whyBerget.features.privacy.title'),
      description: t('whyBerget.features.privacy.description'),
      span: 'none' as const,
      points: t('whyBerget.features.privacy.points', {
        returnObjects: true,
      }) as string[],
    },
    {
      icon: <Server className="w-8 h-8 stroke-1 text-white" />,
      title: t('whyBerget.features.alternative.title'),
      description: t('whyBerget.features.alternative.description'),
      span: 'none' as const,
      points: t('whyBerget.features.alternative.points', {
        returnObjects: true,
      }) as string[],
    },
    {
      icon: <Lock className="w-8 h-8 stroke-1 text-white" />,
      title: t('whyBerget.features.security.title'),
      description: t('whyBerget.features.security.description'),
      span: 'col' as const,
      points: t('whyBerget.features.security.points', {
        returnObjects: true,
      }) as string[],
    },
  ]

  // Transform the feature items to include the points in the description
  const gridItems = featureItems.map((item) => {
    return {
      icon: item.icon,
      title: item.title,
      description: (
        <>
          <p>{item.description}</p>
          <div className="mt-4">
            <ul className="list-disc list-inside text-sm text-white/60">
              {item.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-[#52B788] mt-0.5 flex-shrink-0" />
                  <span className="text-white/60 font-sans">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ),
      span: item.span,
    }
  })

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
