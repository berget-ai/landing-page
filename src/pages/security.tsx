import { motion } from 'framer-motion'
import { Shield, Lock, Server, Database, Network, Eye, FileCheck, Fingerprint } from 'lucide-react'
import { Helmet } from '@/components/common/Helmet'

export default function SecurityPage() {
  const securityCategories = [
    {
      title: "Physical Security",
      icon: Shield,
      description: "Our data centers implement multiple layers of physical security to protect your data.",
      points: [
        "Biometric access controls and 24/7 security personnel",
        "Redundant power systems with backup generators",
        "Advanced fire suppression and environmental monitoring",
        "Strict visitor management and access logging",
        "Compliance with ISO 27001 physical security requirements"
      ]
    },
    {
      title: "Infrastructure Security",
      icon: Server,
      description: "Our infrastructure is designed with security as a foundational principle.",
      points: [
        "Hardened operating systems with minimal attack surface",
        "Regular security patches and updates",
        "Immutable infrastructure deployment model",
        "Comprehensive logging and monitoring",
        "Automated threat detection and response systems"
      ]
    },
    {
      title: "Data Protection",
      icon: Lock,
      description: "We implement robust encryption to protect your data both at rest and in transit.",
      points: [
        "TLS 1.3 encryption for all data in transit",
        "AES-256 encryption for all data at rest",
        "Secure key management with regular rotation",
        "Zero data retention policy for inference API services",
        "Secure deletion processes for all customer data"
      ]
    },
    {
      title: "Access Controls",
      icon: Fingerprint,
      description: "Strict access controls ensure only authorized personnel can access systems and data.",
      points: [
        "Role-based access control (RBAC) for all systems",
        "Multi-factor authentication required for all administrative access",
        "Just-in-time access provisioning with automatic expiration",
        "Comprehensive audit logging of all access attempts",
        "Regular access reviews and privilege recertification"
      ]
    },
    {
      title: "Network Security",
      icon: Network,
      description: "Our network architecture is designed to isolate and protect customer environments.",
      points: [
        "Complete network isolation between customer tenants",
        "Dedicated control planes for management operations",
        "Air-gapped systems for critical security functions",
        "Advanced DDoS protection and traffic filtering",
        "Internal network segmentation with strict firewall policies"
      ]
    },
    {
      title: "Security Testing & Compliance",
      icon: FileCheck,
      description: "Continuous security testing ensures our systems remain secure against evolving threats.",
      points: [
        "Regular vulnerability scanning across all systems",
        "Annual third-party penetration testing",
        "Continuous automated security testing in CI/CD pipeline",
        "Bug bounty program for responsible disclosure",
        "Compliance with industry standards including ISO 27001, GDPR, and NIS2"
      ]
    }
  ]

  return (
    <main className="min-h-screen pt-24">
      <Helmet 
        title="Security at Berget AI" 
        description="Learn about our comprehensive security measures that protect your data and applications"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#52B788]" />
              </div>
              <h1 className="text-4xl font-ovo">Security at Berget AI</h1>
            </div>

            <p className="text-xl text-white/80 leading-relaxed mb-12">
              At Berget AI, security is foundational to everything we build. Our comprehensive security program 
              is designed to protect your data and applications at every layer, from physical infrastructure 
              to application security. We implement defense-in-depth strategies that align with industry 
              best practices and regulatory requirements.
            </p>

            <div className="space-y-16">
              {securityCategories.map((category, index) => (
                <motion.section 
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-[#74C69D]/20 h-full">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center shrink-0">
                        <category.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-medium mb-3">{category.title}</h2>
                        <p className="text-white/80 mb-6">{category.description}</p>
                        <ul className="space-y-3">
                          {category.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                              </div>
                              <span className="text-white/80">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>
              ))}
            </div>

            <section className="mt-16">
              <h2 className="text-2xl font-medium mb-6">Zero Data Retention Policy</h2>
              <div className="p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-[#74C69D]/20">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center shrink-0">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 mb-6">
                      Our inference API services operate with a strict zero data retention policy. This means:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                        </div>
                        <span className="text-white/80">We never store the content of your prompts or model outputs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                        </div>
                        <span className="text-white/80">Your data is processed in memory and immediately discarded after the response is delivered</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                        </div>
                        <span className="text-white/80">We only collect metadata necessary for billing and performance monitoring (e.g., token counts, API call timestamps)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                        </div>
                        <span className="text-white/80">Your data is never used to train or improve our models</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                        </div>
                        <span className="text-white/80">We maintain comprehensive audit logs of all system access, but never of content</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-16">
              <h2 className="text-2xl font-medium mb-6">Security Certifications and Compliance</h2>
              <div className="p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-[#74C69D]/20">
                <p className="text-white/80 mb-6">
                  Berget AI is committed to maintaining the highest standards of security and compliance:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h3 className="text-lg font-medium mb-2">Current Certifications</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                        <span className="text-white/80">GDPR Compliance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                        <span className="text-white/80">NIS2 Readiness</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                        <span className="text-white/80">EU AI Act Compliance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h3 className="text-lg font-medium mb-2">In Progress</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <span className="text-white/80">ISO 27001 Certification</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <span className="text-white/80">SOC 2 Type II Audit</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <span className="text-white/80">Cloud Security Alliance STAR</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-16">
              <h2 className="text-2xl font-medium mb-6">Responsible Disclosure</h2>
              <div className="p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-[#74C69D]/20">
                <p className="text-white/80 mb-6">
                  We value the work of security researchers and the wider community in helping us maintain a secure platform. 
                  If you believe you've found a security vulnerability, we encourage you to report it to us through our 
                  responsible disclosure program.
                </p>
                <div className="flex justify-center">
                  <a 
                    href="/security" 
                    className="px-6 py-3 bg-[#52B788] text-black font-medium rounded-lg hover:bg-[#52B788]/90 transition-colors"
                  >
                    View Responsible Disclosure Policy
                  </a>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </main>
  )
}