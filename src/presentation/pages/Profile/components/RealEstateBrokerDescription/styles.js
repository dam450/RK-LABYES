import styled from 'styled-components'

export const Container = styled.div`
  padding: 7.6rem 3.5rem 4.5rem 3.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS['zinc-500']};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2.4rem 2.8rem 2.4rem 3.5rem;
    border-radius: 5.5rem 1.6rem 1.6rem 1.6rem;
    height: 36rem;

    article {
      margin: 0 0 0 0;
      max-width: 64rem;
    }
  }

  .description_card_footer {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;

  > div {
    position: absolute;
    top: -10rem;
    left: 50%;
    transform: translate(-50%, -50%);

    .Images {
      img:nth-child(1),
      img:nth-child(2) {
        width: 16.7rem;
      }

      img:nth-child(1) {
        z-index: 2;
      }

      img:nth-child(2) {
        z-index: 1;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 40rem;

    > div {
      top: 30%;
      left: 40%;
      transform: translate(-50%, -50%);
    }

    .Images {
      img:nth-child(1),
      img:nth-child(2) {
        width: 42.7rem !important;
      }

      img:nth-child(1) {
        left: 5%;
      }
    }
  }
`

export const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 2.4rem;

  h4 {
    font-weight: 700;
  }

  span {
    font-weight: 300;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 1.6rem;
    gap: 1rem;
    justify-content: space-between;
    align-items: baseline;
    padding-right: 1.2rem;

    h4,
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    h4 {
      font-size: 3.6rem;
    }

    span {
      font-size: 1.6rem;
    }
  }
`

export const CopyGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.4rem;

  strong,
  p {
    line-height: 140%;
    font-size: 1.2rem;
    font-family: ${({ theme }) => theme.FONTS.Secondary};
    text-align: justify;
  }

  strong {
    font-weight: 700;
    font-style: italic;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;

    strong,
    p {
      font-size: 1.6rem;
      padding-right: 1.2rem;
      text-align: justify;
    }

    .paragraphs {
      max-height: 18rem;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 3px;
      }

      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background: #d9d9d980;
      }

      &::-webkit-scrollbar-thumb {
        background: #d9d9d9;
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: ${({ theme }) => theme.COLORS['blue-sky-50']};
      }

      &::-webkit-scrollbar-thumb:active {
        background-color: ${({ theme }) => theme.COLORS['blue-sky-50']};
      }
    }

    strong {
      margin-bottom: 2.2rem;
    }

    p + p {
      margin-top: 1.6rem;
    }
  }
`

export const LinksCard = styled.div`
  padding: 1rem 0 1rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS['zinc-500']};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.white};
    word-break: break-all;

    transition: 0.3s opacity;

    &:hover {
      opacity: 0.75;
    }

    span {
      font-size: 1.4rem;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 0.8rem 1.6rem;
    gap: 1.6rem;
    margin-left: 0.8rem;
    height: fit-content;
    align-self: flex-start;

    a {
      word-break: normal;

      span {
        font-size: 1.6rem;
      }
    }
  }
`

export const CommentCard = styled.div`
  padding: 2.2rem 1.4rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border-radius: 1.6rem;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  text-align: center;

  p {
    font-family: 'Nunito', sans-serif;
    text-align: center;
    font-size: 12px;
    font-style: italic;
    font-weight: 300;
    line-height: 120%;
  }

  h3 {
    color: #758df4;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
  }

  @media screen and (min-width: 1440px) {
    padding: 1rem 1.6rem 1rem;
    color: ${({ theme }) => theme.COLORS.white};
    max-width: 28rem;
    width: 100%;
  }
`
