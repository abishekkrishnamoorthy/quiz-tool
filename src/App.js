import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "./Header";
import Content from "./Content";
import Main from "./Main";
import { useEffect, useState } from "react";


function App() {
  const api_url="http://localhost:5000/items"
  const [item,setitem]=useState([])
  const navigate=useNavigate()
  useEffect( ()=>{
    const fetch_data=async ()=>{
      try{
        const res=await fetch(api_url);
        if (!res.ok) throw new Error("error data")
        const listitem= await res.json()
        setitem(listitem)
      } catch (err){ 
    }
  }
  fetch_data()
},[])
   
  return (
    <div className="App">
      <Header/>
      <Main item={item}
            navigate={navigate}/>

    </div>
  );
}

export default App;
