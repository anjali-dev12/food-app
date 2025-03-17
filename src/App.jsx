import React from 'react'
import Mainpage from './Component/Mainpage'
import { Route, Routes } from 'react-router-dom'
import Mealinfo from './Component/Mealinfo'
import './index.css'

function App() {
  return (
    <>


      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path=':mealid' element={<Mealinfo />} />
      </Routes>

    </>
  )
}

export default App
