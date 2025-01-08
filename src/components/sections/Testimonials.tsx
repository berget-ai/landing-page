import { motion } from 'framer-motion'
import { Quote, Building2, Briefcase } from 'lucide-react'

const experts = [
  {
    name: 'Jim Runsten',
    role: 'VD Synch Advokat AB',
    quote:
      'Med en svensk molnleverantör minskar det administrativa arbetet och den regulatoriska risken då det inte sker någon tredjelandsöverföring och man behöver därmed inte hålla sig ajour med utvecklingen inom regelverket för tredjelandsöverföring, adekvansbeslut och/eller göra konsekvensbedömningar för tredjelandsöverföringar. Vidare får men en leverantör som har att uppfylla samma lagstiftning som är eller blir tillämplig på en själv och således rimligtvis kommer en hel del av dokumentation tas fram av leverantören på ett sätt som redan är anpassat för svenska förhållanden.',
    icon: Building2,
  },
  {
    name: 'Ann-Marie Eklund Löwinder',
    role: 'en av Sveriges ledande experter på IT-säkerhet',
    quote:
      'Bergets approach med återanvänd hårdvara är smart både ur ett hållbarhets- och ett säkerhetsperspektiv. Genom att bygga systemet med utgångspunkten att saker kan gå sönder minskar sårbarheten. Många av dagens cyberangrepp utnyttjar det faktum att många servrar står orörda för länge utan viktiga säkerhetsuppdateringar.',
    icon: Briefcase,
  },
  {
    name: 'André Catry',
    role: 'Senior Advisor inom IT-/informationssäkerhet och cyberrisk, Advokatfirman Kahn Pedersen',
    quote:
      'Data är idag en av de mest värdefulla tillgångar som existerar. Det är ett rimligt affärsbeslut att träna AI modeller i tjänster som inte utnyttjar ditt data för att träna någon annans modeller.',
    icon: Building2,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-medium mb-4">Varför behövs Berget?</h2>
          <p className="text-lg text-white/60">
            Vi har frågat några av Sveriges främsta experter inom juridik och
            datasäkerhet om varför det behövs en svensk molntjänst för AI och
            hantering av känslig data.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent group-hover:from-white/10 transition-colors" />

              <div className="relative p-8 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors">
                <Quote className="w-8 h-8 text-white/20 mb-6" />

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                        <expert.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">{expert.name}</div>
                        <div className="text-sm text-white/60">
                          {expert.role}
                        </div>
                      </div>
                    </div>
                  </div>

                  <blockquote className="md:w-3/4 text-lg leading-relaxed">
                    {expert.quote}
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
