import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// SSR-safe i18n: no browser APIs, no Vite public imports
// Translations are inlined to avoid filesystem access issues during SSG
const resources = {
  en: {
    translation: {} as Record<string, string>,
  },
  sv: {
    translation: {} as Record<string, string>,
  },
}

// Only initialize if not already initialized (vike may call layout multiple times)
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'sv',
      supportedLngs: ['en', 'sv'],
      lng: 'sv',
      debug: false,
      interpolation: {
        escapeValue: false,
      },
    })
}

export default i18n
