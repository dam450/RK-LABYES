import { styled } from 'styled-components'

import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'

export const StyledPhoneInput = styled(PhoneInput)`
  border: 1px solid
    ${({ theme, isValid }) =>
      isValid ? theme.COLORS['blue-sky-600'] : theme.COLORS.tomate};
  color: ${({ theme }) => theme.COLORS['blue-sky-700']};

  border-radius: 5px;

  .phone-number-input {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS['zinc-50']};
    line-height: 100%;
    font-size: 1.4rem;
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
