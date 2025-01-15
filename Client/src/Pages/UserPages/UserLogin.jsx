import React, { useContext, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import LoginValidation from '../../Schemas/LoginValidation'
import SpinnerSm from '../../Components/Svg/SpinnerSm'
import { use } from 'react'
import { userLoginService } from '../../Services/UserServices'
import { UserContext } from '../../Context/UserContext'

const UserLogin = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  let [showLoginLoader, setShowLoginLoader] = useState(false)
  let emailfield = useRef(null)
  let passwordfield = useRef(null)

  const LoginFrm = useFormik({
    validationSchema: LoginValidation,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (FrmData) => {
      setShowLoginLoader(true)
      const response = await userLoginService(FrmData)
      if(response.request.status === 200){
        let data = response.data
        setUser(data.user)
        localStorage.setItem('access-user', data.token)
        navigate('/home')
      }
      setShowLoginLoader(false)
      emailfield.current.value = ''
      passwordfield.current.value = ''
    }
  })
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-12' src="/Assets/Images/Uber-Logo.png" alt="" />

        <form onSubmit={LoginFrm.handleSubmit}>
          <div className='min-h-28'>
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

          <div className="mb-5 min-h-28">
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
        <p className='text-center'>New here? <NavLink to='/signup' className='text-blue-600'>Create new Account</NavLink></p>
      </div>
      <div>
        <NavLink
          to='/captain-login'
          className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-md px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as Captain</NavLink>
      </div>
    </div>
  )
}

export default UserLogin