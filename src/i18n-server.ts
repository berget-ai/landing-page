import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/translation.json'
import sv from './locales/sv/translation.json'

export function createI18nInstance(lng: string) {
  const instance = i18n.createInstance()
  instance.use(initReactI18next).init({
    lng,
    fallbackLng: 'en',
    supportedLngs: ['en', 'sv'],
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      sv: { translation: sv },
    },
  })
  return instance
}
