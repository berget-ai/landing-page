import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Home, Search, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Helmet } from 'react-helmet-async'

export default function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('notFound.title')} - Berget AI</title>
        <meta name="description" content={t('notFound.description')} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-9xl font-bold text-white/20 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('notFound.heading')}
          </h2>
          <p className="text-xl text-white/60 mb-8">
            {t('notFound.message')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                {t('notFound.buttons.home')}
              </Link>
            </Button>
            
            <Button variant="secondary" size="lg" asChild>
              <Link to="/products">
                <Search className="mr-2 h-5 w-5" />
                {t('notFound.buttons.products')}
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                {t('notFound.buttons.contact')}
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-white/5 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">
              {t('notFound.help.title')}
            </h3>
            <p className="text-white/60 text-sm">
              {t('notFound.help.description')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
