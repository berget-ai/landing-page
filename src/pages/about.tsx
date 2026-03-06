import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import { Card, HeroBlock, Section, SectionHeader } from '@berget-ai/ui'

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen pt-24">
      <HeroBlock
        variant="default"
        withPattern
        title={t('about.hero.title')}
        description={t('about.hero.description')}
      />

      {/* Origin Story */}
      <Section padding="xl">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl font-medium">{t('about.origin.title')}</h2>
            <p className="text-lg text-white/60 leading-relaxed">
              {t('about.origin.description')}
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              {t('about.origin.nameOrigin')}
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section padding="xl" background="muted">
        <div className="max-w-3xl mx-auto">
          <SectionHeader title={t('about.values.title')} />
          <div className="space-y-16">
            {['openSource', 'european', 'integrity'].map((value) => (
              <div key={value} className="space-y-4">
                <h3 className="text-2xl font-medium">
                  {t(`about.values.${value}.title`)}
                </h3>
                <p className="text-lg text-white/60 leading-relaxed">
                  {t(`about.values.${value}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Customer Promises */}
      <Section padding="xl">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            title={t('about.promises.title')}
            description={t('about.promises.description')}
          />
          <div className="grid gap-4">
            {(
              t('about.promises.list', { returnObjects: true }) as string[]
            ).map((promise, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <ArrowRight className="w-5 h-5 text-[#FFB700] shrink-0" />
                <p className="text-white/80">{promise}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section padding="xl" background="muted">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title={t('about.team.title')}
            description={t('about.team.description')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['christian', 'andreas', 'john', 'johan', 'sara', 'oscar'].map(
              (member) => (
                <Card key={member} variant="highlight" padding="md">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
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
                </Card>
              ),
            )}
          </div>
        </div>
      </Section>
    </main>
  )
}
