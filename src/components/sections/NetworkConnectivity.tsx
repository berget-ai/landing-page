import { Network, Shield, Lock } from 'lucide-react'
import { NetworkPreview } from '@/components/previews/NetworkPreview'

export function NetworkConnectivity() {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-medium mb-4">
            Säker Nätverksinfrastruktur
          </h2>
          <p className="text-lg text-white/60">
            Företagsanpassad uppkoppling med inbyggd säkerhet och 
            regelefterlevnad.
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

              <h3 className="text-2xl font-medium">Data stannar inom EU</h3>

              <p className="text-lg text-white/60">
                Med våra inferenstjänster lämnar din data aldrig EU, eller ens 
                vårt datacenter. Ingen data - som prompter och svar - lagras 
                och kan inte nås av någon annan än dig själv.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="p-6 rounded-xl bg-white/5">
                <Network className="w-6 h-6 mb-4" />
                <h4 className="text-lg font-medium mb-2">
                  Direktanslutning
                </h4>
                <p className="text-white/60">
                  Anslut säkert via VPN, AWS Direct Connect eller Azure
                  ExpressRoute för optimal prestanda.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5">
                <Lock className="w-6 h-6 mb-4" />
                <h4 className="text-lg font-medium mb-2">
                  Regelefterlevnad
                </h4>
                <p className="text-white/60">
                  Förenklad efterlevnad av EU-förordningar som EU AI Act,
                  GDPR, Nis-2 och Dora.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5">
                <Shield className="w-6 h-6 mb-4" />
                <h4 className="text-lg font-medium mb-2">
                  Företagssäkerhet
                </h4>
                <p className="text-white/60">
                  Totalsträckskryptering, åtkomstkontroll och omfattande
                  granskningsloggning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
