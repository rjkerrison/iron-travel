import './CountryInfoHeaderCard.css'
import CountryInfoHeader from './CountryInfoHeader'

const CountryInfoCard = ({
  // rest syntax (...) gathers all the unnamed properties
  ...countryProps
}) => {
  return (
    <article className='CountryInfoHeaderCard' id={countryProps.cca3}>
      <CountryInfoHeader {...countryProps} />
    </article>
  )
}

export default CountryInfoCard
