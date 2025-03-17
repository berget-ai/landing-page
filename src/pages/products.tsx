import { motion } from 'framer-motion'
import { Cloud, Server, Cpu, Database, Bot, ArrowRight, Sparkles, Zap, Network, Box, Users, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ModelsSection } from '@/components/sections/ModelsSection'
import { useTranslation } from 'react-i18next'

const platformStack = [
  {
    name: 'Tools & Marketplace',
    icon: Box,
    color: 'from-blue-500 to-purple-500',
  },
  {
    name: 'LLM',
    icon: Bot,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Compute',
    icon: Cpu,
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Connectivity',
    icon: Network,
    color: 'from-orange-500 to-amber-500',
  },
]

const managementStack = {
  name: 'Management',
  icon: Users,
  color: 'from-rose-500 to-orange-500',
}

export default function ProductsPage() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/50">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] pointer-events-none" />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-medium mb-6">
              {t('products.hero.title')}
            </h1>
            <p className="text-xl text-white/60 mb-8">
              {t('products.hero.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="space-y-32">
          {/* Serverless Inference */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-medium mb-4">{t('products.serverless.title')}</h2>
                <p className="text-lg text-white/60">
                  {t('products.serverless.description')}
                </p>
              </motion.div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors"
              >
                <Cloud className="w-8 h-8 mb-4 text-[#2D6A4F]" />
                <h3 className="text-xl font-medium mb-3">{t('products.serverless.features.integration.title')}</h3>
                <ul className="space-y-3 text-white/60">
                  {(t('products.serverless.features.integration.items', { returnObjects: true }) as string[]).map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors"
              >
                <Zap className="w-8 h-8 mb-4 text-[#40916C]" />
                <h3 className="text-xl font-medium mb-3">{t('products.serverless.features.usage.title')}</h3>
                <ul className="space-y-3 text-white/60">
                  {(t('products.serverless.features.usage.items', { returnObjects: true }) as string[]).map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors"
              >
                <Server className="w-8 h-8 mb-4 text-[#FFB700]" />
                <h3 className="text-xl font-medium mb-3">{t('products.serverless.features.infrastructure.title')}</h3>
                <ul className="space-y-3 text-white/60">
                  {(t('products.serverless.features.infrastructure.items', { returnObjects: true }) as string[]).map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Dedicated Inference */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-medium mb-4">{t('products.dedicated.title')}</h2>
                <p className="text-lg text-white/60">
                  {t('products.dedicated.description')}
                </p>
              </motion.div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors"
              >
                <Cpu className="w-8 h-8 mb-4 text-[#2D6A4F]" />
                <h3 className="text-xl font-medium mb-3">{t('products.dedicated.features.deployment.title')}</h3>
                <ul className="space-y-3 text-white/60">
                  {(t('products.dedicated.features.deployment.items', { returnObjects: true }) as string[]).map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors"
              >
                <Bot className="w-8 h-8 mb-4 text-[#40916C]" />
                <h3 className="text-xl font-medium mb-3">{t('products.dedicated.features.control.title')}</h3>
                <ul className="space-y-3 text-white/60">
                  {(t('products.dedicated.features.control.items', { returnObjects: true }) as string[]).map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors"
              >
                <Sparkles className="w-8 h-8 mb-4 text-[#FFB700]" />
                <h3 className="text-xl font-medium mb-3">{t('products.dedicated.features.performance.title')}</h3>
                <ul className="space-y-3 text-white/60">
                  {(t('products.dedicated.features.performance.items', { returnObjects: true }) as string[]).map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Berget AI Platform */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-medium mb-4">{t('products.platform.title')}</h2>
                <p className="text-lg text-white/60">
                  {t('products.platform.description')}
                </p>
              </motion.div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors"
              >
                <Database className="w-8 h-8 mb-4 text-[#2D6A4F]" />
                <h3 className="text-xl font-medium mb-3">{t('products.platform.features.toolset.title')}</h3>
                <ul className="space-y-3 text-white/60">
                  {(t('products.platform.features.toolset.items', { returnObjects: true }) as string[]).map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors"
              >
                <Box className="w-8 h-8 mb-4 text-[#40916C]" />
                <h3 className="text-xl font-medium mb-3">{t('products.platform.features.services.title')}</h3>
                <ul className="space-y-3 text-white/60">
                  {(t('products.platform.features.services.items', { returnObjects: true }) as string[]).map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl bg-[#2D6A4F]/5 border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors"
              >
                <Layers className="w-8 h-8 mb-4 text-[#FFB700]" />
                <h3 className="text-xl font-medium mb-3">{t('products.platform.features.infrastructure.title')}</h3>
                <ul className="space-y-3 text-white/60">
                  {(t('products.platform.features.infrastructure.items', { returnObjects: true }) as string[]).map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Platform Stack Illustration */}
          <div className="container mx-auto px-4 py-24 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-medium mb-4">{t('products.architecture.title')}</h2>
                  <p className="text-lg text-white/60">
                    {t('products.architecture.description')}
                  </p>
                </motion.div>
              </div>

              <div className="relative">
                {/* Background gradient effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
                
                {/* Main layout container */}
                <div className="relative grid grid-cols-12 gap-6">
                  {/* Stack layers - Left side */}
                  <div className="col-span-9">
                    <div className="space-y-4">
                      {Object.entries(t('products.architecture.layers', { returnObjects: true }) as Record<string, any>).slice(0, 4).map(([key, layer]: [string, any], index) => {
                        const IconComponent = platformStack[index].icon
                        return (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                          >
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2D6A4F]/5 via-[#40916C]/5 to-[#FFB700]/5 opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                            <div className="relative p-6 rounded-2xl border border-[#40916C]/20 bg-[#2D6A4F]/5">
                              <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D6A4F] to-[#40916C] flex items-center justify-center`}>
                                  <IconComponent className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-xl font-medium">{layer.title}</h3>
                                </div>
                              </div>
                              <div className="grid grid-cols-4 gap-4">
                                {layer.items.map((item: string) => (
                                  <div
                                    key={item}
                                    className="px-4 py-3 rounded-lg bg-[#2D6A4F]/5 text-sm text-center border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors"
                                  >
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Management Stack - Right side */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="col-span-3"
                  >
                    <div className={`relative h-full group`}>
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b from-[#FFB700]/5 to-[#2D6A4F]/5 opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                      <div className="relative h-full p-6 rounded-2xl border border-[#40916C]/20 bg-[#2D6A4F]/5 flex flex-col">
                        <div className="flex items-center gap-4 mb-8">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFB700] to-[#FFB700]/80 flex items-center justify-center`}>
                            <managementStack.icon className="w-6 h-6 text-[#1A1A1A]" />
                          </div>
                          <div>
                            <h3 className="text-xl font-medium">{t('products.architecture.layers.management.title')}</h3>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-center space-y-4">
                          {(t('products.architecture.layers.management.items', { returnObjects: true }) as string[]).map((item: string) => (
                            <div
                              key={item}
                              className="p-4 rounded-lg bg-[#2D6A4F]/5 text-sm text-center border border-[#40916C]/20 hover:bg-[#2D6A4F]/10 transition-colors"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                        <div className="absolute left-0 top-1/2 w-6 h-0.5 bg-gradient-to-r from-transparent to-white/20" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-60" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
                </div>
              </div>
            </div>
          </div>

          {/* Models Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-medium mb-4">{t('products.models.title')}</h2>
                <p className="text-lg text-white/60">
                  {t('products.models.description')}
                </p>
                <Button className="mt-6" asChild>
                  <Link to="/contact">
                    {t('products.models.requestModel')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            <div className="lg:col-span-8">
              <ModelsSection />
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-medium mb-6">{t('products.cta.title')}</h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              {t('products.cta.description')}
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/signup">{t('products.cta.getStarted')}</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">{t('products.cta.contactSales')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
