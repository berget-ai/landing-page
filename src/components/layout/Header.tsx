import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/5">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-xl font-semibold">Berget AI</div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#pricing"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            {t('header.navigation.pricing')}
          </a>
          <a
            href="#about"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            {t('header.navigation.about')}
          </a>
          <LanguageSwitcher />

          <Button variant="secondary" size="sm">
            {t('header.buttons.signIn')}
          </Button>
          <Button size="sm">
            {t('header.buttons.getStarted')}
          </Button>
        </nav>

        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-white/5 md:hidden"
          >
            <nav className="flex flex-col p-4 space-y-4">
              <a
                href="#pricing"
                className="text-sm text-white/60 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.navigation.pricing')}
              </a>
              <a
                href="#about"
                className="text-sm text-white/60 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.navigation.about')}
              </a>
              <LanguageSwitcher />
              <Button variant="secondary" size="sm" className="w-full">
                {t('header.buttons.signIn')}
              </Button>
              <Button size="sm" className="w-full">
                {t('header.buttons.getStarted')}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
