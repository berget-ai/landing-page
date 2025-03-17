import { motion } from 'framer-motion'
import { Globe, Shield, Server, Lock, ArrowRight, Check, Users, Building, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { SustainabilitySection } from '@/components/sections/SustainabilitySection'
import { ComparisonTable } from '@/components/sections/ComparisonTable'

function WhyBergetPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D6A4F]/30 via-background to-background">
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,106,79,0.15)_0%,transparent_70%)]" />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#40916C]/15 text-[#52B788] mb-6">
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">EU-baserad AI-infrastruktur</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-medium mb-6 leading-tight">
              Varför välja <span className="text-[#52B788]">Berget AI</span>?
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Säker, regelefterlevande och hållbar AI-infrastruktur byggd för europeisk innovation och datasuveränitet.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg">
                Kom igång
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                Boka demo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Fördelar med Berget AI</h2>
          <p className="text-lg text-white/60">
            Vi erbjuder en unik kombination av säkerhet, regelefterlevnad och flexibilitet för europeiska företag.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#52B788] to-[#74C69D] flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-medium mb-3">100% EU-baserad</h3>
            <p className="text-white/60 mb-4">
              All data stannar inom EU:s gränser. Vår infrastruktur är byggd i Europa, för Europa, med full efterlevnad av EU:s regelverk.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#52B788]" />
                <span className="text-sm text-white/80">GDPR-kompatibel</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#52B788]" />
                <span className="text-sm text-white/80">NIS2-förberedd</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#52B788]" />
                <span className="text-sm text-white/80">EU AI Act-anpassad</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFB700] to-[#FFB700]/80 flex items-center justify-center mb-6">
              <Leaf className="w-6 h-6 text-[#1A1A1A]" />
            </div>
            <h3 className="text-xl font-medium mb-3">Hållbar AI</h3>
            <p className="text-white/60 mb-4">
              Vår infrastruktur är byggd med hållbarhet i fokus, från fossilfri el till värmeåtervinning och cirkulär hårdvara.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#52B788]" />
                <span className="text-sm text-white/80">100% fossilfri energi</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#52B788]" />
                <span className="text-sm text-white/80">CO₂-spårning per API-anrop</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#52B788]" />
                <span className="text-sm text-white/80">Cirkulär hårdvara</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#74C69D] to-[#52B788] flex items-center justify-center mb-6">
              <Server className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-medium mb-3">Flexibel infrastruktur</h3>
            <p className="text-white/60 mb-4">
              Från serverless till dedikerade GPU:er, vi erbjuder den flexibilitet du behöver för att bygga och skala dina AI-applikationer.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#52B788]" />
                <span className="text-sm text-white/80">Kubernetes-baserad</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#52B788]" />
                <span className="text-sm text-white/80">GitOps-workflow</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#52B788]" />
                <span className="text-sm text-white/80">Skalbar beräkningskraft</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-16">
          {/* European Innovation & Sovereignty */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-[#74C69D]/20 h-full">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#52B788] to-[#74C69D] flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-medium mb-4">Europeisk innovation och datasuveränitet</h2>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    På Berget AI ger vi europeiska företag möjlighet att innovera utan kompromisser. Vi bygger en framtid där Europa leder inom säkra och etiska AI-lösningar.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#52B788]" />
                      </div>
                      <span className="text-white/80">Din data, dina modeller, din infrastruktur—allt på en säker, regelefterlevande plats</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#52B788]" />
                      </div>
                      <span className="text-white/80">Vi främjar öppen innovation inom EU och driver fram AI- och datasuveränitet</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#52B788]" />
                      </div>
                      <span className="text-white/80">Anslut dig till oss för att forma en framtid där Europa leder inom säkra, etiska AI-lösningar</span>
                    </li>
                  </ul>
                </div>
              </div>
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
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-[#74C69D]/20 h-full">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#52B788] to-[#74C69D] flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-medium mb-4">Enkel dataintegritet och regelefterlevnad</h2>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Att navigera genom dataskyddslagar är komplext—vi gör det enkelt. Vår infrastruktur är byggd för att uppfylla de strängaste europeiska regelverken.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#52B788]" />
                      </div>
                      <span className="text-white/80">Lagra din data, hosta dina applikationer och kör din inferens - allt på ett ställe!</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#52B788]" />
                      </div>
                      <span className="text-white/80">All data stannar inom våra EU-baserade servrar och lämnar aldrig vår infrastruktur</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#52B788]" />
                      </div>
                      <span className="text-white/80">Säkerställ efterlevnad av GDPR och andra regulatoriska ramverk genom design</span>
                    </li>
                  </ul>
                </div>
              </div>
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
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#2D6A4F]/5 via-[#40916C]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-[#40916C]/20 h-full">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFB700] to-[#FFB700]/80 flex items-center justify-center shrink-0">
                  <Server className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <div>
                  <h2 className="text-2xl font-medium mb-4">Alternativet till on-prem och publik molntjänst</h2>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    När publik molntjänst inte är ett alternativ är Berget AI ditt säkra och skalbara alternativ. Vi kombinerar fördelarna med molntjänster och on-prem-lösningar.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#52B788]" />
                      </div>
                      <span className="text-white/80">Perfekt för företag med känslig data som inte kan lagras på publik molninfrastruktur</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#52B788]" />
                      </div>
                      <span className="text-white/80">Inga begränsningar—bearbeta all data fritt med våra LLMs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#52B788]" />
                      </div>
                      <span className="text-white/80">Inga initiala investeringar—börja smått och skala upp när dina behov växer</span>
                    </li>
                  </ul>
                </div>
              </div>
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
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl border border-[#74C69D]/20 h-full">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#74C69D] to-[#52B788] flex items-center justify-center shrink-0">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-medium mb-4">Inbyggd säkerhet och integritet</h2>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Vår infrastruktur är designad för att skydda din data i varje steg. Vi har byggt säkerhet från grunden, inte som ett tillägg.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#52B788]" />
                      </div>
                      <span className="text-white/80">Utvecklad med OWASP-standarder för att säkerställa säkerhet på högsta nivå</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#52B788]" />
                      </div>
                      <span className="text-white/80">Inferens körs helt inom vårt säkra nätverk—din data passerar aldrig internet</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#52B788]" />
                      </div>
                      <span className="text-white/80">Noll lagring—din data sparas eller behålls aldrig</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <section className="py-24 relative bg-[#2D6A4F]/5 border-y border-[#40916C]/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Vad våra kunder säger</h2>
            <p className="text-lg text-white/60">
              Företag i hela Europa litar på Berget AI för sina mest kritiska AI-applikationer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-[#2D6A4F]/10 border border-[#40916C]/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#2D6A4F]/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#52B788]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">HealthTech AB</h3>
                  <p className="text-sm text-white/60">Medicinsk AI-lösning</p>
                </div>
              </div>
              <p className="text-white/80 italic">
                "Med Berget AI kunde vi bygga vår medicinska AI-lösning med full GDPR-efterlevnad. Deras infrastruktur gav oss den säkerhet och regelefterlevnad vi behövde för att hantera känslig patientdata."
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-xl bg-[#2D6A4F]/10 border border-[#40916C]/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#2D6A4F]/20 flex items-center justify-center">
                  <Building className="w-6 h-6 text-[#52B788]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">FinSecure GmbH</h3>
                  <p className="text-sm text-white/60">Finansiell säkerhet</p>
                </div>
              </div>
              <p className="text-white/80 italic">
                "Som ett finansiellt institut behövde vi en AI-infrastruktur som uppfyllde de strängaste säkerhetskraven. Berget AI levererade inte bara det, utan också en flexibilitet som gjorde att vi kunde skala snabbt."
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-xl bg-[#2D6A4F]/10 border border-[#40916C]/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#2D6A4F]/20 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-[#52B788]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">EcoSmart Solutions</h3>
                  <p className="text-sm text-white/60">Hållbara energilösningar</p>
                </div>
              </div>
              <p className="text-white/80 italic">
                "Bergets fokus på hållbarhet matchade perfekt med våra företagsvärderingar. Att kunna spåra CO₂-avtrycket för varje AI-anrop har hjälpt oss att nå våra hållbarhetsmål samtidigt som vi levererar innovativa lösningar."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <ComplianceSection />

      {/* Sustainability Section */}
      <SustainabilitySection />

      {/* Comparison Table */}
      <ComparisonTable />
      
      {/* Call to Action */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Redo att börja bygga med Berget AI?</h2>
            <p className="text-lg text-white/60 mb-8">
              Kom igång idag och upptäck fördelarna med en säker, regelefterlevande och hållbar AI-infrastruktur.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg">
                Skapa konto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                Kontakta försäljning
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default WhyBergetPage
