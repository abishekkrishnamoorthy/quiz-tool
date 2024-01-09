import React from 'react'
import Playquiz from './Playquiz'
import { useParams ,Link } from 'react-router-dom'
import Quizpost from './Quizpost'

const Feed = ({quiz}) => {
         console.log("loged")
        return (
          <div className='quizpost  w-full'>
            {quiz.map(i=>(<Link to={`/quizpost/${i.id}`} key={i.id}><Quizpost  key={i.id} quiz={i}/></Link>))}
          </div>
        )
    
}

export default Feed