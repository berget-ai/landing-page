import { motion } from 'framer-motion'
import { Bot, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useTranslation } from 'react-i18next'

const models = [
  {
    name: 'DeepSeek R1 Unsloth DQ',
    type: 'Text Generation',
    context: '32k tokens',
    performance: 'State-of-the-Art',
    status: 'Available',
  },
  {
    name: 'Gemma 3 27B Instruct',
    type: 'Text Generation',
    context: '32k tokens',
    performance: 'State-of-the-Art',
    status: 'Available',
  },
  {
    name: 'Gemma 3 12B Instruct',
    type: 'Text Generation',
    context: 'N/A',
    performance: 'State-of-the-Art',
    status: 'Coming Soon',
  },
  {
    name: 'Qwen QwQ 32B',
    type: 'Text Generation',
    context: 'N/A',
    performance: 'State-of-the-Art',
    status: 'Coming Soon',
  },
  {
    name: 'Whisper Large v3',
    type: 'Speech-to-Text',
    context: 'N/A',
    performance: 'High',
    status: 'Available',
  },
  {
    name: 'Stable Diffusion XL',
    type: 'Image Generation',
    context: 'N/A',
    performance: 'High',
    status: 'Coming Soon',
  },
  {
    name: 'Nomic Text Embedd v1.5',
    type: 'Embedding',
    context: 'N/A',
    performance: 'State-of-the-Art',
    status: 'Coming Soon',
  },
  {
    name: 'MMxbai Rerank Base V2',
    type: 'Rerank',
    context: 'N/A',
    performance: 'High',
    status: 'Coming Soon',
  },
]

export function ModelsSection() {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-8 rounded-3xl border border-[#74C69D]/20 h-full">
        <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6">
          <Bot className="w-6 h-6" />
        </div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-ovo">{t('models.title')}</h2>
          <Button asChild variant="ghost" size="sm" className="group">
            <Link to="/docs/models">
              {t('models.viewDocs')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        <p className="text-white/80 mb-6">
          {t('models.description')}
        </p>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-ovo">{t('models.comprehensive.title')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                <span>{t('models.comprehensive.point1')}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                <span>{t('models.comprehensive.point2')}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                <span>{t('models.comprehensive.point3')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10 mt-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('models.table.model')}</TableHead>
                <TableHead>{t('models.table.type')}</TableHead>
                <TableHead>{t('models.table.context')}</TableHead>
                <TableHead>{t('models.table.status')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {models.map((model) => (
                <TableRow key={model.name}>
                  <TableCell className="font-medium">{model.name}</TableCell>
                  <TableCell>{t(`models.types.${model.type.toLowerCase().replace(/\s+/g, '-')}`)}</TableCell>
                  <TableCell>{model.context}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                      model.status === 'Available' 
                        ? 'bg-white/20 text-white'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {t(`models.status.${model.status.toLowerCase().replace(/\s+/g, '-')}`)}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </motion.div>
  )
}
