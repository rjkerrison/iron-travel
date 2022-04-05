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
      <div className='CountryList'>{countryInfoCards}</div>
    </section>
  )
}

export default CountryList
