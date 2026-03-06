import {
  Shield,
  Github,
  ArrowRight,
  Check,
  FileCode,
  Users,
  Heart,
} from 'lucide-react'
import { Card, HeroBlock, Button, type HeroBlockProps } from '@berget-ai/ui'

type TaglineIcon = HeroBlockProps['taglineIcon']

export default function OpenSourcePage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <HeroBlock
            variant="default"
            withPattern={false}
            taglineIcon={Heart as TaglineIcon}
            tagline="We Love Open Source"
            title="Berget AI Open Source Program"
            description="Supporting the open source community with free resources and infrastructure! We love the power of open-source based innovation and never cease to be amazed by the things that come out of the community, many of which power our everyday lives. Berget AI is built on open-source and we want to contribute back to the community by providing access to resources for projects that are truly open-source and demonstrate how to use service such as Berget AI. Read more below and apply by contacting us!"
          />

          {/* Program Details */}
          <div className="space-y-16 mt-16">
            {/* Core Principles */}
            <section>
              <h2 className="text-2xl font-ovo mb-6">What we offer</h2>

              <Card variant="glass" padding="md">
                <Shield className="w-8 h-8 mb-4 text-[#52B788]" />
                <h3 className="text-xl font-medium mb-3">Free Resources</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                    <span className="text-white/80">
                      100,000 monthly tokens for prompts/responses
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                    <span className="text-white/80">Fair API rate limits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                    <span className="text-white/80">
                      Technical support and guidance
                    </span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* Project Requirements */}
            <section>
              <h2 className="text-2xl font-ovo mb-6">Project Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card variant="glass" padding="md">
                  <FileCode className="w-8 h-8 mb-4 text-[#52B788]" />
                  <h3 className="text-xl font-medium mb-3">
                    Eligibility Criteria
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">
                        Active development (regular commits)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">
                        Comprehensive README.md
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">
                        No commercial paywalls
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">
                        Clear use case for Berget AI services
                      </span>
                    </li>
                  </ul>
                </Card>
                <Card variant="glass" padding="md">
                  <Github className="w-8 h-8 mb-4 text-[#52B788]" />
                  <h3 className="text-xl font-medium mb-3">100% Open Source</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">
                        Publicly accessible code repository
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">
                        Recognized open source license (MIT, Apache 2.0, GPLv3)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">
                        Clear project documentation and purpose
                      </span>
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Benefits & Growth */}
            <section>
              <h2 className="text-2xl font-ovo mb-6">Benefits & Growth</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Benefits */}
                <Card variant="glass" padding="md">
                  <h3 className="text-xl font-medium mb-4">Program Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">
                        Infrastructure support and guidance
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">
                        Featured project promotion
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">
                        "Verified Open Source Project" badge
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">
                        Technical collaboration opportunities
                      </span>
                    </li>
                  </ul>
                </Card>

                {/* Growth */}
                <Card variant="glass" padding="md">
                  <h3 className="text-xl font-medium mb-4">Growth & Scaling</h3>
                  <p className="text-white/80 mb-4">
                    As your project grows, we grow with you. Projects that
                    evolve into products can benefit from:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">
                        Gradual token quota increases
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">
                        First-year discounted pricing
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">
                        Community-based pricing models
                      </span>
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Application Process */}
            <section>
              <h2 className="text-2xl font-ovo mb-6">Application Process</h2>
              <Card variant="glass" padding="md">
                <Users className="w-8 h-8 mb-4 text-[#52B788]" />
                <h3 className="text-xl font-medium mb-4">How to Apply</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">
                        Submit project repository link
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">
                        Describe project purpose and goals
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">
                        Provide team background
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#52B788] mt-0.5" />
                      <span className="text-white/80">
                        Explain planned API usage
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <Button size="lg" asChild>
                    <a href="/contact">
                      Apply for Open Source Program
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
