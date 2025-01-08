import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

export function LanguageSwitcher() {
  const { t } = useTranslation()

  const changeLanguage = (lng: string) => {
    if (i18n.changeLanguage) {
      i18n.changeLanguage(lng)
    } else {
      console.error("changeLanguage function is not available on i18n")
    }
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('sv')}
        className={`px-3 py-1 rounded ${i18n.language === 'sv' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Svenska
      </button>
    </div>
  )
}
