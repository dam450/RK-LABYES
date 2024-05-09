import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ptTranslations from './locales/pt.json'
import esTranslations from './locales/es.json'

const resources = {
  pt: {
    translation: { ...ptTranslations },
  },
  es: {
    translation: { ...esTranslations },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'es',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
