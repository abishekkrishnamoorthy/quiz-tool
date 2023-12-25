import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Quiz = ({item}) => {
  const {id}=useParams()
  console.log(id)
  return (
    <div>
      {item.filter(i=>(JSON.stringify(i.id) === id)).map(i=>(
        <div key={i.id}>
        <h1>{i.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default Quiz