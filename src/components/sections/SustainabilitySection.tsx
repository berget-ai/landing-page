import { motion } from 'framer-motion'
import { Leaf, Recycle, Zap, BarChart } from 'lucide-react'
import { useTranslation } from 'react-i18next'

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
    <section className="py-32 relative bg-[#2D6A4F]/5 border-y border-[#40916C]/20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background opacity-30" />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#40916C]/15 mb-6">
              <Leaf className="w-4 h-4 mr-2 text-white" />
              <span className="text-sm text-white">{section.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-ovo mb-6">
              {section.title}
            </h2>
            <p className="text-xl text-white/80">
              {section.description}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {section.points.map((point, index) => {
            const Icon = iconMap[index % iconMap.length] // Rotate icons safely
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
      </div>
    </section>
  )
}
