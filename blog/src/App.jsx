import { Outlet } from 'react-router-dom'
import './App.css'
import React from 'react'

function App() {

  return (
    <div className='app'>
    <div className="container">
      <Outlet/>
      <h2>e</h2>
    </div>
        
    </div>
  )
}

export default App
