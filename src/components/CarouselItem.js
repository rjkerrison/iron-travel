import './CarouselItem.css'

const CarouselItem = ({ heading, description, backgroundImageUrl }) => {
  const setFavouriteCity = () => {
    alert(`You favourited ${heading}!`)
  }

  return (
    <div
      className='CarouselItem'
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <h3>{heading}</h3>
      <p>{description}</p>
      <button className='favourite' onClick={setFavouriteCity}>
        ⭐️
      </button>
    </div>
  )
}

export default CarouselItem
