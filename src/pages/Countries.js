import React from 'react'
import VisitedSummary from '../components/countries/VisitedSummary'
import { Outlet } from 'react-router-dom'
import './Countries.css'

const Countries = ({ visitedCount, totalCountryCount }) => {
  return (
    <section className='CountriesPage'>
      <VisitedSummary
        visitedCount={visitedCount}
        totalCountryCount={totalCountryCount}
      />
      <Outlet />
    </section>
  )
}

export default Countries
