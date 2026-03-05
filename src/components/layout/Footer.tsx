import { Github, Linkedin, Twitter } from 'lucide-react'
import { Button, BergetSymbol } from '@berget-ai/ui'
import { useTranslation } from 'react-i18next'

const footerLinks = {
  product: [
    { key: 'features', href: '/products' },
    { key: 'pricing', href: '/pricing' },
    { key: 'models', href: '/models' },
    { key: 'api', href: 'https://api.berget.ai' },
    { key: 'status', href: 'https://berget.ai/status' },
  ],
  company: [
    { key: 'about', href: '/about' },
    { key: 'blog', href: '/blog' },
    { key: 'contact', href: '/contact' },
    { key: 'open-source', href: '/open-source' },
  ],
  legal: [
    { key: 'privacy', href: '/privacy' },
    { key: 'dpa', href: '/dpa' },
    { key: 'terms', href: '/terms' },
    { key: 'acceptableUse', href: '/acceptable-use' },
    { key: 'sla', href: '/sla' },
    { key: 'security', href: '/security' },
  ],
}

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t border-white/5 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BergetSymbol size={32} variant="light" />
              <span className="text-xl font-semibold">Berget AI</span>
            </div>
            <p className="text-sm text-white/60 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open('https://x.com/BergetAi87840', '_blank')}
                aria-label={t('footer.social.twitter')}
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open('https://www.github.com/berget-ai/', '_blank')}
                aria-label={t('footer.social.github')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open('https://www.linkedin.com/company/bergetai/', '_blank')}
                aria-label={t('footer.social.linkedin')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">{t('footer.product.title')}</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.key === 'models' ? 'Models' : t(`footer.product.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">{t('footer.company.title')}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.key === 'open-source' ? 'Open Source Program' : t(`footer.company.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">{t('footer.legal.title')}</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {t(`footer.legal.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              {t('footer.copyright', { year: currentYear })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}