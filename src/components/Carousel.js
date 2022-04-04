import CarouselItem from './CarouselItem'
import './Carousel.css'

const Carousel = () => {
  const messages = [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=2340',
      heading: 'Barcelona???',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=2340',
      heading: 'Go to Berlin!',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1526697675318-89790adec369?w=2340',
      heading: 'Have you been to Peru?',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1565264316550-a1811f0c4c75?w=2340',
      heading: 'Le Havre is nice actually',
    },
  ]

  return (
    <section className='Carousel'>
      {messages.map(({ heading, imageUrl }) => (
        <CarouselItem text={heading} backgroundImageUrl={imageUrl} />
      ))}
    </section>
  )
}

export default Carousel
