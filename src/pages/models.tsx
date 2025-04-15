import React, { useState, useMemo } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Helper function to extract size from model name
const getModelSize = (name: string): number => {
  const sizeMatch = name.match(/(\d+\.?\d*)([BM])/);
  if (!sizeMatch) return Infinity;
  const [, size, unit] = sizeMatch;
  const numericSize = parseFloat(size);
  return unit === 'B' ? numericSize * 1000 : numericSize;
};

const models = [
  // Text Models (sorted by size)
  {
    name: 'Llama 3.2 1B Instruct',
    type: 'Text Models',
    provider: 'Meta',
    license: 'Llama 2 License',
    description: 'Compact instruction-tuned language model for efficient deployment.',
    status: 'available',
  },
  {
    name: 'Llama 3.2 3B Instruct',
    type: 'Text Models',
    provider: 'Meta',
    license: 'Llama 2 License',
    description: 'Instruction-tuned variant of Llama 3 optimized for task completion.',
    status: 'available',
  },
  {
    name: 'Llama 3.1 8B Instruct',
    type: 'Text Models',
    provider: 'Meta',
    license: 'Llama 2 License',
    description: 'Mid-sized instruction-tuned language model with balanced performance.',
    status: 'available',
  },
  {
    name: 'Gemma 3 12B',
    type: 'Text Models',
    provider: 'Google',
    license: 'Gemma License',
    description: 'Advanced language model with strong reasoning capabilities.',
    status: 'available',
  },
  {
    name: 'Gemma 3 27B',
    type: 'Text Models',
    provider: 'Google',
    license: 'Gemma License',
    description: 'Advanced language model with strong performance across various tasks.',
    status: 'available',
  },
  {
    name: 'QwQ32B',
    type: 'Text Models',
    provider: 'Alibaba',
    license: 'Qwen License',
    description: 'Large-scale language model with advanced reasoning capabilities.',
    status: 'available',
  },
  {
    name: 'Llama 3.3 70B Instruct',
    type: 'Text Models',
    provider: 'Meta',
    license: 'Llama 2 License',
    description: 'Large-scale instruction-tuned model with state-of-the-art performance.',
    status: 'available',
  },
  {
    name: 'DeepSeek R1 Dynamic Quant',
    type: 'Text Models',
    provider: 'Unsloth',
    license: 'Apache 2.0',
    description: 'Optimized language model with dynamic quantization.',
    status: 'available',
  },
  // Other model types
  {
    name: 'Multilingual E5 large instruct',
    type: 'Text Embedding',
    provider: 'Intfloat',
    license: 'MIT',
    description: 'Large multilingual embedding model optimized for instruction-following tasks.',
    status: 'available',
  },
  {
    name: 'Multilingual E5 small',
    type: 'Text Embedding',
    provider: 'Intfloat',
    license: 'MIT',
    description: 'Efficient multilingual embedding model for general text understanding.',
    status: 'available',
  },
  {
    name: 'Stable Diffusion XL 1.0 io32',
    type: 'Image Generation',
    provider: 'AMD',
    license: 'CreativeML Open RAIL-M',
    description: 'High-performance image generation model optimized for AMD hardware.',
    status: 'available',
  },
  {
    name: 'Flux.1 [schnell]',
    type: 'Image Generation',
    provider: 'Black Forest Labs',
    license: 'Apache 2.0',
    description: 'Fast and efficient image generation model optimized for German language.',
    status: 'available',
  },
  {
    name: 'Flux.1 Dev',
    type: 'Image Generation',
    provider: 'Black Forest Labs',
    license: 'Apache 2.0',
    description: 'Developer-focused variant of Flux.1 with enhanced image generation capabilities.',
    status: 'available',
  },
  {
    name: 'Llama Guard 3 8B',
    type: 'Moderation',
    provider: 'Meta',
    license: 'Llama 2 License',
    description: 'Advanced content moderation model for detecting and filtering harmful content.',
    status: 'available',
  },
  {
    name: 'ShieldGemma 2B',
    type: 'Moderation',
    provider: 'Google',
    license: 'Gemma License',
    description: 'Specialized model for content moderation and safety enforcement.',
    status: 'available',
  },
  {
    name: 'Qwen 2.5 VL 72B',
    type: 'Multimodal',
    provider: 'Alibaba',
    license: 'Qwen License',
    description: 'Large-scale vision-language model with advanced multimodal capabilities.',
    status: 'available',
  },
  {
    name: 'Qwen 2.5 7B VL',
    type: 'Multimodal',
    provider: 'Alibaba',
    license: 'Qwen License',
    description: 'Efficient vision-language model optimized for real-time applications.',
    status: 'available',
  },
  {
    name: 'Rerank base v2',
    type: 'Reranking',
    provider: 'mxbai',
    license: 'Apache 2.0',
    description: 'Base reranking model for search result optimization.',
    status: 'available',
  },
  {
    name: 'bge reranker v2 m3',
    type: 'Reranking',
    provider: 'BAAI',
    license: 'Apache 2.0',
    description: 'Advanced reranking model with multilingual support.',
    status: 'available',
  },
  {
    name: 'Whisper (large v3)',
    type: 'Speech-to-Text',
    provider: 'OpenAI',
    license: 'MIT',
    description: 'Large-scale speech recognition model with multilingual capabilities.',
    status: 'available',
  },
  {
    name: 'KB Whisper Large',
    type: 'Speech-to-Text',
    provider: 'KB',
    license: 'MIT',
    description: 'Customized Whisper model optimized for Swedish language.',
    status: 'available',
  },
  {
    name: 'Whisper (large v3 turbo)',
    type: 'Speech-to-Text',
    provider: 'OpenAI',
    license: 'MIT',
    description: 'Optimized version of Whisper with improved speed and efficiency.',
    status: 'available',
  },
  {
    name: 'Kokoro 82M',
    type: 'Text-to-Speech',
    provider: 'Hexgrad',
    license: 'Apache 2.0',
    description: 'Lightweight text-to-speech model optimized for efficiency.',
    status: 'available',
  },
  {
    name: 'CSM 1B',
    type: 'Text-to-Speech',
    provider: 'Sesame',
    license: 'Apache 2.0',
    description: 'Compact text-to-speech model with specialized capabilities.',
    status: 'available',
  },
  {
    name: 'Qwen 2.5 Coder 32B',
    type: 'Code Generation',
    provider: 'Alibaba',
    license: 'Qwen License',
    description: 'Specialized model for code generation and software development.',
    status: 'available',
  },
  {
    name: 'DeepCoder 14B Preview',
    type: 'Code Generation',
    provider: 'Agentica',
    license: 'Apache 2.0',
    description: 'Preview version of advanced code generation model.',
    status: 'available',
  },
];

