import { ResourceEstimator } from '@/components/common/ResourceEstimator'
import type { ClusterResources } from '@/types/resources'

interface StepAnalysisProps {
  clusterResources: ClusterResources
  onUpdateResources: (resources: ClusterResources) => void
}

export function StepAnalysis({
  clusterResources,
  onUpdateResources,
}: StepAnalysisProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Resource Analysis</h3>
      <ResourceEstimator
        resources={clusterResources}
        currentCluster={clusterResources}
        onResize={onUpdateResources}
      />
    </div>
  )
}
