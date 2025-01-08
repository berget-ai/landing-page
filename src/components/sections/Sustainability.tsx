import { Leaf, Recycle, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const sustainabilityPoints = [
  {
    icon: Leaf,
    title: '100% Clean Energy',
    description:
      'Our data centers run on certified renewable energy from Nordic hydropower and wind farms, with real-time energy source tracking.',
    stats: '100% renewable energy',
  },
  {
    icon: Recycle,
    title: 'Circular Hardware',
    description:
      'We partner with certified refurbishers to extend server lifecycles by 3-5 years, reducing e-waste while maintaining enterprise-grade performance.',
    stats: '75% reduced hardware footprint',
  },
  {
    icon: Zap,
    title: 'Carbon Negative',
    description:
      'Beyond zero emissions, we invest in verified carbon removal projects and optimize for the most energy-efficient AI infrastructure.',
    stats: '-2000 tons CO₂e/year',
  },
]

export function Sustainability() {
  return (
    <section className="py-24 relative overflow-hidden dark:text-white light:text-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-30 dark:opacity-30 light:opacity-10" />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 dark:text-emerald-400 light:text-emerald-600 mb-6">
            <Leaf className="w-4 h-4 mr-2" />
            <span className="text-sm">Sustainable by Design</span>
          </div>
          <h2 className="text-4xl font-medium mb-6">
            Our Sustainability Pledge
          </h2>
          <p className="text-lg dark:text-white/60 light:text-gray-600">
            We're building Europe's most sustainable AI infrastructure. Our
            commitment to the environment is fundamental to our operations, not
            an afterthought.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sustainabilityPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl dark:bg-white/5 light:bg-white dark:border-white/10 light:border-gray-200 dark:hover:bg-white/10 light:hover:bg-gray-50 transition-colors relative group shadow-sm"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="mb-6">
                <point.icon className="w-10 h-10 dark:text-emerald-400 light:text-emerald-600" />
              </div>
              <h3 className="text-2xl font-medium mb-3">{point.title}</h3>
              <p className="dark:text-white/60 light:text-gray-600 mb-4">
                {point.description}
              </p>
              <div className="text-sm font-medium dark:text-emerald-400 light:text-emerald-600">
                {point.stats}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
