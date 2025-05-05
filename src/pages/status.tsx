import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Activity,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Server,
} from 'lucide-react'

interface SystemStatus {
  status: 'healthy' | 'unhealthy' | 'unknown'
  timestamp: string
  version: string
  environment: string
  subsystems: {
    api: {
      status: string
      message: {
        status: string
        lastChecked: string
        lago: { status: string }
        odoo: { status: string }
        kubecost: { status: string; error?: string }
        harvester: { status: string; error?: string }
        keycloak: { status: string; error?: string }
        chatEndpoints: Array<{
          model: string
          status: string
          latency?: number
          error?: string
        }>
      }
    }
    compute: {
      status: string
      message: any
    }
    billing: {
      status: string
      message: any
    }
    crm: {
      status: string
      message: any
    }
  }
  chatEndpoints: any[]
  lastChecked: string
}

export default function StatusPage() {
  // const { t } = useTranslation()
  const [systemStatus, setSystemStatus] = useState<SystemStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.berget.ai/health')

        const data = await response.json()
        setSystemStatus(data)
        setError(null)
      } catch (err) {
        console.error('Error fetching system status:', err)
        setError('Failed to load system status. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchStatus()

    // Refresh status every 60 seconds
    const intervalId = setInterval(fetchStatus, 60000)

    return () => clearInterval(intervalId)
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'up':
      case 'healthy':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'down':
      case 'unhealthy':
        return <XCircle className="w-5 h-5 text-red-500" />
      case 'unknown':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-400" />
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString()
  }

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                <Activity className="w-6 h-6 text-[#52B788]" />
              </div>
              <h1 className="text-4xl font-ovo">System Status</h1>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#52B788]"></div>
              </div>
            ) : error ? (
              <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-medium mb-2 text-red-400">Error</h2>
                <p className="text-white/80">{error}</p>
              </div>
            ) : systemStatus ? (
              <div className="space-y-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-medium">Overall Status</h2>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(systemStatus.status)}
                      <span className="capitalize">{systemStatus.status}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/60">
                    <div>
                      <span className="font-medium">Environment:</span>{' '}
                      {systemStatus.environment}
                    </div>
                    <div>
                      <span className="font-medium">Version:</span>{' '}
                      {systemStatus.version}
                    </div>
                    <div>
                      <span className="font-medium">Last Updated:</span>{' '}
                      {formatDate(systemStatus.lastChecked)}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-medium">Subsystems</h2>

                  {/* API Status */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-medium">API</h3>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(systemStatus.subsystems.api.status)}
                        <span className="capitalize">
                          {systemStatus.subsystems.api.status}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Lago:</span>
                          {getStatusIcon(
                            systemStatus.subsystems.api.message.lago.status
                          )}
                          <span className="capitalize">
                            {systemStatus.subsystems.api.message.lago.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Odoo:</span>
                          {getStatusIcon(
                            systemStatus.subsystems.api.message.odoo.status
                          )}
                          <span className="capitalize">
                            {systemStatus.subsystems.api.message.odoo.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Kubecost:</span>
                          {getStatusIcon(
                            systemStatus.subsystems.api.message.kubecost.status
                          )}
                          <span className="capitalize">
                            {
                              systemStatus.subsystems.api.message.kubecost
                                .status
                            }
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Harvester:</span>
                          {getStatusIcon(
                            systemStatus.subsystems.api.message.harvester.status
                          )}
                          <span className="capitalize">
                            {
                              systemStatus.subsystems.api.message.harvester
                                .status
                            }
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Keycloak:</span>
                          {getStatusIcon(
                            systemStatus.subsystems.api.message.keycloak.status
                          )}
                          <span className="capitalize">
                            {
                              systemStatus.subsystems.api.message.keycloak
                                .status
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compute Status */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-medium">Compute</h3>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(systemStatus.subsystems.compute.status)}
                        <span className="capitalize">
                          {systemStatus.subsystems.compute.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Billing Status */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-medium">Billing</h3>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(systemStatus.subsystems.billing.status)}
                        <span className="capitalize">
                          {systemStatus.subsystems.billing.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CRM Status */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-medium">CRM</h3>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(systemStatus.subsystems.crm.status)}
                        <span className="capitalize">
                          {systemStatus.subsystems.crm.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Model Status */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-medium">Model Status</h2>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-3 px-4">Model</th>
                            <th className="text-left py-3 px-4">Status</th>
                            <th className="text-left py-3 px-4">Latency</th>
                            <th className="text-left py-3 px-4">Error</th>
                          </tr>
                        </thead>
                        <tbody>
                          {systemStatus.subsystems.api.message.chatEndpoints.map(
                            (endpoint, index) => (
                              <tr
                                key={index}
                                className="border-b border-white/10"
                              >
                                <td className="py-3 px-4">
                                  <div>
                                    <div>{endpoint.model}</div>
                                    <div className="text-xs text-white/40">
                                      Normalized:{' '}
                                      {endpoint.model.includes('/')
                                        ? endpoint.model
                                            .split('/')
                                            .pop()
                                            ?.toLowerCase()
                                            .replace(/[-\s]/g, '')
                                        : endpoint.model
                                            .toLowerCase()
                                            .replace(/[-\s]/g, '')}
                                    </div>
                                  </div>
                                </td>
                                <td className="py-3 px-4">
                                  <div className="flex items-center gap-2">
                                    {getStatusIcon(endpoint.status)}
                                    <span className="capitalize">
                                      {endpoint.status}
                                    </span>
                                  </div>
                                </td>
                                <td className="py-3 px-4">
                                  {endpoint.latency
                                    ? `${endpoint.latency}ms`
                                    : '-'}
                                </td>
                                <td className="py-3 px-4 text-red-400">
                                  {endpoint.error || '-'}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3">
                  <Server className="w-6 h-6 text-[#52B788]" />
                  <p className="text-white/80">
                    No status information available.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  )
}
