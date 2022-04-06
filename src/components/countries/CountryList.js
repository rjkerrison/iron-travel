import { useEffect } from 'react'
import countries from '../../assets/countries.json'
import CountryInfoCard from './CountryInfoCard'
import './CountryList.css'

const CountryList = ({
  increaseVisitedCount,
  decreaseVisitedCount,
  setTotalCountryCount,
}) => {
  const countryInfoCards = countries.map((country) => {
    return (
      <CountryInfoCard
        key={country.cca3}
        {...country}
        increaseVisitedCount={increaseVisitedCount}
        decreaseVisitedCount={decreaseVisitedCount}
      />
    )
  })

  // We CANNOT call a state setter in the main body of a rendering like this
  useEffect(() => {
    setTotalCountryCount(countries.length)
  }, [])

  return (
    <section className='CountryListSection'>
      <h2>All the Countries</h2>
      <div className='CountryList'>{countryInfoCards}</div>
    </section>
  )
}

export default CountryList
