import { useTranslation } from 'react-i18next'
import Flag from 'react-world-flags'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="flex gap-2">
      {i18n.language === 'en' ? (
        <button onClick={() => i18n.changeLanguage('sv')}>
          <Flag code="SE" style={{ width: '24px', height: '24px' }} />
        </button>
      ) : (
        <button onClick={() => i18n.changeLanguage('en')}>
          <Flag code="EU" style={{ width: '24px', height: '24px' }} />
        </button>
      )}
    </div>
  )
}
