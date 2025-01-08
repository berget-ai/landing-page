import { motion } from 'framer-motion'
import type { Feature } from '@/types/features'

interface FeatureContentProps {
  feature: Feature
  isActive: boolean
}

export function FeatureContent({ feature, isActive }: FeatureContentProps) {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.9 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-flex px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 text-sm backdrop-blur-sm"
      >
        {feature.category}
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl font-medium leading-tight tracking-tight"
      >
        {feature.title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg text-white/60 leading-relaxed"
      >
        {feature.description}
      </motion.p>
    </div>
  )
}
