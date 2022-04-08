import React, { useState } from 'react'
import Carousel from '../components/carousel/Carousel'
import Counter from '../components/Counter'
import FavouritesPlaceholderSection from '../components/favourites/FavouritesPlaceholderSection'
import FavouritesSection from '../components/favourites/FavouritesSection'
import FavoriteCountries from '../components/countries/FavoritedCountry'

const HomePage = ({favorited, setFavorited}) => {
  const [favs, setFavs] = useState([])

  const toggleFromList = (value) => {
    // remember that favs is IMMUTABLE
    const newFavs = [...favs]
    const index = favs.indexOf(value)

    if (index !== -1) {
      newFavs.splice(index, 1)
    } else {
      newFavs.push(value)
    }
    setFavs(newFavs)
  }

  return (
    <>
      <Carousel toggleFav={toggleFromList} favs={favs} />
      <div className='flex-row'>
        <Counter />
        {/* Conditional rendering */}
        {favs.length > 0 ? (
          <FavouritesSection favs={favs} />,
          <FavoriteCountries favorited={favorited} setFavorited={setFavorited}/>
        ) : (
          <FavouritesPlaceholderSection />
        )}
      </div>
    </>
  )
}

export default HomePage
