import './CarouselItem.css'

const CarouselItem = ({
  heading,
  description,
  backgroundImageUrl,
  toggleFav,
}) => {
  // we use useState inside a component
  // to create stateful data which we can change
  // with the setter, and so React will rerender this component
  const setFavouriteCity = () => {
    toggleFav(heading)
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
