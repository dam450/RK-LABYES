import { MenuContainerBase, Container } from './styles'

/**
 * Render burger component.
 * @param {boolean} $opened - Check the status of the burger.
 * @param {void} onChange - Handles burger state.
 * @return {JSX.Element} The rendered animated burger component.
 */

export function Hamburger({ opened, ...rest }) {
  return (
    <MenuContainerBase>
      <Container $opened={opened}>
        <input id="checkbox" type="checkbox" checked={opened} {...rest} />
        <label htmlFor="checkbox">
          <span />
          <span />
          <span />
        </label>
      </Container>
    </MenuContainerBase>
  )
}
