import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SocialProof } from './hero/SocialProof';
import { ClientLogos } from './hero/ClientLogos';

export function Hero() {
  return (
    <><div className="relative min-h-screen flex items-center bg-gradient-to-br from-[#2D6A4F] via-[#40916C] to-[#FFB700]">
      <div className="container mx-auto px-4 py-32">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            A Symphony of AI Agents
          </h1>
          <div className="text-2xl text-white/80 mb-8 space-y-4">
            <p>
              Discover how AI agents collaborate to solve complex tasks, providing a seamless and efficient AI experience.
            </p>
            <h2 className="text-4xl font-bold text-white">Revolutionary AI Collaboration</h2>
            <p>
              The "Symphony of AI Agents" is a revolutionary approach where multiple AI agents work together harmoniously to solve complex tasks, much like musicians in an orchestra.
            </p>
            <h2 className="text-4xl font-bold text-white">Efficient and Sustainable AI</h2>
            <p>
              Instead of building larger AI models for every task, we focus on using a combination of smaller, expert models. This approach is not only more efficient but also more sustainable, reducing the environmental impact and resource consumption.
            </p>
            <h2 className="text-4xl font-bold text-white">Empower Your AI Journey</h2>
            <p>
              Start creating your own AI agents at Berget AI. Use our recipes, start a new cluster, or utilize our hosted models via API endpoints to build powerful AI applications.
            </p>
          </div>
          <Button size="lg" variant="accent">
            Learn More
          </Button>
        </div>
      </div>
        <div className="container mx-auto px-4 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <Shield className="w-4 h-4 mr-2" />
                <span className="text-sm">A secure, compliant and sustainable AI-cloud for Europe</span>
              </div>

              <h1 className="text-5xl font-medium leading-tight mb-6">
                Build AI powered applications with
                <br />
                <span className="text-white">Enterprise-Grade</span> Security
              </h1>

              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                Berget AI offers Europe's best and simplest cloud service for AI applications, making compliance effortless while providing modern developer experience and sustainable infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="group">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="secondary">
                  Book a Demo
                </Button>
              </div>

              <SocialProof />

              <div className="mt-24 lg:hidden">
                <ClientLogos />
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-sm text-white/40">Av utvecklare för utvecklare</span>
                </div>
                <div className="p-4 text-sm font-mono">
                  <div className="text-white/60">$ <span className="text-white">npm i -g berget</span></div>
                  <div className="text-white/60">$ <span className="text-white">berget login</span></div>
                  <div className="text-emerald-400/80">... loggar in med BankID</div>
                  <div className="text-white/60">$ <span className="text-white">berget create cluster</span></div>
                  <div className="text-emerald-400/80">Done! 5 nodes created.</div>
                  <div className="text-emerald-400/80">Assigned DNS: ideal-palmtree.berget.cloud</div>
                  <div className="text-white/60 mt-2">Nu är ditt kluster redo att användas. Nu kan du börja köra dina applikationer.</div>
                  <div className="text-white/60">Du kan peka ett CNAME till klustret.</div>
                  <div className="mt-2">
                    <div className="text-white/60">$ <span className="text-white">berget apply -f deployment.yaml</span></div>
                    <div className="text-white/60 mt-2">Tips: använd fluxcd för att automatiskt hålla klustret uppdaterat.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block mt-24">
            <ClientLogos />
          </div>
        </div>
      </div></>
  );
}
