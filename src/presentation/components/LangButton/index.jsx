import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { LangButtonContainer, LangSelector } from './styles'

import BrasilFlag from '../../assets/brazil-flag.svg'
import ArgentinaFlag from '../../assets/argentina-flag.svg'

/**
 * Renders the language button component with language selector options for i18n.
 * @return {JSX.Element} The rendered language button component.
 */
export function LangButton() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const { i18n } = useTranslation()

  const availableLanguages = {
    es: {
      nativeName: 'Español',
      flag: ArgentinaFlag,
    },
    pt: {
      nativeName: 'Português',
      flag: BrasilFlag,
    },
  }

  const [selectedLang, setSelectedLang] = useState(
    availableLanguages[i18n.language],
  )

  const selectableLanguagesKeys = Object.keys(availableLanguages).filter(
    key => key !== i18n.language,
  )

  function handleChangeLang(lang) {
    i18n.changeLanguage(lang)
    setSelectedLang(availableLanguages[lang])
    setMenuOpen(false)
  }

  function toggleSelector() {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <LangButtonContainer $isOpen={isMenuOpen}>
      <button onClick={toggleSelector} type="button">
        <span>{selectedLang.nativeName}</span>
        <img src={selectedLang.flag} alt="language flag" />
      </button>

      <LangSelector $visible={isMenuOpen}>
        {selectableLanguagesKeys.map(lang => (
          <button
            key={lang}
            type="button"
            onClick={() => handleChangeLang(lang)}
          >
            <span>{availableLanguages[lang].nativeName}</span>
            <img src={availableLanguages[lang].flag} alt="language flag" />
          </button>
        ))}
      </LangSelector>
    </LangButtonContainer>
  )
}
