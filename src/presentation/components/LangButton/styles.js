import styled from 'styled-components'

export const LangButtonContainer = styled.div`
  position: relative;

  > button {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1.2rem;

    outline: 0;
    border: none;
    border-radius: 8px;

    background-color: ${({ $isOpen, theme }) =>
      $isOpen ? theme.COLORS['blue-sky-500'] : 'transparent'};

    padding: 1rem;
    color: ${({ theme }) => theme.COLORS['zinc-100']};
    font-size: 2rem;
    font-family: ${({ theme }) => theme.FONTS.Primary};
    text-transform: uppercase;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;

    > span {
      display: flex;
      align-items: center;
      justify-content: left;
      max-width: 15rem;
      text-align: left;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:hover,
    &:focus-visible {
      color: ${({ theme }) => theme.COLORS.white};
      background-color: ${({ theme }) => theme.COLORS['blue-sky-500']};
      outline: 1px solid ${({ theme }) => theme.COLORS['blue-hover']};
    }

    &:focus-visible {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.COLORS['zinc-50']};
      outline: none;
    }

    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 750px) {
    > button {
      > span {
        display: none;
      }
      > img {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
`

export const LangSelector = styled.div`
  display: none;
  opacity: 0;

  &[open] {
    display: flex;
    opacity: 1;
  }

  position: absolute;
  top: 110%;
  right: 0;
  z-index: 2;
  overflow: hidden;

  max-width: 20rem;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.8rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.white};
  border-radius: 8px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);

  animation: apear 250ms ease;

  transition-property: all;
  transition-timing-function: ease;
  transition-duration: 400ms;
  transition-behavior: allow-discrete;

  @keyframes apear {
    0% {
      opacity: 0;
      transform: translateY(-1.5rem);
    }
  }

  > button {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
    background-color: transparent;
    outline: 0;
    border: none;
    border-radius: 2px;
    padding: 0.4rem 0.8rem;
    width: 100%;
    text-align: left;
    font-size: 1.6rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS['blue-sky-700']};
    font-family: ${({ theme }) => theme.FONTS.Primary};
    text-transform: uppercase;

    &:focus-visible,
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 0 1px ${({ theme }) => theme.COLORS['zinc-50']};
      background-color: ${({ theme }) => theme.COLORS['zinc-50']};
    }

    > span {
      display: flex;
      align-items: center;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`
