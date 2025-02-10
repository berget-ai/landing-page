import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen pt-24">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-5xl font-medium text-center mb-12">{t('about.story.title')}</h1>
            <p className="text-lg text-white/60 leading-relaxed">
              {t('about.story.description1')}
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              {t('about.story.description2')}
            </p>
          </motion.div>

          {/* Open Source */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-medium">{t('about.openSource.title')}</h2>
            <p className="text-white/60 leading-relaxed">
              {t('about.openSource.description')}
            </p>
          </motion.div>

          {/* European Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-medium">{t('about.european.title')}</h2>
            <p className="text-white/60 leading-relaxed">
              {t('about.european.description')}
            </p>
          </motion.div>

          {/* Integrity & Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-medium">{t('about.integrity.title')}</h2>
            <p className="text-white/60 leading-relaxed">
              {t('about.integrity.description')}
            </p>
          </motion.div>

          {/* Customer Promises */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-medium">{t('about.promises.title')}</h2>
            <p className="text-white/60 mb-6">{t('about.promises.intro')}</p>
            <ul className="space-y-4">
              {(t('about.promises.list', { returnObjects: true }) as string[]).map((promise, index) => (
                <li key={index} className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-violet-400" />
                  <span>{promise}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-medium mb-12 text-center">
              {t('about.team.title')}
            </h2>
            <p className="text-lg text-white/60 mb-12 text-center">
              {t('about.team.description')}
            </p>

            {/* Team Members Grid */}
            <div className="space-y-8">
              {/* Team member components remain unchanged as they use data from translation files */}
              {(t('about.team.members', { returnObjects: true }) as string[]).map((memberKey) => {
                const member = {
                  name: t(`about.team.${memberKey}.name`),
                  role: t(`about.team.${memberKey}.role`),
                  bio: t(`about.team.${memberKey}.bio`),
                  image: t(`about.team.${memberKey}.image`),
                  links: {
                    linkedin: t(`about.team.${memberKey}.links.linkedin`),
                    github: t(`about.team.${memberKey}.links.github`),
                    email: t(`about.team.${memberKey}.links.email`),
                  },
                }

                return (
                  <div key={memberKey} className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-white/5 flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-medium mb-2">{member.name}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Call to Action */}
            <div className="max-w-3xl mx-auto text-center mt-16">
              <h2 className="text-3xl font-medium mb-6">
                {t('about.team.joinTeam.title')}
              </h2>
              <p className="text-lg text-white/60 mb-8">
                {t('about.team.joinTeam.description')}
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg">{t('about.team.joinTeam.cta')}</Button>
                <Button size="lg" variant="secondary">{t('about.team.joinTeam.contact')}</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}