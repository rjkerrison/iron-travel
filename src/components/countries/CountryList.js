import countries from '../../assets/countries.json'
import CountryInfoCard from './CountryInfoCard'
import './CountryList.css'

const CountryList = ({ increaseVisitedCount, decreaseVisitedCount }) => {
  const countryInfoCards = countries.map((country) => {
    return (
      <CountryInfoCard
        {...country}
        increaseVisitedCount={increaseVisitedCount}
        decreaseVisitedCount={decreaseVisitedCount}
      />
    )
  })

  return (
    <section className='CountryListSection'>
      <h2>All the Countries</h2>
      <div className='CountryList'>{countryInfoCards}</div>
    </section>
  )
}

export default CountryList
