import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.GRADIENTS.background};
    color: ${({ theme }) => theme.COLORS.white};
    font-family: ${props => props.theme.FONTS.Primary};
    font-size: 1.6rem
  }
`