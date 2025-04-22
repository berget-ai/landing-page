import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Filter, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const models = [
  {
    name: 'Llama 3.2 1B Instruct',

    type: 'Text Models',

    provider: 'Meta',

    license: 'Llama 3.2',

    description:
      'Compact instruction-tuned language model for high speed and low cost for agentic workflows and simpler tasks',

    status: 'available',

    huggingface: 'https://huggingface.co/meta-llama/Llama-3.2-1B-Instruct',
  },

  {
    name: 'Llama 3.2 3B Instruct',

    type: 'Text Models',

    provider: 'Meta',

    license: 'Llama 3.2',

    description:
      'Instruction-tuned variant of Llama 3 optimized for task completion, small and fast.',

    status: 'available',

    huggingface: 'https://huggingface.co/meta-llama/Llama-3.2-3B-Instruct',
  },

  {
    name: 'Llama 3.1 8B Instruct',

    type: 'Text Models',

    provider: 'Meta',

    license: 'Llama 3.1',

    description:
      'Mid-sized instruction-tuned language model with balanced performance and cost.',

    status: 'available',

    huggingface: 'https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct',
  },

  {
    name: 'Gemma 3 12B',

    type: 'Text Models',

    provider: 'Google',

    license: 'Gemma',

    description:
      'Advanced language model with strong reasoning capabilities. Workhorse for agentic applications',

    status: 'available',

    huggingface: 'https://huggingface.co/google/gemma-3-12b-it',
  },

  {
    name: 'Gemma 3 27B',

    type: 'Text Models',

    provider: 'Google',

    license: 'Gemma',

    description:
      'Advanced language model with strong performance across various tasks.',

    status: 'available',

    huggingface: 'https://huggingface.co/google/gemma-3-27b-it',
  },

  {
    name: 'QwQ-32B',

    type: 'Text Models',

    provider: 'Alibaba',

    license: 'Qwen License',

    description:
      'Large-scale language model with advanced reasoning capabilities.',

    status: 'available',

    huggingface: 'https://huggingface.co/Qwen/QwQ-32B',
  },

  {
    name: 'Llama 3.3 70B Instruct',

    type: 'Text Models',

    provider: 'Meta',

    license: 'Llama 3.3',

    description:
      'Large-scale instruction-tuned model with state-of-the-art performance.',

    status: 'available',

    huggingface: 'https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct',
  },

  {
    name: 'DeepSeek R1 Dynamic Quant',

    type: 'Text Models',

    provider: 'Unsloth',

    license: 'Apache 2.0',

    description:
      'The premier Open Source Reasoning model. This variant is optimized dynamic quantization allowing for smaller footprint, higher speed and lower cost, while retaining performance in reasoning and multi-step problem solving.',

    status: 'available',

    huggingface: 'https://huggingface.co/unsloth/DeepSeek-R1-GGUF',
  },

  {
    name: 'Multilingual E5 large instruct',

    type: 'Text Embedding',

    provider: 'Intfloat',

    license: 'MIT',

    description:
      'Large multilingual embedding model based on E5 Mistral 7B instruct. With enhanced multilingual capabilities and good performance on Scandinavian languages.',

    status: 'available',

    huggingface:
      'https://huggingface.co/intfloat/multilingual-e5-large-instruct',
  },

  {
    name: 'Multilingual E5 small',

    type: 'Text Embedding',

    provider: 'Intfloat',

    license: 'MIT',

    description:
      'Compact but powerful text embedding model developed for semantic similarity tasks and information retrieval.',

    status: 'available',

    huggingface: 'https://huggingface.co/intfloat/multilingual-e5-small',
  },

  {
    name: 'Stable Diffusion XL 1.0 io32',

    type: 'Image Generation',

    provider: 'AMD',

    license: 'CreativeML Open RAIL-M',

    description:
      'High-performance image generation model optimized for AMD hardware.',

    status: 'available',

    huggingface:
      'https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0',
  },

  {
    name: 'Flux.1 [schnell]',

    type: 'Image Generation',

    provider: 'Black Forest Labs',

    license: 'Apache 2.0',

    description:
      'Fast and efficient image generation model, great output quality and competitive prompt following, matching the performance of closed source alternatives. Can generate a high quality picture in only 1 to 4 steps',

    status: 'available',

    huggingface: 'https://huggingface.co/black-forest-labs/FLUX.1-schnell',
  },

  {
    name: 'Flux.1 Dev',

    type: 'Image Generation',

    provider: 'Black Forest Labs',

    license: 'flux-1-dev-non-commercial-license',

    description:
      'Developer-focused variant of Flux.1 with enhanced image generation capabilities.',

    status: 'available',

    huggingface: 'https://huggingface.co/black-forest-labs/FLUX.1-dev',
  },

  {
    name: 'Llama Guard 3 8B',

    type: 'Moderation',

    provider: 'Meta',

    license: 'Llama 2 License',

    description:
      'Advanced content moderation model for detecting and filtering harmful content.',

    status: 'available',

    huggingface: 'https://huggingface.co/meta-llama/Llama-Guard-3-8B',
  },

  {
    name: 'ShieldGemma 2B',

    type: 'Moderation',

    provider: 'Google',

    license: 'Gemma License',

    description:
      'Specialized model for content moderation and safety enforcement.',

    status: 'available',

    huggingface: 'https://huggingface.co/google/gemma-2b-it',
  },

  {
    name: 'Qwen 2.5 VL 72B',

    type: 'Multimodal',

    provider: 'Alibaba',

    license: 'Qwen License',

    description:
      'Large-scale vision-language model with advanced multimodal capabilities. Perfect for advanced agentic and RAG workflows',

    status: 'available',

    huggingface: 'https://huggingface.co/Qwen/Qwen2.5-VL-72B-Instruct',
  },

  {
    name: 'Qwen 2.5 7B VL',

    type: 'Multimodal',

    provider: 'Alibaba',

    license: 'Qwen License',

    description:
      'Efficient vision-language model optimized for real-time applications.',

    status: 'available',

    huggingface: 'https://huggingface.co/Qwen/Qwen2.5-VL-7B-Instruct',
  },

  {
    name: 'Rerank base v2',

    type: 'Reranking',

    provider: 'mxbai',

    license: 'Apache 2.0',

    description:
      'Reranking model for search result optimization in RAG applications. State-of-the-art performance and strong efficiency ith multilingual support (100+ languages) code and long context support',

    status: 'available',

    huggingface: 'https://huggingface.co/mixedbread-ai/mxbai-rerank-base-v2',
  },

  {
    name: 'bge reranker v2 m3',

    type: 'Reranking',

    provider: 'BAAI',

    license: 'Apache 2.0',

    description:
      'Lightweight reranker model, possesses strong multilingual capabilities.',

    status: 'available',

    huggingface: 'https://huggingface.co/BAAI/bge-reranker-v2-m3',
  },

  {
    name: 'Whisper (large v3)',

    type: 'Speech-to-Text',

    provider: 'OpenAI',

    license: 'Apache 2.0',

    description:
      'Large speech recognition and transcription model with multilingual capabilities.',

    status: 'available',

    huggingface: 'https://huggingface.co/openai/whisper-large-v3',
  },

  {
    name: 'KB Whisper Large',

    type: 'Speech-to-Text',

    provider: 'KB',

    license: 'Apache 2.0',

    description:
      'Customized Whisper model optimized for Swedish language. Trained by the National Library of Sweden on over 50,000 hours of Swedish speech ',

    status: 'available',

    huggingface: 'https://huggingface.co/KBLab/kb-whisper-large',
  },

  {
    name: 'Whisper (large v3 turbo)',

    type: 'Speech-to-Text',

    provider: 'OpenAI',

    license: 'Apache 2.0',

    description:
      'Optimized version of Whisper with improved speed and efficiency.',

    status: 'available',

    huggingface: 'https://huggingface.co/openai/whisper-large-v3',
  },

  {
    name: 'Kokoro 82M',

    type: 'Text-to-Speech',

    provider: 'Hexgrad',

    license: 'Apache 2.0',

    description: 'Lightweight text-to-speech model optimized for efficiency.',

    status: 'available',

    huggingface: 'https://huggingface.co/hexgrad/Kokoro-82M',
  },

  {
    name: 'CSM 1B',

    type: 'Text-to-Speech',

    provider: 'Sesame',

    license: 'Apache 2.0',

    description: 'Compact text-to-speech model with specialized capabilities.',

    status: 'available',

    huggingface: 'https://huggingface.co/sesame/csm-1b',
  },

  {
    name: 'Qwen 2.5 Coder 32B',

    type: 'Code Generation',

    provider: 'Alibaba',

    license: 'Qwen License',

    description:
      'Specialized model for code generation and software development.',

    status: 'available',

    huggingface: 'https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct',
  },

  {
    name: 'DeepCoder 14B Preview',
    type: 'Code Generation',
    provider: 'Agentica',
    license: 'Apache 2.0',
    description: 'Preview version of advanced code generation model.',
    status: 'available',
    huggingface: 'https://huggingface.co/agentica-org/DeepCoder-14B-Preview',
  },
]

