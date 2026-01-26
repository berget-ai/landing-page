import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from '../public/locales/en/translation.json'
import svTranslations from '../public/locales/sv/translation.json'

const resources = {
  en: { translation: enTranslations },
  sv: { translation: svTranslations },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'sv'],
    lng: 'sv',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n