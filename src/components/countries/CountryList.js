import countries from '../../assets/countries.json'
import CountryInfoCard from './CountryInfoCard'
import './CountryList.css'

const CountryList = () => {
  const countryInfoCards = countries.map((country) => {
    return <CountryInfoCard {...country} />
  })

  return (
    <section className='CountryListSection'>
      <h2>All the Countries</h2>
      <form>
        <p>Filters:</p>
        <div className='filter-group'>
          <input type='checkbox' name='europe' id='europe' />
          <label htmlFor='europe'>Europe</label>
          <input type='checkbox' name='north-america' id='north-america' />
          <label htmlFor='north-america'>North America</label>
          <input type='checkbox' name='south-america' id='south-america' />
          <label htmlFor='south-america'>South America</label>
          <input type='checkbox' name='africa' id='africa' />
          <label htmlFor='africa'>Africa</label>
          <input type='checkbox' name='oceania' id='oceania' />
          <label htmlFor='oceania'>Oceania</label>
          <input type='checkbox' name='antarctica' id='antarctica' />
          <label htmlFor='antarctica'>Antarctica</label>
        </div>
      </form>
      <div className='CountryList'>{countryInfoCards}</div>
    </section>
  )
}

export default CountryList
