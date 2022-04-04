import ClassComponentSection from './ClassComponentSection'
import Carousel from './Carousel'

const AppMain = () => {
  return (
    <main>
      <header>
        <h2>Welcome to IronTravel!</h2>
      </header>
      <Carousel />
      <div className='flex-row'>
        <ClassComponentSection sectionTitle='I am a class component' />
        <ClassComponentSection sectionTitle='So am I' />
        <ClassComponentSection
          sectionTitle="I'm Spartacus!"
          subtitle='And so is he'
        />
      </div>
    </main>
  )
}

export default AppMain
