import React from 'react'
import Hello from "./component/Signup" 
import Login from "./component/Login.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
//import Otp from './component/Otp'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    
     <Routes>
       <Route path='/' element={<Hello/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
     </Routes>
  
  )
}

export default App