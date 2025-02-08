import { motion } from 'framer-motion'
import { Cloud, Server, Cpu, Database, Bot, ArrowRight, Sparkles, Zap, MessageSquare, Workflow, FileSearch } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const models = [
  {
    name: 'Llama 3 70B',
    type: 'Text Generation',
    context: '32k tokens',
    performance: 'State-of-the-art',
    status: 'Available',
  },
  {
    name: 'Mixtral 8x7B',
    type: 'Text Generation',
    context: '32k tokens',
    performance: 'High',
    status: 'Available',
  },
  {
    name: 'Whisper Large v3',
    type: 'Speech-to-Text',
    context: 'N/A',
    performance: 'High',
    status: 'Coming Soon',
  },
  {
    name: 'Stable Diffusion XL',
    type: 'Image Generation',
    context: 'N/A',
    performance: 'High',
    status: 'Coming Soon',
  },
]

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
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/signup">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/docs">View Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Sections */}
      <div className="container mx-auto px-4 py-24 space-y-24">
        {/* Serverless Inference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative p-8 rounded-3xl border border-white/10 h-full">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-medium mb-4">Serverless Inference</h2>
            <p className="text-white/60 mb-6">
              Access powerful open-source models through our OpenAI-compatible API. Start building immediately with pay-as-you-go pricing.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span>50+ pre-trained models available</span>
              </li>
              <li className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-purple-400" />
                <span>OpenAI API compatibility</span>
              </li>
              <li className="flex items-center gap-3">
                <Server className="w-5 h-5 text-pink-400" />
                <span>Automatic scaling and high availability</span>
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
          className="relative group max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-emerald-500/10 via-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative p-8 rounded-3xl border border-white/10 h-full">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
              <Server className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-medium mb-4">Dedicated Inference</h2>
            <p className="text-white/60 mb-6">
              Deploy and manage your own models on dedicated GPU infrastructure. Perfect for high-volume production workloads.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-emerald-400" />
                <span>AMD MI300 GPUs with 192GB HBM3 memory</span>
              </li>
              <li className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-teal-400" />
                <span>Optimized for large language models</span>
              </li>
              <li className="flex items-center gap-3">
                <Server className="w-5 h-5 text-cyan-400" />
                <span>Full control over model deployment and scaling</span>
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
          className="relative group max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-rose-500/10 via-pink-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative p-8 rounded-3xl border border-white/10 h-full">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-medium mb-4">Complete AI Platform</h2>
            <p className="text-white/60 mb-6">
              Everything you need to build AI applications - from vector databases to monitoring tools, all in one secure environment.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-rose-400" />
                <span>GitOps-based infrastructure management</span>
              </li>
              <li className="flex items-center gap-3">
                <Server className="w-5 h-5 text-pink-400" />
                <span>Built-in monitoring and observability</span>
              </li>
              <li className="flex items-center gap-3">
                <Database className="w-5 h-5 text-red-400" />
                <span>Integrated vector and relational databases</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Our Models */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative group max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative p-8 rounded-3xl border border-white/10 h-full">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-6">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-medium">Available Models</h2>
              <Button asChild variant="ghost" size="sm" className="group">
                <Link to="/docs/models">
                  View Model Documentation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <p className="text-white/60 mb-6">
              We aim to provide access to the most powerful and popular open models you need to power your AI applications and provide a broad selection of model types - instruct, embeddings, re-rerank, moderation as well as across modalities.
            </p>
            <div className="overflow-hidden rounded-lg border border-white/10">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Model</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Context</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {models.map((model) => (
                    <TableRow key={model.name}>
                      <TableCell className="font-medium">{model.name}</TableCell>
                      <TableCell>{model.type}</TableCell>
                      <TableCell>{model.context}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                          model.status === 'Available' 
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : 'bg-amber-500/10 text-amber-400'
                        }`}>
                          {model.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </motion.div>

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
    </main>
  )
}