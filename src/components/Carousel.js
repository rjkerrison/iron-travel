import CarouselItem from './CarouselItem'
import './Carousel.css'

const Carousel = () => {
  const messages = [
    'Barcelona???',
    'Go to Berlin!',
    'Have you been to Peru?',
    'Le Havre is nice actually',
  ]

  return (
    <section className='Carousel'>
      {messages.map((message) => (
        <CarouselItem text={message} />
      ))}
    </section>
  )
}

export default Carousel
