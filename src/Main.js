import React from 'react'
import Nav from './Nav'
import Content from './Content'

const Main = ({item,navigate}) => {
  return (
    <div className='Main'>
        <Nav/>
        <Content item={item}
                 navigate={navigate}/>
    </div>
  )
}

export default Main