export default function ModelsPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const modelTypes = useMemo(() => {
    const types = Array.from(new Set(models.map(model => model.type)));
    // Ensure "Text Models" appears first, then sort the rest alphabetically
    return ['Text Models', ...types.filter(type => type !== 'Text Models').sort()];
  }, []);

  const filteredModels = useMemo(() => {
    if (!selectedType) return models;
    return models.filter(model => model.type === selectedType);
  }, [selectedType]);

  return (
    <div className="container mx-auto py-24">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-medium mb-6">Model Library</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            At Berget AI, we're committed to providing the most powerful open models available, carefully selected to enable our customers to build and deploy sophisticated AI applications. Our model library is designed with three key principles in mind:
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
              </div>
              <span className="text-white/80">
                We provide access to the most powerful open source models, ensuring you have the tools needed for advanced AI development.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
              </div>
              <span className="text-white/80">
                Our carefully curated selection balances performance, speed, and cost across different model types and sizes, helping you find the perfect fit for your needs.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
              </div>
              <span className="text-white/80">
                Our comprehensive range of models is specifically chosen to support the development of sophisticated agentic applications on our platform.
              </span>
            </li>
          </ul>
          <p className="text-white/80 mb-4">
            We're continuously evaluating and adding new models to our library, ensuring you always have access to the latest advancements in AI technology. We actively encourage our customers to help shape our model selection - your feedback and requirements drive our decisions about which models to add next.
          </p>
          <p className="text-white/60 italic">
            Have a specific model in mind? We'd love to hear your suggestions and work together to expand our offerings in line with your needs.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-8 mb-12">
        <div className="w-full">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-[#52B788]" />
            <span className="text-sm text-white/60">Filter by type</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedType === null ? "default" : "secondary"}
              size="sm"
              onClick={() => setSelectedType(null)}
              className="rounded-full"
            >
              All
            </Button>
            {modelTypes.map(type => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "secondary"}
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredModels.map((model) => (
          <div key={model.name} className="p-6 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-medium mb-2">{model.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-[#52B788]">{model.type}</span>
              <span className="text-sm text-white/60">• {model.provider}</span>
            </div>
            <p className="text-sm text-white/60 mb-4">{model.description}</p>
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
  );
}