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
    null,
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

              <div className="space-y-4 mt-6">
                <h3 className="text-xl font-medium">Example Code</h3>
                <pre className="bg-black/50 p-4 rounded-lg text-sm text-white/80 overflow-x-auto">
                  <code>
                    {`import openai from 'openai';

openai.apiKey = 'YOUR_API_KEY';

const response = await openai.Completion.create({
  engine: 'text-davinci-003',
  prompt: 'Translate the following English text to French: "Hello, world!"',
  maxTokens: 60,
});

console.log(response.data.choices[0].text);`}
                  </code>
                </pre>
                <p className="text-sm text-white/60">
                  Replace <code>openai.apiKey</code> with your Berget AI API key and point the API to <code>api.berget.ai</code>.
                </p>
              </div>
                <Button variant="default">View Models</Button>
                <Button variant="secondary">Documentation</Button>
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
                        <p className="text-sm text-white/60">
                          {model.description}
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="text-right">
                          <div className="text-sm font-medium">
                            {model.specs}
                          </div>
                          <div className="text-xs text-white/40">
                            {model.type}
                          </div>
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
