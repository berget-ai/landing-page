import { motion } from 'framer-motion'
import { Leaf, Recycle, Zap } from 'lucide-react'

export function SustainabilitySection() {
  return (
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
      </div>
    </section>
  )
}