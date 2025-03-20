import { motion } from 'framer-motion'
import { Bot, ArrowRight } from 'lucide-react'
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
    name: 'DeepSeek R1 Unsloth DQ',
    type: 'Text Generation',
    context: '32k tokens',
    performance: 'State-of-the-Art',
    status: 'Available',
  },
  {
    name: 'Gemma 3 27B Instruct',
    type: 'Text Generation',
    context: '32k tokens',
    performance: 'State-of-the-Art',
    status: 'Available',
  },
  {
    name: 'Gemma 3 12B Instruct',
    type: 'Text Generation',
    context: 'N/A',
    performance: 'State-of-the-Art',
    status: 'Coming Soon',
  },
  {
    name: 'Qwen QwQ 32B',
    type: 'Text Generation',
    context: 'N/A',
    performance: 'State-of-the-Art',
    status: 'Coming Soon',
  },
  {
    name: 'Whisper Large v3',
    type: 'Speech-to-Text',
    context: 'N/A',
    performance: 'High',
    status: 'Available',
  },
  {
    name: 'Stable Diffusion XL',
    type: 'Image Generation',
    context: 'N/A',
    performance: 'High',
    status: 'Coming Soon',
  },
  {
    name: 'Nomic Text Embedd v1.5',
    type: 'Embedding',
    context: 'N/A',
    performance: 'State-of-the-Art',
    status: 'Coming Soon',
  },
  {
    name: 'MMxbai Rerank Base V2',
    type: 'Rerank',
    context: 'N/A',
    performance: 'High',
    status: 'Coming Soon',
  },
]

export function ModelsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute inset-0 rounded-3xl bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-8 rounded-3xl border border-white/10 h-full">
        <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6">
          <Bot className="w-6 h-6" />
        </div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-medium">Our Models</h2>
          <Button asChild variant="ghost" size="sm" className="group">
            <Link to="/docs/models">
              View Model Documentation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        <p className="text-white/60 mb-6">
          We aim to provide access to the most powerful and popular open models you need to power your AI applications.
        </p>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Comprehensive Model Selection</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                <span>Broad selection of model types including instruct, re-rerank, and moderation models</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                <span>Optimized for agentic applications and complex AI workflows</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                <span>Support for multiple modalities: text, image, speech-to-text, and text-to-speech</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10 mt-8">
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
                        ? 'bg-primary/20 text-primary'
                        : 'bg-muted text-muted-foreground'
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
  )
}
