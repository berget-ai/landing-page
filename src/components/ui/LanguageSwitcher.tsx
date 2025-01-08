import { useTranslation } from 'react-i18next'
import { FlagEU, FlagSE } from '@weston/react-world-flags'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="flex gap-2">
      {i18n.language === 'en' ? (
        <button
          onClick={() => i18n.changeLanguage('sv')}
          className="flex items-center"
        >
          <FlagSE />
        </button>
      ) : (
        <button
          onClick={() => i18n.changeLanguage('en')}
          className="flex items-center"
        >
          <FlagEU />
        </button>
      )}
    </div>
  )
}
