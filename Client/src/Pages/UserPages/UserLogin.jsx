import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik'
import UserLoginValidation from '../../Schemas/UserLoginValidation'
import SpinnerSm from '../../Components/Svg/SpinnerSm'

const UserLogin = () => {
  let [showLoginLoader, setShowLoginLoader] = useState(false)
  const LoginFrm = useFormik({
    validationSchema: UserLoginValidation,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (FrmData) => {
      setShowLoginLoader(true)
      setShowLoginLoader(false)
    }
  })
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />

        <form onSubmit={LoginFrm.handleSubmit}>
          <div className='min-h-28'>
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input
              name='email'
              onChange={LoginFrm.handleChange}
              type="text"
              placeholder='email@example.com'
              className={`bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base ${LoginFrm.errors.email && LoginFrm.touched.email && 'border-red-500 focus:outline-none'}`}
            />
            {LoginFrm.errors.email && LoginFrm.touched.email && <small className='text-red-500 text-sm'>{LoginFrm.errors.email}</small>}
          </div>

          <div className="mb-5 min-h-28">
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

            <input
              name='password'
              onChange={LoginFrm.handleChange}
              type="password"
              placeholder='password'
              className={`bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base ${LoginFrm.errors.password && LoginFrm.touched.password && 'border-red-500 focus:outline-none'}`}
            />
            {LoginFrm.errors.password && LoginFrm.touched.password && <small className='text-red-500 text-sm'>{LoginFrm.errors.password}</small>}
          </div>
          <button
            type='submit'
            className='bg-[#111] text-white flex justify-center font-semibold mb-3 rounded-lg px-4 py-2 space-x-3 w-full text-lg placeholder:text-base'
          ><span>Login</span>
            {showLoginLoader && <SpinnerSm />}
          </button>

        </form>
        <p className='text-center'>New here? <NavLink to='/signup' className='text-blue-600'>Create new Account</NavLink></p>
      </div>
      <div>
        <NavLink
          to='/captain-login'
          className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as Captain</NavLink>
      </div>
    </div>
  )
}

export default UserLogin