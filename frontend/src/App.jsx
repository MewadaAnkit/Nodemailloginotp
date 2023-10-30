import React from 'react'
import Hello from "./components/Home" 
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes , Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
       <Route path='/' element={<Hello/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
     </Routes>
  )
}

export default App