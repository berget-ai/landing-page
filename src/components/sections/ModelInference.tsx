import { motion } from 'framer-motion';
import { Bot, Cpu, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const models = [
  {
    name: 'Llama 3',
    description: 'Latest open-source LLM from Meta',
    specs: '405B parameters',
    type: 'Text Generation'
  },
  {
    name: 'Mixtral',
    description: 'High-performance mixture of experts model',
    specs: '8x7B architecture',
    type: 'Text Generation'
  },
  {
    name: 'Whisper',
    description: 'Speech recognition and translation',
    specs: 'Multi-language support',
    type: 'Speech-to-Text'
  }
];

export function ModelInference() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Serverless Inference */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-medium">Model Inference</h2>
              <p className="text-lg text-white/60">
                Access our extensive collection of powerful open-source models through serverless endpoints. Start building AI applications immediately using the OpenAI API standard.
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

              <div className="flex gap-4">
                <Button variant="default">View Models</Button>
                <Button variant="secondary">Documentation</Button>
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
                      <div className="text-right">
                        <div className="text-sm font-medium">{model.specs}</div>
                        <div className="text-xs text-white/40">{model.type}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Dedicated Inference */}
          <div className="space-y-12">
            <div className="relative p-8 rounded-2xl border border-white/10 overflow-hidden group hover:border-white/20 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              
              <div className="relative space-y-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Cpu className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Dedicated Inference</h3>
                  <p className="text-white/60 leading-relaxed">
                    Host any model, open-source, fine-tuned or one that you trained yourself on our dedicated infrastructure as you scale. Load any model, select GPU instances and deploy your own dedicated inference service and endpoint in a heartbeat.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <span>Production-grade latency</span>
                    <span className="text-white/60">~50ms</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <span>Dedicated GPU resources</span>
                    <span className="text-white/60">Up to 8x A100</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <span>Custom model support</span>
                    <span className="text-white/60">Any framework</span>
                  </div>
                </div>

                <Button variant="secondary" className="w-full">
                  Learn More About Dedicated Inference
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}