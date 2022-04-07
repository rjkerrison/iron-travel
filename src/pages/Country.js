import React from 'react'
import CountryInfoCard from '../components/countries/CountryInfoCard'
import countries from '../assets/countries.json'
import { useParams } from 'react-router-dom'

const Country = ({ increaseVisitedCount, decreaseVisitedCount }) => {
  const params = useParams()

  const country = countries.find((country) => country.cca3 === params.cca3)

  return (
    <div className='Country'>
      <CountryInfoCard
        key={country.cca3}
        {...country}
        increaseVisitedCount={increaseVisitedCount}
        decreaseVisitedCount={decreaseVisitedCount}
      />
    </div>
  )
}

export default Country
