import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Shield, Lock, Server } from 'lucide-react'

export default function SecurityPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-medium mb-8">Security</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-xl bg-card/10 border border-border">
              <Shield className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-medium mb-2">Infrastructure Security</h3>
              <p className="text-white/60">Physical and network security measures protecting our infrastructure.</p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Lock className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-medium mb-2">Data Protection</h3>
              <p className="text-white/60">Encryption and access control measures safeguarding your data.</p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Server className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-medium mb-2">Compliance</h3>
              <p className="text-white/60">Our certifications and compliance with security standards.</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2>Security Practices</h2>
            <p>Detailed information about our security measures and practices.</p>

            <h2>Certifications</h2>
            <p>List of our security certifications and compliance standards.</p>

            <h2>Incident Response</h2>
            <p>Our process for handling security incidents.</p>

            <h2>Penetration Testing</h2>
            <p>Regular security assessments and testing procedures.</p>

            <h2>Access Control</h2>
            <p>How we manage and control access to systems and data.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
