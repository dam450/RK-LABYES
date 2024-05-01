import { defaultCountries } from 'react-international-phone'

export const countries = defaultCountries.map(country => {
  const countrySlug = country[1]

  if (countrySlug === 'br') {
    const newCountry = [...country]
    newCountry[3] = '(..) .....-....' // new Brazil mask

    return newCountry
  }

  return country
})
