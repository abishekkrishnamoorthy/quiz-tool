import React from 'react'
import { Link } from 'react-router-dom'
const Quizpost = ({quiz}) => {
  return (
        <article className='post font-sans p-10' >
        <h2>{quiz.title}</h2>
        <p className='postDate'>{quiz.datetime}</p>
        </article>
  )
}

export default Quizpost