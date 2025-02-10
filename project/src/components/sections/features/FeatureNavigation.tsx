import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FeatureNavigationProps {
  totalFeatures: number
  activeIndex: number
  onPrevious: () => void
  onNext: () => void
  onSelect: (index: number) => void
  isMobile?: boolean
}

export function FeatureNavigation({
  totalFeatures,
  activeIndex,
  onPrevious,
  onNext,
  onSelect,
  isMobile,
}: FeatureNavigationProps) {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-medium">Platform Features</h2>
        {!isMobile && (
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={onPrevious}
              disabled={activeIndex === 0}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={onNext}
              disabled={activeIndex === totalFeatures - 1}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <div className="flex justify-center gap-2">
        {Array.from({ length: totalFeatures }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
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
