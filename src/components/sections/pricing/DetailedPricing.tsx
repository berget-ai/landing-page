import { ServerlessInference } from './ServerlessInference'
import { useModels } from '@/hooks/use-models'

export function DetailedPricing() {
  const { loading } = useModels()
  
  return (
    <div className="space-y-12">
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#52B788]"></div>
        </div>
      ) : (
        <ServerlessInference />
      )}
    </div>
  )
}
