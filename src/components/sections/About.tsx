import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'

export function About() {
  const { t } = useTranslation()
  return (
    <section className="py-24 relative" id="about">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-medium mb-6">{t('about.title')}</h1>
          <p className="text-lg text-white/60">{t('about.description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {t<string[]>('about.team.members', { returnObjects: true }).map(
            (memberKey: string, index: number) => (
              <motion.div
                key={memberKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent group-hover:from-white/10 transition-colors" />

                <div className="relative p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors">
                  <div className="aspect-square mb-6 rounded-xl overflow-hidden">
                    <img
                      src={t(`about.team.${memberKey}.image`)}
                      alt={t(`about.team.${memberKey}.name`)}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-medium mb-1">
                    {t(`about.team.${memberKey}.name`)}
                  </h3>
                  <p className="text-white/60 mb-4">
                    {t(`about.team.${memberKey}.role`)}
                  </p>
                  <p className="text-sm text-white/60 mb-6">
                    {t(`about.team.${memberKey}.bio`)}
                  </p>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={t(`about.team.${memberKey}.links.linkedin`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={t(`about.team.${memberKey}.links.github`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={`mailto:${t(
                          `about.team.${memberKey}.links.email`
                        )}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-medium mb-4">
            {t('about.joinTeam.title')}
          </h2>
          <p className="text-lg text-white/60 mb-8">
            {t('about.joinTeam.description')}
          </p>
          <Button size="lg" asChild>
            <a
              href="https://odoo.berget.cloud/jobs"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Open Positions
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
