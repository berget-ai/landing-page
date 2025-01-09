import { Building2, Mail, MapPin, Users, Shield, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen pt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D6A4F]/20 via-transparent to-[#FFB700]/20 pointer-events-none" />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-16 relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-white/5 rounded-full blur-2xl" />
          <h1 className="text-5xl font-medium mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            {t('about.title')}
          </h1>
          <h2 className="text-3xl font-medium mb-6 text-[#40916C]">
            {t('about.subtitle')}
          </h2>
          <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
          <div className="space-y-6 text-lg text-white/80">
            <p>{t('about.manifesto.intro')}</p>
            <p>{t('about.manifesto.european')}</p>
            <p>{t('about.manifesto.vision')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors duration-300 group">
            <Users className="w-10 h-10 mb-6 text-[#40916C] group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-medium mb-3">
              {t('about.mission.title', 'Our Mission')}
            </h3>
            <p className="text-white/60">
              {t('about.mission.description', 'Making AI accessible, secure and efficient for Swedish enterprises through local infrastructure and expertise')}
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors duration-300 group">
            <Shield className="w-10 h-10 mb-6 text-[#40916C] group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-medium mb-3">
              {t('about.values.title', 'Our Values')}
            </h3>
            <p className="text-white/60">
              {t('about.values.description', 'Integrity, innovation and sustainability are at the core of everything we do')}
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors duration-300 group">
            <Globe className="w-10 h-10 mb-6 text-[#40916C] group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-medium mb-3">
              {t('about.vision.title', 'Our Vision')}
            </h3>
            <p className="text-white/60">
              {t('about.vision.description', 'To be the leading AI infrastructure provider in the Nordics')}
            </p>
          </div>
        </div>

        <div className="mb-24 relative">
          <div className="absolute -right-40 top-20 w-80 h-80 bg-[#40916C]/20 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-3xl font-medium mb-12 relative">
            {t('about.story.title', 'Our Story')}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p>
              {t('about.story.p1', 'Berget AI was founded in 2023 with a clear vision: to make AI accessible to Swedish enterprises in a secure and efficient way.')}
            </p>
            <p>
              {t('about.story.p2', 'We saw a growing need for local AI infrastructure that meets Swedish and European requirements for data security and integrity.')}
            </p>
            <p>
              {t('about.story.p3', "Today, we work with leading Swedish companies to build tomorrow's AI solutions with a focus on security, performance and sustainability.")}
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-40 top-20 w-80 h-80 bg-[#FFB700]/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-3xl font-medium mb-12">
            {t('about.companyInfo')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Building2 className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-medium mb-2">
                {t('about.legalInfo')}
              </h3>
              <p className="text-white/60">Berget AI AB</p>
              <p className="text-white/60">Org. Nr: 559504-7522</p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <MapPin className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-medium mb-2">{t('about.address')}</h3>
              <p className="text-white/60">Götgatan 18</p>
              <p className="text-white/60">Stockholm, Sweden</p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Mail className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-medium mb-2">{t('about.contact')}</h3>
              <p className="text-white/60">support@berget.ai</p>
              <p className="text-white/60">legal@berget.ai</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
