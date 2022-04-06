import React from 'react'
import Comment from './Comment'

const CommentList = ({ comments, updateComment }) => {
  return (
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
  )
}

export default CommentList
