import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from '../Pages/Start'
import UserLogin from '../Pages/UserPages/UserLogin'
import UserSignup from '../Pages/UserPages/UserSignup'
import CaptainLogin from '../Pages/CaptainPages/CaptainLogin'
import CaptainSignup from '../Pages/CaptainPages/CaptainSignup'
import Home from '../Pages/UserPages/Home'
import UserProtectedModule from '../Pages/Modules/UserProtectedModule'
import UserLogout from '../Pages/UserPages/UserLogout'
import CaptainHome from '../Pages/CaptainPages/CaptainHome'
import CaptainProtectedModule from '../Pages/Modules/CaptainProtectedModule'
import CaptainLogout from '../Pages/CaptainPages/CaptainLogout'

const AllRoute = () => {
  return <Routes>
    <Route path='' element={<Start />} />
    <Route path='login' element={<UserLogin />} />
    <Route path='signup' element={<UserSignup />} />
    <Route path='captain-login' element={<CaptainLogin />} />
    <Route path='captain-signup' element={<CaptainSignup />} />
    <Route element={<UserProtectedModule />}>
      <Route path='home' element={<Home />} />
      <Route path='logout' element={<UserLogout />} />
    </Route>
    <Route element={<CaptainProtectedModule />}>
      <Route path='captain-home' element={<CaptainHome />} />
      <Route path='captain-logout' element={<CaptainLogout />} />
    </Route>
  </Routes>
}

export default AllRoute