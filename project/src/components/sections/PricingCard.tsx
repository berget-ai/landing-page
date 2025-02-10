import { Check, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  name: string
  price: string
  features: string[]
  cta: string
  variant: 'default' | 'outline' | 'secondary'
  popular?: boolean
}

export function PricingCard({
  name,
  price,
  features,
  cta,
  variant,
  popular,
}: PricingCardProps) {
  return (
    <div className="relative group">
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-black text-sm font-medium">
            <Star className="w-3.5 h-3.5" />
            Most Popular
          </div>
        </div>
      )}

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent group-hover:from-white/10 transition-colors" />

      <div
        className={cn(
          'relative p-8 rounded-2xl border transition-colors',
          popular ? 'border-white' : 'border-white/10',
          'hover:border-white/20',
        )}
      >
        <h3 className="text-xl font-medium mb-2">{name}</h3>
        <div className="mb-6">
          <div className="text-3xl font-medium">€{price}</div>
          <div className="text-sm text-white/60">per month</div>
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-white/60 shrink-0 mt-0.5" />
              <span className="text-sm text-white/80">{feature}</span>
            </li>
          ))}
        </ul>

        <Button className="w-full" variant={variant}>
          {cta}
        </Button>
      </div>
    </div>
  )
}
