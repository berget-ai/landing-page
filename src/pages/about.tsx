import { Building2, Mail, MapPin, Users, Shield, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function AboutPage() {
  const { t } = useTranslation()
  
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-medium mb-4">{t('about.title')}</h1>
          <p className="text-lg text-white/60">{t('about.description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <Users className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-medium mb-2">{t('about.mission.title')}</h3>
            <p className="text-white/60">{t('about.mission.description')}</p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <Shield className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-medium mb-2">{t('about.values.title')}</h3>
            <p className="text-white/60">{t('about.values.description')}</p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <Globe className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-medium mb-2">{t('about.vision.title')}</h3>
            <p className="text-white/60">{t('about.vision.description')}</p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-2xl font-medium mb-8">{t('about.story.title')}</h2>
          <div className="prose prose-invert max-w-none">
            <p>{t('about.story.p1')}</p>
            <p>{t('about.story.p2')}</p>
            <p>{t('about.story.p3')}</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-medium mb-8">{t('about.companyInfo')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Building2 className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-medium mb-2">{t('about.legalInfo')}</h3>
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
