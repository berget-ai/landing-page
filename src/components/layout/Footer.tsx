import { Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'

const footerLinks = {
  product: [
    { key: 'features', href: '#features' },
    { key: 'pricing', href: '#pricing' },
    { key: 'documentation', href: '#docs' },
    { key: 'security', href: '/security' },
  ],
  company: [
    { key: 'about', href: '/about' },
    { key: 'blog', href: '#blog' },
    { key: 'careers', href: '#careers' },
    { key: 'contact', href: '#contact' },
  ],
  legal: [
    { key: 'privacy', href: '/privacy' },
    { key: 'terms', href: '/terms' },
    { key: 'acceptableUse', href: '/acceptable-use' },
    { key: 'sla', href: '/sla' },
  ],
}

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t border-white/5 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="text-xl font-semibold mb-4">Berget AI</div>
            <p className="text-sm text-white/60 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
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
                    {t(`footer.product.${link.key}`)}
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
                    {t(`footer.company.${link.key}`)}
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
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/60 hover:text-white"
              >
                {t('footer.status')}
              </Button>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <Button
                variant="ghost"
                size="sm"
                className="text-white/60 hover:text-white"
              >
                {t('footer.support')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
