import { defaultCountries, parseCountry } from 'react-international-phone'

const SELECTED_COUNTRIES = ['br', 'ar', 'py', 'uy', 'cl']

export const countries = defaultCountries
  .filter(country => {
    const { iso2 } = parseCountry(country)
    return SELECTED_COUNTRIES.includes(iso2)
  })
  .map(country => {
    const countrySlug = country[1]

    if (countrySlug === 'br') {
      const newCountry = [...country]
      newCountry[3] = '(..) .....-....' // new Brazil mask

      return newCountry
    }

    if (SELECTED_COUNTRIES.includes(countrySlug)) {
      const newCountry = [...country]
      newCountry[3] = '. ... ... ....' // new Argentina, Chile, Paraguay and Uruguay mask

      return newCountry
    }

    return country
  })
