import { DetailedPricing } from './pricing/DetailedPricing'
import { useModels } from '@/hooks/use-models'

export function PricingTable() {
  // Initialize the models hook to ensure models are loaded
  const { loading } = useModels()
  
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#52B788]"></div>
        </div>
      ) : (
        <DetailedPricing />
      )}
    </>
  )
}
