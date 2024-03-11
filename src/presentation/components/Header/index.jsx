import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Hamburger } from './Hamburger'
import { LangButton } from '../LangButton'

import { Container, Logo, Links, LinkWrapper } from './styles'
import logoRKI from '../../assets/logoRKI.svg'

const routes = [
  { route: '/', key: 'header.home' },
  { route: '/profile', key: 'header.profile' },
  { route: '/properties', key: 'header.properties' },
  { route: '/contact', key: 'header.contact' },
]

/**
 * Render a header component.
 *
 * @param {Array<Object>?} paths - Routes array that this routes have route attribute and name.
 * @return {JSX.Element} The rendered header component.
 */
export function Header({ paths = routes }) {
  const [openMenuHambuger, setOpenMenuHambuger] = useState(false)
  const { t } = useTranslation()
  function handleOpenMenuHambuger() {
    return setOpenMenuHambuger(!openMenuHambuger)
  }

  return (
    <Container $opened={openMenuHambuger}>
      <div className="logo-lang-wrapper">
        <Logo to={paths[0].route}>
          <img src={logoRKI} alt="Logo da RK Imóveis" />
        </Logo>

        <LangButton />
      </div>

      <Hamburger
        $opened={openMenuHambuger}
        checked={openMenuHambuger}
        onChange={handleOpenMenuHambuger}
      />

      <Links $opened={openMenuHambuger}>
        {paths.slice(1).map(path => (
          <LinkWrapper key={path.key} onClick={handleOpenMenuHambuger}>
            <NavLink to={path.route}>
              <span>{t(path.key)}</span>
            </NavLink>
          </LinkWrapper>
        ))}
      </Links>
    </Container>
  )
}
