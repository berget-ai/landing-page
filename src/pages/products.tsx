import { motion } from 'framer-motion'
import { Cloud, Server, Cpu, Database, Bot, ArrowRight, Sparkles, Zap, MessageSquare, Network, GitBranch, Globe, Box, Users, Lock, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ModelsSection } from '@/components/sections/ModelsSection'

const serviceComponents = [
  {
    category: 'AI Platform',
    icon: Bot,
    items: ['Marketplace', 'Databases', 'Vector Search', 'DevOps Tools', 'AI Frameworks']
  },
  {
    category: 'Compute & Inference',
    icon: Cpu,
    items: ['Inference Endpoints', 'Model Hosting', 'CPU Compute', 'GPU Compute']
  },
  {
    category: 'Management',
    icon: GitBranch,
    items: ['Management Console', 'User & Team Management', 'Service Management', 'Resource & Cost Management']
  }
]

const platformStack = [
  {
    name: 'Tools & Marketplace',
    icon: Box,
    color: 'from-blue-500 to-purple-500',
    items: ['Database', 'Vector DB', 'DevOps', 'Agentic Frameworks'],
  },
  {
    name: 'LLM',
    icon: Bot,
    color: 'from-purple-500 to-pink-500',
    items: ['Inference', 'Model Hosting'],
  },
  {
    name: 'Compute',
    icon: Cpu,
    color: 'from-pink-500 to-rose-500',
    items: ['CPU', 'GPU'],
  },
  {
    name: 'Connectivity',
    icon: Network,
    color: 'from-orange-500 to-amber-500',
    items: ['Isolated Network', 'VPN & Hybrid Cloud'],
  },
]

const managementStack = {
  name: 'Management',
  icon: Users,
  color: 'from-rose-500 to-orange-500',
  items: ['Management Console', 'User & Team Management', 'Service Management', 'Resource & Cost Management'],
}

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
        <div className="space-y-32">
          {/* Serverless Inference */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-medium mb-4">Serverless Inference</h2>
                <p className="text-lg text-white/60">
                  Leverage the power of the world's leading Open LLMs without managing infrastructure. Simply start using our API and consume models from our model library.
                </p>
              </motion.div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
              >
                <Cloud className="w-8 h-8 mb-4 text-blue-400" />
                <h3 className="text-xl font-medium mb-3">Easy Integration</h3>
                <ul className="space-y-3 text-white/60">
                  <li>OpenAI-compatible API</li>
                  <li>Simple implementation</li>
                  <li>Seamless scaling</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
              >
                <Zap className="w-8 h-8 mb-4 text-purple-400" />
                <h3 className="text-xl font-medium mb-3">Flexible Usage</h3>
                <ul className="space-y-3 text-white/60">
                  <li>Pay-as-you-go pricing</li>
                  <li>On-demand inference</li>
                  <li>Batch processing support</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
              >
                <Server className="w-8 h-8 mb-4 text-emerald-400" />
                <h3 className="text-xl font-medium mb-3">Robust Infrastructure</h3>
                <ul className="space-y-3 text-white/60">
                  <li>Dedicated GPU clusters</li>
                  <li>European data centers</li>
                  <li>High availability</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Platform Stack Illustration */}
          <div className="container mx-auto px-4 py-24 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-medium mb-4">Platform Architecture</h2>
                  <p className="text-lg text-white/60">
                    A comprehensive stack designed for enterprise AI development and deployment
                  </p>
                </motion.div>
              </div>

              <div className="relative">
                {/* Background gradient effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
                
                {/* Main layout container */}
                <div className="relative grid grid-cols-12 gap-6">
                  {/* Stack layers - Left side */}
                  <div className="col-span-9">
                    <div className="space-y-4">
                      {platformStack.map((layer, index) => (
                        <motion.div
                          key={layer.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="relative group"
                        >
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${layer.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                          <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5">
                            <div className="flex items-center gap-4 mb-6">
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center`}>
                                <layer.icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-xl font-medium">{layer.name}</h3>
                              </div>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                              {layer.items.map((item, itemIndex) => (
                                <div
                                  key={item}
                                  className={`px-4 py-3 rounded-lg bg-white/5 text-sm text-center border border-white/10 hover:bg-white/10 transition-colors ${
                                    layer.items.length === 2 && itemIndex === 0 ? 'col-span-2' : 
                                    layer.items.length === 2 && itemIndex === 1 ? 'col-span-2' : ''
                                  }`}
                                >
                                  {item}
                                </div>
                              ))}
                            </div>
                          </div>
                          {index < platformStack.length - 1 && (
                            <div className="absolute left-[2.25rem] bottom-0 w-0.5 h-4 bg-gradient-to-b from-white/20 to-transparent" />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Management Stack - Right side */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="col-span-3"
                  >
                    <div className={`relative h-full group`}>
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${managementStack.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                      <div className="relative h-full p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col">
                        <div className="flex items-center gap-4 mb-8">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${managementStack.color} flex items-center justify-center`}>
                            <managementStack.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-medium">{managementStack.name}</h3>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-center space-y-4">
                          {managementStack.items.map((item) => (
                            <div
                              key={item}
                              className="p-4 rounded-lg bg-white/5 text-sm text-center border border-white/10 hover:bg-white/10 transition-colors"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                        <div className="absolute left-0 top-1/2 w-6 h-0.5 bg-gradient-to-r from-transparent to-white/20" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-60" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
                </div>
              </div>
            </div>
          </div>

          {/* Models Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-medium mb-4">Our Models</h2>
                <p className="text-lg text-white/60">
                  Access a broad selection of powerful open models to build diverse AI solutions.
                </p>
                <Button className="mt-6" asChild>
                  <Link to="/contact">
                    Request a Model
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            <div className="lg:col-span-8">
              <ModelsSection />
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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