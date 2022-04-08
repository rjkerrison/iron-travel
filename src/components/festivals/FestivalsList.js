import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const BASE_URL = 'http://localhost:5005/api'

function FestivalsList({ countries }) {
  const { cca3 } = useParams()
  const [festivals, setFestivals] = useState([])

  useEffect(() => {
    const getFestivalsFromApi = async () => {
      const festivalsList = await axios.get(
        `${BASE_URL}/countries/${cca3}/festivals`
      )
      setFestivals(festivalsList)
    }
    getFestivalsFromApi()
  }, [cca3])

  return (
    <div>
      <h2>Festivals list</h2>
      {festivals.length > 0 ? (
        <ul>
          {festivals.map((festival) => {
            return (
              <li>
                <h3>
                  {festival.name} - {festival.city} - {festival.capacity} people
                  !
                </h3>
                <p>
                  From {festival.startDate.toLocaleDateString()} to
                  {festival.endDate.toLocaleDateString()}
                </p>
                <p>
                  From {festival.namentryPricee}
                  {
                    countries.find((country) => {
                      return country.cca3 === cca3
                    }).currencies[0]?.code
                  }
                  only
                </p>
                <p>Buy a ticket before {festival.bookingDeadline}</p>
              </li>
            )
          })}
        </ul>
      ) : (
        'Loading'
      )}
    </div>
  )
}

export default FestivalsList
