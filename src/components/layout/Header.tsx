import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
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
          <Link to="/" className="text-xl font-semibold hover:text-white/90 transition-colors">
            Berget AI
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <a
              href="/blog"
              className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center"
            >
              {t('header.navigation.blog')}
            </a>
            <div className="absolute left-0 top-full mt-2 w-64 bg-background/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4 space-y-2">
                <a
                  href="/blog"
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  All Posts
                </a>
                <hr className="border-white/10 my-2" />
                <a
                  href="/blog#ai-revolution"
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  Sveriges AI-revolution
                </a>
                <a
                  href="/blog#open-source"
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  Open Source AI
                </a>
                <a
                  href="/blog#developers"
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  Svenska utvecklare
                </a>
                <a
                  href="/blog#fine-tuning"
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  Fine-tuning
                </a>
              </div>
            </div>
          </div>
          <a
            href="/pricing"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            {t('header.navigation.pricing')}
          </a>
          <a
            href="/developers"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            {t('header.navigation.developers')}
          </a>
          <a
            href="/about"
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
            <nav className="flex flex-col p-6 space-y-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider">Blog</h3>
                  <div className="flex flex-col space-y-4">
                    <a
                      href="/blog"
                      className="text-2xl text-white hover:text-white/80 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      All Posts
                    </a>
                    <a
                      href="/blog#ai-revolution"
                      className="text-2xl text-white hover:text-white/80 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sveriges AI-revolution
                    </a>
                    <a
                      href="/blog#open-source"
                      className="text-2xl text-white hover:text-white/80 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Open Source AI
                    </a>
                    <a
                      href="/blog#developers"
                      className="text-2xl text-white hover:text-white/80 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Svenska utvecklare
                    </a>
                    <a
                      href="/blog#fine-tuning"
                      className="text-2xl text-white hover:text-white/80 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Fine-tuning
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider">Product</h3>
                  <div className="flex flex-col space-y-4">
                    <a
                      href="/pricing"
                      className="text-2xl text-white hover:text-white/80 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('footer.product.pricing')}
                    </a>
                    <a
                      href="/security"
                      className="text-2xl text-white hover:text-white/80 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('footer.product.security')}
                    </a>
                    <a
                      href="/docs"
                      className="text-2xl text-white hover:text-white/80 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('footer.product.documentation')}
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider">Company</h3>
                  <div className="flex flex-col space-y-4">
                    <a
                      href="/about"
                      className="text-2xl text-white hover:text-white/80 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('footer.company.about')}
                    </a>
                    <a
                      href="/blog"
                      className="text-2xl text-white hover:text-white/80 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('footer.company.blog')}
                    </a>
                    <a
                      href="/careers"
                      className="text-2xl text-white hover:text-white/80 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('footer.company.careers')}
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider">Legal</h3>
                  <div className="flex flex-col space-y-4">
                    <a
                      href="/privacy"
                      className="text-2xl text-white hover:text-white/80 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('footer.legal.privacy')}
                    </a>
                    <a
                      href="/terms"
                      className="text-2xl text-white hover:text-white/80 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('footer.legal.terms')}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <LanguageSwitcher />
                <Button variant="secondary" size="lg" className="w-full text-xl" onClick={() => setIsMenuOpen(false)}>
                  {t('header.buttons.signIn')}
                </Button>
                <Button size="lg" className="w-full text-xl" onClick={() => setIsMenuOpen(false)}>
                  {t('header.buttons.getStarted')}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
