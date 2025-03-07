import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { CountryFlag } from '@/components/ui/country-flag'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'sv' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="w-10 h-10 rounded-full"
    >
      {i18n.language === 'en' ? (
        <CountryFlag code="se" size="md" />
      ) : (
        <CountryFlag code="eu" size="md" />
      )}
    </Button>
  )
}
