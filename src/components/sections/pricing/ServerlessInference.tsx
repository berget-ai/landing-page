import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { PricingRow } from './types'

const textModels: PricingRow[] = [
  {
    name: 'Llama 3.1 405B',
    flavour: 'Instruct',
    price: '€5/€15',
  },
  {
    name: 'Llama 3.1 70B',
    flavour: 'Nemotron',
    price: '€1.99/€7.99',
  },
  {
    name: 'Mixtral 8x7B',
    flavour: 'Instruct',
    price: '€3/€9',
  },
]

const rerankModels: PricingRow[] = [
  {
    name: 'BGE Reranker Large v1.5',
    flavour: 'Reranking',
    price: '€0.20',
  },
  {
    name: 'Cohere Rerank',
    flavour: 'Reranking',
    price: '€0.15',
  },
  {
    name: 'Mixtral Reranker',
    flavour: 'Reranking',
    price: '€0.10',
  },
]

const embeddingModels: PricingRow[] = [
  {
    name: 'Llama 3.1 Embeddings',
    flavour: 'Embeddings',
    price: '€0.10',
  },
  {
    name: 'Mixtral Embeddings',
    flavour: 'Embeddings',
    price: '€0.05',
  },
]

const speechModels: PricingRow[] = [
  {
    name: 'Whisper Large v3',
    flavour: 'Speech-to-Text',
    price: '€19.99',
  },
  {
    name: 'Coqui TTS',
    flavour: 'Text-to-Speech',
    price: '€15.99',
  },
]

const imageModels: PricingRow[] = [
  {
    name: 'Stable Diffusion XL',
    flavour: 'Image Generation',
    price: '€0.29',
  },
  {
    name: 'Stable Diffusion XL Refiner',
    flavour: 'Image Refinement',
    price: '€0.15',
  },
]

function ModelTable({ title, description, models }: { title: string; description: string; models: PricingRow[] }) {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-sm text-white/60 mt-1">{description}</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[400px]">Model</TableHead>
            <TableHead className="w-[200px]">Type</TableHead>
            <TableHead className="w-[200px]">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {models.map((model) => (
            <TableRow key={model.name} className="group">
              <TableCell className="font-medium w-[400px]">{model.name}</TableCell>
              <TableCell className="w-[200px]">{model.flavour}</TableCell>
              <TableCell className="w-[200px]">{model.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export function ServerlessInference() {
  return (
    <div className="space-y-8">
      <h3 className="text-xl font-medium">Serverless Inference</h3>
      <p className="text-white/60">Access our comprehensive selection of AI models through our OpenAI compliant API. Pay only for what you use with no upfront commitments.</p>

      <p className="text-white/60">Prices are per 1 million tokens including input and output tokens for text based models unless stated otherwise, only including input tokens for Embedding and Rerank models. Image models are based on steps for Image models.</p>
      
      <ModelTable 
        title="Text Generation Models" 
        description="High-performance language models for text generation, chat, and completion tasks"
        models={textModels}
      />

      <ModelTable 
        title="Rerank Models" 
        description="Improve search quality by reranking results based on semantic relevance"
        models={rerankModels}
      />

      <ModelTable 
        title="Embedding Models" 
        description="Create vector embeddings for semantic search and RAG applications"
        models={embeddingModels}
      />

      <ModelTable 
        title="Speech Models" 
        description="Convert between speech and text with high accuracy"
        models={speechModels}
      />

      <ModelTable 
        title="Image Models" 
        description="Generate and manipulate images with state-of-the-art models"
        models={imageModels}
      />

      <div className="rounded-lg bg-white/5 p-4 text-sm text-white/60">
        <p>All prices are in EUR and exclude VAT. MT = Million Tokens.</p>
        <p className="mt-2"></p>
      </div>
    </div>
  )
}