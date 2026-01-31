import { useState } from 'react'
import { Menu, X, AlertCircle, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '@/assets/logo.svg'
import { useEnvironment } from '@/hooks/use-environment'
import { useHealth } from '@/hooks/use-health'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()
  const { isStage, consoleUrl } = useEnvironment()
  const health = useHealth()

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/5">
      {isStage && (
        <div className="bg-red-500/90 text-white text-center py-px text-[4pt] font-medium leading-none">
          STAGE
        </div>
      )}
      {health.status === 'critical' && health.messageKey && (
        <Link to="/status" className="block bg-red-500/90 hover:bg-red-500 text-white text-center py-2 px-4 text-xs font-medium transition-colors">
          <div className="flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>{t(health.messageKey, 'We are having hardware problems with one of our GPU:s, expecting replacement ASAP. Please visit https://berget.ai/status for more information.')}</span>
          </div>
        </Link>
      )}
      {health.status === 'degraded' && health.messageKey && (
        <Link to="/status" className="block bg-yellow-500/90 hover:bg-yellow-500 text-black text-center py-2 px-4 text-xs font-medium transition-colors">
          <div className="flex items-center justify-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span>{t(health.messageKey, 'Some services are experiencing issues. Please visit https://berget.ai/status for more information.')}</span>
          </div>
        </Link>
      )}
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center gap-2 hover:text-white/90 transition-colors">
            <img src={logo} alt="Berget AI Logo" className="h-8 w-auto" />
            <span className="text-xl font-semibold">Berget AI</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {/* Products */}
          <Link to="/products" className="text-sm text-white/60 hover:text-white transition-colors">
            {t('header.navigation.products')}
          </Link>

          {/* Models */}
          <Link to="/models" className="text-sm text-white/60 hover:text-white transition-colors">
          {t('header.navigation.models')}
          </Link>

          {/* Why Berget */}
          <Link to="/why-berget" className="text-sm text-white/60 hover:text-white transition-colors">
            {t('header.navigation.whyBerget')}
          </Link>

          {/* For Developers */}
          <Link to="/developers" className="text-sm text-white/60 hover:text-white transition-colors">
            {t('header.navigation.developers')}
          </Link>

          {/* Pricing */}
          <Link to="/pricing" className="text-sm text-white/60 hover:text-white transition-colors">
            {t('header.navigation.pricing')}
          </Link>

          {/* Documentation */}
          <Link to="https://api.berget.ai" className="text-sm text-white/60 hover:text-white transition-colors">
            {t('header.navigation.api')}
          </Link>

          <LanguageSwitcher />

          <Button variant="secondary" size="sm" asChild>
            <Link to={consoleUrl}>{t('header.buttons.signIn')}</Link>
          </Button>

          <Button size="sm" asChild>
            <Link to={consoleUrl}>{t('header.buttons.getStarted')}</Link>
          </Button>
        </nav>

        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
          aria-expanded={isMenuOpen}
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
            <nav className="flex flex-col p-6 space-y-6">
              <div className="space-y-6">
                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-4">
                  <Link 
                    to="/products" 
                    className="text-2xl text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('header.navigation.products')}
                  </Link>
                  <Link 
                    to="/models" 
                    className="text-2xl text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('header.navigation.models')}
                  </Link>
                  <Link 
                    to="/why-berget" 
                    className="text-2xl text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('header.navigation.whyBerget')}
                  </Link>
                  <Link 
                    to="/developers" 
                    className="text-2xl text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('header.navigation.developers')}
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="text-2xl text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('header.navigation.pricing')}
                  </Link>
                  <Link 
                    to="https://api.berget.ai" 
                    className="text-2xl text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('header.navigation.api')}
                  </Link>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <LanguageSwitcher />
                <Button variant="secondary" size="lg" className="w-full text-xl" asChild>
                  <Link to={consoleUrl} onClick={() => setIsMenuOpen(false)}>
                    {t('header.buttons.signIn')}
                  </Link>
                </Button>
                <Button size="lg" className="w-full text-xl" asChild>
                  <Link to={consoleUrl} onClick={() => setIsMenuOpen(false)}>
                    {t('header.buttons.getStarted')}
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
