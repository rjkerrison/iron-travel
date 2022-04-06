import React from 'react'
import './VisitedSummary.css'

const VisitedSummary = ({ visitedCount, totalCountryCount }) => {
  return (
    <p className='VisitedSummary'>
      You have been to {visitedCount} countries out of {totalCountryCount}
    </p>
  )
}

export default VisitedSummary
