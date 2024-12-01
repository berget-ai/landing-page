import { Cpu, Database, HardDrive } from 'lucide-react';
import type { ResourceOption } from '@/types/resources';

interface StepResourcesProps {
  selectedResource: ResourceOption | null;
  onSelectResource: (resource: ResourceOption) => void;
}

const resourceOptions: ResourceOption[] = [
  { name: 'Development', cpu: 2, memory: 4, storage: 20, price: 20 },
  { name: 'Production', cpu: 4, memory: 8, storage: 50, price: 40 },
  { name: 'Enterprise', cpu: 8, memory: 16, storage: 100, price: 80 }
];

export function StepResources({ selectedResource, onSelectResource }: StepResourcesProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Resource Configuration</h3>
      <div className="grid grid-cols-3 gap-4">
        {resourceOptions.map((option) => (
          <button
            key={option.name}
            onClick={() => onSelectResource(option)}
            className={`p-4 rounded-xl border text-left transition-colors ${
              selectedResource?.name === option.name
                ? 'border-white bg-white/10'
                : 'border-white/10 hover:border-white/20'
            }`}
          >
            <h4 className="font-medium mb-2">{option.name}</h4>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                {option.cpu} vCPU
              </div>
              <div className="flex items-center gap-2">
                <HardDrive className="w-4 h-4" />
                {option.memory} GB RAM
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                {option.storage} GB Storage
              </div>
            </div>
            <p className="mt-3 text-sm">${option.price}/month</p>
          </button>
        ))}
      </div>
    </div>
  );
}