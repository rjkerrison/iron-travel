import './CountryInfoCard.css'
import CountryDescription from './CountryDescription'
import CountryInfoHeader from './CountryInfoHeader'

const CountryInfoCard = (countryProps) => {
  return (
    <article class='CountryInfoCard' id={countryProps.cca3}>
      <CountryInfoHeader {...countryProps} />
      <CountryDescription {...countryProps} />
    </article>
  )
}

export default CountryInfoCard
