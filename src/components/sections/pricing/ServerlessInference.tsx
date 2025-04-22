import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { PricingRow } from './types'
import { useTranslation } from 'react-i18next'

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
        <h4 className="text-lg font-ovo">{title}</h4>
        <p className="text-sm text-white/80 mt-1">{description}</p>
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
        <h4 className="text-lg font-ovo">{title}</h4>
        <p className="text-sm text-white/80 mt-1">{description}</p>
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
        <h4 className="text-lg font-ovo">{title}</h4>
        <p className="text-sm text-white/80 mt-1">{description}</p>
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
        <h4 className="text-lg font-ovo">{title}</h4>
        <p className="text-sm text-white/80 mt-1">{description}</p>
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
  const {t} = useTranslation()

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-ovo">{t('serverlesspricing.title')}</h3>
      <p className="text-white/80">{t('serverlesspricing.intro')}</p>

      <ModelTable 
        title={t('serverlesspricing.text.title')} 
        description={t('serverlesspricing.text.description')}
        models={textModels}
      />

      <ModelTable 
        title={t('serverlesspricing.multimodal.title')} 
        description={t('serverlesspricing.multimodal.description')}
        models={multimodalModels}
      />

      <ModelTable 
        title={t('serverlesspricing.rerank.title')} 
        description={t('serverlesspricing.rerank.description')}
        models={rerankModels}
      />

      <ModelTable 
        title={t('serverlesspricing.embedding.title')} 
        description={t('serverlesspricing.embedding.description')}
        models={embeddingModels}
      />

      <ModelTable 
        title={t('serverlesspricing.moderation.title')} 
        description={t('serverlesspricing.moderation.description')}
        models={moderationModels}
      />

      <STTModelTable 
        title={t('serverlesspricing.stt.title')} 
        description={t('serverlesspricing.stt.description')}
        models={STTModels}
      />
      <p className="text-sm text-white/60 mt-1">{t('stt.note')}</p>

      <TTSModelTable 
        title={t('serverlesspricing.tts.title')} 
        description={t('serverlesspricing.tts.description')}
        models={TTSModels}
      />
      <p className="text-sm text-white/60 mt-1">{t('tts.note')}</p>

      <ImageModelTable 
        title={t('serverlesspricing.image.title')} 
        description={t('serverlesspricing.image.description')}
        models={imageModels}
      />
      <p className="text-sm text-white/60 mt-1">{t('serverlesspricing.image.note')}</p>

      <div className="rounded-lg bg-white/5 p-4 text-sm text-white/60">
        <p>{t('serverlesspricing.footer')}</p>
      </div>
    </div>
  )
}