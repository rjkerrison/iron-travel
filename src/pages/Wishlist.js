import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

// import { getFavoritesFromApi } from '../../../api/countries'
import { getFavoritesFromApi } from '../api/countries'
const Wishlist = () => {
  const [favorites, setFavorites] = useState([])
  const { userID } = useParams()
  console.log('userID:', userID)
  useEffect(() => {
    getFavoritesFromApi(userID).then(setFavorites)
  }, [userID])
  return (
    <>
      <h2>wishlist page</h2>
      {/* {favorites.length && <p>{favorites[0].country.name.common}</p>} */}
      {favorites.length &&
        favorites.map((favorite) => {
          return (
            <p key={favorite.country.cca3}>{favorite.country.name.common}</p>
          )
        })}
    </>
  )
}

export default Wishlist
