import React, { useState } from 'react'
import CountryCardCommentForm from './CountryCardCommentForm'

const Comment = ({ comment, author, updateComment }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({ comment, author })

  const handleSubmit = (event) => {
    // do not navigate the browser on form submit
    event.preventDefault()
    // needs to set this one particular comment in the global list
    updateComment(formData)
    setIsEditing(false)
  }

  const handleChange = (event) => {
    const { value, name } = event.target

    const newFormData = {
      ...formData,
      [name]: value,
    }

    setFormData(newFormData)
  }

  if (isEditing) {
    return (
      <CountryCardCommentForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    )
  }

  return (
    <div>
      {comment} – {author}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  )
}

export default Comment
