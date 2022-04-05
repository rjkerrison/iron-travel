import './CarouselItem.css'

import { useState } from 'react'

const CarouselItem = ({ heading, description, backgroundImageUrl }) => {
  // we use useState inside a component
  // to create stateful data which we can change
  // with the setter, and so React will rerender this component
  const [data, setData] = useState('is not favourited :(')

  const setFavouriteCity = () => {
    if (data === 'is favourited!!!') {
      setData('YOU ALREADY CLICKED')
    } else {
      setData('is favourited!!!')
    }
  }

  return (
    <div
      className='CarouselItem'
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <h3>
        {heading} {data}
      </h3>
      <p>{description}</p>
      <button className='favourite' onClick={setFavouriteCity}>
        ⭐️
      </button>
    </div>
  )
}

export default CarouselItem
