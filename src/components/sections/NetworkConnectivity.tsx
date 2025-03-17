import { Network, Shield, Lock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { NetworkPreview } from '@/components/common/NetworkPreview'

export function NetworkConnectivity() {
  const { t } = useTranslation()
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-medium mb-4">
            {t('networkConnectivity.title')}
          </h2>
          <p className="text-lg text-white/60">
            {t('networkConnectivity.description')}
          </p>
        </div>

        <div className="space-y-16">
          <NetworkPreview />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-sm">
                <Shield className="w-4 h-4" />
                <span>Safe and Compliant AI</span>
              </div>

              <h3 className="text-2xl font-medium">
                {t('networkConnectivity.dataLocation.title')}
              </h3>

              <p className="text-lg text-white/60">
                {t('networkConnectivity.dataLocation.description')}
              </p>
            </div>

            <div className="grid gap-6">
              <div className="p-6 rounded-xl bg-white/5">
                <Network className="w-6 h-6 mb-4" />
                <h4 className="text-lg font-medium mb-2">
                  {t('networkConnectivity.features.directConnect.title')}
                </h4>
                <p className="text-white/60">
                  {t('networkConnectivity.features.directConnect.description')}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5">
                <Lock className="w-6 h-6 mb-4" />
                <h4 className="text-lg font-medium mb-2">
                  {t('networkConnectivity.features.compliance.title')}
                </h4>
                <p className="text-white/60">
                  {t('networkConnectivity.features.compliance.description')}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5">
                <Shield className="w-6 h-6 mb-4" />
                <h4 className="text-lg font-medium mb-2">
                  {t('networkConnectivity.features.security.title')}
                </h4>
                <p className="text-white/60">
                  {t('networkConnectivity.features.security.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
