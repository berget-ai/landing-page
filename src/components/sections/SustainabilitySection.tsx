import { motion } from 'framer-motion'
import { Leaf, Recycle, Zap, Droplets, Thermometer, BarChart } from 'lucide-react'

export function SustainabilitySection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#2D6A4F]/10 opacity-30" />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#2D6A4F]/20 text-[#2D6A4F] mb-6">
            <Leaf className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Hållbarhet i centrum</span>
          </div>
          <h2 className="text-4xl font-medium mb-6 text-[#2D6A4F]">
            Vårt hållbarhetslöfte
          </h2>
          <p className="text-lg text-white/80">
            Vi bygger Europas mest hållbara AI-infrastruktur. Vårt miljöengagemang är grundläggande för vår verksamhet, inte en eftertanke.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clean Energy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors relative group"
          >
            <div className="mb-6">
              <Zap className="w-10 h-10 text-[#2D6A4F]" />
            </div>
            <h3 className="text-2xl font-medium mb-3 text-[#40916C]">100% Koldioxidfri el</h3>
            <p className="text-white/80 mb-4">
              Våra datacenter drivs uteslutande med certifierad förnybar energi från nordisk vattenkraft och vindkraft, med realtidsspårning av energikällor.
            </p>
            <div className="text-sm font-medium text-[#2D6A4F]">
              100% förnybar energi
            </div>
          </motion.div>

          {/* Water Conservation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors relative group"
          >
            <div className="mb-6">
              <Droplets className="w-10 h-10 text-[#2D6A4F]" />
            </div>
            <h3 className="text-2xl font-medium mb-3 text-[#40916C]">Vattenfri kylning</h3>
            <p className="text-white/80 mb-4">
              Inget vatten går åt i kylningen av våra serverhallar. Vi använder innovativa luftkylningssystem som drastiskt minskar vattenförbrukningen jämfört med traditionella datacenter.
            </p>
            <div className="text-sm font-medium text-[#2D6A4F]">
              0 liter vattenförbrukning
            </div>
          </motion.div>

          {/* Circular Hardware */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors relative group"
          >
            <div className="mb-6">
              <Recycle className="w-10 h-10 text-[#2D6A4F]" />
            </div>
            <h3 className="text-2xl font-medium mb-3 text-[#40916C]">Cirkulär hårdvara</h3>
            <p className="text-white/80 mb-4">
              Vi använder cirkulär hårdvara i största möjliga utsträckning, vilket minskar en av de största utsläppskällorna - produktionen. Våra servrar får förlängd livscykel genom certifierade återanvändningsprocesser.
            </p>
            <div className="text-sm font-medium text-[#2D6A4F]">
              75% minskad hårdvaruproduktion
            </div>
          </motion.div>

          {/* Wooden Data Centers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors relative group"
          >
            <div className="mb-6">
              <Leaf className="w-10 h-10 text-[#2D6A4F]" />
            </div>
            <h3 className="text-2xl font-medium mb-3 text-[#40916C]">Träbaserade datacenter</h3>
            <p className="text-white/80 mb-4">
              Vi bygger serverhallar med trä istället för metall, vilket minskar koldioxidavtrycket från byggprocessen och binder koldioxid i konstruktionen under hela dess livslängd.
            </p>
            <div className="text-sm font-medium text-[#2D6A4F]">
              -45% CO₂e i byggfasen
            </div>
          </motion.div>

          {/* Heat Recovery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors relative group"
          >
            <div className="mb-6">
              <Thermometer className="w-10 h-10 text-[#2D6A4F]" />
            </div>
            <h3 className="text-2xl font-medium mb-3 text-[#40916C]">Värmeåtervinning</h3>
            <p className="text-white/80 mb-4">
              Vi återanvänder värmen som genereras av servrarna till fjärrvärme, vilket skapar ett cirkulärt energisystem där spillvärme blir en resurs istället för ett problem.
            </p>
            <div className="text-sm font-medium text-[#2D6A4F]">
              100% värmeåtervinning
            </div>
          </motion.div>

          {/* CO2 Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="p-8 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors relative group"
          >
            <div className="mb-6">
              <BarChart className="w-10 h-10 text-[#2D6A4F]" />
            </div>
            <h3 className="text-2xl font-medium mb-3 text-[#40916C]">CO₂e-spårning</h3>
            <p className="text-white/80 mb-4">
              I våra AI-anrop inkluderar vi CO₂e-utsläpp per varje svar från våra API och sammanställning, vilket hjälper våra kunders utvecklare att välja den mest energieffektiva modellen.
            </p>
            <div className="text-sm font-medium text-[#2D6A4F]">
              Transparent utsläppsspårning
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
