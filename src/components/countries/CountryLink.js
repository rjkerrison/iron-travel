import React from 'react'
import { Link } from 'react-router-dom'
import './CountryLink.css'

const CountryLink = ({ cca3, name }) => {
  // render link
  return (
    <Link className='CountryLink' to={`/countries/${cca3}`}>
      {name.common}
    </Link>
  )
}

export default CountryLink
