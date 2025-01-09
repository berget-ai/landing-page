import { useRef, useState, useCallback } from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useAnimationFrame,
} from 'framer-motion'
import { features } from '@/lib/features'
import { FeatureContent } from './FeatureContent'
import { FeatureHighlights } from './FeatureHighlights'
import { FeatureNavigation } from './FeatureNavigation'
import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/hooks/use-media-query'

export function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const isMobile = useMediaQuery('(max-width: 768px)')

  const x = useMotionValue(0)
  const springX = useSpring(x, {
    stiffness: 300,
    damping: isMobile ? 20 : 30,
  })

  const opacity = useTransform(
    springX,
    [-window.innerWidth, 0, window.innerWidth],
    [0, 1, 0],
  )

  const nextSlide = useCallback(() => {
    if (activeIndex < features.length - 1) {
      setActiveIndex(activeIndex + 1)
    }
  }, [activeIndex])

  const prevSlide = useCallback(() => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }, [activeIndex])

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        if (e.deltaX > 0) {
          nextSlide()
        } else if (e.deltaX < 0) {
          prevSlide()
        }
      }
    },
    [nextSlide, prevSlide],
  )

  const handleDragStart = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      isDragging.current = true
      startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX
    },
    [],
  )

  const handleDragMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!isDragging.current) return

      const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX
      const diff = currentX - startX.current

      x.set(diff)
    },
    [x],
  )

  const handleDragEnd = useCallback(() => {
    isDragging.current = false
    const velocity = x.getVelocity()
    const threshold = isMobile ? 300 : 500

    if (Math.abs(velocity) > threshold) {
      if (velocity > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }

    x.set(0)
  }, [x, isMobile, nextSlide, prevSlide])

  useAnimationFrame(() => {
    if (!isDragging.current) {
      x.set(0)
    }
  })

  return (
    <div className="relative container mx-auto px-4 min-h-screen md:h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-30 blur-3xl pointer-events-none" />
      <FeatureNavigation
        totalFeatures={features.length}
        activeIndex={activeIndex}
        onPrevious={prevSlide}
        onNext={nextSlide}
        onSelect={setActiveIndex}
        isMobile={isMobile}
      />

      <div
        ref={containerRef}
        onWheel={handleWheel}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        className={cn(
          'relative min-h-[500px] md:h-[300px] overflow-hidden mt-8',
          isDragging.current ? 'cursor-grabbing' : 'cursor-grab',
          'touch-pan-y',
        )}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className={cn(
              'absolute inset-0 w-full',
              'grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12',
              'px-4 md:px-0',
            )}
            style={{
              x: useTransform(
                springX,
                [0],
                [`${(index - activeIndex) * 100}%`],
              ),
              opacity: index === activeIndex ? opacity : 0,
            }}
            initial={false}
            transition={{
              type: 'spring',
              stiffness: isMobile ? 200 : 300,
              damping: isMobile ? 20 : 30,
            }}
          >
            <FeatureContent
              feature={feature}
              isActive={index === activeIndex}
            />
            <FeatureHighlights
              highlights={feature.highlights}
              isActive={index === activeIndex}
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile Swipe Indicator */}
      {isMobile && (
        <div className="mt-4 text-center text-sm text-white/40">
          Swipe to explore more features
        </div>
      )}

      {/* Progress Bar */}
      <div className="mt-8 h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-emerald-700"
          initial={false}
          animate={{
            width: `${((activeIndex + 1) / features.length) * 100}%`,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      </div>
    </div>
  )
}
