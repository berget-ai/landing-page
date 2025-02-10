import { motion } from 'framer-motion'
import { Cloud, Server, Cpu, Database, Bot, ArrowRight, Sparkles, Zap, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ModelsSection } from '@/components/sections/ModelsSection'

const marketplaceApps = [
  {
    category: 'Databases',
    icon: Database,
    color: 'blue',
    apps: ['PostgreSQL', 'Redis', 'Supabase'],
  },
  {
    category: 'Vector Databases',
    icon: Database,
    color: 'purple',
    apps: ['Weaviate', 'Milvus', 'Qdrant'],
  },
  {
    category: 'DevOps Tools',
    icon: Server,
    color: 'emerald',
    apps: ['Prometheus', 'Grafana', 'ArgoCD'],
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/50">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] pointer-events-none" />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-medium mb-6">
              Build the Future with Berget AI
            </h1>
            <p className="text-xl text-white/60 mb-8">
              Enterprise-grade AI infrastructure designed for European businesses. Secure, compliant, and ready to scale.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto space-y-24">
          {/* Serverless Inference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Serverless Inference</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Use the most popular and powerful Open LLMs for your AI applications</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Simple LLM inference with OpenAI compatible API</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Pay as you go, scale as you grow</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Dedicated Inference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-emerald-500/10 via-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
                <Server className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Dedicated Inference</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Run your own models that you have fine tuned or trained</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>Run your own instances on dedicated capacity</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Allows you to scale your production workloads</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Berget AI Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-rose-500/10 via-pink-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Berget AI Platform</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span>Full control and transparency in our dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  <span>Flexible and simple kubernetes cluster management</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span>Ready made recipes for AI applications</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* App Marketplace */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">App Marketplace</h2>
              <p className="text-white/60 mb-6">
                Simple deployment of the most popular Open Source tools for developing AI applications
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {marketplaceApps.map((category) => (
                  <div key={category.category} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <category.icon className="w-6 h-6 mb-3" />
                    <h3 className="text-lg font-medium mb-2">{category.category}</h3>
                    <ul className="space-y-1">
                      {category.apps.map((app) => (
                        <li key={app} className="text-sm text-white/60">{app}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Models Section */}
          <ModelsSection />

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-medium mb-6">Ready to Start Building?</h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Join the growing community of developers building the future of AI with Berget.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}