import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { captainLogoutService } from '../../Services/CaptainServices'

const CaptainLogout = () => {
  useEffect(() => {
    localStorage.removeItem('access-captain')
    captainLogoutService()
  }, [])
  return (
    <Navigate to={'/captain-login'} />
  )
}

export default CaptainLogout