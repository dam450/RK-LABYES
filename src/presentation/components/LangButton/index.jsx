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
      abbr: 'es',
      flag: ArgentinaFlag,
    },
    pt: {
      nativeName: 'Português',
      abbr: 'br',
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
    <LangButtonContainer $isOpen={isMenuOpen} id="lang-button">
      <button onClick={toggleSelector} type="button">
        {/* <span>{selectedLang.abbr}</span> */}
        <img src={selectedLang.flag} alt="language flag" />
      </button>

      <LangSelector $visible={isMenuOpen} open={isMenuOpen}>
        {selectableLanguagesKeys.map(lang => (
          <button
            key={lang}
            type="button"
            onClick={() => handleChangeLang(lang)}
          >
            <span>{availableLanguages[lang].abbr}</span>
            <img src={availableLanguages[lang].flag} alt="language flag" />
          </button>
        ))}
      </LangSelector>
    </LangButtonContainer>
  )
}
