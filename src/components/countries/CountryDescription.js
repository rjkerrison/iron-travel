import './CountryDescription.css'
import React, { useState } from 'react'

const CountryDescription = ({
  increaseVisitedCount,
  decreaseVisitedCount,
  name,
  independent,
  currencies,
  capital,
  demonyms,
  continents,
  borders,
  languages,
  population,
  ...otherInfo
}) => {
  const [isVisited, setIsVisited] = useState(false)

  const toggleVisited = () => {
    if (isVisited) {
      setIsVisited(false)
      decreaseVisitedCount()
    } else {
      setIsVisited(true)
      increaseVisitedCount()
    }
  }

  const currencyString = currencies
    ? Object.values(currencies)
        .map((x) => x.name)
        .join(' or ')
    : 'gold, because they do not have a currency there'

  const capitalString = capital
    ? capital.count > 1
      ? `one of its capitals: ${capital.join(' or ')}`
      : `its capital ${capital[0]}`
    : `any random place, because ${name.official} does not have a capital`

  const demonym = demonyms?.eng?.m || 'anomaly'

  console.log('the following information was not used', otherInfo)

  return (
    <div className='country-description'>
      <p>
        {name.official} is {independent ? 'an independent ' : 'a dependent '}
        nation.
      </p>
      <p>
        If you go to {name.common}, you had better carry some {currencyString}.
        You may want to start your trip in {capitalString}.
      </p>
      <p>
        Unsure where to find {name.official}? It's located on the continent{' '}
        {continents[0]}.
      </p>
      <p>
        If you meet a native of {name.common}, you can call them a
        {/^[aeiou]/i.test(demonym) && 'n'} {demonym}.
      </p>
      <p>It has borders with {borders?.join(', ') || 'nothing'}.</p>
      <p>
        It would be useful for you to know how to speak{' '}
        {(languages && Object.values(languages)?.join(' or ')) || 'no language'}{' '}
        during your visit.
      </p>
      <p>There are {population} people living there.</p>
      <button onClick={toggleVisited}>
        {isVisited ? 'Visited (click to unvisit)' : 'Mark as visited'}
      </button>
    </div>
  )
}

export default CountryDescription
