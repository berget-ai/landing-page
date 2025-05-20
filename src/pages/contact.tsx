import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

import { useTranslation } from 'react-i18next'

export default function ContactPage() {
  const { t } = useTranslation()

  
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-sm mb-6">
              <Mail className="w-4 h-4" />
              <span>{t('contact.hero.getInTouch')}</span>
            </div>
            <h1 className="text-5xl font-medium mb-4">{t('contact.hero.title')}</h1>
            <p className="text-xl text-white/60">
              {t('contact.hero.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

            {/* Andreas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 rounded-2xl border border-[#74C69D]/20 bg-black/20 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img
                      src="/team/andreas.png"
                      alt="Andreas Lundmark"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Andreas Lundmark</h3>
                    <p className="text-white/60">{t('contact.team.ceo')}</p>
                  </div>
                </div>
                <a
                  href="mailto:andreas@berget.ai"
                  className="inline-flex items-center gap-2 text-[#52B788] hover:text-[#74C69D] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {t('contact.team.emailCeo')}
                </a>
              </div>
            </motion.div>
            
            {/* Christian */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 rounded-2xl border border-[#74C69D]/20 bg-black/20 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img
                      src="/team/christian.png"
                      alt="Christian Landgren"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Christian Landgren</h3>
                    <p className="text-white/60">{t('contact.team.cpto')}</p>
                  </div>
                </div>
                <a
                  href="mailto:christian@berget.ai"
                  className="inline-flex items-center gap-2 text-[#52B788] hover:text-[#74C69D] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {t('contact.team.emailCpto')}
                </a>
              </div>
            </motion.div>


          </div>
        </div>
      </div>
    </main>
  )
}
