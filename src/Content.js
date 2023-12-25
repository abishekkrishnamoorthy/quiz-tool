import React from 'react'

import Post from './Post'
import { Routes,Route } from 'react-router-dom'
import Manual from './Manual'
import Ai from './Ai'
import Quiz from './Quiz'


const Content = ({item,navigate}) => {
  return (
    <div className='content flex flex-col grow flex-wrap  overflow-auto ' >
      <Routes>
        <Route path="/post" element={<Post item={item}
                                           navigate={navigate}/>}/>
        <Route path="/manual" element={<Manual item={item}
                                           navigate={navigate}/>}/>
        <Route path="/ai" element={<Ai item={item}
                                           navigate={navigate}/>}/>
        <Route path="/quiz/:id" element={<Quiz item={item}
                                           navigate={navigate}/>}/>

      </Routes>
    </div>
  )
}

export default Content