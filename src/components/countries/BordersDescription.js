import React from 'react'
import CountryLinkList from './CountryLinkList'

const BordersDescription = ({ borders }) => {
  if (!borders || borders.length === 0) {
    return (
      <p>It has borders with nothing. It's one of those island thingies.</p>
    )
  }
  return (
    <>
      <h3>Borders:</h3>
      <CountryLinkList cca3List={borders} name={'Borders'} />
    </>
  )
}

export default BordersDescription
