import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface Quote {
  name: string;
  title: string;
  quote: string;
}

export function PartnerQuotes() {
  const { t } = useTranslation()

  return (
    <section className="py-32 relative bg-[#2D6A4F]/5 border-y border-[#40916C]/20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background opacity-30" />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6">{t('partnerQuotes.title')}</h2>
            <p className="text-lg text-white/60">
              {t('partnerQuotes.description')}
            </p>
          </motion.div>
        </div>

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
              <div className="relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-[#74C69D]/20 h-full flex flex-col">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
