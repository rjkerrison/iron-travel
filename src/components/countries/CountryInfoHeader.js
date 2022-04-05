import React from 'react'

const CountryInfoHeader = ({ flags, officialName, cca3, commonName }) => {
  return (
    <header>
      <picture>
        <img src={flags.svg} alt={officialName} />
      </picture>
      <div>
        <h3>
          {cca3}: {commonName}
        </h3>
        <p>{officialName}</p>
      </div>
    </header>
  )
}

export default CountryInfoHeader