export default function ModelsPage() {
  const { t } = useTranslation()
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const modelTypes = useMemo(() => {
    const types = Array.from(new Set(models.map((model) => model.type)))
    return [
      'Text Models',
      ...types.filter((type) => type !== 'Text Models').sort(),
    ]
  }, [])

  const filteredModels = useMemo(() => {
    if (!selectedType) return models
    return models.filter((model) => model.type === selectedType)
  }, [selectedType])

  return (
    <div className="container mx-auto py-24">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-medium mb-6">{t('modelPage.title')}</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-white/80 leading-relaxed mb-6">
            {t('modelPage.intro')}
          </p>
          <ul className="space-y-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                </div>
                <span className="text-white/80">
                  {t(`modelPage.principles.${i}`)}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-white/80 mb-4">{t('modelPage.continuous')}</p>
          <p className="text-white/60 italic">{t('modelPage.suggestion')}</p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-8 mb-12">
        <div className="w-full">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-[#52B788]" />
            <span className="text-sm text-white/60">{t('filter')}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedType === null ? 'default' : 'secondary'}
              size="sm"
              onClick={() => setSelectedType(null)}
              className="rounded-full"
            >
              {t('all')}
            </Button>
            {modelTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? 'default' : 'secondary'}
                size="sm"
                onClick={() => setSelectedType(type)}
                className="rounded-full"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {filteredModels.map((model) => (
          <div
            key={model.name}
            className="p-6 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:bg-white/[0.04] transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-medium">{model.name}</h3>
              {model.huggingface && (
                <a
                  href={model.huggingface}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#52B788] hover:text-[#74C69D] transition-colors flex items-center gap-1"
                >
                  <span className="text-sm">{t('view')}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-[#52B788]">
                {model.type}
              </span>
              <span className="text-sm text-white/60">• {model.provider}</span>
            </div>
            <p className="text-sm text-white/60 mb-4">{t(model.description)}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/40">{model.license}</span>
              <span className="text-sm text-[#52B788]">
                {model.status.charAt(0).toUpperCase() + model.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
