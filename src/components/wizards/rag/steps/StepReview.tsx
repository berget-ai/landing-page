import { Shield } from 'lucide-react';
import type { Recipe } from '@/types/recipes';
import type { ResourceOption, ClusterResources } from '@/types/resources';

interface StepReviewProps {
  recipe: Recipe | null;
  selectedResource: ResourceOption | null;
  clusterResources: ClusterResources;
}

export function StepReview({ recipe, selectedResource }: StepReviewProps) {
  if (!recipe || !selectedResource) return null;

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Review & Deploy</h3>
      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/60">Configuration</span>
            <span className="font-mono text-sm">{selectedResource.name}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/60">Resources</span>
            <span>{selectedResource.cpu} vCPU • {selectedResource.memory} GB RAM</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/60">Storage</span>
            <span>{selectedResource.storage} GB</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-white/60">
          <Shield className="w-4 h-4" />
          <span className="text-sm">Deployment will be ready in approximately {recipe.estimate}</span>
        </div>
      </div>
    </div>
  );
}
