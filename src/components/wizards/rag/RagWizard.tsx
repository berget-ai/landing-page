import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { StepFeatures } from './steps/StepFeatures';
import { StepResources } from './steps/StepResources';
import { StepAnalysis } from './steps/StepAnalysis';
import { StepReview } from './steps/StepReview';
import type { Recipe } from '@/types/recipes';
import type { ResourceOption, ClusterResources } from '@/types/resources';

interface RagWizardProps {
  isOpen: boolean;
  onClose: () => void;
  recipe: Recipe | null;
}

export function RagWizard({ isOpen, onClose, recipe }: RagWizardProps) {
  const [step, setStep] = useState(0);
  const [selectedResource, setSelectedResource] = useState<ResourceOption | null>(null);
  const [clusterResources, setClusterResources] = useState<ClusterResources>({
    cpu: 4,
    memory: 8,
    storage: 100,
    workers: 3
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDeploy = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSuccess(true);
    setTimeout(() => {
      onClose();
      setSuccess(false);
      setStep(0);
      setSelectedResource(null);
    }, 1500);
    setLoading(false);
  };

  const steps = [
    {
      title: 'Features',
      component: StepFeatures,
      props: { recipe }
    },
    {
      title: 'Resources',
      component: StepResources,
      props: { selectedResource, onSelectResource: setSelectedResource }
    },
    {
      title: 'Analysis',
      component: StepAnalysis,
      props: { clusterResources, onUpdateResources: setClusterResources }
    },
    {
      title: 'Review',
      component: StepReview,
      props: { recipe, selectedResource, clusterResources }
    }
  ];

  const CurrentStep = steps[step].component;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader className="flex flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-medium">Configure {recipe?.title}</h2>
            <p className="text-white/60">{recipe?.description}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </DialogHeader>

        <div className="mt-6">
          <CurrentStep {...steps[step].props} />

          <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/10">
            <Button
              variant="ghost"
              onClick={() => step > 0 && setStep(step - 1)}
              disabled={step === 0 || loading || success}
            >
              Previous
            </Button>
            
            <div className="flex items-center gap-4">
              {step === steps.length - 1 && selectedResource && (
                <div className="text-white/60">
                  ${selectedResource.price}/month
                </div>
              )}
              <Button
                onClick={() => {
                  if (step < steps.length - 1) {
                    setStep(step + 1);
                  } else {
                    handleDeploy();
                  }
                }}
                disabled={loading || success}
              >
                {step < steps.length - 1 ? 'Next' : loading ? 'Deploying...' : success ? 'Deployed!' : 'Deploy Recipe'}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}