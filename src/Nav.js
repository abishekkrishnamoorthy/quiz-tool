import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <li><Link to="/manual" style={{textDecoration: 'none'}}>Manual</Link></li>
        <li><Link to="/AI" style={{textDecoration: 'none'}}>Ai</Link></li>
        <li><Link to="/posts" style={{textDecoration: 'none'}}>Posts</Link></li>
    </div>
  )
}

export default Nav