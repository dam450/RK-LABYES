import styled, { keyframes } from 'styled-components'

const appear = keyframes`
  from {
    transform: translateY(-10vh);
    opacity: 0;
  }
`

export const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 3;
  padding-inline: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #0009;

  transition: 0.5s background-color;
`

export const DefaultModal = styled.div`
  padding: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.white};
  border-radius: 8px;
  box-shadow: #64646f33 0 7px 29px 0;

  animation: ${appear} 1s;

  @media screen and (min-width: 524px) {
    width: 825px;
    padding: 2.4rem 3.2rem;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    cursor: pointer;
    width: 1.6rem;
    height: 1.6rem;

    @media screen and (min-width: 524px) {
      width: 1.9rem;
      height: 1.9rem;
    }
  }
`

export const Title = styled.h3`
  margin-block: 3.2rem 1.6rem;

  font-size: 1.4rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.FONTS.Primary}, sans-serif;
  color: ${({ theme }) => theme.COLORS['blue-sky-700']};

  @media screen and (min-width: 524px) {
    font-size: 2.4rem;
  }
`

export const Description = styled.p`
  margin-bottom: 1.6rem;

  line-height: 140%;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.FONTS.Secondary}, sans-serif;
  color: ${({ theme }) => theme.COLORS['blue-sky-700']};

  @media screen and (min-width: 524px) {
    font-size: 1.6rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    width: fit-content;
    margin-bottom: 0.4rem;

    color: ${({ theme }) => theme.COLORS['blue-sky-700']};
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.FONTS.Primary}, sans-serif;

    span {
      color: ${({ theme }) => theme.COLORS['zinc-200']};
    }
  }

  input {
    padding: 1rem;

    background-color: ${({ theme }) => theme.COLORS['zinc-50']};
    border: 1px solid ${({ theme }) => theme.COLORS['blue-sky-700']};
    border-radius: 5px;
    outline: none;

    &#name:invalid:focus,
    &#email:invalid:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.COLORS.tomate};
    }

    &::placeholder {
      color: ${({ theme }) => theme.COLORS['zinc-200']};
      font-size: 1.6rem;
      font-family: ${({ theme }) => theme.FONTS.Secondary}, sans-serif;
    }
  }

  button[type='submit'] {
    padding: 1.6rem 3.2rem;
    background-color: ${({ theme }) => theme.COLORS.orange};
    color: ${({ theme }) => theme.COLORS['blue-sky-700']};

    transition: all 0.3s;
    &:hover {
      background-color: ${({ theme }) => theme.COLORS['orange']};
      filter: brightness(1.1);
    }

    @media screen and (min-width: 524px) {
      font-size: 2rem;
    }
  }
`

export const InputGroup = styled.div`
  margin: 1.6rem 0 3.2rem 0;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  @media screen and (min-width: 524px) {
    flex-direction: row;
  }
`

export const SuccessModal = styled.div`
  padding: 2.4rem 1.5rem;

  background-color: ${({ theme }) => theme.COLORS.white};
  border-radius: 8px;
  box-shadow: #64646f33 0 7px 29px 0;

  animation: ${appear} 1s;

  img.verifiedGif {
    width: 10rem;
    height: 10rem;
  }

  @media screen and (min-width: 524px) {
    img.verifiedGif {
      width: 14.6rem;
      height: 14.6rem;
    }

    padding: 2.6rem 3.2rem;
  }
`

export const SuccessBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  @media screen and (min-width: 524px) {
    padding-inline: 1.5rem;
  }
`

export const SuccessTitle = styled.h3`
  color: #000;
  font-size: 2rem;
  font-weight: 700;
`

export const SuccessText = styled.p`
  max-width: 69.2rem;
  padding-bottom: 3.1rem;

  color: ${({ theme }) => theme.COLORS['zinc-400']};
  font-size: 2rem;
  text-align: center;
`

export const ErrorText = styled.span`
  margin-top: 0.4rem;

  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.tomate};
`
