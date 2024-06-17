import { defaultCountries, parseCountry } from 'react-international-phone'

export const countries = defaultCountries
  .filter(country => {
    const { iso2 } = parseCountry(country)
    return ['br', 'ar', 'py', 'uy', 'cl'].includes(iso2)
  })
  .map(country => {
    const countrySlug = country[1]

    if (countrySlug === 'br') {
      const newCountry = [...country]
      newCountry[3] = '(..) .....-....' // new Brazil mask

      return newCountry
    }

    if (countrySlug === 'ar') {
      const newCountry = [...country]
      newCountry[3] = '. ... ... ....' // new Arg mask

      return newCountry
    }

    return country
  })
