import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
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
