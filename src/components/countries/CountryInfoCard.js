import './CountryInfoCard.css'

const CountryInfoCard = ({
  name,
  continents,
  flags,
  coatOfArms,
  population,
  capital,
  currencies,
  languages,
  tld,
  cca2,
  ccn3,
  cca3,
  cioc,
  independent,
  status,
  unMember,
  idd,
  altSpellings,
  region,
  subregion,
  translations,
  latlng,
  landlocked,
  borders,
  area,
  demonyms,
  flag,
  maps,
  gini,
  fifa,
  car,
  timezones,
  startOfWeek,
  capitalInfo,
}) => {
  const { common: commonName, official: officialName, ...others } = name

  console.log(others)
  console.log(currencies)

  const currencyString = currencies
    ? Object.values(currencies)
        .map((x) => x.name)
        .join(' or ')
    : 'gold, because they do not have a currency there'

  const capitalString = capital
    ? capital.count > 1
      ? `one of its capitals: ${capital.join(' or ')}`
      : `its capital ${capital[0]}`
    : `any random place, because ${officialName} does not have a capital`

  return (
    <article class='CountryInfoCard'>
      <header>
        <picture>
          <img src={flags.svg} alt={officialName} />
        </picture>
        <div>
          <h3>{commonName}</h3>
          <p>{officialName}</p>
        </div>
      </header>
      <p>
        If you go to {commonName}, you had better carry some {currencyString}.
        You may want to start your trip in {capitalString}.
      </p>
      <p>
        Unsure where to find {officialName}? It's located on the continent{' '}
        {continents[0]}.
      </p>
    </article>
  )
}

export default CountryInfoCard
