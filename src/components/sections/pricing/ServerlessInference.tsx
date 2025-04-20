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
    name: 'Google Gemma3 12B',
    inputprice: '€0.25',
    outputprice: '€0.25',
  },
  {
    name: 'Google Gemma 3 27B',
    inputprice: '€0.50',
    outputprice: '€0.50',
  },
  {
    name: 'Meta Llama 3.2 1B Instruct',
    inputprice: '€0.04',
    outputprice: '€0.04',
  },
  {
    name: 'Meta Llama 3.2 3B Instruct',
    inputprice: '€0.06',
    outputprice: '€0.06',
  },
  {
    name: 'Meta Llama 3.1 8B Instruct',
    inputprice: '€0.20',
    outputprice: '€0.20',
  },
  {
    name: 'Meta Llama 3.3 70B Instruct',
    inputprice: '€0.90',
    outputprice: '€0.90',
  },
  {
    name: 'Agentica DeepCoder 14B Preview',
    inputprice: '€0.40',
    outputprice: '€0.40',
  },
  {
    name: 'Qwen 2.5 Coder 32B',
    inputprice: '€0.80',
    outputprice: '€0.80',
  },
  {
    name: 'Qwen QwQ 32B',
    inputprice: '€1.00',
    outputprice: '€1.00',
  },
  {
    name: 'Unsloth DeepSeek R1 Dynamoc Quant',
    inputprice: '€1.00',
    outputprice: '€1.00',
  },

]

const multimodalModels: PricingRow[] = [
  {
    name: 'Qwen 2.5 7B VL',
    inputprice: '€0.50',
    outputprice: '€0.50',
  },
  {
    name: 'Qwen 2.5 72B VL',
    inputprice: '€1.00',
    outputprice: '€1.00',
  },
]


const rerankModels: PricingRow[] = [
  {
    name: 'mxbai Rerank base v2',
    inputprice: '€0.1',
    outputprice: '-',
  },
  {
    name: '"BAAI BGE Reranker v2 m3"',
    inputprice: '€0.1',
    outputprice: '-',
  },
]

const embeddingModels: PricingRow[] = [
  {
    name: 'Intfloat-Multilingual-E5-large-instruct',
    inputprice: '€0.02',
    outputprice: '-',
  },
  {
    name: 'Intfloat-Multilingual-E5-small',
    inputprice: '€0.01',
    outputprice: '-',
  },
]

const STTModels: PricingRow[] = [
  {
    name: 'Whisper Large v3',
    inputprice: '€2.00',
    outputprice: '-',
  },
  {
    name: 'Whisper Large v3 Turbo',
    inputprice: '€1.00',
    outputprice: '-',
  },
  {
    name: 'KB Whisper Large',
    inputprice: '€2.00',
    outputprice: '-',
  },
]

const TTSModels: PricingRow[] = [
  {
    name: 'Hexgrad Kokoro 82M',
    inputprice: '€15.00',
    outputprice: '-',
  },
  {
    name: 'Sesame CSM 1B',
    inputprice: '€20.00',
    outputprice: '-',
  },
]

const imageModels: PricingRow[] = [
  {
    name: 'Stable Diffusion XL',
    inputprice: '€0.04 / step',
    outputprice: '-',
  },
  {
    name: 'Black Forest Labs Flux.1 [schnell]',
    inputprice: '€0.002 / step',
    outputprice: '-',
  },
  {
    name: 'Black Forest Labs Flux.1 Dev',
    inputprice: '€0.02 / step',
    outputprice: '',
  },
]

const moderationModels: PricingRow[] = [
  {
    name: 'SMeta-Llama-Guard-3-8B',
    inputprice: '€0.3',
    outputprice: '€0.3',
  },
  {
    name: 'Google-ShieldGemma-2B',
    inputprice: '€0.1',
    outputprice: '€0.1',
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
            <TableHead className="w-[200px]">Model</TableHead>
            <TableHead className="w-[60px]">Input (€/M Tokens)</TableHead>
            <TableHead className="w-[60px]">Output (€/M Tokens)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {models.map((model) => (
            <TableRow key={model.name} className="group">
              <TableCell className="font-medium w-[200px]">{model.name}</TableCell>
              <TableCell className="w-[60px]">{model.inputprice}</TableCell>
              <TableCell className="w-[60px]">{model.outputprice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function ImageModelTable({ title, description, models }: { title: string; description: string; models: PricingRow[] }) {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-sm text-white/60 mt-1">{description}</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[200px]">Model</TableHead>
            <TableHead className="w-[60px]">€ / step</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {models.map((model) => (
            <TableRow key={model.name} className="group">
              <TableCell className="font-medium w-[200px]">{model.name}</TableCell>
              <TableCell className="w-[60px]">{model.inputprice}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function STTModelTable({ title, description, models }: { title: string; description: string; models: PricingRow[] }) {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-sm text-white/60 mt-1">{description}</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[200px]">Model</TableHead>
            <TableHead className="w-[60px]">€ / 1000 mins</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {models.map((model) => (
            <TableRow key={model.name} className="group">
              <TableCell className="font-medium w-[200px]">{model.name}</TableCell>
              <TableCell className="w-[60px]">{model.inputprice}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function TTSModelTable({ title, description, models }: { title: string; description: string; models: PricingRow[] }) {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-sm text-white/60 mt-1">{description}</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[200px]">Model</TableHead>
            <TableHead className="w-[60px]">€/M Characters</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {models.map((model) => (
            <TableRow key={model.name} className="group">
              <TableCell className="font-medium w-[200px]">{model.name}</TableCell>
              <TableCell className="w-[60px]">{model.inputprice}</TableCell>
            
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
      
      <ModelTable 
        title="Text Generationa Models" 
        description="High-performance language models for text generation, chat, and completion tasks"
        models={textModels}
      />

      <ModelTable 
        title="Multimodal models" 
        description="Models that lets you take both text and images as input to build powerful applications that leverage seamless understanding of images and text"
        models={multimodalModels}
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
        title="Moderation Models" 
        description="Model that can be used in applications to moderate behaviour, detect potentially hamrful langeugage to keep your applications safe"
        models={moderationModels}
      />


      <STTModelTable 
        title="Speech-to-Text Models" 
        description="Convert between speech and text with high accuracy"
        models={STTModels}
      />
      <p className="text-sm text-white/60 mt-1">Prices are per 1000 minutes of voice input. Billed on per second intervalls.</p>


      <TTSModelTable 
        title="Text-to-Speech Models" 
        description="Add a voice to your agents for convincing and seamless interaction with your agentic applications"
        models={TTSModels}
      />
      <p className="text-sm text-white/60 mt-1">Prices and per Million input characters</p>


      <ImageModelTable 
        title="Image Models" 
        description="Generate and manipulate images with state-of-the-art models"
        models={imageModels}
      />
      <p className="text-sm text-white/60 mt-1">SDXL standard is 30 steps per image. Flux.1 [schnell] standard is 4 steps per image. Flux.1 Dev is 28 steps per image</p>
 

      <div className="rounded-lg bg-white/5 p-4 text-sm text-white/60">
        <p>All prices are in EUR and exclude VAT.</p>
        <p className="mt-2"></p>
      </div>
    </div>
  )
}