import './CountryInfoCard.css'
import CountryDescription from './CountryDescription'
import CountryInfoHeader from './CountryInfoHeader'
import { useState } from 'react'
import CountryCardCommentForm from './CountryCardCommentForm'

const CountryInfoCard = (countryProps) => {
  const [formData, setFormData] = useState({
    author: 'default',
    comment: '',
  })

  const handleChange = (event) => {
    const { value, name } = event.target

    const newFormData = {
      ...formData,
      [name]: value,
    }

    setFormData(newFormData)
  }

  return (
    <article class='CountryInfoCard' id={countryProps.cca3}>
      <CountryInfoHeader {...countryProps} />
      <CountryDescription {...countryProps} />
      <CountryCardCommentForm
        cca3={countryProps.cca3}
        handleChange={handleChange}
        formData={formData}
      />
    </article>
  )
}

export default CountryInfoCard
