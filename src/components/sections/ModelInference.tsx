import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bot, Sparkles, Zap, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModelChat } from '@/components/modals/ModelChat'

const models = [
  {
    name: 'Llama 3',
    description: 'Latest open-source LLM from Meta',
    specs: '405B parameters',
    type: 'Text Generation',
  },
  {
    name: 'Mixtral',
    description: 'High-performance mixture of experts model',
    specs: '8x7B architecture',
    type: 'Text Generation',
  },
  {
    name: 'Whisper',
    description: 'Speech recognition and translation',
    specs: 'Multi-language support',
    type: 'Speech-to-Text',
  },
]

export function ModelInference() {
  const [selectedModel, setSelectedModel] = useState<(typeof models)[0] | null>(
    null
  )

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
          {/* Serverless Inference */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-medium">Model Inference</h2>
              <p className="text-lg text-white/60">
                Access our extensive collection of powerful open-source models
                through serverless endpoints. Start building AI applications
                immediately using the OpenAI API standard.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-white/60" />
                  <span>50+ pre-trained models available</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-white/60" />
                  <span>Pay-as-you-go pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <Bot className="w-5 h-5 text-white/60" />
                  <span>OpenAI API compatibility</span>
                </div>
              </div>

              <div className="flex justify-end lg:pl-8">
                <div className="w-full max-w-md bg-black/50 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
                  <div className="flex items-center gap-2 px-3 py-1.5 border-b border-white/10 bg-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs text-white/40">
                      Av utvecklare för utvecklare
                    </span>
                  </div>
                  <div className="p-3 text-xs font-mono">
                    <pre>
                      {`import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
  endpoint: 'https://api.openai.com', // this is the only change you need to switch to Berget AI
});

async function main() {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'llama-3.2-405b', // and here
  });

  chatCompletion.data.choices.forEach((choice) => {
    console.log(choice.message.content);
  });
}
                      `}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Available Models */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Popular Models</h3>
          <div className="grid gap-4">
            {models.map((model) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium mb-1">{model.name}</h4>
                    <p className="text-sm text-white/60">{model.description}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-right">
                      <div className="text-sm font-medium">{model.specs}</div>
                      <div className="text-xs text-white/40">{model.type}</div>
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="shrink-0"
                      onClick={() => setSelectedModel(model)}
                    >
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Model Chat Modal */}
      {selectedModel && (
        <ModelChat
          isOpen={!!selectedModel}
          onClose={() => setSelectedModel(null)}
          model={selectedModel}
        />
      )}
    </section>
  )
}
