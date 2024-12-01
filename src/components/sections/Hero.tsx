import { ArrowRight, Server, Shield, Users, Cpu, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SocialProof } from './hero/SocialProof';
import { ClientLogos } from './hero/ClientLogos';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="bokeh">
        <div className="bokeh-circle" style={{
          '--color': '#ffffff',
          width: '600px',
          height: '600px',
          top: '10%',
          left: '60%',
        } as React.CSSProperties} />
        <div className="bokeh-circle" style={{
          '--color': '#ffffff',
          width: '400px',
          height: '400px',
          top: '60%',
          left: '20%',
        } as React.CSSProperties} />
      </div>
      
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl">
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
            We offer Europe's best and simplest cloud service for AI applications, making compliance effortless while providing modern developer experience and sustainable infrastructure.
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
        </div>

        <div className="mt-24">
          <ClientLogos />
        </div>
      </div>
    </div>
  );
}