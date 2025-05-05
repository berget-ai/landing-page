import { useState, useEffect } from 'react'
import { fetchModels, fetchHealthStatus } from '@/lib/api'

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
  healthId?: string // Original ID from health endpoint for debugging
}

/**
 * Transform API model data to normalized format
 */
function transformModelData(model: any): ModelData {
  // Return the model directly as it already matches our interface
  // Just ensure normalizedId is set for health status matching
  const normalizedId = model.id.includes('/') 
    ? model.id.split('/').pop()?.toLowerCase().replace(/[-\s]/g, '') 
    : model.id.toLowerCase().replace(/[-\s]/g, '');
  
  return {
    ...model,
    normalizedId
  };
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
          fetchHealthStatus(),
        ])

        if (modelsResponse.data && Array.isArray(modelsResponse.data)) {
          // Transform API data to our model format
          const transformedModels = modelsResponse.data.map(transformModelData)

          // Add live status from health endpoint if available
          if (healthResponse && healthResponse.models) {
            // Create a map of normalized model IDs to their health status
            const modelHealthMap = new Map()
            healthResponse.models.forEach((model) => {
              modelHealthMap.set(model.normalizedId, {
                isLive: model.status === 'ready',
                latency: model.latency,
                error: model.error,
                originalId: model.id
              })
            })

            // Update models with live status from health endpoint if available
            transformedModels.forEach((model) => {
              // Check if we have health data for this model using normalized ID
              if (modelHealthMap.has(model.normalizedId)) {
                const healthData = modelHealthMap.get(model.normalizedId)
                model.isLive = healthData.isLive
                model.latency = healthData.latency
                model.error = healthData.error
                model.healthId = healthData.originalId // Store the original health ID for debugging
              } else {
                // If no health data is available, use the status from the model API
                model.isLive = model.status?.up || false
                if (!model.status?.up) {
                  model.error = 'Model unavailable'
                }
              }
            })
          } else {
            // If no health endpoint data, use the status from the model API
            transformedModels.forEach((model) => {
              model.isLive = model.status?.up || false
              if (!model.status?.up) {
                model.error = 'Model unavailable'
              }
            })
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
    return models.filter((model) => model.owned_by === type)
  }

  const getModelById = (id: string) => {
    return models.find((model) => model.id === id)
  }

  const getModelTypes = () => {
    if (models.length === 0) return ['All Models']

    const types = Array.from(new Set(models.map((model) => model.owned_by)))
    return [
      'All Models',
      ...types.filter((type) => type !== 'All Models').sort(),
    ]
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
