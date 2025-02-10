import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { features } from '@/lib/features'
import { cn } from '@/lib/utils'

export function FeatureCarousel() {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    if (activeIndex < features.length - 1) {
      setActiveIndex(activeIndex + 1)
    }
  }

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaX > 0) {
      nextSlide()
    } else if (e.deltaX < 0) {
      prevSlide()
    }
  }

  return (
    <div className="relative container mx-auto px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-medium">{t('features.title')}</h2>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            size="icon"
            onClick={prevSlide}
            disabled={activeIndex === 0}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={nextSlide}
            disabled={activeIndex === features.length - 1}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        ref={containerRef}
        onWheel={handleWheel}
        className="relative h-[400px] overflow-hidden"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className={cn(
              'absolute inset-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-12',
              'transition-opacity duration-300',
              index === activeIndex
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none',
            )}
            initial={false}
            animate={{
              x: `${(index - activeIndex) * 100}%`,
              opacity: index === activeIndex ? 1 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="space-y-6">
              <div className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
                {feature.category}
              </div>

              <h3 className="text-2xl font-medium">{feature.title}</h3>

              <p className="text-lg text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl" />
              <div className="relative p-8">
                <h4 className="text-lg font-medium mb-6">{t('features.keyHighlights')}</h4>
                <ul className="space-y-4">
                  {feature.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center gap-4 text-white/80"
                    >
                      <div className="h-2 w-2 rounded-full bg-white/20" />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              index === activeIndex
                ? 'bg-white scale-125'
                : 'bg-white/20 hover:bg-white/40',
            )}
          />
        ))}
      </div>
    </div>
  )
}
