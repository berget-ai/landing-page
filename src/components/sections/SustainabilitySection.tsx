import { motion } from 'framer-motion'
import { Leaf, Recycle, Zap, Droplets, Thermometer, BarChart } from 'lucide-react'

const sustainabilityPoints = [
  {
    icon: Zap,
    title: '100% Fossilfri el',
    description:
      'Våra datacenter drivs uteslutande med certifierad fossilfri energi från Sveriges unika energimix av vattenkraft, vindkraft och kärnkraft, samt solceller på taket av våra anläggningar.',
    stats: '100% fossilfri energi',
  },
  // {
  //   icon: Droplets,
  //   title: 'Vattenfri kylning',
  //   description:
  //     'Inget vatten går åt i kylningen av våra serverhallar. Vi använder innovativa luftkylningssystem som drastiskt minskar vattenförbrukningen jämfört med traditionella datacenter.',
  //   stats: '0 liter vattenförbrukning',
  // },
  {
    icon: Recycle,
    title: 'Cirkulär hårdvara',
    description:
      'Vi använder cirkulär hårdvara i största möjliga utsträckning, vilket minskar en av de största utsläppskällorna - produktionen. Våra servrar får förlängd livscykel genom certifierade återanvändningsprocesser.',
    stats: '75% minskad hårdvaruproduktion',
  },
  // {
  //   icon: Leaf,
  //   title: 'Träbaserade datacenter',
  //   description:
  //     'Vi bygger serverhallar med trä istället för metall, vilket minskar koldioxidavtrycket från byggprocessen och binder koldioxid i konstruktionen under hela dess livslängd.',
  //   stats: '-45% CO₂e i byggfasen',
  // },
  // {
  //   icon: Thermometer,
  //   title: 'Värmeåtervinning',
  //   description:
  //     'Vi återanvänder värmen som genereras av servrarna till fjärrvärme, vilket skapar ett cirkulärt energisystem där spillvärme blir en resurs istället för ett problem.',
  //   stats: '100% värmeåtervinning',
  // },
  {
    icon: BarChart,
    title: 'CO₂e-spårning',
    description:
      'I våra AI-anrop inkluderar vi CO₂e-utsläpp per varje svar från våra API och sammanställning, vilket hjälper våra kunders utvecklare att välja den mest energieffektiva modellen.',
    stats: 'Transparent utsläppsspårning',
  },
]

export function SustainabilitySection() {
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#40916C]/15 text-[#52B788] mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Hållbarhet i centrum</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-[#52B788]">
              Vårt hållbarhetslöfte
            </h2>
            <p className="text-lg text-white/60">
              Vi bygger Europas mest hållbara AI-infrastruktur. Vårt miljöengagemang är grundläggande för vår verksamhet, inte en eftertanke.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sustainabilityPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-[#74C69D]/20 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#52B788] to-[#74C69D] flex items-center justify-center mb-8">
                  <point.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-[#74C69D]">{point.title}</h3>
                <p className="text-white/60 mb-4 text-sm leading-relaxed">
                  {point.description}
                </p>
                <div className="text-sm font-medium text-[#52B788]">
                  {point.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}