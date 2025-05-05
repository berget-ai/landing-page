import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Activity, CheckCircle, XCircle, Server, AlertTriangle, Clock } from 'lucide-react'
import { useModels } from '@/hooks/use-models'

interface SystemStatus {
  status: string
  subsystems: {
    billing: { status: string }
    auth: { status: string }
    compute: { status: string }
    crm: { status: string }
  }
}

export default function StatusPage() {
  const { models, loading, error } = useModels()
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    status: 'unknown',
    subsystems: {
      billing: { status: 'unknown' },
      auth: { status: 'unknown' },
      compute: { status: 'unknown' },
      crm: { status: 'unknown' }
    }
  })
  const [statusLoading, setStatusLoading] = useState(true)
  
  useEffect(() => {
    const fetchSystemStatus = async () => {
      try {
        setStatusLoading(true)
        // Simulate fetching system status
        // In a real implementation, this would be an API call
        setTimeout(() => {
          setSystemStatus({
            status: 'healthy',
            subsystems: {
              billing: { status: 'up' },
              auth: { status: 'up' },
              compute: { status: 'up' },
              crm: { status: 'up' }
            }
          })
          setStatusLoading(false)
        }, 1000)
      } catch (err) {
        console.error('Failed to fetch system status:', err)
        setStatusLoading(false)
      }
    }
    
    fetchSystemStatus()
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
                {/* System Status */}
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">Billing</h4>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(systemStatus.subsystems.billing.status)}
                            <span className="text-sm capitalize">{systemStatus.subsystems.billing.status}</span>
                          </div>
                        </div>
                        <p className="text-xs text-white/60">Lago billing system</p>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">Authentication</h4>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(systemStatus.subsystems.auth.status)}
                            <span className="text-sm capitalize">{systemStatus.subsystems.auth.status}</span>
                          </div>
                        </div>
                        <p className="text-xs text-white/60">Keycloak authentication service</p>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">Compute</h4>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(systemStatus.subsystems.compute.status)}
                            <span className="text-sm capitalize">{systemStatus.subsystems.compute.status}</span>
                          </div>
                        </div>
                        <p className="text-xs text-white/60">Harvester compute infrastructure</p>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">CRM</h4>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(systemStatus.subsystems.crm.status)}
                            <span className="text-sm capitalize">{systemStatus.subsystems.crm.status}</span>
                          </div>
                        </div>
                        <p className="text-xs text-white/60">Odoo CRM system</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Model Status */}
                {models.length > 0 && (
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
                                  {getStatusIcon(model.isLive || false)}
                                  <span className="capitalize">{model.isLive ? 'Available' : 'Unavailable'}</span>
                                </div>
                              </td>
                              <td className="py-3 px-4">
                                {model.latency ? `${model.latency}ms` : '-'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                )}
                
                {models.length === 0 && (
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
  )
}
