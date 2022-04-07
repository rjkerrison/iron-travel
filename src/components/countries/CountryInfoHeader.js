import React from 'react'
import { useSearchParams } from 'react-router-dom'

const CountryInfoHeader = ({ flags, name, cca3, coatOfArms }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const noFlags = searchParams.get('noFlags') === 'true'

  return (
    <header className='CountryInfoHeader'>
      {!noFlags && (
        <picture>
          <img src={flags.svg} alt={name.official} />
        </picture>
      )}
      <div>
        <h3>{name.common}</h3>
        <p>{name.official}</p>
        <p>{cca3}</p>
      </div>
      {/* If we have either coat of arms image, we can show it */}
      {(coatOfArms.svg || coatOfArms.png) && (
        <picture>
          <img src={coatOfArms.svg || coatOfArms.png} alt={name.official} />
        </picture>
      )}
    </header>
  )
}

export default CountryInfoHeader
