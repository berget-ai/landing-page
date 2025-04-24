import { useState, useEffect } from 'react'
import { fetchModels, transformModelData, fetchHealthStatus } from '@/lib/api'

export interface ModelData {
  id: string
  name: string
  type: string
  provider: string
  license: string
  description: string
  status: string
  isLive?: boolean
  huggingface?: string
  pricing?: {
    input: {
      amount: number
      currency: string
      unit: string
    }
    output: {
      amount: number
      currency: string
      unit: string
    }
  }
  capabilities?: {
    vision?: boolean
    streaming?: boolean
    classification?: boolean
    embeddings?: boolean
    json_mode?: boolean
    function_calling?: boolean
    formatted_output?: boolean
  }
}

/**
 * Hook to fetch and cache models from the API
 * @returns Object containing models, loading state, and error state
 */
export function useModels() {
  const [models, setModels] = useState<ModelData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getModels = async () => {
      try {
        setLoading(true)
        const [modelsResponse, healthResponse] = await Promise.all([
          fetchModels(),
          fetchHealthStatus()
        ]);
        
        if (modelsResponse.data && Array.isArray(modelsResponse.data)) {
          // Transform API data to our model format
          const transformedModels = modelsResponse.data.map(transformModelData)
          
          // Add live status from health endpoint
          if (healthResponse && healthResponse.models) {
            const liveModelIds = new Set(
              healthResponse.models
                .filter(model => model.status === 'ready')
                .map(model => model.id)
            );
            
            // Update models with live status
            transformedModels.forEach(model => {
              model.isLive = liveModelIds.has(model.id);
            });
          }
          
          setModels(transformedModels)
        } else {
          throw new Error('Invalid API response format')
        }
        
        setError(null)
      } catch (err) {
        console.error('Failed to fetch models:', err)
        setError('Failed to load models. Please try again later.')
        // Fallback to empty array if API fails
        setModels([])
      } finally {
        setLoading(false)
      }
    }

    getModels()
  }, [])

  const getModelsByType = (type: string | null) => {
    if (!type) return models
    return models.filter(model => model.type === type)
  }

  const getModelById = (id: string) => {
    return models.find(model => model.id === id)
  }

  const getModelTypes = () => {
    if (models.length === 0) return ['Text Models']
    
    const types = Array.from(new Set(models.map(model => model.type)))
    return [
      'Text Models',
      ...types.filter(type => type !== 'Text Models').sort()
    ]
  }

  return {
    models,
    loading,
    error,
    getModelsByType,
    getModelById,
    getModelTypes
  }
}
