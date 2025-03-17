import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-medium mb-6">{t('about.hero.title')}</h1>
              <p className="text-xl text-white/80">{t('about.hero.description')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-medium">{t('about.origin.title')}</h2>
              <p className="text-lg text-white/60 leading-relaxed">
                {t('about.origin.description')}
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                {t('about.origin.nameOrigin')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium mb-12 text-center">{t('about.values.title')}</h2>
            <div className="space-y-16">
              {['openSource', 'european', 'integrity'].map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-medium">{t(`about.values.${value}.title`)}</h3>
                  <p className="text-lg text-white/60 leading-relaxed">
                    {t(`about.values.${value}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Promises */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-medium text-center">{t('about.promises.title')}</h2>
              <p className="text-lg text-white/60 text-center">
                {t('about.promises.description')}
              </p>
              <div className="grid gap-4">
                {(t('about.promises.list', { returnObjects: true }) as string[]).map((promise, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-white/80">{promise}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-medium mb-4">{t('about.team.title')}</h2>
              <p className="text-lg text-white/60">{t('about.team.description')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {['christian', 'andreas', 'john', 'johan'].map((member, index) => (
                <motion.div
                  key={member}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 rounded-2xl bg-muted/20 group-hover:bg-muted/30 transition-colors" />
                  <div className="relative p-6 rounded-2xl border border-border group-hover:border-border/80 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-muted/50">
                        <img
                          src={t(`about.team.members.${member}.image`)}
                          alt={t(`about.team.members.${member}.name`)}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium">
                          {t(`about.team.members.${member}.name`)}
                        </h3>
                        <p className="text-white/60">
                          {t(`about.team.members.${member}.role`)}
                        </p>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {t(`about.team.members.${member}.bio`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
