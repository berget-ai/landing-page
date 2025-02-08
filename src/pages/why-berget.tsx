import { motion } from 'framer-motion'
import { Globe, Shield, Server, Leaf, Lock, Database, ArrowRight, Network, Cpu, Recycle, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

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
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Your Data, Your Models, Your Infrastructure—all in one secure, compliant place</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>We champion Open Innovation within the EU, driving forward AI and data sovereignty</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
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
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-emerald-500/10 via-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Store your data, host your applications and run your inference - all in one place!</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>All data remains within our EU-based servers and never leaves our infrastructure</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
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
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-orange-500/10 via-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span>Ideal for businesses with sensitive data that cannot reside on public cloud infrastructure</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>No restrictions—freely process any data with our LLMs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
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
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span>Developed with OWASP standards to ensure top-tier security</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Inference runs entirely within our secure network—your data never traverses the internet</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                  <span>Zero retention—your data is never stored or retained</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Sustainability */}
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
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-medium mb-4">A Sustainable Choice for AI Infrastructure</h2>
              <p className="text-white/60 mb-6">
                Sustainability is at the core of our operations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span>Our data centers are powered by 100% green energy</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>We participate in hardware circularity to reduce waste</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>Excess heat is recycled back into the community</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Our only CO2 emissions come from hardware purchases</span>
                </li>
              </ul>
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
          <h2 className="text-3xl font-medium mb-6">Ready to Join the AI Revolution?</h2>
          <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
            Choosing Berget AI means securing your data, staying compliant, and contributing to a sustainable, innovation-driven future.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="secondary">Contact Sales</Button>
          </div>
        </motion.div>
      </div>

      {/* Compliance Section */}
      <section className="py-32 relative bg-white/[0.02] border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-10 blur-[100px]" />
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span>Compliance First</span>
            </div>

            <h2 className="text-3xl font-medium mb-4">
              Simplified Compliance for Your AI Applications
            </h2>

            <p className="text-lg text-white/60">
              Much of the complexity around legislation doesn't arise from cloud technology itself, but from foreign ownership and unclear data access. Our cloud runs in Sweden and is owned by Swedish stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* GDPR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
            >
              <Shield className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-medium mb-2">GDPR</h3>
              <p className="text-white/60 mb-4">Full compliance with EU data protection regulations</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  All data is securely stored within EU borders
                </li>
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  Full sovereignty over your data
                </li>
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  Complete transparency in data handling
                </li>
              </ul>
            </motion.div>

            {/* NIS2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
            >
              <Network className="w-8 h-8 mb-4 text-purple-400" />
              <h3 className="text-xl font-medium mb-2">NIS2</h3>
              <p className="text-white/60 mb-4">Network and Information Systems Security Directive</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  Comprehensive cybersecurity measures
                </li>
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  Structured incident reporting
                </li>
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  Advanced risk management
                </li>
              </ul>
            </motion.div>

            {/* ISO 27001 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
            >
              <Shield className="w-8 h-8 mb-4 text-emerald-400" />
              <h3 className="text-xl font-medium mb-2">ISO 27001</h3>
              <p className="text-white/60 mb-4">Information Security Management</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  Systematic security approach
                </li>
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  Regular security audits
                </li>
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  Documented security controls
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-30" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              <span className="text-sm">Sustainable by Design</span>
            </div>
            <h2 className="text-4xl font-medium mb-6">
              Our Sustainability Pledge
            </h2>
            <p className="text-lg text-white/60">
              We're building Europe's most sustainable AI infrastructure. Our commitment to the environment is fundamental to our operations, not an afterthought.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Clean Energy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors relative group"
            >
              <div className="mb-6">
                <Zap className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-medium mb-3">100% Clean Energy</h3>
              <p className="text-white/60 mb-4">
                Our data centers run on certified renewable energy from Nordic hydropower and wind farms, with real-time energy source tracking.
              </p>
              <div className="text-sm font-medium text-emerald-400">
                100% renewable energy
              </div>
            </motion.div>

            {/* Circular Hardware */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors relative group"
            >
              <div className="mb-6">
                <Recycle className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-medium mb-3">Circular Hardware</h3>
              <p className="text-white/60 mb-4">
                We partner with certified refurbishers to extend server lifecycles by 3-5 years, reducing e-waste while maintaining enterprise-grade performance.
              </p>
              <div className="text-sm font-medium text-emerald-400">
                75% reduced hardware footprint
              </div>
            </motion.div>

            {/* Carbon Negative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors relative group"
            >
              <div className="mb-6">
                <Leaf className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-medium mb-3">Carbon Negative</h3>
              <p className="text-white/60 mb-4">
                Beyond zero emissions, we invest in verified carbon removal projects and optimize for the most energy-efficient AI infrastructure.
              </p>
              <div className="text-sm font-medium text-emerald-400">
                -2000 tons CO₂e/year
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg">
              <Link to="/sustainability">
                Learn More About Our Sustainability Initiatives
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default WhyBergetPage