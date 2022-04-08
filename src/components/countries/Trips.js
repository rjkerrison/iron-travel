import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Trip from './Trip'

const Trips = () => {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    const getTrips = () => {
      return axios
        .get('http://localhost:5005/api/trips')
        .then((res) => setTrips(res.data))
    }
    getTrips()
  }, [trips])

  return (
    <div>
      {trips.map((trip) => (
        <div key={trip.id}>
          <Trip trip={trip} />
        </div>
      ))}
    </div>
  )
}

export default Trips
