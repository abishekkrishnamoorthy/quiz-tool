import React from 'react'

import Post from './Post'


const Content = ({item}) => {
  return (
    <div className='content' >
      <Post item={item}/>
    </div>
  )
}

export default Content