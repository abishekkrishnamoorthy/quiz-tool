import React from 'react'
import { Link } from 'react-router-dom'

const Quiz = ({item}) => {
  return (
    <div>
      {item.map(i=>(<li>
        <Link to={"/quiz/:id"}>quiz {item.id}</Link>   
      </li>))}
    </div>
  )
}

export default Quiz