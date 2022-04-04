import ClassComponentSection from './ClassComponentSection'
import Carousel from './Carousel'

const AppMain = () => {
  return (
    <main>
      <header>
        <h2>Welcome to IronTravel!</h2>
      </header>
      <Carousel />
      <ClassComponentSection sectionTitle='I am the class component section' />
    </main>
  )
}

export default AppMain
