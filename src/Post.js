import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({item}) => {
  return (
    <div>
         {item.map(i=>(<li className="postli"key={i.id}>
         <h1>{i.title}</h1>   
         <Link to="/quiz/">{i.id}</Link> 
         <button className=' bg-slate-400  p-2 rounded-xl hover:bg-orange-950 duration-500'> Attend </button>  
      </li>))}
    </div>
  )
}

export default Post