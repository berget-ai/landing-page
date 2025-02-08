import { motion } from 'framer-motion'
import { Github, Lock, Database, Server, Bot, Cpu, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DevelopersPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/50">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] pointer-events-none" />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-medium mb-6">
              Built by Developers for Developers
            </h1>
            <p className="text-xl text-white/60 mb-8">
              A flexible and developer-friendly platform designed for efficiency, scalability, and control.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto space-y-24">
          {/* Full Flexibility and Control */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                <Github className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Full Flexibility and Control</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Simple user experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>No-lock-in, everything is synched with GitHub so you can move at any time</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  <span>No forced PaaS —choose the services you need and pay only for the resources they use</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Empower your workflow with seamless infrastructure management</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Your Own Agent Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-emerald-500/10 via-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Your Own Agent Infrastructure</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Deploy popular open-source AI tools instantly, or bring your own</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>Accelerate development with ready-to-use recipes for AI applications</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Secure hosting for data, vector databases, and models, ensuring data never leaves our infrastructure</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Support for hybrid cloud setups to integrate seamlessly with your existing environment</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Security and Resilience by Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-orange-500/10 via-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Security and Resilience by Design</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span>Developed with OWASP standards for robust application security</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>LMM inference where data is never sent over the internet</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <span>Network isolation (VLAN) between tenants for enhanced data protection</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span>Built on our own hardware, CPUs and GPU, data storage triple mirrored across disks using, and underlying RAID X</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Zero retention policy—data sent to models is never stored or kept</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Resource Control and Persistence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-6">
                <Server className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Resource Control and Persistence</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span>Define your entire infrastructure as code, synced to GitHub for full back-up and fallback</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Persistent environments, while you only incur charges for consumed resources</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                  <span>Manage your organization's resources with ease—role-based access, organization-wide quotas, and full cost transparency</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Our Models */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Our Models</h2>
              <p className="text-white/60 mb-8">
                We aim to provide access to the most powerful and popular open models you need to power your AI applications and provide a broad selection of model types - instruct, embeddings, re-rerank, moderation as well as across modalities.
              </p>
            </div>
          </motion.div>

          {/* Transparent Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-green-500/10 via-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Transparent Pricing</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span>Pay only for the resources you consume—no hidden service fees</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Full visibility and control over resource allocation and costs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>Start small and scale effortlessly as your needs grow</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Open Source Section Divider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-center">
              <span className="text-2xl font-medium text-white/60">
                We Like Open Source
              </span>
            </div>
          </motion.div>

          {/* Why Open Source? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-medium mb-4">Why Open Source?</h2>
            <p className="text-white/60 mb-8">
              At Berget AI, we harness the power of open-source technology to drive cutting-edge AI innovation, enhance security, and give you the flexibility and control to build scalable solutions. Here's why we're committed to open source:
            </p>

            <div className="space-y-8">
              {/* Powering AI Innovation */}
              <div>
                <h3 className="text-xl font-medium mb-2">1. Powering AI Innovation through Open Source</h3>
                <p className="text-white/60">
                  Open source is at the forefront of AI advancements, particularly in Large Language Models (LLMs) and AI infrastructure tools. Community-led innovation gives you access to the best-in-class AI models and technologies and LLMs evolve faster in open ecosystems, driven by global research collaborations. 
                </p>
              </div>

              {/* Freedom from Vendor Lock-In */}
              <div>
                <h3 className="text-xl font-medium mb-2">2. Freedom from Vendor Lock-In</h3>
                <p className="text-white/60">
                  Open-source technology gives you complete autonomy over your infrastructure, tools, and models, ensuring long-term flexibility. Retain full control over your data and AI models.
                </p>
              </div>

              {/* Enhanced Security */}
              <div>
                <h3 className="text-xl font-medium mb-2">3. Enhanced Security through Transparency</h3>
                <p className="text-white/60">
                  Open-source software thrives on transparency, where global communities can audit, review, and improve code to detect and patch vulnerabilities faster than closed systems, and minimizes hidden security risks. Publicly reviewed projects provide proven security practices benefiting all.
                </p>
              </div>

              {/* Cost-Effective and Scalable */}
              <div>
                <h3 className="text-xl font-medium mb-2">4. Cost-Effective and Scalable</h3>
                <p className="text-white/60">
                  Open-source software is inherently cost-efficient, reducing dependency on expensive licenses and contracts while providing robust solutions built to scale. 
                </p>
              </div>

              {/* Interoperability and Flexibility */}
              <div>
                <h3 className="text-xl font-medium mb-2">5. Interoperability and Flexibility</h3>
                <p className="text-white/60">
                  Open-source technologies prioritize compatibility with other tools and systems, allowing seamless integration and expansion. Easily incorporate new models, frameworks, and AI tools as your needs evolve.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-medium mb-6">Ready to Start Building?</h2>
          <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
            Join the growing community of developers building the future of AI with Berget.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="secondary">View Documentation</Button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}