import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { userLogoutService } from '../../Services/UserServices'

const UserLogout = () => {
  useEffect(() => {
    localStorage.removeItem('access-user')
    userLogoutService()
  }, [])
  return (
    <Navigate to={'/login'} />
  )
}

export default UserLogout