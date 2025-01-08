import { motion } from 'framer-motion'
import { GitBranch, Database, Shield, Cloud, Link2, Cpu } from 'lucide-react'

export function Overview() {
  return (
    <section className="py-32 relative overflow-hidden bg-black/40">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 mb-6">
            <GitBranch className="w-4 h-4 mr-2" />
            <span className="text-sm">GitOps Architecture</span>
          </div>
          <h2 className="text-4xl font-medium mb-6">How Berget Works</h2>
          <p className="text-lg text-white/60">
            A modern cloud platform built for AI workloads, using GitOps for
            seamless deployment and management of your applications.
          </p>
        </div>

        <div className="relative">
          {/* GitOps SVG Illustration */}
          <div className="absolute inset-0 hidden lg:block">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3.5, 0 7"
                    fill="rgba(255,255,255,0.2)"
                  />
                </marker>
              </defs>
              <rect x="100" y="100" width="200" height="100" fill="#2D6A4F" />
              <text x="200" y="150" fill="#fff" textAnchor="middle" fontSize="16">
                Git Repository
              </text>
              <path
                d="M300,150 L500,150"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <rect x="500" y="100" width="200" height="100" fill="#40916C" />
              <text x="600" y="150" fill="#fff" textAnchor="middle" fontSize="16">
                Kubernetes Cluster
              </text>
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Git Repository */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="mb-4">
                <GitBranch className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium mb-2">Git Repository</h3>
              <p className="text-white/60 mb-4">
                Your infrastructure as code and application configurations are
                version controlled in Git.
              </p>
              <div className="text-sm text-white/40">
                Automated sync with your cluster
              </div>
            </motion.div>

            {/* Berget Cluster */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="mb-4">
                <Cpu className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-medium mb-2">Berget Cluster</h3>
              <p className="text-white/60 mb-4">
                Dedicated GPU resources, isolated network, and encrypted storage
                for your workloads.
              </p>
              <div className="text-sm text-white/40">
                Enterprise-grade security & performance
              </div>
            </motion.div>

            {/* External Connections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="mb-4">
                <Link2 className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-medium mb-2">Cloud Connectivity</h3>
              <p className="text-white/60 mb-4">
                Secure connections to Azure, Google Cloud, or your own
                infrastructure via IPSec tunnels.
              </p>
              <div className="text-sm text-white/40">Hybrid cloud ready</div>
            </motion.div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5">
              <Database className="w-5 h-5 text-white/60" />
              <span className="text-sm text-white/60">Dedicated Databases</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5">
              <Shield className="w-5 h-5 text-white/60" />
              <span className="text-sm text-white/60">Encrypted Storage</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5">
              <Cloud className="w-5 h-5 text-white/60" />
              <span className="text-sm text-white/60">Multi-Cloud Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
