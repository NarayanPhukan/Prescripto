import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import About from './Pages/About'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />

      </Routes>

    </div>
  )
}

export default App