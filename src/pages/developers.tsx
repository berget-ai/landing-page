import { motion } from 'framer-motion'
import { Github, Lock, Server, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { TerminalCarousel } from '@/components/terminal/TerminalCarousel'
import { Link } from 'react-router-dom'
import { ModelsSection } from '@/components/sections/ModelsSection'
import { Overview } from '@/components/sections/Overview'
import { Feature } from '@/components/ui/feature-section-with-bento-grid'

const iconMap = {
  github: Github,
  lock: Lock,
  server: Server,
  database: Database,
}

export default function DevelopersPage() {
  const { t } = useTranslation()
  const sections =
    (t('DevelopersPage.sections', { returnObjects: true }) as {
      icon: keyof typeof iconMap
      title: string
      description: string
      bullets: string[]
    }[]) || []

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] pointer-events-none" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl font-ovo mb-6">
                {t('DevelopersPage.hero.title')}
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                {t('DevelopersPage.hero.description')}
              </p>
              <div className="mt-8">
                <TerminalCarousel />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Feature
              title={t('DevelopersPage.hero.title')}
              description={t('DevelopersPage.hero.description')}
              badge="For Developers"
              items={
                Array.isArray(sections)
                  ? sections.map((section, index) => {
                      const Icon = iconMap[section.icon]
                      return {
                        icon: <Icon className="w-8 h-8 stroke-1 text-white" />,
                        title: section.title,
                        description: (
                          <>
                            <p>{section.description}</p>
                            <div className="mt-4">
                              <ul className="list-disc list-inside text-sm">
                                {section.bullets.map((bullet, bulletIndex) => (
                                  <li
                                    key={bulletIndex}
                                    className="flex items-start gap-3 text-sm"
                                  >
                                    <span className=" text-[#52B788] mt-0.5 flex-shrink-0">
                                      {bullet.split('–')[0]}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        ),
                        span: index % 3 === 0 ? 'col' : 'none',
                      }
                    })
                  : []
              }
            />
          </motion.div>

          <div className="mt-24">
            <Overview />
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-32"
          >
            <h2 className="text-3xl font-medium mb-6">
              {t('DevelopersPage.cta.title')}
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              {t('DevelopersPage.cta.description')}
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/signup">{t('DevelopersPage.cta.signup')}</Link>
              </Button>

            </div>
          </motion.div>
        </div>

        {/* Models Section (already localized?) */}
        <ModelsSection />
      </div>
    </main>
  )
}
