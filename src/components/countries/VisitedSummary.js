import React from 'react'
import './VisitedSummary.css'

const VisitedSummary = ({ visitedCount }) => {
  return (
    <p className='VisitedSummary'>
      You have been to {visitedCount} countries out of total
    </p>
  )
}

export default VisitedSummary
