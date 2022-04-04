import ClassComponentSection from './ClassComponentSection'
import Carousel from './Carousel'

const AppMain = () => {
  return (
    <main>
      <h2>Welcome to IronTravel!</h2>
      <header>I am another header</header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat
        eaque vitae aut adipisci expedita, est accusantium cum praesentium.
        Nihil minus quidem corporis aspernatur iusto vitae non minima provident
        veritatis.
      </p>
      <ClassComponentSection sectionTitle='I am the class component section' />
      <Carousel />
    </main>
  )
}

export default AppMain
