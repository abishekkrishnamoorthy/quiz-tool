import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Quiz = ({item}) => {
  const {id}=useParams()
  console.log(id)
  return (
    <div>
      <ul>
      {item.filter(i=>(JSON.stringify(i.id) === id)).map(i=>(
        <div key={i.id}>
        <h1>{i.title}</h1>
        {(i.qa).map(i=>(
          <li key={i.qno} className='p-5 mb-5 bg-yellow-800 quiz ' >
            <label htmlFor={i.q} className='question'>{i.q}</label> <br />
            <input type="radio" name={i.qno} value={i.op1} />
            <label htmlFor={i.op1}>{i.op1}</label> <br />
            <input type="radio" name={i.qno} value={i.op2} />
            <label htmlFor={i.op2}>{i.op2}</label> <br />
            <input type="radio" name={i.qno} value={i.op3} />
            <label htmlFor={i.op3}>{i.op3}</label> <br />
            <input type="radio" name={i.qno} value={i.op4} />
            <label htmlFor={i.op4}>{i.op4}</label> 
            <br />
          </li>
        ))}
        
        </div>
      ))}
      </ul>
    </div>
  )
}

export default Quiz