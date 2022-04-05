import React from 'react'

const FavouritesSection = ({ favs }) => {
  return (
    <section>
      <h2>Your favourites!</h2>
      <ul>
        {favs.map((fav) => (
          <li key={fav}>{fav}</li>
        ))}
      </ul>
    </section>
  )
}

export default FavouritesSection
