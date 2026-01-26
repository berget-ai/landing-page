import { useState, useEffect } from 'react'

export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'critical' | 'unknown'
  messageKey?: 'status.critical' | 'status.degraded'
  allModelsDown: boolean
  someModelsDown: boolean
  systemIssues: boolean
  lastChecked: Date | null
}

interface SystemStatus {
  status: string
  lastChecked: string
  lago: { status: string }
  odoo: { status: string }
  keycloak: { status: string, error?: string }
  chatEndpoints: Array<{
    model: string
    status: string
    latency?: number
    error?: string
  }>
}

/**
 * Hook to monitor system and model health status
 * Polls /health endpoint every 60 seconds
 * 
 * Priority levels:
 * - critical: All models are down (GPU hardware issue)
 * - degraded: Some models or systems are having issues
 * - healthy: Everything is operational
 * - unknown: Unable to fetch health status
 */
export function useHealth() {
  const [health, setHealth] = useState<HealthStatus>({
    status: 'unknown',
    allModelsDown: false,
    someModelsDown: false,
    systemIssues: false,
    lastChecked: null
  })

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const response = await fetch('https://api.berget.ai/health')
        const data: SystemStatus = await response.json()

        // Check model status
        const models = data.chatEndpoints || []
        const downModels = models.filter(m => m.status === 'down' || m.status === 'unhealthy')
        const allModelsDown = models.length > 0 && downModels.length === models.length
        const someModelsDown = downModels.length > 0 && !allModelsDown

        // Check system status (Lago, Odoo, Keycloak)
        const systemIssues = 
          data.lago?.status === 'down' || 
          data.odoo?.status === 'down' || 
          data.keycloak?.status === 'down'

        // Determine overall health status
        let status: HealthStatus['status'] = 'healthy'
        let messageKey: HealthStatus['messageKey'] | undefined

        if (allModelsDown) {
          status = 'critical'
          messageKey = 'status.critical'
        } else if (someModelsDown || systemIssues) {
          status = 'degraded'
          messageKey = 'status.degraded'
        }

        setHealth({
          status,
          messageKey,
          allModelsDown,
          someModelsDown,
          systemIssues,
          lastChecked: new Date(data.lastChecked)
        })
      } catch (error) {
        console.error('Failed to fetch health status:', error)
        setHealth({
          status: 'unknown',
          allModelsDown: false,
          someModelsDown: false,
          systemIssues: false,
          lastChecked: null
        })
      }
    }

    // Fetch immediately
    fetchHealth()

    // Then poll every 60 seconds
    const intervalId = setInterval(fetchHealth, 60000)

    return () => clearInterval(intervalId)
  }, [])

  return health
}
