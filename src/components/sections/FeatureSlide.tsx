import { motion } from 'framer-motion';
import type { Feature } from '@/types/features';

interface FeatureSlideProps {
  feature: Feature;
  isActive: boolean;
}

export function FeatureSlide({ feature, isActive }: FeatureSlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 20,
        pointerEvents: isActive ? 'auto' : 'none',
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-12"
    >
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.9 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm"
        >
          {feature.category}
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-medium"
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

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl" />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative p-8"
        >
          <h4 className="text-lg font-medium mb-6">Key Highlights</h4>
          <ul className="space-y-4">
            {feature.highlights.map((highlight, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-4 text-white/80"
              >
                <div className="h-2 w-2 rounded-full bg-white/20" />
                {highlight}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}