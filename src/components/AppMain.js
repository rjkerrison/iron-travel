import ClassComponentSection from './ClassComponentSection'
import Carousel from './Carousel'
import { useState } from 'react'

const AppMain = () => {
  const [favs, setFavs] = useState(['London'])

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
      <Carousel toggleFav={toggleFromList} />
      <div className='flex-row'>
        <ClassComponentSection sectionTitle='I am a class component' />
        <ClassComponentSection sectionTitle='So am I' />
        <div>
          {favs.map((fav) => (
            <h2>{fav}</h2>
          ))}
        </div>
      </div>
    </main>
  )
}

export default AppMain
