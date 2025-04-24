/**
 * API utilities for Berget AI
 */

// Base URL for the Berget API
export const VITE_API_URL =
  import.meta.env.VITE_BERGET_API_URL || 'http://localhost:3000/v1'

/**
 * Get the API key from environment variables
 * In a production environment, this should be securely managed
 */
export const getApiKey = () => {
  return import.meta.env.VITE_BERGET_API_KEY || ''
}

/**
 * Default headers for API requests
 */
export const getDefaultHeaders = () => {
  return {
    Authorization: `Bearer ${getApiKey()}`,
    'Content-Type': 'application/json',
  }
}

/**
 * Fetch health status from the API
 */
export const fetchHealthStatus = async () => {
  try {
    const response = await fetch(`https://api.berget.ai/health`, {
      headers: getDefaultHeaders(),
    })

    const data = await response.json()

    // Extract chat endpoints from the health data
    const chatEndpoints = data.subsystems?.api?.message?.chatEndpoints || []

    return {
      status: data.status,
      timestamp: data.timestamp,
      models: chatEndpoints.map((endpoint) => ({
        id: endpoint.model,
        normalizedId: normalizeModelId(endpoint.model),
        status: endpoint.status === 'up' ? 'ready' : 'offline',
        latency: endpoint.latency,
        error: endpoint.error,
      })),
    }
  } catch (error) {
    console.error('Failed to fetch health status:', error)
    return { models: [] }
  }
}

/**
 * Normalize model ID to match between different API endpoints
 * Health endpoint uses format like "agentica-org/DeepCoder-14B-Preview"
 * Models endpoint uses format like "Agentica-DeepCoder-14B-Preview"
 */
export const normalizeModelId = (id: string): string => {
  if (!id) return '';
  
  // Remove organization prefix if present (e.g., "agentica-org/")
  const withoutOrg = id.includes('/') ? id.split('/').pop() || '' : id;
  
  // Replace hyphens and spaces with nothing to make comparison easier
  return withoutOrg.toLowerCase().replace(/[-\s]/g, '');
}

/**
 * Fetch models from the API
 */
export const fetchModels = async () => {
  const response = await fetch(`${VITE_API_URL}/models`, {
    headers: getDefaultHeaders(),
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  return response.json()
}

/**
 * Transform API model data to application model format
 */
export const transformModelData = (apiModel: any) => {
  // Extract model name from ID by removing provider prefix
  const nameParts = apiModel.id.split('-')
  const name = nameParts.slice(1).join(' ')

  // Map model types based on capabilities or other properties
  let type = 'Text Models'

  if (apiModel.id.includes('Whisper')) {
    type = 'Speech-to-Text'
  } else if (
    apiModel.id.includes('Flux') ||
    apiModel.id.includes('Diffusion')
  ) {
    type = 'Image Generation'
  } else if (apiModel.id.includes('E5') || apiModel.id.includes('Embedding')) {
    type = 'Text Embedding'
  } else if (apiModel.id.includes('Rerank')) {
    type = 'Reranking'
  } else if (apiModel.id.includes('VL')) {
    type = 'Multimodal'
  } else if (apiModel.id.includes('Guard') || apiModel.id.includes('Shield')) {
    type = 'Moderation'
  } else if (
    apiModel.id.includes('Coder') ||
    apiModel.id.includes('DeepCoder')
  ) {
    type = 'Code Generation'
  } else if (apiModel.id.includes('Kokoro') || apiModel.id.includes('CSM')) {
    type = 'Text-to-Speech'
  }

  return {
    id: apiModel.id,
    normalizedId: normalizeModelId(apiModel.id),
    name: name || apiModel.id,
    type,
    provider: apiModel.owned_by,
    license: apiModel.root.split('/')[0],
    description: `${type} model by ${apiModel.owned_by}`,
    status: 'available',
    huggingface: apiModel.root
      ? `https://huggingface.co/${apiModel.root}`
      : undefined,
    pricing: apiModel.pricing,
    capabilities: apiModel.capabilities,
  }
}

/**
 * Fetch a specific model by ID
 */
export const fetchModel = async (modelId: string) => {
  const response = await fetch(`${VITE_API_URL}/models/${modelId}`, {
    headers: getDefaultHeaders(),
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  return response.json()
}
