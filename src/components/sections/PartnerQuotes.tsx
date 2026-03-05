import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Card, Section, SectionHeader } from '@berget-ai/ui'

interface Quote {
  name: string;
  title: string;
  quote: string;
}

export function PartnerQuotes() {
  const { t } = useTranslation()

  return (
    <Section padding="xl" className="bg-[#2D6A4F]/5 border-y border-[#40916C]/20">
      <SectionHeader
        title={t('partnerQuotes.title')}
        description={t('partnerQuotes.description')}
        className="mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {(Array.isArray(t('partnerQuotes.quotes', { returnObjects: true }))
          ? t('partnerQuotes.quotes', { returnObjects: true }) as Quote[]
          : [] as Quote[]
        ).map((quote: Quote, index: number) => (
          <motion.div
            key={quote.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-green/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Card variant="glass" padding="lg" className="h-full">
              <div className="flex flex-col h-full">
                <p className="text-white/80 text-sm leading-relaxed flex-grow">
                  "{quote.quote}"
                </p>
                <div className="pt-8 border-t border-white/10 mt-8">
                  <h3 className="text-lg font-medium">{quote.name}</h3>
                  <p className="text-white/60 text-sm min-h-[2.5rem] leading-snug">
                    {quote.title}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
