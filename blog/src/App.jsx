import NavBar from './components/NavBar'

import { Outlet } from 'react-router-dom'
import './App.css'

import React from 'react'

function App() {

  return (
    <div className='app'>
      <NavBar/>
    <div className="container">
      <Outlet/>
    </div>
        
    </div>
  )
}

export default App
