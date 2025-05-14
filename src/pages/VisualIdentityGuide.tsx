import { Shield, Check, X, ArrowRight, Download } from 'lucide-react'
import { LogoComponent } from '@/components/common/LogoComponent'

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
              The Berget AI logo is available in two main variants: with text
              and mark-only. Each variant comes in black and white versions with
              transparent backgrounds, available in both SVG (for web and print)
              and PNG formats (for digital applications).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl mb-4 font-medium">
                  Logo on Dark Background
                </h3>
                <div className="p-6 rounded-lg bg-[#1A1A1A] border border-white/10 flex justify-center items-center">
                  <LogoComponent size="lg" className="h-24" inverted={false} />
                </div>
                <div className="text-sm text-white/60 mt-2">
                  White logo for dark backgrounds
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4 font-medium">
                  Logo on Light Background
                </h3>
                <div className="p-6 rounded-lg bg-white border border-gray-200 flex justify-center items-center">
                  <LogoComponent size="lg" className="h-24" inverted={true} />
                </div>
                <div className="text-sm text-white/60 mt-2">
                  Black logo for light backgrounds
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl mb-4 font-medium">Logo with Text</h3>
                <div className="p-6 rounded-lg bg-[#1A1A1A] border border-white/10 flex justify-center items-center">
                  <LogoComponent withText variant="horizontal" />
                </div>
                <div className="text-sm text-white/60 mt-2">
                  Logo with company name for headers and branding
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4 font-medium">
                  Logo with Text (Light)
                </h3>
                <div className="p-6 rounded-lg bg-white border border-gray-200 flex justify-center items-center">
                  <LogoComponent
                    withText
                    variant="horizontal"
                    inverted={true}
                  />
                </div>
                <div className="text-sm text-white/60 mt-2">
                  Logo with company name on light background
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl mb-4 font-medium">Logo Sizes</h3>
              <div className="p-6 rounded-lg bg-[#1A1A1A] border border-white/10">
                <div className="flex flex-wrap items-end gap-8 justify-center">
                  <div className="flex flex-col items-center">
                    <LogoComponent size={16} />
                    <span className="text-xs text-white/60 mt-2">16px</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <LogoComponent size={32} />
                    <span className="text-xs text-white/60 mt-2">32px</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <LogoComponent size={64} />
                    <span className="text-xs text-white/60 mt-2">64px</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <LogoComponent size={128} />
                    <span className="text-xs text-white/60 mt-2">128px</span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-white/60 mt-2">
                The logo component accepts custom sizes as numbers
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl mb-4 font-medium">Logo Downloads</h3>
              <div className="p-6 rounded-lg bg-[#1A1A1A] border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3">SVG Format</h4>
                    <div className="space-y-3">
                      <a
                        href="/logos/logo.svg"
                        download="berget-logo.svg"
                        className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <Download className="w-5 h-5 text-white" />
                        <span className="text-sm">Logo (SVG)</span>
                      </a>
                      <a
                        href="/logos/berget-icon-white.svg"
                        download="berget-icon-white.svg"
                        className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <Download className="w-5 h-5 text-white" />
                        <span className="text-sm">
                          Icon Only - White (SVG)
                        </span>
                      </a>
                      <a
                        href="/logos/berget-icon-black.svg"
                        download="berget-icon-black.svg"
                        className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <Download className="w-5 h-5 text-white" />
                        <span className="text-sm">
                          Icon Only - Black (SVG)
                        </span>
                      </a>
                      <a
                        href="/logos/berget-logo-white.svg"
                        download="berget-logo-white.svg"
                        className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <Download className="w-5 h-5 text-white" />
                        <span className="text-sm">
                          Logo with Text - White (SVG)
                        </span>
                      </a>
                      <a
                        href="/logos/berget-logo-black.svg"
                        download="berget-logo-black.svg"
                        className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <Download className="w-5 h-5 text-white" />
                        <span className="text-sm">
                          Logo with Text - Black (SVG)
                        </span>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-3">PNG Format</h4>
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 gap-3">
                        <h5 className="text-sm font-medium">Icon Only - White</h5>
                        <div className="grid grid-cols-2 gap-3">
                          <a
                            href="/logos/berget-icon-white-64.png"
                            download="berget-icon-white-64.png"
                            className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                          >
                            <Download className="w-5 h-5 text-white" />
                            <span className="text-sm">64px</span>
                          </a>
                          <a
                            href="/logos/berget-icon-white-128.png"
                            download="berget-icon-white-128.png"
                            className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                          >
                            <Download className="w-5 h-5 text-white" />
                            <span className="text-sm">128px</span>
                          </a>
                        </div>
                        
                        <h5 className="text-sm font-medium mt-2">Icon Only - Black</h5>
                        <div className="grid grid-cols-2 gap-3">
                          <a
                            href="/logos/berget-icon-black-64.png"
                            download="berget-icon-black-64.png"
                            className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                          >
                            <Download className="w-5 h-5 text-white" />
                            <span className="text-sm">64px</span>
                          </a>
                          <a
                            href="/logos/berget-icon-black-128.png"
                            download="berget-icon-black-128.png"
                            className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                          >
                            <Download className="w-5 h-5 text-white" />
                            <span className="text-sm">128px</span>
                          </a>
                        </div>
                        
                        <h5 className="text-sm font-medium mt-2">Logo with Text - White</h5>
                        <div className="grid grid-cols-2 gap-3">
                          <a
                            href="/logos/berget-logo-white-128.png"
                            download="berget-logo-white-128.png"
                            className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                          >
                            <Download className="w-5 h-5 text-white" />
                            <span className="text-sm">128px</span>
                          </a>
                          <a
                            href="/logos/berget-logo-white-256.png"
                            download="berget-logo-white-256.png"
                            className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                          >
                            <Download className="w-5 h-5 text-white" />
                            <span className="text-sm">256px</span>
                          </a>
                        </div>
                        
                        <h5 className="text-sm font-medium mt-2">Logo with Text - Black</h5>
                        <div className="grid grid-cols-2 gap-3">
                          <a
                            href="/logos/berget-logo-black-128.png"
                            download="berget-logo-black-128.png"
                            className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                          >
                            <Download className="w-5 h-5 text-white" />
                            <span className="text-sm">128px</span>
                          </a>
                          <a
                            href="/logos/berget-logo-black-256.png"
                            download="berget-logo-black-256.png"
                            className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                          >
                            <Download className="w-5 h-5 text-white" />
                            <span className="text-sm">256px</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-white/60 mt-2">
                Download logo assets for use in various applications
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl mb-4 font-medium">Logo on Brand Colors</h3>
              <div className="p-6 rounded-lg bg-[#1A1A1A] border border-white/10">
                <div className="flex flex-wrap items-end gap-8 justify-center">
                  <div className="flex flex-col items-center">
                    <div className="p-4 rounded-lg bg-[#52B788]">
                      <LogoComponent size={48} inverted={true} />
                    </div>
                    <span className="text-xs text-white/60 mt-2">
                      On Primary Green
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="p-4 rounded-lg bg-[#2D6A4F]">
                      <LogoComponent size={48} inverted={false} />
                    </div>
                    <span className="text-xs text-white/60 mt-2">
                      On Dark Green
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="p-4 rounded-lg bg-[#74C69D]">
                      <LogoComponent size={48} inverted={true} />
                    </div>
                    <span className="text-xs text-white/60 mt-2">
                      On Light Green
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-white/60 mt-2">
                The logo should only be used in black or white, depending on the
                background
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-medium mb-4">Logo Component Usage</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Download className="w-5 h-5 text-white" />
                    <span className="font-medium">Component Props</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        <code className="bg-black/30 px-1 rounded">size</code> -
                        'sm' | 'md' | 'lg' | number
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        <code className="bg-black/30 px-1 rounded">
                          inverted
                        </code>{' '}
                        - boolean (force inversion)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        <code className="bg-black/30 px-1 rounded">
                          variant
                        </code>{' '}
                        - 'icon' | 'full' | 'horizontal'
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        <code className="bg-black/30 px-1 rounded">
                          withText
                        </code>{' '}
                        - boolean (add company name)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        <code className="bg-black/30 px-1 rounded">
                          backgroundColor
                        </code>{' '}
                        - optional background
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
                        Use the component for consistent logo rendering
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        The logo automatically adapts to light/dark themes
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Use{' '}
                        <code className="bg-black/30 px-1 rounded">
                          withText
                        </code>{' '}
                        for logo with company name
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Use{' '}
                        <code className="bg-black/30 px-1 rounded">
                          variant
                        </code>{' '}
                        to control layout
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        <strong>Important:</strong> The logo must only be used
                        in black or white
                      </span>
                    </li>
                  </ul>
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
                <div className="p-6 rounded-lg bg-[#1A1A1A] border border-white/10 space-y-6">
                  <div>
                    <h1>Heading 1</h1>
                    <div className="text-xs text-white/60 mt-1">
                      2.5rem (40px) - Används för huvudrubriker
                    </div>
                  </div>
                  <div>
                    <h2>Heading 2</h2>
                    <div className="text-xs text-white/60 mt-1">
                      2rem (32px) - Används för sektionsrubriker
                    </div>
                  </div>
                  <div>
                    <h3>Heading 3</h3>
                    <div className="text-xs text-white/60 mt-1">
                      1.5rem (24px) - Används för underrubriker
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Heading 4</h4>
                    <div className="text-xs text-white/60 mt-1">
                      1.25rem (20px) - Används för mindre rubriker
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4 font-medium">Body Text</h3>
                <div className="p-6 rounded-lg bg-[#1A1A1A] border border-white/10 space-y-4">
                  <div>
                    <p className="text-base">
                      This is the standard body text used throughout the
                      application. It should be legible and comfortable to read.
                    </p>
                    <div className="text-xs text-white/60 mt-1">text-base</div>
                  </div>
                  <div>
                    <p className="text-sm text-white/80">
                      This is smaller text often used for secondary information
                      or UI elements.
                    </p>
                    <div className="text-xs text-white/60 mt-1">
                      text-sm, text-white/80
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-white/60">
                      This is the smallest text size, used for captions,
                      footnotes, and other tertiary information.
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

          {/* UI Components Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-ovo mb-6 border-b border-white/10 pb-2">
              UI Components
            </h2>

            <div className="bg-white/5 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-medium mb-4">Icon Guidelines</h4>
              <p className="mb-4">
                Icons should be used consistently throughout the interface to
                enhance usability and visual appeal. All icons should use the{' '}
                <code>text-white</code> class by default, regardless of the
                context.
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
                        <strong>
                          Always use <code>text-white</code>
                        </strong>{' '}
                        for all icons, even in warnings, errors, and success
                        states
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Color should only be used for the background or
                        container, never for the icon itself
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Maintain consistent icon sizes within similar UI
                        elements (recommended: 20px for most UI elements)
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
                        <strong>Never use colored icons</strong> - colors are
                        reserved for emphasizing important messages only
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Don't use colors to make the interface "more colorful" -
                        this reduces clarity and accessibility
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Avoid inconsistent icon styling or using too many
                        different icons that may confuse users
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10">
                <h4 className="text-lg font-medium mb-4">Message Cards</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20">
                    <Shield className="w-5 h-5 text-white" />
                    <span className="text-sm">Warning message example</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-[#FF0033]/10 border border-[#FF0033]/20">
                    <X className="w-5 h-5 text-white" />
                    <span className="text-sm">Error message example</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-[#52B788]/10 border border-[#52B788]/20">
                    <Check className="w-5 h-5 text-white" />
                    <span className="text-sm">Success message example</span>
                  </div>
                  <div className="text-sm text-white/60 mt-2">
                    <strong>Note:</strong> The background and border colors
                    indicate the message type, but all icons remain white for
                    consistency
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-[#1A1A1A] border border-white/10">
                <h4 className="text-lg font-medium mb-4">UI Components</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                    <Shield className="w-5 h-5 text-white" />
                    <span className="text-sm">Security feature</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                    <ArrowRight className="w-5 h-5 text-white" />
                    <span className="text-sm">Navigation element</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Button with icon</span>
                      <button className="px-3 py-1 rounded bg-[#52B788] flex items-center gap-1">
                        <span className="text-xs">Action</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-white/60 mt-2">
                    All UI components use consistent white icons regardless of
                    context
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-medium mb-4">Color Usage in UI</h4>
              <p className="mb-4">
                Color should be used purposefully and sparingly in the
                interface. Reserve colors for emphasizing important information
                or indicating state changes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-5 h-5 text-white" />
                    <span className="font-medium">Correct Color Usage</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Use color for backgrounds to indicate different states
                        (warning, error, success)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Use brand colors for primary action buttons and
                        important UI elements
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Maintain high contrast ratios for accessibility (minimum
                        4.5:1)
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <X className="w-5 h-5 text-white" />
                    <span className="font-medium">Incorrect Color Usage</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        <strong>Don't use colored icons</strong> - this creates
                        visual noise and inconsistency
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Don't use colors purely for decoration or to make the
                        interface "more colorful"
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2" />
                      <span>
                        Avoid using too many different colors in close proximity
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
                <h3 className="text-xl mb-4 font-medium">
                  Gradient Backgrounds
                </h3>
                <div className="p-6 rounded-lg bg-gradient-to-br from-[#1A1A1A] to-[#2D6A4F]/20 border border-white/10 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm text-white/80 mb-2">
                      Primary Gradient
                    </div>
                    <code className="text-xs bg-black/30 px-2 py-1 rounded">
                      from-[#1A1A1A] to-[#2D6A4F]/20
                    </code>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4 font-medium">Network Effect</h3>
                <div className="p-6 rounded-lg bg-[#1A1A1A] border border-white/10 h-48 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-40">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `radial-gradient(circle, rgba(82, 183, 136, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '30px 30px',
                      }}
                    ></div>
                  </div>
                  <div className="relative z-10 text-center flex items-center justify-center h-full">
                    <div>
                      <div className="text-sm text-white/80 mb-2">
                        Network Pattern
                      </div>
                      <code className="text-xs bg-black/30 px-2 py-1 rounded">
                        NetworkBackground component
                      </code>
                    </div>
                  </div>
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
