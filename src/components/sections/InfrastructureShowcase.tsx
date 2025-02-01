import { motion } from 'framer-motion'
import { Server, Shield, Network, Database, Cpu } from 'lucide-react'

export function InfrastructureShowcase() {
  return (
    <section className="py-32 bg-gradient-to-b from-background to-background/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl text-center font-medium text-white/90 mb-24"
        >
          Nästa Generation
          <br />
          AI-infrastruktur
        </motion.h2>

        <div className="relative">
          {/* Diagonal Platform */}
          <div className="absolute left-0 right-0 top-[45%] h-4 bg-gradient-to-r from-white/5 via-white/10 to-white/5 transform -rotate-6 blur-sm" />

          {/* Hardware Components */}
          <div className="relative h-[600px] md:h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                {
                  icon: Cpu,
                  title: 'AMD MI300',
                  description: 'GPU Accelerator',
                  position: 'left-0 md:left-8 top-0',
                },
                {
                  icon: Server,
                  title: 'Kubernetes Cluster',
                  description: 'Managed Kubernetes',
                  position: 'left-1/4 top-1/4',
                },
                {
                  icon: Database,
                  title: 'Vector database',
                  description: 'Open Source',
                  position: 'right-1/4 top-1/4',
                },
                {
                  icon: Shield,
                  title: 'Encrypted storage',
                  description: 'You have the keys',
                  position: 'right-0 md:right-8 top-0',
                },
              ].map((component, index) => (
                <motion.div
                  key={component.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.8,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  className={`absolute ${component.position} transform group cursor-pointer`}
                >
                  <div className="relative">
                    {/* Component Container */}
                    <div className="w-[180px] md:w-48 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-6 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.04]">
                      <component.icon className="w-10 h-10 mb-4 text-white/60 transition-transform duration-300 group-hover:scale-110" />
                      <h3 className="text-lg font-medium mb-2">
                        {component.title}
                      </h3>
                      <p className="text-sm text-white/60">
                        {component.description}
                      </p>
                    </div>

                    {/* Connection Lines */}
                    {index < 4 && (
                      <div className="absolute top-1/2 -right-8 w-8 h-px bg-gradient-to-r from-white/20 to-transparent" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'GPU Memory', value: '1 568GB' },
            { label: 'Memory Bandwidth', value: '2TB/s' },
            { label: 'Network Speed', value: '400Gb/s' },
          ].map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-medium mb-2">{spec.value}</div>
              <div className="text-sm text-white/60">{spec.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
