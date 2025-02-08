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
          {/* Products */}
          <Link to="/products" className="text-sm text-white/60 hover:text-white transition-colors">
            Products
          </Link>

          {/* Why Berget */}
          <Link to="/why-berget" className="text-sm text-white/60 hover:text-white transition-colors">
            Why Berget
          </Link>

          {/* For Developers */}
          <Link to="/developers" className="text-sm text-white/60 hover:text-white transition-colors">
            For Developers
          </Link>

          {/* Pricing */}
          <Link to="/pricing" className="text-sm text-white/60 hover:text-white transition-colors">
            Pricing
          </Link>

          {/* Documentation */}
          <Link to="/docs" className="text-sm text-white/60 hover:text-white transition-colors">
            Documentation
          </Link>

          {/* Blog */}
          <Link to="/blog" className="text-sm text-white/60 hover:text-white transition-colors">
            Blog
          </Link>

          <LanguageSwitcher />

          <Button variant="secondary" size="sm" asChild>
            <Link to="/login">Log in</Link>
          </Button>

          <Button size="sm" asChild>
            <Link to="/signup">Sign up</Link>
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
                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-4">
                  <Link 
                    to="/products" 
                    className="text-2xl text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Products
                  </Link>
                  <Link 
                    to="/why-berget" 
                    className="text-2xl text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Why Berget
                  </Link>
                  <Link 
                    to="/developers" 
                    className="text-2xl text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    For Developers
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="text-2xl text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link 
                    to="/docs" 
                    className="text-2xl text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Documentation
                  </Link>
                  <Link 
                    to="/blog" 
                    className="text-2xl text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <LanguageSwitcher />
                <Button variant="secondary" size="lg" className="w-full text-xl" asChild>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    Log in
                  </Link>
                </Button>
                <Button size="lg" className="w-full text-xl" asChild>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                    Sign up
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