import { useState } from 'react'
import { motion } from 'framer-motion'
import { Activity, CheckCircle, XCircle, Server } from 'lucide-react'
import { useModels } from '@/hooks/use-models'

export default function StatusPage() {
  const { models, loading, error } = useModels()
  
  const getStatusIcon = (isLive: boolean) => {
    return isLive 
      ? <CheckCircle className="w-5 h-5 text-green-500" />
      : <XCircle className="w-5 h-5 text-red-500" />
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
            ) : models.length > 0 ? (
              <div className="space-y-8">
                {/* Model Status */}
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
              </div>
            ) : (
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3">
                  <Server className="w-6 h-6 text-[#52B788]" />
                  <p className="text-white/80">
                    No model information available.
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
