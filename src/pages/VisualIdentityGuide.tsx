import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Shield, Check, X, ArrowRight } from 'lucide-react'
import logoPrimary from '@/assets/logo-primary.svg'
import logoWhite from '@/assets/logo-white.svg'
import logoMark from '@/assets/logo-mark.svg'
import logoWithTagline from '@/assets/logo-with-tagline.svg'

export function VisualIdentityGuide() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-ovo mb-6">
              Berget AI Visual Identity Guide
            </h1>
            <p className="text-xl text-white/80 mb-8">
              This guide provides practical examples and guidelines for
              maintaining a consistent visual identity across all Berget AI
              materials.
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#40916C]/15 text-white">
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm">Internal &amp; Press Use Only</span>
            </div>
          </div>

          {/* Logo Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-ovo mb-6 border-b border-white/10 pb-2">
              Logo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl mb-4 font-medium">Primary Logo</h3>
                <div className="p-6 rounded-lg bg-[#1A1A1A] border border-white/10 flex justify-center items-center">
                  <img
                    src={logoPrimary}
                    alt="Berget AI Primary Logo"
                    className="h-24"
                  />
                </div>
                <div className="text-sm text-white/60 mt-2">
                  Full color logo for use on dark backgrounds
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4 font-medium">Monochrome Logo</h3>
                <div className="p-6 rounded-lg bg-[#1A1A1A] border border-white/10 flex justify-center items-center">
                  <img
                    src={logoWhite}
                    alt="Berget AI White Logo"
                    className="h-24"
                  />
                </div>
                <div className="text-sm text-white/60 mt-2">
                  White logo for use on colored backgrounds
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl mb-4 font-medium">Logo Mark</h3>
                <div className="p-6 rounded-lg bg-[#1A1A1A] border border-white/10 flex justify-center items-center">
                  <img
                    src={logoMark}
                    alt="Berget AI Logo Mark"
                    className="h-24"
                  />
                </div>
                <div className="text-sm text-white/60 mt-2">
                  Standalone mark for small spaces and icons
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4 font-medium">Logo with Tagline</h3>
                <div className="p-6 rounded-lg bg-[#1A1A1A] border border-white/10 flex justify-center items-center">
                  <img
                    src={logoWithTagline}
                    alt="Berget AI Logo with Tagline"
                    className="h-32"
                  />
                </div>
                <div className="text-sm text-white/60 mt-2">
                  Full logo with tagline for marketing materials
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default VisualIdentityGuide
