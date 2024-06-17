import { PhoneNumberUtil } from 'google-libphonenumber'

const phoneUtil = PhoneNumberUtil.getInstance()

function isValidPhoneNumber(phone) {
  try {
    const rawPhoneNumber = phoneUtil.parseAndKeepRawInput(phone)
    const countryCode = phoneUtil.getRegionCodeForCountryCode(
      rawPhoneNumber.getCountryCode(),
    )

    if (countryCode === 'AR') {
      const hasPrefixNine = phone[3] === '9'

      if (hasPrefixNine && phone.length >= 9) {
        return true
      }
    }

    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone, 'AR'))
  } catch (error) {
    return false
  }
}

/**
 * The returned functions
 *  @typedef {Object} PhoneInputValidation
 *  @property {(phone: string) => boolean} isValidPhoneNumber - function to do phone validation
 *  @property {boolean} isPhoneValid - boolean to check if the phone is valid.
 */

/**
 * Returns phone validation utilities functions.
 * @param {string} phone The phone to be validated
 * @return {PhoneInputValidation} returns phone validation utilities functions.
 */
export function usePhoneInputValidation(phone) {
  return {
    isValidPhoneNumber,
    isPhoneValid: isValidPhoneNumber(phone),
  }
}
