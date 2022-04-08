import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

const Favorited = ({favorited, setFavorited}) => {
  useEffect(()=> {
    const getWishlist = async () => {
      const {country} = await axios.get('http://localhost:27017/wishlists')
      setFavorited(country)
    }
    getWishlist()
  }, [favorited])

  return (
    <div>
        <h3>Here's the list of your favorites : </h3>
        <p> {favorited.country.name.common} </p>
    </div>
  )
}

export default Favorited