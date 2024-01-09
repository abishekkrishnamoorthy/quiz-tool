import React from 'react'
import Createquiz from './Createquiz'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className=' flex flex-row Nav'> 
        <ul>
        <li><Link to="/createquiz">Create quiz</Link></li>
        <li><Link to="/quizpost">Post</Link></li>
        </ul>
    </div>
  )
}

export default Nav