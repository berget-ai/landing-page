import { motion } from 'framer-motion'
import { Globe, Shield, Server, Lock } from 'lucide-react'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { SustainabilitySection } from '@/components/sections/SustainabilitySection'
import { ComparisonTable } from '@/components/sections/ComparisonTable'

function WhyBergetPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/50">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] pointer-events-none" />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-medium mb-6">
              Why Choose Berget AI
            </h1>
            <p className="text-xl text-white/60 mb-8">
              Secure, compliant, and sustainable AI infrastructure built for European innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* European Innovation & Sovereignty */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-white/10 h-full">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Unlocking European Innovation & Sovereignty</h2>
              <p className="text-white/60 mb-6">
                At Berget AI, we empower European businesses to innovate without compromises.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Your Data, Your Models, Your Infrastructure—all in one secure, compliant place</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>We champion Open Innovation within the EU, driving forward AI and data sovereignty</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Join us in shaping a future where Europe leads in secure, ethical AI solutions</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Data Privacy & Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-white/10 h-full">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Effortless Data Privacy & Regulatory Compliance</h2>
              <p className="text-white/60 mb-6">
                Navigating data protection laws is complex—we make it simple.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Store your data, host your applications and run your inference - all in one place!</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>All data remains within our EU-based servers and never leaves our infrastructure</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Ensure compliance with GDPR and other regulatory frameworks by design</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Alternative to Public Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-orange-500/5 via-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-white/10 h-full">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6">
                <Server className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">The Alternative to On-Prem and Public Cloud</h2>
              <p className="text-white/60 mb-6">
                When public cloud isn't an option, Berget AI is your secure and scalable alternative.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Ideal for businesses with sensitive data that cannot reside on public cloud infrastructure</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>No restrictions—freely process any data with our LLMs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>No upfront investments—start small and scale as your needs grow</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Security & Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-violet-500/5 via-purple-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-white/10 h-full">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Security & Privacy Built In</h2>
              <p className="text-white/60 mb-6">
                Our infrastructure is designed to protect your data at every step.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Developed with OWASP standards to ensure top-tier security</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Inference runs entirely within our secure network—your data never traverses the internet</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                  <span>Zero retention—your data is never stored or retained</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Compliance Section */}
      <ComplianceSection />

      {/* Sustainability Section */}
      <SustainabilitySection />

      {/* Comparison Table */}
      <ComparisonTable />
    </main>
  )
}

export default WhyBergetPage
