import React, { useRef, useState, useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { CaptainContext } from '../../Context/CaptainContext'
import CaptainRegisterValidation from '../../Schemas/CaptainRegisterValidation'
import { captainRegisterService } from '../../Services/CaptainServices'
import SpinnerSm from '../../Components/Svg/SpinnerSm'

const CaptainSignup = () => {
  const navigate = useNavigate()
  const { setCaptain } = useContext(CaptainContext)
  let [showLoginLoader, setShowLoginLoader] = useState(false)
  let colorField = useRef(null)
  let plateField = useRef(null)
  let capacityField = useRef(null)
  let vehicleTypeField = useRef(null)
  let firstnamefield = useRef(null)
  let lastnamefield = useRef(null)
  let emailfield = useRef(null)
  let passwordfield = useRef(null)

  const LoginFrm = useFormik({
    validationSchema: CaptainRegisterValidation,
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      color: '',
      plate: '',
      capacity: '',
      vehicleType: '',
    },
    onSubmit: async (FrmData) => {
      setShowLoginLoader(true)
      const captainData = {
        fullname: {
          firstname: FrmData.firstname,
          lastname: FrmData.lastname,
        },
        email: FrmData.email,
        password: FrmData.password,
        vehicle: {
          color: FrmData.color,
          plate: FrmData.plate,
          capacity: FrmData.capacity,
          vehicleType: FrmData.vehicleType,
        }
      }
    
      const response = await captainRegisterService(captainData)
      console.log(response)
      if (response.request.status === 201) {
        let data = response.data
        setCaptain(data.captain)
        localStorage.setItem('access-captain', data.token)
        navigate('/captain-home')
      }
      setShowLoginLoader(false)
      firstnamefield.current.value = ''
      lastnamefield.current.value = ''
      emailfield.current.value = ''
      passwordfield.current.value = ''
      colorField.current.value = ''
      plateField.current.value = ''
      capacityField.current.value = ''
      vehicleTypeField.current.value = ''
    }
  })
  return (
    <div className='px-7 py-4 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-4' src="/Assets/Images/driver-logo.webp" alt="" />

        <form onSubmit={LoginFrm.handleSubmit}>
          <div>
            <h3 className='text-lg font-medium mb-1'>What's your name</h3>
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

          <div className="min-h-24">
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

          <div>
            <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
            <div className='w-full min-h-16 flex space-x-4 mb-3'>
              <div className='w-1/2'>
                <input
                  ref={colorField}
                  name='color'
                  onChange={LoginFrm.handleChange}
                  type="text"
                  placeholder='Color'
                  className={`bg-[#eeeeee] rounded-md px-4 py-2 border w-full text-lg placeholder:text-base ${LoginFrm.errors.color && LoginFrm.touched.color && 'border-red-500 focus:outline-none'}`}
                />
                {LoginFrm.errors.color && LoginFrm.touched.color && <small className='text-red-500 text-sm'>{LoginFrm.errors.color}</small>}
              </div>
              <div className='w-1/2'>
                <input
                  ref={plateField}
                  name='plate'
                  onChange={LoginFrm.handleChange}
                  type="text"
                  placeholder='Plate'
                  className={`bg-[#eeeeee] rounded-md px-4 py-2 border w-full text-lg placeholder:text-base ${LoginFrm.errors.plate && LoginFrm.touched.plate && 'border-red-500 focus:outline-none'}`}
                />
                {LoginFrm.errors.plate && LoginFrm.touched.plate && <small className='text-red-500 text-sm'>{LoginFrm.errors.plate}</small>}
              </div>
            </div>
            <div className='w-full min-h-16 flex space-x-4 mb-6'>
              <div className='w-1/2'>
                <input
                  ref={capacityField}
                  name='capacity'
                  onChange={LoginFrm.handleChange}
                  type="text"
                  placeholder='Capacity'
                  className={`bg-[#eeeeee] rounded-md px-4 py-2 border w-full text-lg placeholder:text-base ${LoginFrm.errors.capacity && LoginFrm.touched.capacity && 'border-red-500 focus:outline-none'}`}
                />
                {LoginFrm.errors.capacity && LoginFrm.touched.capacity && <small className='text-red-500 text-sm'>{LoginFrm.errors.capacity}</small>}
              </div>
              <div className='w-1/2'>
                <select 
                ref={vehicleTypeField} 
                name="vehicleType" 
                id="vehicleSelector" 
                onChange={LoginFrm.handleChange}
                className={`bg-[#eeeeee] rounded-md px-4 py-2 border w-full text-lg placeholder:text-base ${LoginFrm.errors.vehicleType && LoginFrm.touched.vehicleType && 'border-red-500 focus:outline-none'}`}>
                  <option value="null">-Select vehicle-</option>
                  <option value="car">Car</option>
                  <option value="motorcycle">Motor Cycle</option>
                  <option value="auto">Auto</option>
                </select>
                {LoginFrm.errors.vehicleType && LoginFrm.touched.vehicleType && <small className='text-red-500 text-sm'>{LoginFrm.errors.vehicleType}</small>}
              </div>
            </div>
          </div>

          <button
            type='submit'
            className='bg-[#111] text-white flex justify-center font-semibold mb-3 rounded-md px-4 py-2 space-x-3 w-full text-lg placeholder:text-base'
          ><span>Create Account</span>
            {showLoginLoader && <SpinnerSm />}
          </button>

        </form>
        <p className='text-center'>Already have an account? <NavLink to='/captain-login' className='text-blue-600'>Login here</NavLink></p>
      </div>
      <div className='my-8'>
        <p className='text-[9px] leading-tight'>
          By proceeding, you consent to get calls, WhatsApp or SMS
          messages, including by automated means, from Uber and
          its affiliates to the number provided.
        </p>
      </div>
      <hr />
    </div>
  )
}
export default CaptainSignup