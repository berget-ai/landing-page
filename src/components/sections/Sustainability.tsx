import { Leaf, Recycle, Zap, Droplets, Thermometer, BarChart } from 'lucide-react'
import { motion } from 'framer-motion'

const sustainabilityPoints = [
  {
    icon: Zap,
    title: '100% Fossilfri el',
    description:
      'Våra datacenter drivs uteslutande med certifierad fossilfri energi från Sveriges unika energimix av vattenkraft, vindkraft och kärnkraft, med realtidsspårning av energikällor.',
    stats: '100% fossilfri energi',
  },
  {
    icon: Droplets,
    title: 'Vattenfri kylning',
    description:
      'Inget vatten går åt i kylningen av våra serverhallar. Vi använder innovativa luftkylningssystem som drastiskt minskar vattenförbrukningen jämfört med traditionella datacenter.',
    stats: '0 liter vattenförbrukning',
  },
  {
    icon: Recycle,
    title: 'Cirkulär hårdvara',
    description:
      'Vi använder cirkulär hårdvara i största möjliga utsträckning, vilket minskar en av de största utsläppskällorna - produktionen. Våra servrar får förlängd livscykel genom certifierade återanvändningsprocesser.',
    stats: '75% minskad hårdvaruproduktion',
  },
  {
    icon: Leaf,
    title: 'Träbaserade datacenter',
    description:
      'Vi bygger serverhallar med trä istället för metall, vilket minskar koldioxidavtrycket från byggprocessen och binder koldioxid i konstruktionen under hela dess livslängd.',
    stats: '-45% CO₂e i byggfasen',
  },
  {
    icon: Thermometer,
    title: 'Värmeåtervinning',
    description:
      'Vi återanvänder värmen som genereras av servrarna till fjärrvärme, vilket skapar ett cirkulärt energisystem där spillvärme blir en resurs istället för ett problem.',
    stats: '100% värmeåtervinning',
  },
  {
    icon: BarChart,
    title: 'CO₂e-spårning',
    description:
      'I våra AI-anrop inkluderar vi CO₂e-utsläpp per varje svar från våra API och sammanställning, vilket hjälper våra kunders utvecklare att välja den mest energieffektiva modellen.',
    stats: 'Transparent utsläppsspårning',
  },
]

export function Sustainability() {
  return (
    <section className="py-24 relative overflow-hidden dark:text-white light:text-gray-900">
      <div className="absolute inset-0 bg-[#2D6A4F]/10 opacity-30 dark:opacity-30 light:opacity-10" />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#40916C]/15 text-[#52B788] mb-6">
            <Leaf className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Hållbarhet i centrum</span>
          </div>
          <h2 className="text-4xl font-medium mb-6 text-[#52B788]">
            Vårt hållbarhetslöfte
          </h2>
          <p className="text-lg dark:text-white/80 light:text-gray-700">
            Vi bygger Europas mest hållbara AI-infrastruktur. Vårt miljöengagemang är grundläggande för vår verksamhet, inte en eftertanke.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sustainabilityPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors relative group shadow-sm"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#52B788]/0 via-[#52B788]/50 to-[#52B788]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="mb-6">
                <point.icon className="w-10 h-10 text-[#52B788]" />
              </div>
              <h3 className="text-2xl font-medium mb-3 text-[#74C69D]">{point.title}</h3>
              <p className="dark:text-white/80 light:text-gray-700 mb-4">
                {point.description}
              </p>
              <div className="text-sm font-medium text-[#52B788]">
                {point.stats}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
