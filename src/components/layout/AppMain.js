import { useState } from 'react'
import ClassComponentSection from '../ClassComponentSection'
import Carousel from '../carousel/Carousel'
import Counter from '../Counter'
import BasicList from '../BasicList'
import ComplexList from '../ComplexList'
import FavouritesSection from '../favourites/FavouritesSection'
import FavouritesPlaceholderSection from '../favourites/FavouritesPlaceholderSection'

const AppMain = () => {
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
    <main>
      <header>
        <h2>Welcome to IronTravel!</h2>
      </header>
      <Carousel toggleFav={toggleFromList} favs={favs} />
      <div className='flex-row'>
        <Counter />
        {/* Conditional rendering */}
        {favs.length > 0 ? (
          <FavouritesSection favs={favs} />
        ) : (
          <FavouritesPlaceholderSection />
        )}
      </div>
      <div className='flex-row'>
        <section>
          <ComplexList />
        </section>
        <section>
          <BasicList />
        </section>
        <ClassComponentSection sectionTitle='I am a class component' />
        <ClassComponentSection sectionTitle='So am I' />
      </div>
    </main>
  )
}

export default AppMain
