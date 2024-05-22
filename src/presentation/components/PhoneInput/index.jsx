import { StyledPhoneInput } from './styles'
import { getActiveFormattingMask } from 'react-international-phone'

import { countries } from '../../lib/reactInternationalPhone'
import { useState } from 'react'

/**
 * Creates a styled PhoneInput component.
 * Any other props of input can be passed to the TextInput component.
 *
 * @param {string} value - Value of the input field.
 * @param {() => void} setValue - Function to set the input field value.
 * @param {object} inputProps - Object that contains some of the native input props.
 * @param {boolean} isPhoneValid - Determines if the phone is valid.
 * @return {JSX.Element} The styled PhoneInput component.
 */
export function PhoneInput({
  value,
  setValue,
  isPhoneValid,
  inputProps,
  ...rest
}) {
  const [mask, setMask] = useState('')
  return (
    <StyledPhoneInput
      value={value}
      onChange={(phone, { country }) => {
        const mask = getActiveFormattingMask({
          phone,
          country,
          prefix: '+',
        })
        setMask(mask.replace(/\./g, '0'))
        setValue(phone)
      }}
      isValid={isPhoneValid}
      defaultCountry="br"
      countries={countries}
      inputClassName="phone-number-input"
      inputProps={inputProps}
      placeholder={mask}
      title="phone"
      {...rest}
    />
  )
}
