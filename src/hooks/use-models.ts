import { useState, useEffect } from 'react'
import { fetchModels } from '@/lib/api'

export interface ModelData {
  id: string
  normalizedId: string
  name: string
  object: string
  created: number
  owned_by: string
  permission: any[]
  root: string
  parent: string | null
  pricing: {
    input: number
    output: number
    unit: string
    currency: string
  }
  capabilities: {
    vision: boolean
    function_calling: boolean
    json_mode: boolean
    classification: boolean
    embeddings: boolean
    formatted_output: boolean
    streaming: boolean
  }
  status: {
    up: boolean
  }
  isLive?: boolean
  latency?: number
  error?: string
}

/**
 * Transform API model data to normalized format
 */
function transformModelData(model: any): ModelData {
  // Return the model directly as it already matches our interface
  // Just ensure normalizedId is set for consistent identification
  const normalizedId = model.id.includes('/')
    ? model.id.split('/').pop()?.toLowerCase().replace(/[-\s]/g, '')
    : model.id.toLowerCase().replace(/[-\s]/g, '')

  // Ensure all required fields are present
  return {
    ...model,
    normalizedId,
    // Ensure status is an object with up property
    status: model.status || { up: false },
    // Ensure capabilities is an object with all required properties
    capabilities: {
      vision: model.capabilities?.vision || false,
      function_calling: model.capabilities?.function_calling || false,
      json_mode: model.capabilities?.json_mode || false,
      classification: model.capabilities?.classification || false,
      embeddings: model.capabilities?.embeddings || false,
      formatted_output: model.capabilities?.formatted_output || false,
      streaming: model.capabilities?.streaming || false,
      ...(model.capabilities || {}),
    },
    // Ensure pricing has all required fields
    pricing: model.pricing
      ? {
          input: model.pricing.input || 0,
          output: model.pricing.output || 0,
          unit: model.pricing.unit || '€ / M Token',
          currency: model.pricing.currency || 'EUR',
        }
      : {
          input: 0,
          output: 0,
          unit: '€ / M Token',
          currency: 'EUR',
        },
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
        const modelsResponse = await fetchModels()

        if (modelsResponse.data && Array.isArray(modelsResponse.data)) {
          // Transform API data to our model format
          const transformedModels = modelsResponse.data.map(transformModelData)

          // Set live status directly from the model API
          transformedModels.forEach((model) => {
            model.isLive = model.status?.up || false
            if (!model.status?.up) {
              model.error = 'Model unavailable'
            }
          })

          console.log('Transformed models:', transformedModels)
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
    return models.filter((model) => model.owned_by === type)
  }

  const getModelById = (id: string) => {
    return models.find((model) => model.id === id)
  }

  const getModelTypes = () => {
    const types = Array.from(new Set(models.map((model) => model.owned_by)))
    return types
  }

  return {
    models,
    loading,
    error,
    getModelsByType,
    getModelById,
    getModelTypes,
  }
}
