import styled from 'styled-components'

export const Container = styled.aside`
  max-width: 34rem;

  width: 100%;

  padding: 1rem;

  word-wrap: break-word;

  @media (max-width: 704px) {
    max-width: 28rem;
  }

  > ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;

    color: ${({ theme }) => theme.COLORS.white};
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    li {
      display: flex;
      align-items: center;
      column-gap: 1.6rem;

      p {
        word-break: break-word;

        a {
          text-decoration: none;
          color: ${({ theme }) => theme.COLORS.white};
        }
      }

      img {
        width: 3.2rem;
        height: 3.2rem;

        object-fit: cover;
        aspect-ratio: 16/9;

        @media (max-width: 768px) {
          width: 2.2rem;
          height: 2.2rem;
        }
      }
    }

    :nth-child(4) {
      font-size: 2.4rem;
      column-gap: 0.8rem;

      img {
        width: 4rem;
        height: 4rem;
      }
    }

    @media (max-width: 768px) {
      font-size: 1.6rem;

      :nth-child(4) {
        font-size: 2rem;
        column-gap: 1.1rem;

        img {
          width: 2.5rem;
          height: 2.5rem;
        }
      }
    }
  }
`
