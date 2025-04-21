import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Shield, Check, X, ArrowRight, Download } from 'lucide-react'
import logoWithText from '@/assets/logo-with-text.svg'
import logoWithTextWhite from '@/assets/logo-with-text-white.svg'
import logoMark from '@/assets/logo-mark.svg'
import logoMarkWhite from '@/assets/logo-mark-white.svg'

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
            
            <p className="mb-6 text-white/80">
              The Berget AI logo is available in two main variants: with text and mark-only. 
              Each variant comes in black and white versions with transparent backgrounds, 
              available in both SVG (for web and print) and PNG formats (for digital applications).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl mb-4 font-medium">Logo with Text</h3>
                <div className="p-6 rounded-lg bg-[#1A1A1A] border border-white/10 flex justify-center items-center">
                  <img
                    src={logoWithText}
                    alt="Berget AI Logo with Text"
                    className="h-24"
                  />
                </div>
                <div className="text-sm text-white/60 mt-2">
                  Black logo with text on transparent background
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4 font-medium">Logo with Text (White)</h3>
                <div className="p-6 rounded-lg bg-[#333] border border-white/10 flex justify-center items-center">
                  <img
                    src={logoWithTextWhite}
                    alt="Berget AI White Logo with Text"
                    className="h-24"
                  />
                </div>
                <div className="text-sm text-white/60 mt-2">
                  White logo with text for use on dark backgrounds
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
                  Black logo mark on transparent background
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4 font-medium">Logo Mark (White)</h3>
                <div className="p-6 rounded-lg bg-[#333] border border-white/10 flex justify-center items-center">
                  <img
                    src={logoMarkWhite}
                    alt="Berget AI White Logo Mark"
                    className="h-24"
                  />
                </div>
                <div className="text-sm text-white/60 mt-2">
                  White logo mark for use on dark backgrounds
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl mb-4 font-medium">Logo Mark Sizes</h3>
              <div className="p-6 rounded-lg bg-[#1A1A1A] border border-white/10">
                <div className="flex flex-wrap items-end gap-8 justify-center">
                  <div className="flex flex-col items-center">
                    <img
                      src={logoMark}
                      alt="Berget AI Logo Mark Small"
                      className="h-8 mb-2"
                    />
                    <span className="text-xs text-white/60">16px</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src={logoMark}
                      alt="Berget AI Logo Mark Medium"
                      className="h-12 mb-2"
                    />
                    <span className="text-xs text-white/60">24px</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src={logoMark}
                      alt="Berget AI Logo Mark Large"
                      className="h-16 mb-2"
                    />
                    <span className="text-xs text-white/60">32px</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src={logoMark}
                      alt="Berget AI Logo Mark XL"
                      className="h-24 mb-2"
                    />
                    <span className="text-xs text-white/60">48px</span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-white/60 mt-2">
                The logo mark is available in various sizes for different applications
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-medium mb-4">
                Logo File Formats
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Download className="w-5 h-5 text-white" />
                    <span className="font-medium">Available Formats</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        <strong>SVG</strong> - Vector format for web and print materials (scalable)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        <strong>PNG</strong> - Raster format with transparency for digital applications
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-5 h-5 text-white" />
                    <span className="font-medium">Usage Guidelines</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Use SVG format whenever possible for best quality
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Use the mark-only version when space is limited
                      </span>
                    </li>
                  </ul>
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
