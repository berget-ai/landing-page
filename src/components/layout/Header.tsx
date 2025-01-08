import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'
import { useTranslation } from 'react-i18next'

export function Header() {
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

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
