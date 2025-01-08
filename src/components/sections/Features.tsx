import { Bot, Lock, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FeatureCard } from './FeatureCard';
import { FeatureCarousel } from './features/FeatureCarousel';

export function Features() {
  return (
    <section className="py-40 relative bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px]" id="features">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80" />
      <FeatureCarousel />
      
      <div className="container mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Serverless Inference */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-medium">Model inference</h2>
              <p className="text-lg text-white/60">
                Serverless inference of powerful open-source models. Access our 50+ models including Llama 3, Mixtral, through serverless endpoints and start building your AI applications using the Open AI API standard.
              </p>
              <p className="text-lg text-white/60">
                It is simple, you can start immediately and you pay as you go.
              </p>
              <div className="flex gap-4">
                <Button variant="secondary">View Models</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>

            <FeatureCard
              icon={Bot}
              title="Dedicated inference for your scaling needs"
              description="Host any model, open-source, fine-tuned or one that you trained yourself on our dedicated infrastructure as you scale. Load any model, select GPU instances and deploy your own dedicated inference service and endpoint in a heartbeat."
            />
          </div>

          {/* Network Preview */}
          <div className="space-y-12">
            <FeatureCard
              icon={Lock}
              title="Safe and compliant AI"
              description="With our inference services, your data never leaves the EU, or even our data center. No data - such as prompts and responses - is stored and cannot be accessed by anyone but yourself. This greatly simplifies compliance with EU regulations such as EU AI Act, GDPR, Nis-2 and Dora."
            />

            <FeatureCard
              icon={Server}
              title="Production-grade performance"
              description="Run inference at scale with predictable cost. You pay for the dedicated resources that serves your model, ensuring production-grade latency and throughput for your applications."
            />
          </div>
        </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium">AI agents use a symphony of smaller expert AI:s</h2>
          <p className="text-lg text-white/60 mt-4">
            AI agents are not about building larger and larger models, but about finding a home for your AI agents. 
            At Berget AI, we provide the perfect environment for these agents to thrive, working together to solve complex tasks.
          </p>
        </div>
        <div className="flex justify-center">
          <img src="/images/ai-agents-illustration.png" alt="AI agents illustration" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
