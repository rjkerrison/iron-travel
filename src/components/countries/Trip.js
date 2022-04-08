import React from 'react'

const Trip = ({ trip }) => {
  const newStartDate = new Date(trip.startDate)
  const newEndDate = new Date(trip.endDate)
  return (
    <div>
      <h1>{trip.name}</h1>
      <h3>Start Date: {newStartDate.toLocaleDateString()}</h3>
      <h3>End Date: {newEndDate.toLocaleDateString()}</h3>

      <h3>{trip.country.name.common}</h3>
    </div>
  )
}

export default Trip
