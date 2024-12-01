import { Bot, Lock, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FeatureCard } from './FeatureCard';
import { FeatureCarousel } from './features/FeatureCarousel';
import { NetworkPreview } from '@/components/previews/NetworkPreview';

export function Features() {
  return (
    <section className="py-24 relative" id="features">
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

          </div>

          {/* Network Preview */}
          <div className="space-y-12">
            <NetworkPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
