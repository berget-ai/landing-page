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
  latency?: number
  error?: string
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
          fetchHealthStatus(),
        ])

        if (modelsResponse.data && Array.isArray(modelsResponse.data)) {
          // Transform API data to our model format
          const transformedModels = modelsResponse.data.map(transformModelData)

          // Add live status from health endpoint
          if (healthResponse && healthResponse.models) {
            // Create a map of model IDs to their health status
            const modelHealthMap = new Map()
            healthResponse.models.forEach((model) => {
              modelHealthMap.set(model.id, {
                isLive: model.status === 'ready',
                latency: model.latency,
                error: model.error,
              })
            })
            console.log('Model health map:', modelHealthMap)
            console.log('Transformed models:', transformedModels)
            console.log('Health response:', healthResponse)
            console.log('Models response:', modelsResponse.data)

            // Update models with live status
            transformedModels.forEach((model) => {
              // Check if we have health data for this model
              if (modelHealthMap.has(model.id)) {
                const healthData = modelHealthMap.get(model.id)
                model.isLive = healthData.isLive
                model.latency = healthData.latency
                model.error = healthData.error
              } else {
                // If no health data is available, mark as unknown status
                model.isLive = false
                model.error = 'Status unknown'
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
    return models.filter((model) => model.type === type)
  }

  const getModelById = (id: string) => {
    return models.find((model) => model.id === id)
  }

  const getModelTypes = () => {
    if (models.length === 0) return ['Text Models']

    const types = Array.from(new Set(models.map((model) => model.type)))
    return [
      'Text Models',
      ...types.filter((type) => type !== 'Text Models').sort(),
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
