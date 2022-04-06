import React from 'react'

const CountryCardCommentForm = ({
  cca3,
  formData,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={`author-${cca3}`}>Posted by</label>
      <input
        type='text'
        name='author'
        id={`author-${cca3}`}
        // CONTROLLED COMPONENT
        // means that React is responsible for the value
        value={formData.author}
        onChange={handleChange}
      />
      <label htmlFor={`author-${cca3}`}>Comment</label>
      <textarea
        name='comment'
        id={`comment-${cca3}`}
        cols='30'
        rows='10'
        value={formData.comment}
        onChange={handleChange}
      ></textarea>
      <input type='submit' value='Save' />
    </form>
  )
}

export default CountryCardCommentForm
