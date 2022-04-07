import React, { useState } from 'react'
import CountryInfoCard from '../components/countries/CountryInfoCard'
import CountryList from '../components/countries/CountryList'
import VisitedSummary from '../components/countries/VisitedSummary'
import countries from '../assets/countries.json'
import { useParams } from 'react-router-dom'

const Country = () => {
  const params = useParams()

  const country = countries.find((country) => country.cca3 === params.cca3)

  return (
    <>
      <CountryInfoCard
        key={country.cca3}
        {...country}
        increaseVisitedCount={() => {}}
        decreaseVisitedCount={() => {}}
      />
    </>
  )
}

export default Country
