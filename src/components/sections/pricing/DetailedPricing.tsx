import { ServerlessInference } from './ServerlessInference'
import { ComputeResources } from './ComputeResources'
import { NetworkConnectivity } from './NetworkConnectivity'

export function DetailedPricing() {
  return (
    <div className="space-y-12">
      <ServerlessInference />
      <ComputeResources />
      <NetworkConnectivity />
    </div>
  )
}