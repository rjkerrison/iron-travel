import React, { useState } from 'react'
import CountryList from '../components/countries/CountryList'
import VisitedSummary from '../components/countries/VisitedSummary'
import { Outlet } from 'react-router-dom'

const Countries = () => {
  const [visitedCount, setVisitedCount] = useState(0)
  const [totalCountryCount, setTotalCountryCount] = useState(0)

  const decreaseVisitedCount = () => {
    setVisitedCount(visitedCount - 1)
  }
  const increaseVisitedCount = () => {
    setVisitedCount(visitedCount + 1)
  }

  return (
    <>
      <VisitedSummary
        visitedCount={visitedCount}
        totalCountryCount={totalCountryCount}
      />
      <CountryList
        increaseVisitedCount={increaseVisitedCount}
        decreaseVisitedCount={decreaseVisitedCount}
        setTotalCountryCount={setTotalCountryCount}
      />
    </>
  )
}

export default Countries
