import React from 'react'
import { NavLink } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(/Assets/Images/startBg.webp)] h-screen pt-8 flex justify-between flex-col w-full'>
        <img className='w-16 ml-8' src="/Assets/Images/Uber-Logo.png" alt="" />
        <div className='bg-white pb-8 py-4 px-4'>
          <h2 className='text-[30px] font-semibold'>Get Started with Uber</h2>
          <NavLink to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Start