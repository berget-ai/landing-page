import { motion } from 'framer-motion'
import { Shield, Lock, FileCheck, Scale, Building } from 'lucide-react'
import { Button } from '@/components/ui/button'

const regulations = [
  {
    name: 'GDPR',
    description: 'Full compliance with EU data protection regulations',
    icon: Shield,
    benefits: [
      'Data stays within EU borders',
      'Complete data sovereignty',
      'Transparent data processing',
    ],
  },
  {
    name: 'NIS2',
    description: 'Network and Information Systems Security Directive',
    icon: Lock,
    benefits: [
      'Enhanced cybersecurity measures',
      'Incident reporting framework',
      'Risk management protocols',
    ],
  },
  {
    name: 'Schrems II',
    description: 'Compliant data transfer framework',
    icon: Scale,
    benefits: [
      'No US cloud act exposure',
      'EU-based data processing',
      'Legal certainty for transfers',
    ],
  },
  {
    name: 'ISO 27001',
    description: 'Information security management certification',
    icon: FileCheck,
    benefits: [
      'Systematic security approach',
      'Regular security audits',
      'Documented security controls',
    ],
  },
  {
    name: 'DORA',
    description: 'Digital Operational Resilience Act compliance',
    icon: Building,
    benefits: [
      'ICT risk management',
      'Incident reporting',
      'Digital resilience testing',
    ],
  },
]

export function Compliance() {
  return (
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
            Much of the complexity around legislation doesn't arise from cloud
            technology itself, but from foreign ownership and unclear data
            access. Our cloud runs in Sweden and is owned by Swedish
            stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regulations.map((regulation, index) => (
            <motion.div
              key={regulation.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent group-hover:from-white/10 transition-colors" />

              <div className="relative p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors h-full">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  <regulation.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-medium mb-2">{regulation.name}</h3>
                <p className="text-white/60 mb-6">{regulation.description}</p>

                <ul className="space-y-2">
                  {regulation.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-sm text-white/60"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="max-w-2xl text-center">
            <p className="text-lg text-white/60 mb-6">
              Take control of your data and simplify your compliance journey
              with Berget's comprehensive regulatory framework and EU-based
              infrastructure.
            </p>
            <Button size="lg" variant="secondary">
              Learn More About Compliance
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
