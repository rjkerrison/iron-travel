import './CarouselItem.css'

const CarouselItem = ({ text, backgroundImageUrl }) => {
  return (
    <div
      className='CarouselItem'
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {text}
    </div>
  )
}

export default CarouselItem
