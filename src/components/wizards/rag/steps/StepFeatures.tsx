import { Check } from 'lucide-react';
import type { Recipe } from '@/types/recipes';

interface StepFeaturesProps {
  recipe: Recipe | null;
}

export function StepFeatures({ recipe }: StepFeaturesProps) {
  if (!recipe) return null;

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Features</h3>
      <div className="grid grid-cols-2 gap-4">
        {recipe.features.map((feature) => (
          <div 
            key={feature}
            className="p-4 rounded-xl bg-white/5 flex items-center gap-3"
          >
            <Check className="w-5 h-5 text-[#22C55E]" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}