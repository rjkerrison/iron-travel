import './CountryInfoCard.css'
import CountryDescription from './CountryDescription'
import CountryInfoHeader from './CountryInfoHeader'

const CountryInfoCard = ({
  increaseVisitedCount,
  decreaseVisitedCount,
  // rest syntax (...) gathers all the unnamed properties
  ...countryProps
}) => {
  return (
    <article class='CountryInfoCard' id={countryProps.cca3}>
      <CountryInfoHeader {...countryProps} />
      <CountryDescription
        {...countryProps}
        increaseVisitedCount={increaseVisitedCount}
        decreaseVisitedCount={decreaseVisitedCount}
      />
    </article>
  )
}

export default CountryInfoCard
