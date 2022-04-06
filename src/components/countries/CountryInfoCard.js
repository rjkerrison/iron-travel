import './CountryInfoCard.css'
import CountryDescription from './CountryDescription'
import CountryInfoHeader from './CountryInfoHeader'
import { useState } from 'react'
import CountryCardCommentForm from './CountryCardCommentForm'
import Comment from './Comment'

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
    setComments([...comments, { ...formData, _id: 'comment' + Math.random() }])
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

  const updateComment = (id, value) => {
    const index = comments.findIndex(({ _id }) => _id === id)
    if (index !== -1) {
      setComments([
        ...comments.slice(0, index),
        value,
        ...comments.slice(index + 1),
      ])
    }
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
        {comments.map((comment) => (
          <li key={comment._id}>
            <Comment
              {...comment}
              updateComment={(value) => updateComment(comment._id, value)}
            />
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
