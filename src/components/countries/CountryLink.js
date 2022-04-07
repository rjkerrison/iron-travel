import React from 'react'
import { Link } from 'react-router-dom'
import countries from '../../assets/countries.json'

const CountryLink = ({ cca3 }) => {
  // find country based on unique identifier
  const country = countries.find((country) => country.cca3 === cca3)

  // render link
  return <Link to={`/countries/${cca3}`}>{country.name.common}</Link>
}

export default CountryLink
