import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface PartnerQuote {
  name: string
  title: string
  quote: string
}

const partnerQuotes: PartnerQuote[] = [
  {
    name: 'Jim Runsten',
    title: 'VD Synch Advokat AB',
    quote: 'Med en svensk molnleverantör minskar det administrativa arbetet och den regulatoriska risken då det inte sker någon tredjelandsöverföring och man behöver därmed inte hålla sig ajour med utvecklingen inom regelverket för tredjelandsöverföring, adekvansbeslut och/eller göra konsekvensbedömningar för tredjelandsöverföringar. Vidare får men en leverantör som har att uppfylla samma lagstiftning som är eller blir tillämplig på en själv och således rimligtvis kommer en hel del av dokumentation tas fram av leverantören på ett sätt som redan är anpassat för svenska förhållanden.'
  },
  {
    name: 'Ann-Marie Eklund Löwinder',
    title: 'en av Sveriges ledande experter på IT-säkerhet',
    quote: 'Bergets approach med återanvänd hårdvara är smart både ur ett hållbarhets- och ett säkerhetsperspektiv. Genom att bygga systemet med utgångspunkten att saker kan gå sönder minskar sårbarheten. Många av dagens cyberangrepp utnyttjar det faktum att många servrar står orörda för länge utan viktiga säkerhetsuppdateringar.'
  },
  {
    name: 'André Catry',
    title: 'Senior Advisor inom IT-/informationssäkerhet och cyberrisk, Advokatfirman Kahn Pedersen',
    quote: 'Data är idag en av de mest värdefulla tillgångar som existerar. Det är ett rimligt affärsbeslut att träna AI modeller i tjänster som inte utnyttjar ditt data för att träna någon annans modeller.'
  }
]

export function PartnerQuotes() {
  return (
    <section className="py-32 relative bg-[#2D6A4F]/5 border-y border-[#40916C]/20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background opacity-30" />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Varför behövs Berget?</h2>
            <p className="text-lg text-white/60">
              Vi har frågat några av Sveriges främsta experter inom juridik och datasäkerhet om varför det behövs en svensk molntjänst för AI och hantering av känslig data.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {partnerQuotes.map((quote, index) => (
            <motion.div
              key={quote.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-[#74C69D]/20 h-full">
                <Quote className="w-10 h-10 text-[#52B788]/30 mb-6" />
                <p className="text-white/80 mb-8 text-sm leading-relaxed">
                  "{quote.quote}"
                </p>
                <div className="mt-auto">
                  <h3 className="text-lg font-medium">{quote.name}</h3>
                  <p className="text-white/60 text-sm">{quote.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}