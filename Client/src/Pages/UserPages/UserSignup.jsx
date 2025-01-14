import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik'
import UserRegisterValidation from '../../Schemas/UserRegisterValidation'
import SpinnerSm from '../../Components/Svg/SpinnerSm'
import { use } from 'react'

const UserSignup = () => {
  let [showLoginLoader, setShowLoginLoader] = useState(false)
  let firstnamefield = useRef(null)
  let lastnamefield = useRef(null)
  let emailfield = useRef(null)
  let passwordfield = useRef(null)

  const LoginFrm = useFormik({
    validationSchema: UserRegisterValidation,
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    onSubmit: (FrmData) => {
      setShowLoginLoader(true)
      console.log(FrmData)
      setShowLoginLoader(false)
      firstnamefield.current.value = ''
      lastnamefield.current.value = ''
      emailfield.current.value = ''
      passwordfield.current.value = ''
    }
  })
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-8' src="/Assets/Images/Uber-Logo.png" alt="" />

        <form onSubmit={LoginFrm.handleSubmit}>
          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <div className='min-h-16 flex space-x-4'>
            <div>
              <input
                ref={firstnamefield}
                name='firstname'
                onChange={LoginFrm.handleChange}
                type="text"
                placeholder='Firstname'
                className={`bg-[#eeeeee] rounded-md px-4 py-2 border w-full text-lg placeholder:text-base ${LoginFrm.errors.firstname && LoginFrm.touched.firstname && 'border-red-500 focus:outline-none'}`}
              />
              {LoginFrm.errors.firstname && LoginFrm.touched.firstname && <small className='text-red-500 text-sm'>{LoginFrm.errors.firstname}</small>}
            </div>
            <div>
              <input
                ref={lastnamefield}
                name='lastname'
                onChange={LoginFrm.handleChange}
                type="text"
                placeholder='Lastname'
                className={`bg-[#eeeeee] rounded-md px-4 py-2 border w-full text-lg placeholder:text-base ${LoginFrm.errors.lastname && LoginFrm.touched.lastname && 'border-red-500 focus:outline-none'}`}
              />
              {LoginFrm.errors.lastname && LoginFrm.touched.lastname && <small className='text-red-500 text-sm'>{LoginFrm.errors.lastname}</small>}
            </div>
          </div>

          <div className='min-h-24'>
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input
              ref={emailfield}
              name='email'
              onChange={LoginFrm.handleChange}
              type="text"
              placeholder='email@example.com'
              className={`bg-[#eeeeee] rounded-md px-4 py-2 border w-full text-lg placeholder:text-base ${LoginFrm.errors.email && LoginFrm.touched.email && 'border-red-500 focus:outline-none'}`}
            />
            {LoginFrm.errors.email && LoginFrm.touched.email && <small className='text-red-500 text-sm'>{LoginFrm.errors.email}</small>}
          </div>

          <div className="mb-5 min-h-24">
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

            <input
              ref={passwordfield}
              name='password'
              onChange={LoginFrm.handleChange}
              type="password"
              placeholder='password'
              className={`bg-[#eeeeee] rounded-md px-4 py-2 border w-full text-lg placeholder:text-base ${LoginFrm.errors.password && LoginFrm.touched.password && 'border-red-500 focus:outline-none'}`}
            />
            {LoginFrm.errors.password && LoginFrm.touched.password && <small className='text-red-500 text-sm'>{LoginFrm.errors.password}</small>}
          </div>
          <button
            type='submit'
            className='bg-[#111] text-white flex justify-center font-semibold mb-3 rounded-md px-4 py-2 space-x-3 w-full text-lg placeholder:text-base'
          ><span>Login</span>
            {showLoginLoader && <SpinnerSm />}
          </button>

        </form>
        <p className='text-center'>Already have an account? <NavLink to='/login' className='text-blue-600'>Login here</NavLink></p>
      </div>
      <div>
        <p className='text-[9px] leading-tight'>
          By proceeding, you consent to get calls, WhatsApp or SMS
          messages, including by automated means, from Uber and
          its affiliates to the number provided.
        </p>
      </div>
    </div>
  )
}
export default UserSignup