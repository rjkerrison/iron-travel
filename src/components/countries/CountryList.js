import { useEffect, useState } from 'react'
import CountryInfoHeaderCard from './CountryInfoHeaderCard'
import './CountryList.css'
import CountryListFilterForm from './CountryListFilterForm'

const matchesQuery = (continents, query) => {
  return (c) =>
    continents.includes(c.continents[0].replace(/\s/g, '').toLowerCase()) &&
    (c.name.official.toLowerCase().includes(query.toLowerCase()) ||
      c.name.common.toLowerCase().includes(query.toLowerCase()))
}

const CountryList = ({ setTotalCountryCount, countries }) => {
  const [selectedCountries, setSelectedCountries] = useState(countries)
  // control all the state for the form ourselves in React
  // so that React can use this data, and update the form as necessary
  const [formData, setFormData] = useState({
    europe: true,
    asia: true,
    southAmerica: false,
    northAmerica: false,
    africa: false,
    antarctica: false,
    oceania: false,
  })
  const [query, setQuery] = useState('')

  const countryInfoCards = selectedCountries.map((country) => {
    return <CountryInfoHeaderCard key={country.cca3} {...country} />
  })

  const updateFilters = () => {
    const continents = Object.entries(formData)
      .filter(([k, v]) => v)
      .map(([k, v]) => k.toLowerCase())

    const newCountries = countries.filter(matchesQuery(continents, query))

    setSelectedCountries(newCountries)
  }

  useEffect(updateFilters, [formData, query])

  const updateQuery = (e) => {
    const { value } = e.target
    setQuery(value)
  }

  const handleCheck = (e) => {
    const name = e.target.name

    const newFormData = {
      ...formData,
      // to override, we have to declare after the spreaded formData
      // set the key as the value of name (not 'name')
      [name]: !formData[name],
    }

    setFormData(newFormData)
  }

  // We CANNOT call a state setter in the main body of a rendering like this
  useEffect(() => {
    setTotalCountryCount(countries.length)
  }, [setTotalCountryCount])

  return (
    <section className='CountryListSection'>
      <h2>All the Countries</h2>
      <CountryListFilterForm
        formData={formData}
        handleCheck={handleCheck}
        query={query}
        updateQuery={updateQuery}
      />
      <div className='CountryList'>{countryInfoCards}</div>
    </section>
  )
}

export default CountryList
