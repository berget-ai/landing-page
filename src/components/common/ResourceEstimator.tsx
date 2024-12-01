import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import type { ClusterResources } from '@/types/resources';

interface ResourceEstimatorProps {
  resources: ClusterResources;
  currentCluster: ClusterResources;
  onResize: (resources: ClusterResources) => void;
}

export function ResourceEstimator({ resources, currentCluster, onResize }: ResourceEstimatorProps) {
  const [values, setValues] = useState(currentCluster);

  const handleChange = (key: keyof ClusterResources, value: number[]) => {
    const newValues = { ...values, [key]: value[0] };
    setValues(newValues);
    onResize(newValues);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <label className="text-sm font-medium">CPU Cores</label>
        <Slider
          value={[values.cpu]}
          min={1}
          max={32}
          step={1}
          onValueChange={(value) => handleChange('cpu', value)}
        />
        <div className="flex justify-between text-sm text-white/60">
          <span>{values.cpu} cores</span>
          <span>Usage: {Math.round((values.cpu / 32) * 100)}%</span>
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-sm font-medium">Memory (GB)</label>
        <Slider
          value={[values.memory]}
          min={2}
          max={128}
          step={2}
          onValueChange={(value) => handleChange('memory', value)}
        />
        <div className="flex justify-between text-sm text-white/60">
          <span>{values.memory} GB</span>
          <span>Usage: {Math.round((values.memory / 128) * 100)}%</span>
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-sm font-medium">Storage (GB)</label>
        <Slider
          value={[values.storage]}
          min={20}
          max={1000}
          step={10}
          onValueChange={(value) => handleChange('storage', value)}
        />
        <div className="flex justify-between text-sm text-white/60">
          <span>{values.storage} GB</span>
          <span>Usage: {Math.round((values.storage / 1000) * 100)}%</span>
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-sm font-medium">Worker Nodes</label>
        <Slider
          value={[values.workers]}
          min={1}
          max={10}
          step={1}
          onValueChange={(value) => handleChange('workers', value)}
        />
        <div className="flex justify-between text-sm text-white/60">
          <span>{values.workers} nodes</span>
          <span>Recommended: {Math.ceil(values.cpu / 8)}</span>
        </div>
      </div>
    </div>
  );
}