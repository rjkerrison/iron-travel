import { useEffect, useState } from 'react'
import countries from '../../assets/countries.json'
import CountryInfoCard from './CountryInfoCard'
import './CountryList.css'

const CountryList = () => {
  const [selectedCountries, setSelectedCountries] = useState(countries)
  const [formData, setFormData] = useState({
    europe: false,
    southAmerica: false,
    northAmerica: false,
    africa: false,
    antarctica: true,
    oceania: false,
  })

  const countryInfoCards = selectedCountries.map((country) => {
    return <CountryInfoCard {...country} />
  })

  const updateFilters = () => {
    const selectedContinents = Object.entries(formData)
      .filter(([k, v]) => v)
      .map(([k, v]) => k.toLowerCase())

    const newCountries = countries.filter((c) =>
      selectedContinents.includes(
        c.continents[0].replace(/\s/g, '').toLowerCase()
      )
    )

    setSelectedCountries(newCountries)
  }

  useEffect(updateFilters, [formData])

  const handleCheck = (e) => {
    const name = e.target.name

    const nfd = {
      ...formData,
      [name]: !formData[name],
    }
    console.log(nfd)
    setFormData(nfd)
  }

  return (
    <section className='CountryListSection'>
      <h2>All the Countries</h2>
      <form>
        <p>Filters:</p>
        <div className='filter-group'>
          <input
            type='checkbox'
            name='europe'
            id='europe'
            checked={formData.europe}
            onClick={handleCheck}
          />
          <label htmlFor='europe'>Europe</label>
          <input
            type='checkbox'
            name='northAmerica'
            id='north-america'
            checked={formData.northAmerica}
            onClick={handleCheck}
          />
          <label htmlFor='north-america'>North America</label>
          <input
            type='checkbox'
            name='southAmerica'
            id='south-america'
            checked={formData.southAmerica}
            onClick={handleCheck}
          />
          <label htmlFor='south-america'>South America</label>
          <input
            type='checkbox'
            name='africa'
            id='africa'
            checked={formData.africa}
            onClick={handleCheck}
          />
          <label htmlFor='africa'>Africa</label>
          <input
            type='checkbox'
            name='oceania'
            id='oceania'
            checked={formData.oceania}
            onClick={handleCheck}
          />
          <label htmlFor='oceania'>Oceania</label>
          <input
            type='checkbox'
            name='antarctica'
            id='antarctica'
            checked={formData.antarctica}
            onClick={handleCheck}
          />
          <label htmlFor='antarctica'>Antarctica</label>
        </div>
      </form>
      <div className='CountryList'>{countryInfoCards}</div>
    </section>
  )
}

export default CountryList
