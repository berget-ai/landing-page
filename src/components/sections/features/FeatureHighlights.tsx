import { motion } from 'framer-motion';

interface FeatureHighlightsProps {
  highlights: string[];
  isActive: boolean;
}

export function FeatureHighlights({ highlights, isActive }: FeatureHighlightsProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/3 to-transparent rounded-2xl backdrop-blur-sm" />
      <div className="relative p-8">
        <h4 className="text-2xl font-medium mb-8 tracking-tight">Key Highlights</h4>
        <ul className="space-y-6">
          {highlights.map((highlight, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 20 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-center gap-4 text-white/80 text-lg"
            >
              <div className="h-3 w-3 rounded-full bg-white/20" />
              {highlight}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
