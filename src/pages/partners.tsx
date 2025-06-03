import { motion } from 'framer-motion'
import { Building2, Wrench, Server, Microscope } from 'lucide-react'

interface Partner {
  name: string
  logo: string
  website: string
}

interface Category {
  title: string
  icon: typeof Building2
  partners: Partner[]
}

const categories: Category[] = [
  {
    title: 'Consulting Partners',
    icon: Building2,
    partners: [
      {
        name: 'iTeam Solutions',
        logo: 'https://i.ibb.co/Qj1bxnk/iteam.png',
        website: 'https://iteam.se'
      },
      {
        name: 'Digitalist.se',
        logo: 'https://i.ibb.co/0jZ3Q9Y/digitalist.png',
        website: 'https://digitalist.se'
      },
      {
        name: 'Active Solution',
        logo: 'https://i.ibb.co/YRwPn5Z/active-solution.png',
        website: 'https://activesolution.se'
      },
      {
        name: 'Netlight Consulting',
        logo: 'https://i.ibb.co/Jt8BgD7/netlight.png',
        website: 'https://netlight.com'
      }
    ]
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    partners: [
      {
        name: 'Opper.AI',
        logo: 'https://i.ibb.co/0QZ3Q9Y/opper.png',
        website: 'https://opper.ai'
      }
    ]
  },
  {
    title: 'Hardware Partners',
    icon: Server,
    partners: [
      {
        name: 'AMD',
        logo: 'https://i.ibb.co/YRwPn5Z/amd.png',
        website: 'https://amd.com'
      },
      {
        name: 'SuperMicro',
        logo: 'https://i.ibb.co/Jt8BgD7/supermicro.png',
        website: 'https://supermicro.com'
      }
    ]
  },
  {
    title: 'Research Partners',
    icon: Microscope,
    partners: [
      {
        name: 'Ri.se',
        logo: 'https://i.ibb.co/YRwPn5Z/rise.png',
        website: 'https://ri.se'
      },
      {
        name: 'AI Sweden',
        logo: 'https://i.ibb.co/Jt8BgD7/ai-sweden.png',
        website: 'https://ai.se'
      },
      {
        name: 'Kungliga Biblioteket',
        logo: 'https://i.ibb.co/0QZ3Q9Y/kb.png',
        website: 'https://kb.se'
      },
      {
        name: 'Linköpings Universitet',
        logo: 'https://i.ibb.co/YRwPn5Z/liu.png',
        website: 'https://liu.se'
      }
    ]
  }
]

export default function PartnersPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-ovo mb-6">Our Partners</h1>
            <p className="text-xl text-white/80">
              Working together with industry leaders to drive innovation in AI infrastructure and development.
            </p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {categories.map((category, categoryIndex) => (
            <section key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[#2D6A4F]/10 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-[#52B788]" />
                  </div>
                  <h2 className="text-3xl font-ovo">{category.title}</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {category.partners.map((partner, partnerIndex) => (
                    <motion.a
                      key={partner.name}
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex + partnerIndex) * 0.1 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative p-6 rounded-xl border border-[#74C69D]/20 bg-black/20 backdrop-blur-sm h-full">
                        <div className="aspect-[3/1] rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-full h-full object-contain p-4 opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}