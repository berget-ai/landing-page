import { motion } from 'framer-motion'
import { Github, Lock, Server, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { TerminalCarousel } from '@/components/terminal/TerminalCarousel'
import { Link } from 'react-router-dom'
import { ModelsSection } from '@/components/sections/ModelsSection'
import { Overview } from '@/components/sections/Overview'
import developerImage from '@/assets/images/developers.png'

const iconMap = {
  github: Github,
  lock: Lock,
  server: Server,
  database: Database,
}

export default function DevelopersPage() {
  const { t } = useTranslation()
  const sections = t('DevelopersPage.sections', { returnObjects: true }) as {
    icon: keyof typeof iconMap
    title: string
    description: string
    bullets: string[]
  }[] || []

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/50">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] pointer-events-none" />
        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-medium mb-6">
                {t('DevelopersPage.hero.title')}
              </h1>
              <p className="text-xl text-white/60 mb-8">
                {t('DevelopersPage.hero.description')}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none">
                <div className="aspect-square lg:aspect-[16/9] overflow-hidden rounded-2xl">
                  <img
                    src={developerImage}
                    alt="Developer illustration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <TerminalCarousel />
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto space-y-24">
          {Array.isArray(sections) ? sections.map((section, index) => {
            const Icon = iconMap[section.icon]
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 rounded-3xl border border-[#74C69D]/20 bg-white/[0.02] backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2D6A4F] to-[#40916C] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-medium mb-4">{section.title}</h2>
                  <p className="text-white/80 mb-4">{section.description}</p>
                  <ul className="space-y-4">
                    {section.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                        <span dangerouslySetInnerHTML={{ __html: bullet }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          }) : (
            <div className="p-8 rounded-3xl border border-[#74C69D]/20 bg-white/[0.02] backdrop-blur-sm text-center">
              <p className="text-white/80">Developer sections will appear here.</p>
            </div>
          )}

          <Overview />

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
              <Button size="lg" variant="secondary" asChild>
                <Link to="/docs">{t('DevelopersPage.cta.docs')}</Link>
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
