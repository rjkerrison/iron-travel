import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const BASE_URL = 'http://localhost:5005/api'

function FestivalsList({ countries }) {
  const { cca3 } = useParams()
  const [festivals, setFestivals] = useState([])

  useEffect(() => {
    const getFestivalsFromApi = async () => {
      const festivalsListFromApi = await axios.get(`${BASE_URL}/festivals`)

      const festivalsList = festivalsListFromApi.data.filter((festival) => {
        return festival.country.cca3 === cca3
      })
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
              <li key={festival._id}>
                <h3>{festival.name}</h3>
                <h4>
                  {festival.city} ({festival.country.name.common})
                </h4>
                <p>{festival.capacity} people will be there!</p>
                <p>
                  From {new Date(festival.startDate).toDateString()} to{' '}
                  {new Date(festival.endDate).toDateString()}
                </p>
                <p>
                  From {festival.entryPrice}
                  {
                    countries.find((country) => {
                      return country.cca3 === cca3
                    }).currencies[0]?.symbol
                  }{' '}
                  only
                </p>
                <p>
                  Buy a ticket before{' '}
                  {new Date(festival.bookingDeadLine).toDateString()}
                </p>
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
