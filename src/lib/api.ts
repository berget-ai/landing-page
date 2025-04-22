/**
 * API utilities for Berget AI
 */

// Base URL for the Berget API
export const VITE_API_URL =
  'http://localhost:3000/v1' || 'https://api.berget.ai/v1'

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
 * Fetch a specific model by ID
 */
export const fetchModel = async (modelId: string) => {
  const response = await fetch(`${API_BASE_URL}/models/${modelId}`, {
    headers: getDefaultHeaders(),
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  return response.json()
}
