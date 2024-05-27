import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import ptTranslations from './locales/pt.json'
import esTranslations from './locales/es.json'

const resources = {
  pt: {
    common: { ...ptTranslations },
  },
  es: {
    common: { ...esTranslations },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    ns: ['common'],
    defaultNS: 'common',
    supportedLngs: ['es', 'pt'],
    resources,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
