import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  @keyframes appear {
    from {
      transform: translateY(-10vh);
      opacity: 0;
    }
  }
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3rem 2rem;
  animation: appear 1s;

  @media (min-width: 1024px) {
    padding: 3 4.8rem;
  }

  &::before {
    position: fixed;
    display: flex;
    content: '';

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    backdrop-filter: blur(3px);

    ${({ $opened }) =>
      $opened
        ? css`
            z-index: 4;
            background-color: 'rgb(0 25 50 / 5%)';
            opacity: 0.7;
          `
        : css`
            z-index: -1;
            background-color: 'transparent';
            opacity: 0;
          `}

    transition: all 0.5s ease;
  }

  > .menu-wrapper {
    display: flex;
    align-items: center;
    gap: 3.2rem;
    flex-direction: row-reverse;
  }

  @media (min-width: 1024px) {
    &::before {
      display: none;
      background-color: transparent;
      backdrop-filter: blur(0);
    }

    > .menu-wrapper {
      flex-direction: row;
    }
  }
`
export const Logo = styled(NavLink)`
  img {
    width: 16rem;
    @media (min-width: 1024px) {
      width: 22rem;
    }
  }
`

export const Links = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 13rem 0rem;

  background-color: ${({ theme }) => theme.COLORS['blue-titan']};

  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 4;

  width: 25rem;

  /* overflow: hidden; */

  width: ${({ $opened }) => ($opened ? '25rem' : 0)};

  transition: all 1s ease;

  @media (min-width: 1024px) {
    position: unset;
    transform: unset;

    width: fit-content;
    gap: 3.2rem;

    flex-direction: row;

    padding: 0 0;
    background-color: transparent;
  }
`
export const LinkWrapper = styled.li`
  list-style: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${({ theme }) => theme.COLORS['blue-sky-600']};
    opacity: 0;
    z-index: -1;
    transition: all 0.5s;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover::before {
    right: 0;
    opacity: 0.08;
  }

  > a {
    display: flex;
    width: 100%;
    padding: 1.6rem 3rem;

    position: relative;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 400;
    line-height: 100%;
    text-transform: uppercase;

    color: ${({ theme }) => theme.COLORS['blue-sky-600']};
    transition: color 0.3s ease;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.COLORS['blue-sky-700']};
    }
  }
  span {
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.3s ease;
  }
  &:hover span {
    border-bottom: 2px solid ${({ theme }) => theme.COLORS['blue-sky-700']};
  }

  a.active {
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS['blue-sky-700']};
  }

  &:has(a.active)::before {
    right: 0;
    opacity: 0.08;
  }

  @media (min-width: 1024px) {
    > a {
      padding: 0 0;
      color: ${({ theme }) => theme.COLORS['zinc-100']};
      font-size: 2.2rem;

      &:hover {
        color: ${({ theme }) => theme.COLORS.white};
      }

      &:hover span {
        border-bottom: 2px solid ${({ theme }) => theme.COLORS.white};
      }
    }

    a.active {
      color: ${({ theme }) => theme.COLORS.white};
    }
  }
`
