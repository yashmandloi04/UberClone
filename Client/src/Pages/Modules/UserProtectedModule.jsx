import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { userProfileService } from '../../Services/UserServices'
import { UserContext } from '../../Context/UserContext'
import InfiniteSpinner from '../../Components/Svg/InfiniteSpinner'

const UserProtectedModule = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  const token = localStorage.getItem('access-user')
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=> {
    if(!token)
      navigate('/login')
  }, [token])
  useEffect(() => {
    setIsLoading(true)
    getUserHandler()
  }, [])
  const getUserHandler = async () => {
    let response = await userProfileService()
    const data = response.data
    if (response.request.status === 200) {
      console.log(data)
      setUser(data.user)
      setIsLoading(false)
    }else{
      localStorage.removeItem('access-user')
      navigate('/login')
    }
  }
  return (
    isLoading
    ?
    <InfiniteSpinner />
    :
    <Outlet />
  )
}

export default UserProtectedModule