import styled from 'styled-components'

import { Button } from '../../../../components/Button'

export const FormContainer = styled.form`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.white};
  color: ${({ theme }) => theme.COLORS['blue-sky-700']};
  overflow: hidden;

  min-width: 27rem;

  .fieldsContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 3.2rem 2.4rem 1.6rem;
  }

  @supports (container: fields) {
    .fieldsContainer {
      container: fields / inline-size;
    }
  }

  fieldset + fieldset {
    margin-top: 1rem;
  }

  fieldset {
    border: none;

    legend {
      width: 100%;

      span {
        display: flex;
        flex-direction: column;
        font-size: 2.4rem;

        &::after {
          content: '';
          border-bottom: 1px solid
            ${({ theme }) => theme.COLORS['blue-sky-700']};
          height: 1.6rem;
          margin-bottom: 1.6rem;
        }
      }
    }
  }

  .inRow {
    display: flex;
    flex-direction: column;
    line-gap-override: 1.6rem;
  }

  @media screen and (min-width: 80rem) {
    .inRow {
      flex-direction: row;
      gap: 1.6rem;
    }
  }

  @container fields (min-width: 60rem) {
    .inRow {
      flex-direction: row;
      gap: 1.6rem;
    }

    .columns {
      width: 50%;
    }
  }

  .inputWrapper {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    flex: 1;
    margin-bottom: 1.6rem;
  }

  label {
    color: ${({ theme }) => theme.COLORS['blue-sky-700']};
    font-family: ${({ theme }) => theme.FONTS.Primary};
    font-size: 1.4rem;

    @media (min-width: 1440px) {
      font-size: 1.8rem;
    }
  }

  label > span {
    color: ${({ theme }) => theme.COLORS['zinc-200']};
  }

  > footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS['zinc-100']};
    padding: 1.6rem;
    gap: 1.6rem;

    > p {
      font-family: ${({ theme }) => theme.FONTS.Secondary};
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS['blue-sky-700']};
      letter-spacing: 0;

      > a {
        font-family: ${({ theme }) => theme.FONTS.Secondary};
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS['blue-sky-700']};
      }
    }
  }
`

export const ShortButton = styled(Button)`
  max-width: 22rem;
  max-height: 3.2rem;
`
