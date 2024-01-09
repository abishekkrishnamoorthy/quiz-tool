import { Routes, Route} from "react-router-dom";
import Header from "./Header";
import Createquiz from "./Createquiz";
import Quizpost from "./Quizpost";
import { useEffect, useState } from "react";
import Playquiz from "./Playquiz";
import Feed from "./Feed";
import Postpage from "./Postpage";


function App() {
  const url=" http://localhost:5000/quiz"
  const [quiz,setquiz]=useState([])
  useEffect(()=>{
    const fetch_data=async ()=>{
      try {
      const res= await fetch(url);
      if( !res.ok ) throw Error ("error")
      const newpost = await res.json()
      setquiz(newpost)
      } catch (error) {
       
      }
    }
     fetch_data()
},[])
  
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/createquiz" element={<Createquiz/>}/>
      <Route  path="/quizpost" element={<Feed quiz={quiz}/>}/> 
      <Route path="/quizpost/:id" element={<Postpage quiz={quiz}/>}/>                                            
     </Routes>  
    </div>
  )
}

export default App;
