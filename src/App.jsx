import React from 'react'
import Navbar from './Component/Navbar'
import Login from './Component/Login'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './Component/Profile'


const App = () => {
  return (
    <div>
      
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App