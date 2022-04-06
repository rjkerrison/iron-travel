import CarouselItem from './CarouselItem'
import './Carousel.css'
import carouselEntries from './carouselEntries.json'

const Carousel = ({ toggleFav, favs }) => {
  return (
    <section className='Carousel'>
      {carouselEntries.map(({ id, ...carouselEntry }) => (
        <CarouselItem
          key={id}
          description='Lorem ipsum dolore sit amet'
          toggleFav={toggleFav}
          favs={favs}
          {...carouselEntry}
        />
      ))}
    </section>
  )
}

export default Carousel
