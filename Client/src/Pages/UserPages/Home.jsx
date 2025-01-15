import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../Context/UserContext'
import SpinnerXl from '../../Components/Svg/SpinnerXl'
const Home = () => {
  const { user } = useContext(UserContext)
  useEffect(()=>{
    console.log(user)
  }, [])
  return <>
    <div className='text-3xl'>Hey, {(user && user.email) || "User"}</div>
    {/* <h1>Hello, User</h1> */}
  </>
}

export default Home