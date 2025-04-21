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

          {/* UI Components Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-ovo mb-6 border-b border-white/10 pb-2">
              UI Components
            </h2>
            
            <div className="bg-white/5 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-medium mb-4">
                Icon Guidelines
              </h4>
              <p className="mb-4">
                Icons should be used consistently throughout the interface to enhance usability and visual appeal. 
                All icons should use the <code>text-white</code> class by default.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-5 h-5 text-white" />
                    <span className="font-medium">Icon Color Usage</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Use <code>text-white</code> for all icons, including in warnings and errors
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Never use colored icons purely for decoration
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Maintain consistent icon sizes within similar UI elements
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <X className="w-5 h-5 text-white" />
                    <span className="font-medium">Avoid</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Using colored icons purely for decoration
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Inconsistent icon styling within the same interface
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Using too many different icons that may confuse users
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10">
                <h4 className="text-lg font-medium mb-4">Card Examples</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20">
                    <Shield className="w-5 h-5 text-white" />
                    <span className="text-sm">Warning message example</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-[#FF0033]/10 border border-[#FF0033]/20">
                    <X className="w-5 h-5 text-white" />
                    <span className="text-sm">Error message example</span>
                  </div>
                  <div className="text-sm text-white/60 mt-2">
                    All icons use text-white class, even in warning and error states
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10">
                <h4 className="text-lg font-medium mb-4">Standard Icons</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                    <Shield className="w-5 h-5 text-white" />
                    <span className="text-sm">Standard icon example</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                    <ArrowRight className="w-5 h-5 text-white" />
                    <span className="text-sm">Standard icon example</span>
                  </div>
                  <div className="text-sm text-white/60 mt-2">
                    Standard icons use text-white class for consistency
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
          {/* Background Effects Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-ovo mb-6 border-b border-white/10 pb-2">
              Background Effects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl mb-4 font-medium">Gradient Backgrounds</h3>
                <div className="p-6 rounded-lg bg-gradient-to-br from-[#1A1A1A] to-[#2D6A4F]/20 border border-white/10 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm text-white/80 mb-2">Primary Gradient</div>
                    <code className="text-xs bg-black/30 px-2 py-1 rounded">from-[#1A1A1A] to-[#2D6A4F]/20</code>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl mb-4 font-medium">Network Effect</h3>
                <div className="p-6 rounded-lg bg-[#1A1A1A] border border-white/10 h-48 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-40">
                    <div className="w-full h-full" style={{ 
                      backgroundImage: `radial-gradient(circle, rgba(82, 183, 136, 0.1) 1px, transparent 1px)`,
                      backgroundSize: '30px 30px'
                    }}></div>
                  </div>
                  <div className="relative z-10 text-center flex items-center justify-center h-full">
                    <div>
                      <div className="text-sm text-white/80 mb-2">Network Pattern</div>
                      <code className="text-xs bg-black/30 px-2 py-1 rounded">NetworkBackground component</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Typography Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-ovo mb-6 border-b border-white/10 pb-2">
              Typography
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl mb-4 font-medium">Headings</h3>
                <div className="p-6 rounded-lg bg-[#1A1A1A] border border-white/10 space-y-4">
                  <div>
                    <h1 className="text-4xl font-ovo">Heading 1</h1>
                    <div className="text-xs text-white/60 mt-1">
                      font-ovo, text-4xl or text-5xl
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-ovo">Heading 2</h2>
                    <div className="text-xs text-white/60 mt-1">
                      font-ovo, text-3xl
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium">Heading 3</h3>
                    <div className="text-xs text-white/60 mt-1">
                      font-medium, text-2xl
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Heading 4</h4>
                    <div className="text-xs text-white/60 mt-1">
                      font-medium, text-xl
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl mb-4 font-medium">Body Text</h3>
                <div className="p-6 rounded-lg bg-[#1A1A1A] border border-white/10 space-y-4">
                  <div>
                    <p className="text-base">
                      This is the standard body text used throughout the application. It should be legible and comfortable to read.
                    </p>
                    <div className="text-xs text-white/60 mt-1">
                      text-base
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-white/80">
                      This is smaller text often used for secondary information or UI elements.
                    </p>
                    <div className="text-xs text-white/60 mt-1">
                      text-sm, text-white/80
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-white/60">
                      This is the smallest text size, used for captions, footnotes, and other tertiary information.
                    </p>
                    <div className="text-xs text-white/60 mt-1">
                      text-xs, text-white/60
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Color Palette Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-ovo mb-6 border-b border-white/10 pb-2">
              Color Palette
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div>
                <div className="h-24 rounded-lg bg-[#52B788] mb-2"></div>
                <div className="text-sm font-medium">#52B788</div>
                <div className="text-xs text-white/60">Primary Green</div>
              </div>
              <div>
                <div className="h-24 rounded-lg bg-[#2D6A4F] mb-2"></div>
                <div className="text-sm font-medium">#2D6A4F</div>
                <div className="text-xs text-white/60">Dark Green</div>
              </div>
              <div>
                <div className="h-24 rounded-lg bg-[#74C69D] mb-2"></div>
                <div className="text-sm font-medium">#74C69D</div>
                <div className="text-xs text-white/60">Light Green</div>
              </div>
              <div>
                <div className="h-24 rounded-lg bg-[#1A1A1A] mb-2"></div>
                <div className="text-sm font-medium">#1A1A1A</div>
                <div className="text-xs text-white/60">Background</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div>
                <div className="h-24 rounded-lg bg-white mb-2"></div>
                <div className="text-sm font-medium">#FFFFFF</div>
                <div className="text-xs text-white/60">White</div>
              </div>
              <div>
                <div className="h-24 rounded-lg bg-white/60 mb-2"></div>
                <div className="text-sm font-medium">white/60</div>
                <div className="text-xs text-white/60">Secondary Text</div>
              </div>
              <div>
                <div className="h-24 rounded-lg bg-[#F59E0B] mb-2"></div>
                <div className="text-sm font-medium">#F59E0B</div>
                <div className="text-xs text-white/60">Warning</div>
              </div>
              <div>
                <div className="h-24 rounded-lg bg-[#FF0033] mb-2"></div>
                <div className="text-sm font-medium">#FF0033</div>
                <div className="text-xs text-white/60">Error</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default VisualIdentityGuide
