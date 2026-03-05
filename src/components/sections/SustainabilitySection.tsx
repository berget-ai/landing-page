import { motion } from 'framer-motion'
import { Zap, Recycle, BarChart } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section, SectionHeader } from '@berget-ai/ui'

const iconMap = [Zap, Recycle, BarChart]

export function SustainabilitySection() {
  const { t } = useTranslation()
  const section = t('SustainabilitySection', { returnObjects: true }) as {
    badge: string
    title: string
    description: string
    points: {
      title: string
      description: string
      stats: string
    }[]
  }

  return (
    <Section padding="xl" background="muted">
      <SectionHeader
        title={section.title}
        description={section.description}
        tagline={section.badge}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {section.points.map((point, index) => {
          const Icon = iconMap[index % iconMap.length]
          return (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-[#74C69D]/20 h-full">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-8">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-ovo mb-3">{point.title}</h3>
                <p className="text-white/80 mb-4 text-sm leading-relaxed">
                  {point.description}
                </p>
                <div className="text-sm font-medium">
                  {point.stats}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
