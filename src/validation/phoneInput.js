function isValidPhoneNumber(phone) {
  try {
    if (phone.length >= 11 && phone.length <= 14) return true

    // return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
    // validation used with the lib, removed by now
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
