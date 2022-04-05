import countries from '../../assets/countries.json'
import CountryInfoCard from './CountryInfoCard'
import './CountryList.css'

const CountryList = () => {
  const countryInfoCards = countries.map((country) => {
    return <CountryInfoCard {...country} />
  })

  return <section className='CountryList'>{countryInfoCards}</section>
}

export default CountryList
