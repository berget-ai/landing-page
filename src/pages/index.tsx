import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Compliance } from '@/components/sections/Compliance'
import { PricingTiers } from '@/components/sections/pricing/PricingTiers'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Products Overview */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-medium mb-4">Our Products</h2>
            <p className="text-lg text-white/60">
              Everything you need to build and deploy AI applications securely in Europe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Serverless Inference */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors">
              <h3 className="text-xl font-medium mb-3">Serverless Inference</h3>
              <p className="text-white/60 mb-4">
                Access powerful open-source models through our OpenAI-compatible API.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-white/60">• 50+ pre-trained models</li>
                <li className="text-sm text-white/60">• OpenAI API compatibility</li>
                <li className="text-sm text-white/60">• Pay-as-you-go pricing</li>
              </ul>
            </div>

            {/* Dedicated Inference */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors">
              <h3 className="text-xl font-medium mb-3">Dedicated Inference</h3>
              <p className="text-white/60 mb-4">
                Deploy your own models on dedicated GPU infrastructure.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-white/60">• AMD MI300 GPUs</li>
                <li className="text-sm text-white/60">• Custom model deployment</li>
                <li className="text-sm text-white/60">• Full infrastructure control</li>
              </ul>
            </div>

            {/* Complete Platform */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors">
              <h3 className="text-xl font-medium mb-3">Complete Platform</h3>
              <p className="text-white/60 mb-4">
                Everything you need to build AI applications.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-white/60">• GitOps-based management</li>
                <li className="text-sm text-white/60">• Built-in monitoring</li>
                <li className="text-sm text-white/60">• Integrated databases</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Berget Summary */}
      <section className="py-24 relative bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-medium mb-4">Why Choose Berget</h2>
            <p className="text-lg text-white/60">
              Secure, compliant, and sustainable AI infrastructure built for European innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* European Innovation */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors">
              <h3 className="text-xl font-medium mb-3">European Innovation</h3>
              <p className="text-white/60">
                Built in Europe, for Europe. Your data never leaves our EU-based infrastructure.
              </p>
            </div>

            {/* Security & Privacy */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors">
              <h3 className="text-xl font-medium mb-3">Security & Privacy</h3>
              <p className="text-white/60">
                Enterprise-grade security with built-in GDPR compliance and data protection.
              </p>
            </div>

            {/* Sustainability */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors">
              <h3 className="text-xl font-medium mb-3">Sustainability</h3>
              <p className="text-white/60">
                100% renewable energy and circular hardware practices for minimal environmental impact.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/why-berget">
                Learn More About Berget
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <Compliance />

      {/* Pricing Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-medium mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-white/60">
              Choose the plan that best fits your needs. All plans include access to our core AI infrastructure.
            </p>
          </div>

          <div className="mb-12">
            <PricingTiers />
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/signup">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}