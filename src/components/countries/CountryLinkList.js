import React from 'react'
import countries from '../../assets/countries.json'
import CountryLink from './CountryLink'

const CountryLinkList = ({ cca3List }) => {
  const list = cca3List.map((cca3) => {
    // find country based on unique identifier
    const country = countries.find((country) => country.cca3 === cca3)
    return (
      <li key={cca3}>
        <CountryLink {...country} />
      </li>
    )
  })

  return <ul>{list}</ul>
}

export default CountryLinkList
