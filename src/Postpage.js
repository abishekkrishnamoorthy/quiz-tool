import React from 'react'
import { useParams } from 'react-router-dom'
import Playquiz from './Playquiz'

const Postpage = ({quiz}) => {
    const {id} = useParams()
     
  return (
    <div className='  flex flex-col  justify-start'>
      {quiz.filter(i=> id==i.id).map(i=>
        <Playquiz key={i.id} quiz={i}/>
      )}
    </div>
  )
}

export default Postpage