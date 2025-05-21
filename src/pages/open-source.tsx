import { motion } from 'framer-motion'
import { Shield, Github, ArrowRight, Check, FileCode, Users, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function OpenSourcePage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#40916C]/15 text-[#52B788] mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm">We Love Open Source</span>
            </div>
            <h1 className="text-4xl font-ovo mb-6">
              Berget AI Open Source Program
            </h1>
            <p className="text-xl text-white/80">
              Supporting the open source community with free resources and infrastructure! We love the power of open-source based innovation and never cease to be amazed by the things that come out of the community, many of which power our everyday lives. Berget AI is built on open-source and we want to contribute back to the community by providing access to resources for projects that are truly open-source and demonstrate how to use service such as Berget AI. Read more below and apply by contacting us! 

            </p>
          </motion.div>

          {/* Program Details */}
          <div className="space-y-16">
            {/* Core Principles */}
            <section>
              <h2 className="text-2xl font-ovo mb-6">Core Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/[0.02] border border-[#74C69D]/20">
                  <Github className="w-8 h-8 mb-4 text-[#52B788]" />
                  <h3 className="text-xl font-medium mb-3">100% Open Source</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">Publicly accessible code repository</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">Recognized open source license (MIT, Apache 2.0, GPLv3)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">Clear project documentation and purpose</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-white/[0.02] border border-[#74C69D]/20">
                  <Shield className="w-8 h-8 mb-4 text-[#52B788]" />
                  <h3 className="text-xl font-medium mb-3">Free Resources</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">100,000 monthly tokens for prompts/responses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">Fair API rate limits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">Technical support and guidance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Project Requirements */}
            <section>
              <h2 className="text-2xl font-ovo mb-6">Project Requirements</h2>
              <div className="p-6 rounded-xl bg-white/[0.02] border border-[#74C69D]/20">
                <FileCode className="w-8 h-8 mb-4 text-[#52B788]" />
                <h3 className="text-xl font-medium mb-3">Eligibility Criteria</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">Active development (regular commits)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">Comprehensive README.md</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">No commercial paywalls</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">Clear use case for Berget AI services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Benefits & Growth */}
            <section>
              <h2 className="text-2xl font-ovo mb-6">Benefits & Growth</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Benefits */}
                <div className="p-6 rounded-xl bg-white/[0.02] border border-[#74C69D]/20">
                  <h3 className="text-xl font-medium mb-4">Program Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">Infrastructure support and guidance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">Featured project promotion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">"Verified Open Source Project" badge</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">Technical collaboration opportunities</span>
                    </li>
                  </ul>
                </div>

                {/* Growth */}
                <div className="p-6 rounded-xl bg-white/[0.02] border border-[#74C69D]/20">
                  <h3 className="text-xl font-medium mb-4">Growth & Scaling</h3>
                  <p className="text-white/80 mb-4">
                    As your project grows, we grow with you. Projects that evolve into products can benefit from:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">Gradual token quota increases</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">First-year discounted pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">Community-based pricing models</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Application Process */}
            <section>
              <h2 className="text-2xl font-ovo mb-6">Application Process</h2>
              <div className="p-6 rounded-xl bg-white/[0.02] border border-[#74C69D]/20">
                <Users className="w-8 h-8 mb-4 text-[#52B788]" />
                <h3 className="text-xl font-medium mb-4">How to Apply</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">Submit project repository link</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">Describe project purpose and goals</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">Provide team background</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">Explain planned API usage</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Apply for Open Source Program
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}