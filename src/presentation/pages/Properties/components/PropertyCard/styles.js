import styled from 'styled-components'

import { Button } from '../../../../components/Button'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  padding: 1.6rem;
  gap: 1rem;
  border-radius: 0.8rem;
  height: fit-content;
  width: 32rem;
  background-color: ${({ theme }) => theme.COLORS['blue-titan']};
  @media (min-width: 1024px) {
    display: flex;
    height: fit-content;
    width: 75rem;
    gap: 3.2rem;
    padding: 3.2rem;
    border-radius: 1.6rem;
  }
`
export const ImageSection = styled.section`
  border-radius: 0.8rem;
  height: 100%;
  .splide {
    height: 100%;
    .splide__track {
      padding-bottom: 0;
      height: 100%;
    }
  }

  img {
    object-fit: cover;
    aspect-ratio: 16/9;
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
  }
  @media (min-width: 1024px) {
    width: 100%;
    height: unset;
  }
`

export const DescriptionSection = styled.section`
  display: grid;
  height: fit-content;
  gap: 1rem;

  @media (min-width: 1024px) {
    display: grid;
    gap: 2rem;
    justify-items: space-between;
    width: 100%;
  }
`

export const Header = styled.div`
  display: grid;
  gap: 0.5rem;

  font-style: normal;
  font-weight: 700;

  > h2,
  > h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS['blue-sky-700']};
    font-size: 2.4rem;
    line-height: 100%;
  }

  > h3 {
    color: ${({ theme }) => theme.COLORS['zinc-400']};
    font-size: 1.6rem;
    line-height: 100%;
  }

  @media (min-width: 1024px) {
    display: grid;
    gap: 1.6rem;

    font-style: normal;
    > h2 {
      font-size: 3.2rem;
    }

    > h3 {
      font-size: 2.2rem;
    }
  }
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex: auto;
  border-top: 1px solid ${({ theme }) => theme.COLORS['zinc-150']};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS['zinc-150']};

  > span {
    font-size: 1.4rem;
    height: fit-content;
    min-width: fit-content;

    > img {
      height: 1.6rem;
    }
  }
  @media (min-width: 1024px) {
    > span {
      font-size: 2rem;

      > img {
        height: 1.8rem;
      }
    }
  }
`

export const Description = styled.p`
  font-family: ${({ theme }) => theme.FONTS.Secundary};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  max-height: 14rem;
  padding-right: 1rem;
  color: ${({ theme }) => theme.COLORS['blue-sky-700']};

  overflow-y: auto;
  scrollbar-width: auto;

  scrollbar-color: ${({ theme }) => theme.COLORS['zinc-400']} transparent;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS['zinc-400']};
    border-radius: 10px;
    border: 3px none transparent;
  }
  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }
`

export const Price = styled.p`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;

  color: ${({ theme }) => theme.COLORS['zinc-400']};

  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`

export const PropertiesButton = styled(Button)`
  padding: 1.5rem;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.COLORS['orange']};
  color: ${({ theme }) => theme.COLORS['blue-sky-700']};
  transition: all 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.COLORS['orange']};
    filter: brightness(1.1);
  }
  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`
