import { useTranslation } from 'react-i18next'
import { FlagEU, FlagSE } from '@weston/react-world-flags'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="flex gap-2 aspect-square">
      {i18n.language === 'en' ? (
        <button onClick={() => i18n.changeLanguage('sv')} className="gap-2  ">
          <FlagSE className="w-6" />
        </button>
      ) : (
        <button onClick={() => i18n.changeLanguage('en')} className="gap-2 ">
          <FlagEU className="w-6" />
        </button>
      )}
    </div>
  )
}
