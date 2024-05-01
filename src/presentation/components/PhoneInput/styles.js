import { styled } from 'styled-components'

import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'

export const StyledPhoneInput = styled(PhoneInput)`
  border: 1px solid
    ${({ theme, $isValid }) =>
      $isValid ? theme.COLORS['blue-sky-600'] : theme.COLORS.tomate};
  color: ${({ theme }) => theme.COLORS['blue-sky-700']};

  border-radius: 5px;

  font-family: Roboto;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  .phone-number-input {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS['zinc-50']};
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS['zinc-200']};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.COLORS['blue-sky-500']};
  }

  &:disabled {
    filter: contrast(0.75);
    cursor: not-allowed;
  }
`
