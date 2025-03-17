import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Recipe } from '@/types/recipes'

interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        'group rounded-2xl border border-border overflow-hidden bg-card/10 backdrop-blur-xl',
        'hover:border-border/80 transition-all duration-300',
      )}
    >
      <div className="relative h-48 p-8">
        <div
          className={cn(
            'absolute inset-0 opacity-10',
            'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]',
            recipe.gradient,
          )}
        />

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <recipe.icon className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-medium mb-2">{recipe.title}</h3>
          <p className="text-muted-foreground">{recipe.description}</p>
        </div>
      </div>

      <div className="p-6 bg-card/5">
        <div className="flex flex-wrap gap-2 mb-4">
          {recipe.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-sm bg-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">{recipe.estimate}</span>
          </div>
          <Button variant="secondary">
            Configure
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
