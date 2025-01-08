import { Network, Shield, Lock } from 'lucide-react'
import { NetworkPreview } from '@/components/previews/NetworkPreview'

export function NetworkConnectivity() {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-medium mb-4">
            Secure Network Infrastructure
          </h2>
          <p className="text-lg text-white/60">
            Enterprise-grade connectivity with built-in security and compliance
            features.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <NetworkPreview />

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-sm">
                <Shield className="w-4 h-4" />
                <span>Safe and Compliant AI</span>
              </div>

              <h3 className="text-2xl font-medium">Data Never Leaves the EU</h3>

              <p className="text-lg text-white/60">
                With our inference services, your data never leaves the EU, or
                even our data center. No data - such as prompts and responses -
                is stored and cannot be accessed by anyone but yourself.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="p-6 rounded-xl bg-white/5">
                <Network className="w-6 h-6 mb-4" />
                <h4 className="text-lg font-medium mb-2">
                  Direct Connectivity
                </h4>
                <p className="text-white/60">
                  Connect securely via VPN, AWS Direct Connect, or Azure
                  ExpressRoute for optimal performance.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5">
                <Lock className="w-6 h-6 mb-4" />
                <h4 className="text-lg font-medium mb-2">
                  Regulatory Compliance
                </h4>
                <p className="text-white/60">
                  Simplified compliance with EU regulations such as EU AI Act,
                  GDPR, Nis-2 and Dora.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5">
                <Shield className="w-6 h-6 mb-4" />
                <h4 className="text-lg font-medium mb-2">
                  Enterprise Security
                </h4>
                <p className="text-white/60">
                  End-to-end encryption, access controls, and comprehensive
                  audit logging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
