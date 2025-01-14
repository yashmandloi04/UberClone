import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from '../Pages/Start'
import UserLogin from '../Pages/UserPages/UserLogin'
import UserSignup from '../Pages/UserPages/UserSignup'
import CaptainLogin from '../Pages/CaptainPages/CaptainLogin'
import CaptainSignup from '../Pages/CaptainPages/CaptainSignup'

const AllRoute = () => {
  return <Routes>
    <Route path='' element={<Start />} />
    <Route path='login' element={<UserLogin />} />
    <Route path='signup' element={<UserSignup />} />
    <Route path='captain-login' element={<CaptainLogin />} />
    <Route path='captain-signup' element={<CaptainSignup/>} />
  </Routes>
}

export default AllRoute