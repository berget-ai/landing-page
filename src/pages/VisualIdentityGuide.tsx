import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Shield, Check, X, ArrowRight } from 'lucide-react'

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

          {/* Typography Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-ovo mb-6 border-b border-white/10 pb-2">
              Typography
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl mb-4 font-medium">Headings: Ovo</h3>
                <div className="space-y-4">
                  <div>
                    <h1>H1 Heading</h1>
                    <div className="text-sm text-white/60 mt-1">
                      font-ovo, 2.25rem (36px), letter-spacing: -0.05em
                    </div>
                  </div>
                  <div>
                    <h2>H2 Heading</h2>
                    <div className="text-sm text-white/60 mt-1">
                      font-ovo, 1.5rem (24px), letter-spacing: -0.05em
                    </div>
                  </div>
                  <div>
                    <h3>H3 Heading</h3>
                    <div className="text-sm text-white/60 mt-1">
                      font-ovo, 1.25rem (20px), letter-spacing: -0.05em
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4 font-medium">Body: DM Sans</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-base">Body Text (16px)</div>
                    <div className="text-sm text-white/60 mt-1">
                      font-dm-sans, 1rem (16px)
                    </div>
                  </div>
                  <div>
                    <div className="text-sm">Small Text (14px)</div>
                    <div className="text-sm text-white/60 mt-1">
                      font-dm-sans, 0.875rem (14px)
                    </div>
                  </div>
                  <div>
                    <div className="text-xs">Micro Text (12px)</div>
                    <div className="text-sm text-white/60 mt-1">
                      font-dm-sans, 0.75rem (12px)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-medium mb-4">
                Typography Do's and Don'ts
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-5 h-5 text-white" />
                    <span className="font-medium">Do</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Use Ovo for headings and DM Sans for body text
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Maintain proper hierarchy with clear size differences
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
                      <span>
                        Use proper letter spacing (-0.05em) for headings
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <X className="w-5 h-5 text-white" />
                    <span className="font-medium">Don't</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>Mix font families inconsistently</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Use font sizes smaller than 12px for readability
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>
                        Use more than 3 different font sizes on a single screen
                      </span>
                    </li>
                  </ul>
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
              <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10">
                <div className="w-full h-24 rounded-md bg-[#1A1A1A] border border-white/10 mb-2"></div>
                <div className="text-sm font-medium">Background</div>
                <div className="text-xs text-white/60">#1A1A1A</div>
              </div>

              <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10">
                <div className="w-full h-24 rounded-md bg-[#52B788] mb-2"></div>
                <div className="text-sm font-medium">Primary Green</div>
                <div className="text-xs text-white/60">#52B788</div>
              </div>

              <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10">
                <div className="w-full h-24 rounded-md bg-[#74C69D] mb-2"></div>
                <div className="text-sm font-medium">Secondary Green</div>
                <div className="text-xs text-white/60">#74C69D</div>
              </div>

              <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10">
                <div className="w-full h-24 rounded-md bg-[#FFB700] mb-2"></div>
                <div className="text-sm font-medium">Accent Gold</div>
                <div className="text-xs text-white/60">#FFB700</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10">
                <div className="w-full h-16 rounded-md bg-white mb-2"></div>
                <div className="text-sm font-medium">Primary Text</div>
                <div className="text-xs text-white/60">#FFFFFF</div>
              </div>

              <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10">
                <div className="w-full h-16 rounded-md bg-white/60 mb-2"></div>
                <div className="text-sm font-medium">Secondary Text</div>
                <div className="text-xs text-white/60">
                  rgba(255, 255, 255, 0.6)
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10">
                <div className="w-full h-16 rounded-md bg-white/40 mb-2"></div>
                <div className="text-sm font-medium">Tertiary Text</div>
                <div className="text-xs text-white/60">
                  rgba(255, 255, 255, 0.4)
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10">
                <div className="w-full h-16 rounded-md bg-[#22C55E] mb-2"></div>
                <div className="text-sm font-medium">Success</div>
                <div className="text-xs text-white/60">#22C55E</div>
              </div>

              <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10">
                <div className="w-full h-16 rounded-md bg-[#FF0033] mb-2"></div>
                <div className="text-sm font-medium">Error</div>
                <div className="text-xs text-white/60">#FF0033</div>
              </div>

              <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10">
                <div className="w-full h-16 rounded-md bg-[#F59E0B] mb-2"></div>
                <div className="text-sm font-medium">Warning</div>
                <div className="text-xs text-white/60">#F59E0B</div>
              </div>

              <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10">
                <div className="w-full h-16 rounded-md bg-[#3B82F6] mb-2"></div>
                <div className="text-sm font-medium">Info</div>
                <div className="text-xs text-white/60">#3B82F6</div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-medium mb-4">
                Color Do's and Don'ts
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-5 h-5 text-white" />
                    <span className="font-medium">Do</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
                      <span>
                        Use Primary Green for primary actions and key UI
                        elements
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
                      <span>
                        Use Accent Gold sparingly for highlights and
                        call-to-actions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
                      <span>
                        Maintain proper contrast ratios for accessibility
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <X className="w-5 h-5 text-white" />
                    <span className="font-medium">Don't</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>Use colors that aren't in our palette</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>Overuse Accent Gold as it reduces its impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>
                        Use low contrast color combinations that harm
                        readability
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10">
                <h4 className="text-lg font-medium mb-4">Warning & Error Icons</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20">
                    <Shield className="w-5 h-5 text-[#F59E0B]" />
                    <span className="text-sm">Warning message example</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-[#FF0033]/10 border border-[#FF0033]/20">
                    <X className="w-5 h-5 text-[#FF0033]" />
                    <span className="text-sm">Error message example</span>
                  </div>
                  <div className="text-sm text-white/60 mt-2">
                    Colored icons are only used for warnings and errors to draw attention
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
              <h4 className="text-lg font-medium mb-4">Gradient Examples</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10">
                  <div className="w-full h-24 rounded-md bg-gradient-to-br from-[#52B788] to-[#74C69D] mb-2"></div>
                  <div className="text-sm font-medium">Primary Gradient</div>
                  <div className="text-xs text-white/60">
                    from-[#52B788] to-[#74C69D], direction: to-br
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10">
                  <div className="w-full h-24 rounded-md bg-gradient-to-b from-[#52B788] via-[#74C69D] to-[#FFB700] mb-2"></div>
                  <div className="text-sm font-medium">Accent Gradient</div>
                  <div className="text-xs text-white/60">
                    from-[#52B788] via-[#74C69D] to-[#FFB700], direction: to-b
                  </div>
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
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
                      <span>
                        Use <code>text-white</code> for all standard icons
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
                      <span>
                        Only use colored icons to emphasize important elements like warnings (<code>text-[#F59E0B]</code> for warnings) or errors (<code>text-[#FF0033]</code> for errors)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
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
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>
                        Using colored icons purely for decoration
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>
                        Inconsistent icon styling within the same interface
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>
                        Using too many different icons that may confuse users
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl mb-4 font-medium">Buttons</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10 flex flex-col items-center">
                  <Button>Primary Button</Button>
                  <div className="text-xs text-white/60 mt-2">Default</div>
                </div>

                <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10 flex flex-col items-center">
                  <Button variant="secondary">Secondary Button</Button>
                  <div className="text-xs text-white/60 mt-2">Secondary</div>
                </div>

                <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10 flex flex-col items-center">
                  <Button variant="outline">Outline Button</Button>
                  <div className="text-xs text-white/60 mt-2">Outline</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10 flex flex-col items-center">
                  <Button size="sm">Small Button</Button>
                  <div className="text-xs text-white/60 mt-2">Small</div>
                </div>

                <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10 flex flex-col items-center">
                  <Button>Default Size</Button>
                  <div className="text-xs text-white/60 mt-2">Default</div>
                </div>

                <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10 flex flex-col items-center">
                  <Button size="lg">Large Button</Button>
                  <div className="text-xs text-white/60 mt-2">Large</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl mb-4 font-medium">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-[#74C69D]/20 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#52B788] to-[#74C69D] flex items-center justify-center mb-8">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Standard Card</h3>
                  <p className="text-white/60 mb-6">
                    This is a standard card with icon, heading, and body text.
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-[#74C69D]/20 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFB700] to-[#FFB700]/80 flex items-center justify-center mb-8">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-medium mb-4">Hover Card</h3>
                    <p className="text-white/60 mb-6">
                      This card has a hover effect with gradient background.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-medium mb-4">
                Component Do's and Don'ts
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-5 h-5 text-white" />
                    <span className="font-medium">Do</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
                      <span>
                        Use consistent border radius (0.75rem) for all
                        components
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
                      <span>Maintain proper spacing between elements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
                      <span>Use subtle backdrop blur for depth</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <X className="w-5 h-5 text-white" />
                    <span className="font-medium">Don't</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>
                        Mix different border radius values within the same view
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>
                        Overuse shadows or blurs that reduce readability
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>
                        Create overly complex card designs that distract from
                        content
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Animation Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-ovo mb-6 border-b border-white/10 pb-2">
              Animations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl mb-4 font-medium">Hover Animations</h3>
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    Hover me - Subtle Lift
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    Hover me - Scale Up
                  </motion.div>

                  <motion.div
                    whileHover={{ borderColor: 'rgba(255,255,255,0.3)' }}
                    className="p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    Hover me - Border Highlight
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4 font-medium">
                  Transition Animations
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 rounded-lg bg-white/10"
                    >
                      Fade In & Up
                    </motion.div>
                  </div>

                  <div className="p-4 rounded-lg bg-white/5 border border-white/10 overflow-hidden">
                    <motion.div
                      animate={{
                        x: [0, 10, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: 'easeInOut',
                      }}
                      className="p-4 rounded-lg bg-white/10 inline-block"
                    >
                      Subtle Pulse
                    </motion.div>
                  </div>

                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2">
                      <span>Button with Icon</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-medium mb-4">
                Animation Do's and Don'ts
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-5 h-5 text-white" />
                    <span className="font-medium">Do</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
                      <span>Keep animations subtle and purposeful</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
                      <span>
                        Use consistent timing (150-300ms for most interactions)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
                      <span>Use smooth easing functions (cubic-bezier)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <X className="w-5 h-5 text-white" />
                    <span className="font-medium">Don't</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>
                        Create animations that are distracting or excessive
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>Use animations that delay user interaction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>Animate too many elements simultaneously</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

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
                    src="/assets/logo-primary.svg" 
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
                    src="/assets/logo-white.svg" 
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
                    src="/assets/logo-mark.svg" 
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
                    src="/assets/logo-with-tagline.svg" 
                    alt="Berget AI Logo with Tagline" 
                    className="h-32"
                  />
                </div>
                <div className="text-sm text-white/60 mt-2">
                  Full logo with tagline for marketing materials
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-medium mb-4">
                Logo Do's and Don'ts
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-5 h-5 text-white" />
                    <span className="font-medium">Do</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
                      <span>
                        Maintain clear space around the logo (minimum 1x height of logo)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
                      <span>
                        Use the white version on colored backgrounds
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
                      <span>
                        Use the logo mark for small spaces like favicons and app icons
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <X className="w-5 h-5 text-white" />
                    <span className="font-medium">Don't</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>
                        Stretch or distort the logo proportions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>
                        Change the logo colors outside of approved variations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>
                        Place the logo on busy backgrounds that reduce visibility
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Background Effects Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-ovo mb-6 border-b border-white/10 pb-2">
              Background Effects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl mb-4 font-medium">Grid Pattern</h3>
                <div className="h-48 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/5 bg-[size:24px_24px]"></div>
                </div>
                <div className="text-sm text-white/60 mt-2">
                  Subtle grid pattern with thin white lines (opacity 0.02)
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4 font-medium">Bokeh Effect</h3>
                <div className="h-48 rounded-lg relative overflow-hidden bg-[#1A1A1A]">
                  <div className="bokeh">
                    <div
                      className="bokeh-circle"
                      style={
                        {
                          width: '150px',
                          height: '150px',
                          top: '20%',
                          left: '30%',
                          '--color': '#52B788',
                        } as React.CSSProperties
                      }
                    ></div>
                    <div
                      className="bokeh-circle"
                      style={
                        {
                          width: '100px',
                          height: '100px',
                          top: '60%',
                          left: '60%',
                          '--color': '#74C69D',
                        } as React.CSSProperties
                      }
                    ></div>
                    <div
                      className="bokeh-circle"
                      style={
                        {
                          width: '80px',
                          height: '80px',
                          top: '30%',
                          left: '70%',
                          '--color': '#FFB700',
                        } as React.CSSProperties
                      }
                    ></div>
                  </div>
                </div>
                <div className="text-sm text-white/60 mt-2">
                  Soft, blurred circular elements with low opacity (0.15-0.3)
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-medium mb-4">
                Background Effects Do's and Don'ts
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-5 h-5 text-white" />
                    <span className="font-medium">Do</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
                      <span>
                        Use subtle background effects that don't distract from
                        content
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
                      <span>
                        Ensure effects are consistent with the overall design
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] mt-2" />
                      <span>
                        Consider performance impact of complex effects
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <X className="w-5 h-5 text-white" />
                    <span className="font-medium">Don't</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>
                        Use background effects that reduce content readability
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>Create overly complex or busy backgrounds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span>
                        Mix too many different background effects in one view
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
