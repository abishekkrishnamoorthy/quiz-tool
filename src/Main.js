import React from 'react'
import Nav from './Nav'
import Content from './Content'

const Main = ({item}) => {
  return (
    <div className='Main'>
        <Nav/>
        <Content item={item}/>
    </div>
  )
}

export default Main