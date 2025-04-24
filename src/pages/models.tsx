import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Filter, ExternalLink, AlertCircle, Euro } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useModels } from '@/hooks/use-models'

export default function ModelsPage() {
  const { t } = useTranslation()
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const { loading, error, getModelsByType, getModelTypes } = useModels()

  const modelTypes = useMemo(() => {
    return getModelTypes()
  }, [getModelTypes])

  const filteredModels = useMemo(() => {
    return getModelsByType(selectedType)
  }, [selectedType, getModelsByType])

  return (
    <div className="container mx-auto py-24">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-medium mb-6">{t('modelPage.title')}</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-white/80 leading-relaxed mb-6">
            {t('modelPage.intro')}
          </p>
          <ul className="space-y-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                </div>
                <span className="text-white/80">
                  {t(`modelPage.principles.${i}`)}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-white/80 mb-4">{t('modelPage.continuous')}</p>
          <p className="text-white/60 italic">{t('modelPage.suggestion')}</p>
        </div>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-8">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#52B788]"></div>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-start gap-8 mb-12">
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-4 h-4 text-[#52B788]" />
                <span className="text-sm text-white/60">{t('filter')}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedType === null ? 'default' : 'secondary'}
                  size="sm"
                  onClick={() => setSelectedType(null)}
                  className="rounded-full"
                >
                  {t('all')}
                </Button>
                {modelTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? 'default' : 'secondary'}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className="rounded-full"
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {filteredModels.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/60">{t('modelPage.noModels')}</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {filteredModels.map((model) => (
                <div
                  key={model.name}
                  className="p-6 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${model.isLive ? 'bg-green-500' : 'bg-red-500'}`} 
                           title={model.isLive ? 'Online' : 'Offline'} />
                      <h3 className="text-xl font-medium">{model.name}</h3>
                    </div>
                    {model.huggingface && (
                      <a
                        href={model.huggingface}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#52B788] hover:text-[#74C69D] transition-colors flex items-center gap-1"
                      >
                        <span className="text-sm">{t('view')}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-[#52B788]">
                      {model.type}
                    </span>
                    <span className="text-sm text-white/60">
                      • {model.provider}
                    </span>
                  </div>
                  <p className="text-sm text-white/60 mb-4">
                    {model.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/40">
                      {model.license}
                    </span>
                    <span className="text-sm text-[#52B788]">
                      {model.status.charAt(0).toUpperCase() +
                        model.status.slice(1)}
                    </span>
                  </div>

                  {model.pricing && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-1 mb-2">
                        <Euro className="w-3 h-3 text-white/60" />
                        <span className="text-xs text-white/60">
                          {t('modelPage.pricing')}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-xs">
                          <span className="text-white/40">
                            {t('modelPage.input')}:{' '}
                          </span>
                          <span className="text-white/80">
                            {model.pricing.input.amount}{' '}
                            {model.pricing.input.unit}
                          </span>
                        </div>
                        <div className="text-xs">
                          <span className="text-white/40">
                            {t('modelPage.output')}:{' '}
                          </span>
                          <span className="text-white/80">
                            {model.pricing.output.amount}{' '}
                            {model.pricing.output.unit}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
