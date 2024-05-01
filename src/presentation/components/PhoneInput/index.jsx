import { StyledPhoneInput } from './styles'

import { countries } from '../../lib/reactInternationalPhone'

/**
 * Creates a styled PhoneInput component.
 * Any other props of input can be passed to the TextInput component.
 *
 * @param {string} value - Value of the input field.
 * @param {() => void} setValue - Function to set the input field value.
 * @param {object} inputProps - Object that contains some of the native input props.
 * @return {JSX.Element} The styled PhoneInput component.
 */
export function PhoneInput({
  value,
  setValue,
  isPhoneValid,
  inputProps,
  ...rest
}) {
  return (
    <StyledPhoneInput
      value={value}
      onChange={setValue}
      $isValid={isPhoneValid}
      defaultCountry="br"
      countries={countries}
      inputClassName="phone-number-input"
      inputProps={inputProps}
      {...rest}
    />
  )
}
