import { useMemo } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { PricingRow } from './types'
import { useTranslation } from 'react-i18next'
import { useModels } from '@/hooks/use-models'

function ModelTable({ title, description, models }: { title: string; description: string; models: PricingRow[] }) {
  if (models.length === 0) return null;

  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-ovo">{title}</h4>
        <p className="text-sm text-white/80 mt-1">{description}</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[200px]">Model</TableHead>
            <TableHead className="w-[60px]">Input</TableHead>
            <TableHead className="w-[60px]">Output</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {models.map((model) => (
            <TableRow key={model.name} className="group">
              <TableCell className="font-medium w-[200px]">{model.name}</TableCell>
              <TableCell className="w-[60px]">{model.inputprice}</TableCell>
              <TableCell className="w-[60px]">{model.outputprice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function SinglePriceModelTable({ title, description, models, unitLabel }: { title: string; description: string; models: PricingRow[]; unitLabel: string }) {
  if (models.length === 0) return null;

  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-ovo">{title}</h4>
        <p className="text-sm text-white/80 mt-1">{description}</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[200px]">Model</TableHead>
            <TableHead className="w-[60px]">{unitLabel}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {models.map((model) => (
            <TableRow key={model.name} className="group">
              <TableCell className="font-medium w-[200px]">{model.name}</TableCell>
              <TableCell className="w-[60px]">{model.inputprice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export function ServerlessInference() {
  const { t } = useTranslation()
  const { models } = useModels()

  const textModels = useMemo(() => {
    return models
      .filter(model => model.model_type === 'text')
      .map(model => ({
        name: model.name,
        inputprice: model.pricing?.input ? `${model.pricing.input} ${model.pricing.currency || 'EUR'}/${model.pricing.unit?.split('/').pop() || 'M Token'}` : '-',
        outputprice: model.pricing?.output ? `${model.pricing.output} ${model.pricing.currency || 'EUR'}/${model.pricing.unit?.split('/').pop() || 'M Token'}` : '-',
      }))
  }, [models])

  const embeddingModels = useMemo(() => {
    return models
      .filter(model => model.model_type === 'embedding')
      .map(model => ({
        name: model.name,
        inputprice: model.pricing?.input ? `${model.pricing.input} ${model.pricing.currency || 'EUR'}/${model.pricing.unit?.split('/').pop() || 'M Token'}` : '-',
        outputprice: '-',
      }))
  }, [models])

  const rerankModels = useMemo(() => {
    return models
      .filter(model => model.model_type === 'rerank')
      .map(model => ({
        name: model.name,
        inputprice: model.pricing?.input ? `${model.pricing.input} ${model.pricing.currency || 'EUR'}/${model.pricing.unit?.split('/').pop() || 'M Token'}` : '-',
        outputprice: '-',
      }))
  }, [models])

  const speechToTextModels = useMemo(() => {
    return models
      .filter(model => model.model_type === 'speech-to-text')
      .map(model => ({
        name: model.name,
        inputprice: model.pricing?.input ? `${model.pricing.input} ${model.pricing.currency || 'EUR'}/${model.pricing.unit?.split('/').pop() || 'mins'}` : '-',
        outputprice: '-',
      }))
  }, [models])

  const textToSpeechModels = useMemo(() => {
    return models
      .filter(model => model.model_type === 'text-to-speech')
      .map(model => ({
        name: model.name,
        inputprice: model.pricing?.input ? `${model.pricing.input} ${model.pricing.currency || 'EUR'}/${model.pricing.unit?.split('/').pop() || 'M Chars'}` : '-',
        outputprice: '-',
      }))
  }, [models])

  const imageModels = useMemo(() => {
    return models
      .filter(model => model.model_type === 'image' || model.model_type === 'text-to-image')
      .map(model => ({
        name: model.name,
        inputprice: model.pricing?.input ? `${model.pricing.input} ${model.pricing.currency || 'EUR'}/${model.pricing.unit?.split('/').pop() || 'step'}` : '-',
        outputprice: '-',
      }))
  }, [models])

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-ovo">{t('serverlesspricing.title')}</h3>
      <p className="text-white/80">{t('serverlesspricing.intro')}</p>

      <ModelTable
        title={t('serverlesspricing.text.title')}
        description={t('serverlesspricing.text.description')}
        models={textModels}
      />

      <SinglePriceModelTable
        title={t('serverlesspricing.embedding.title')}
        description={t('serverlesspricing.embedding.description')}
        models={embeddingModels}
        unitLabel="€ / M Token"
      />

      <SinglePriceModelTable
        title={t('serverlesspricing.rerank.title')}
        description={t('serverlesspricing.rerank.description')}
        models={rerankModels}
        unitLabel="€ / M Token"
      />

      <SinglePriceModelTable
        title={t('serverlesspricing.stt.title')}
        description={t('serverlesspricing.stt.description')}
        models={speechToTextModels}
        unitLabel="€ / 1000 mins"
      />
      {speechToTextModels.length > 0 && <p className="text-sm text-white/60 mt-1">{t('serverlesspricing.stt.note')}</p>}

      <SinglePriceModelTable
        title={t('serverlesspricing.tts.title')}
        description={t('serverlesspricing.tts.description')}
        models={textToSpeechModels}
        unitLabel="€ / M Characters"
      />
      {textToSpeechModels.length > 0 && <p className="text-sm text-white/60 mt-1">{t('serverlesspricing.tts.note')}</p>}

      <SinglePriceModelTable
        title={t('serverlesspricing.image.title')}
        description={t('serverlesspricing.image.description')}
        models={imageModels}
        unitLabel="€ / step"
      />
      {imageModels.length > 0 && <p className="text-sm text-white/60 mt-1">{t('serverlesspricing.image.note')}</p>}

      <div className="rounded-lg bg-white/5 p-4 text-sm text-white/60">
        <p>{t('serverlesspricing.footer')}</p>
      </div>
    </div>
  )
}