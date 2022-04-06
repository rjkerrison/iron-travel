import './CountryInfoCard.css'
import CountryDescription from './CountryDescription'
import CountryInfoHeader from './CountryInfoHeader'
import { useState } from 'react'
import CountryCardCommentForm from './CountryCardCommentForm'

const CountryInfoCard = ({
  increaseVisitedCount,
  decreaseVisitedCount,
  // rest syntax (...) gathers all the unnamed properties
  ...countryProps
}) => {
  const [formData, setFormData] = useState({
    author: 'default',
    comment: '',
  })
  const [comments, setComments] = useState([])

  const handleSubmitComment = (event) => {
    // do not navigate the browser on form submit
    event.preventDefault()
    setComments([...comments, formData])
    setFormData({
      author: 'default',
      comment: '',
    })
  }

  const handleChange = (event) => {
    const { value, name } = event.target

    const newFormData = {
      ...formData,
      [name]: value,
    }

    setFormData(newFormData)
  }

  return (
    <article className='CountryInfoCard' id={countryProps.cca3}>
      <CountryInfoHeader {...countryProps} />
      <CountryDescription
        {...countryProps}
        increaseVisitedCount={increaseVisitedCount}
        decreaseVisitedCount={decreaseVisitedCount}
      />
      <ul>
        {comments.map(({ comment, author }) => (
          <li>
            {comment} – {author}
          </li>
        ))}
      </ul>

      <CountryCardCommentForm
        cca3={countryProps.cca3}
        handleChange={handleChange}
        handleSubmit={handleSubmitComment}
        formData={formData}
      />
    </article>
  )
}

export default CountryInfoCard
