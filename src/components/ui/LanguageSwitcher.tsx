import { useTranslation } from 'react-i18next'
import { FlagEU } from '@weston/react-world-flags'
import type { FC } from 'react'

interface FlagProps {
  className?: string
}

const FlagSE: FC<FlagProps> = ({ className }) => (
  <div className={className}>
    {/* SVG or other content for the flag */}
  </div>
)

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="flex gap-2 aspect-square">
      {i18n.language === 'en' ? (
        <button onClick={() => i18n.changeLanguage('sv')} className="gap-2  ">
          <FlagSE />
        </button>
      ) : (
        <button onClick={() => i18n.changeLanguage('en')} className="gap-2 ">
          <FlagEU />
        </button>
      )}
    </div>
  )
}
