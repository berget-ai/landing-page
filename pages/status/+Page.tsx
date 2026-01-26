import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Activity, CheckCircle, XCircle, Server, AlertTriangle, Clock, Lock, AlertOctagon, Rabbit, Snail } from 'lucide-react'
import { useModels } from '@/hooks/use-models'
import { SEOHelmet } from '@/components/common/Helmet'

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

export default function Page() {
  const { models, loading, error } = useModels()
  const [systemStatus, setSystemStatus] = useState<SystemStatus | null>(null)
  const [statusLoading, setStatusLoading] = useState(true)
  const [statusError, setStatusError] = useState<string | null>(null)
  
  useEffect(() => {
    const fetchSystemStatus = async () => {
      try {
        setStatusLoading(true)
        
        // Hämta svaret från health-routen
        const response = await fetch('https://api.berget.ai/health')
        
        // Ignorera response.ok och försök alltid parsa JSON
        // Health-routen returnerar alltid valid JSON även vid 503-fel
        const data = await response.json()
        setSystemStatus(data)
        setStatusError(null)
      } catch (err) {
        console.error('Failed to fetch system status:', err)
        // Visa en varning men blockera inte hela sidan
        setStatusError('System status information is currently unavailable.')
      } finally {
        setStatusLoading(false)
      }
    }
    
    fetchSystemStatus()
    
    // Refresh status every 60 seconds
    const intervalId = setInterval(fetchSystemStatus, 60000)
    
    return () => clearInterval(intervalId)
  }, [])
  
  const getStatusIcon = (status: string, error?: string) => {
    // Om status är "down" och felmeddelandet innehåller en HTTP-statuskod
    if (status === 'down' && error) {
      if (error.includes('400') || error.includes('401') || error.includes('403') || error.includes('404')) {
        return <div title="Authentication/Permission error"><Lock className="w-5 h-5 text-yellow-500" /></div>
      } else if (error.includes('500') || error.includes('502') || error.includes('503') || error.includes('504')) {
        return <div title="Server error"><AlertOctagon className="w-5 h-5 text-red-500" /></div>
      }
    }
    
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
  
  const getLatencyIcon = (latency?: number) => {
    if (!latency) return null;
    
    if (latency < 100) {
      return <div title="Fast response (<100ms)"><Rabbit className="w-5 h-5 text-green-500" /></div>
    } else if (latency > 200) {
      return <div title="Slow response (>200ms)"><Snail className="w-5 h-5 text-yellow-500" /></div>
    } else {
      return <div title="Normal response time"><CheckCircle className="w-5 h-5 text-blue-500" /></div>
    }
  }
  
  return (
    <>
      <SEOHelmet
        title="System Status - Berget AI | Tjänststatus och Driftinformation"
        description="Se status för Berget AIs tjänster och infrastruktur. Realtidsinformation om drift, svarstider och tillgänglighet."
        language="sv"
        type="website"
        path="/status"
        keywords={['Status', 'Systemstatus', 'Drift', 'Uptime', 'Tjänststatus', 'API Status']}
      />
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

              {(loading || statusLoading) ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#52B788]"></div>
                </div>
              ) : error ? (
                <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-6 mb-8">
                  <h2 className="text-xl font-medium mb-2 text-red-400">Error</h2>
                  <p className="text-white/80">{error}</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {statusError && (
                    <div className="bg-yellow-900/20 border border-yellow-900/30 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                        <p className="text-white/80">{statusError}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* System Status */}
                  {systemStatus && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-medium">System Status</h2>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-medium">Overall Status</h3>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(systemStatus.status)}
                          <span className="capitalize">{systemStatus.status}</span>
                        </div>
                      </div>
                      
                      <div className="text-sm text-white/60 mb-6">
                        <div><span className="font-medium">Last Updated:</span> {new Date(systemStatus.lastChecked).toLocaleString()}</div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex items-center justify-between">
                            <h5 className="text-sm font-medium">Lago</h5>
                            <div className="flex items-center gap-2">
                              {getStatusIcon(systemStatus.lago.status)}
                              <span className="text-xs capitalize">{systemStatus.lago.status}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex items-center justify-between">
                            <h5 className="text-sm font-medium">Odoo</h5>
                            <div className="flex items-center gap-2">
                              {getStatusIcon(systemStatus.odoo.status)}
                              <span className="text-xs capitalize">{systemStatus.odoo.status}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex items-center justify-between">
                            <h5 className="text-sm font-medium">Keycloak</h5>
                            <div className="flex items-center gap-2">
                              {getStatusIcon(systemStatus.keycloak.status)}
                              <span className="text-xs capitalize">{systemStatus.keycloak.status}</span>
                            </div>
                          </div>
                          {systemStatus.keycloak.error && (
                            <p className="text-xs text-red-400 mt-1">{systemStatus.keycloak.error}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  )}
                  
                  {/* Model Status */}
                  {systemStatus && systemStatus.chatEndpoints && (
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
                            </tr>
                          </thead>
                          <tbody>
                            {systemStatus.chatEndpoints.map((endpoint, index) => (
                              <tr key={index} className="border-b border-white/10">
                                <td className="py-3 px-4">
                                  {endpoint.model}
                                </td>
                                <td className="py-3 px-4">
                                  <div className="flex items-center gap-2">
                                    {getStatusIcon(endpoint.status, endpoint.error)}
                                    <span className="capitalize">{endpoint.status}</span>
                                  </div>
                                </td>
                                <td className="py-3 px-4">
                                  <div className="flex items-center gap-2">
                                    {getLatencyIcon(endpoint.latency)}
                                    <span>{endpoint.latency ? `${endpoint.latency}ms` : '-'}</span>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  )}
                  
                  {(!systemStatus || !systemStatus.chatEndpoints) && models.length > 0 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-medium">Model Status</h2>
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-white/10">
                                <th className="text-left py-3 px-4">Model</th>
                                <th className="text-left py-3 px-4">Provider</th>
                                <th className="text-left py-3 px-4">Status</th>
                                <th className="text-left py-3 px-4">Latency</th>
                              </tr>
                            </thead>
                            <tbody>
                              {models.map((model, index) => (
                                <tr key={index} className="border-b border-white/10">
                                  <td className="py-3 px-4">
                                    {model.name}
                                  </td>
                                  <td className="py-3 px-4">
                                    {model.owned_by}
                                  </td>
                                  <td className="py-3 px-4">
                                    <div className="flex items-center gap-2">
                                      {getStatusIcon(model.isLive ? 'up' : 'down', model.error)}
                                      <span className="capitalize">{model.isLive ? 'Available' : 'Unavailable'}</span>
                                    </div>
                                  </td>
                                  <td className="py-3 px-4">
                                    <div className="flex items-center gap-2">
                                      {getLatencyIcon(model.latency)}
                                      <span>{model.latency ? `${model.latency}ms` : '-'}</span>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {(!systemStatus || !systemStatus.chatEndpoints) && models.length === 0 && (
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center gap-3">
                        <Server className="w-6 h-6 text-[#52B788]" />
                        <p className="text-white/80">
                          No model information available.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>
    </>
  )
}