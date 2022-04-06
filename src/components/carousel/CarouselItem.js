import './CarouselItem.css'

const CarouselItem = ({
  heading,
  destination,
  description = "I bet it's nice there!",
  imageUrl,
  toggleFav,
  favs,
}) => {
  // we use useState inside a component
  // to create stateful data which we can change
  // with the setter, and so React will rerender this component
  const setFavouriteCity = () => {
    toggleFav(destination)
  }
  const isFavourited = favs.includes(heading)

  const className = isFavourited ? 'favourite active' : 'favourite'

  return (
    <div
      className='CarouselItem'
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h3>{heading}</h3>
      <p>{description}</p>
      <button className={className} onClick={setFavouriteCity}>
        {isFavourited ? '⭐️' : '🤔'}
      </button>
    </div>
  )
}

export default CarouselItem
