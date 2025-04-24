import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Bot, ArrowRight, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useModels } from '@/hooks/use-models'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useTranslation } from 'react-i18next'

export function ModelsSection() {
  const { t } = useTranslation()
  const { models, loading, error } = useModels()

  const displayModels = useMemo(() => {
    return models.slice(0, 8).map((model) => ({
      name: model.name,
      type: model.type,
      context: model.capabilities?.function_calling
        ? 'Function Calling'
        : 'N/A',
      performance: model.capabilities?.json_mode ? 'State-of-the-Art' : 'High',
      status: model.status.charAt(0).toUpperCase() + model.status.slice(1),
      isLive: model.isLive
    }))
  }, [models])

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
            <Link to="/models">
              {t('models.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        <p className="text-white/80 mb-6">{t('models.description')}</p>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-ovo">
              {t('models.comprehensive.title')}
            </h3>
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

        {error && (
          <div className="mt-6 p-4 rounded-lg bg-red-900/20 border border-red-900/30 text-white/80 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        <div className="overflow-hidden rounded-lg border border-white/10 mt-8">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#52B788]"></div>
            </div>
          ) : (
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
                {displayModels.map((model) => (
                  <TableRow key={model.name}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {typeof model.isLive !== 'undefined' && (
                          <div 
                            className={`w-2 h-2 rounded-full ${model.isLive ? 'bg-green-500' : 'bg-red-500'}`}
                            title={model.isLive ? 'Online' : 'Offline'} 
                          />
                        )}
                        {model.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      {t(
                        `models.types.${model.type
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`,
                        model.type
                      )}
                    </TableCell>
                    <TableCell>{model.context}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                          model.status === 'Available'
                            ? 'bg-white/20 text-white'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {t(
                          `models.status.${model.status
                            .toLowerCase()
                            .replace(/\s+/g, '-')}`,
                          model.status
                        )}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </motion.div>
  )
}
