import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import Flag from '@weston/react-world-flags'

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
      className="w-10 h-10 rounded-full overflow-hidden"
    >
      {i18n.language === 'en' ? (
        <Flag code="se" height="24" />
      ) : (
        <Flag code="eu" height="24" />
      )}
    </Button>
  )
}