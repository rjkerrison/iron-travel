import React from 'react'

const CountryCard = (props) => {
  return (
    <div className='countryCard'>
      <h2>{props.name}</h2>
      <p>
        is in the continent {props.continent} and has a population of{' '}
        {props.population}
      </p>
    </div>
  )
}

export default CountryCard
