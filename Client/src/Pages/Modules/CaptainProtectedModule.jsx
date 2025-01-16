import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { captainProfileService } from '../../Services/CaptainServices'
import { CaptainContext } from '../../Context/CaptainContext'
import InfiniteSpinner from '../../Components/Svg/InfiniteSpinner'

const CaptainProtectedModule = () => {
  const navigate = useNavigate()
  const { setCaptain } = useContext(CaptainContext)
  const [isLoading, setIsLoading] = useState(false)
  const token = localStorage.getItem('access-captain')
  useEffect(() => {
    if (!token)
      navigate('/captain-login')
  }, [token])
  useEffect(() => {
    setIsLoading(true)
    getCaptainHandler()
  }, [])
  const getCaptainHandler = async () => {
    const response = await captainProfileService()
    const data = response.data
    if (response.request.status === 200) {
      setCaptain(data.captain)
      setIsLoading(false)
    } else {
      localStorage.removeItem('access-captain')
      navigate('/captain-login')
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

export default CaptainProtectedModule