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
            <TableHead className="w-[60px]">Input (€/M Tokens)</TableHead>
            <TableHead className="w-[60px]">Output (€/M Tokens)</TableHead>
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

function ImageModelTable({ title, description, models }: { title: string; description: string; models: PricingRow[] }) {
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
            <TableHead className="w-[60px]">€ / step</TableHead>
            
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

function STTModelTable({ title, description, models }: { title: string; description: string; models: PricingRow[] }) {
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
            <TableHead className="w-[60px]">€ / 1000 mins</TableHead>
            
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

function TTSModelTable({ title, description, models }: { title: string; description: string; models: PricingRow[] }) {
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
            <TableHead className="w-[60px]">€/M Characters</TableHead>
            
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
      .filter(model => model.type === 'Text Models')
      .map(model => ({
        name: model.name,
        inputprice: `€${model.pricing?.input.amount}`,
        outputprice: `€${model.pricing?.output.amount}`,
      }))
  }, [models])

  const multimodalModels = useMemo(() => {
    return models
      .filter(model => model.type === 'Multimodal')
      .map(model => ({
        name: model.name,
        inputprice: `€${model.pricing?.input.amount}`,
        outputprice: `€${model.pricing?.output.amount}`,
      }))
  }, [models])

  const rerankModels = useMemo(() => {
    return models
      .filter(model => model.type === 'Reranking')
      .map(model => ({
        name: model.name,
        inputprice: `€${model.pricing?.input.amount}`,
        outputprice: '-',
      }))
  }, [models])

  const embeddingModels = useMemo(() => {
    return models
      .filter(model => model.type === 'Text Embedding')
      .map(model => ({
        name: model.name,
        inputprice: `€${model.pricing?.input.amount}`,
        outputprice: '-',
      }))
  }, [models])

  const STTModels = useMemo(() => {
    return models
      .filter(model => model.type === 'Speech-to-Text')
      .map(model => ({
        name: model.name,
        inputprice: `€${model.pricing?.input.amount}`,
        outputprice: '-',
      }))
  }, [models])

  const TTSModels = useMemo(() => {
    return models
      .filter(model => model.type === 'Text-to-Speech')
      .map(model => ({
        name: model.name,
        inputprice: `€${model.pricing?.input.amount}`,
        outputprice: '-',
      }))
  }, [models])

  const imageModels = useMemo(() => {
    return models
      .filter(model => model.type === 'Image Generation')
      .map(model => ({
        name: model.name,
        inputprice: `€${model.pricing?.input.amount} / step`,
        outputprice: '-',
      }))
  }, [models])

  const moderationModels = useMemo(() => {
    return models
      .filter(model => model.type === 'Moderation')
      .map(model => ({
        name: model.name,
        inputprice: `€${model.pricing?.input.amount}`,
        outputprice: `€${model.pricing?.output.amount}`,
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

      <ModelTable 
        title={t('serverlesspricing.multimodal.title')} 
        description={t('serverlesspricing.multimodal.description')}
        models={multimodalModels}
      />

      <ModelTable 
        title={t('serverlesspricing.rerank.title')} 
        description={t('serverlesspricing.rerank.description')}
        models={rerankModels}
      />

      <ModelTable 
        title={t('serverlesspricing.embedding.title')} 
        description={t('serverlesspricing.embedding.description')}
        models={embeddingModels}
      />

      <ModelTable 
        title={t('serverlesspricing.moderation.title')} 
        description={t('serverlesspricing.moderation.description')}
        models={moderationModels}
      />

      <STTModelTable 
        title={t('serverlesspricing.stt.title')} 
        description={t('serverlesspricing.stt.description')}
        models={STTModels}
      />
      <p className="text-sm text-white/60 mt-1">{t('stt.note')}</p>

      <TTSModelTable 
        title={t('serverlesspricing.tts.title')} 
        description={t('serverlesspricing.tts.description')}
        models={TTSModels}
      />
      <p className="text-sm text-white/60 mt-1">{t('tts.note')}</p>

      <ImageModelTable 
        title={t('serverlesspricing.image.title')} 
        description={t('serverlesspricing.image.description')}
        models={imageModels}
      />
      <p className="text-sm text-white/60 mt-1">{t('serverlesspricing.image.note')}</p>

      <div className="rounded-lg bg-white/5 p-4 text-sm text-white/60">
        <p>{t('serverlesspricing.footer')}</p>
      </div>
    </div>
  )
}
