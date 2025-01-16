import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiHomeCircle } from "react-icons/bi";
import { TfiLocationPin } from "react-icons/tfi";
import { RiCurrencyFill } from "react-icons/ri";

const Riding = () => {
  return (
    <div className='h-screen'>
      <NavLink to='/home' className='fixed right-4 top-4 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <BiHomeCircle size={45} />
      </NavLink>
      <div className='h-1/2'>
        {/* <LiveTracking /> */}

      </div>
      <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
          <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
          <div className='text-right'>
            <h2 className='text-lg font-medium capitalize'>{'Yash Mandloi'}</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>{'MP 09 WX 0001'}</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>

          </div>
        </div>

        <div className='flex gap-2 justify-between flex-col items-center'>
          <div className='w-full mt-5'>

            <div className='flex items-center gap-5 p-3 border-b-2'>
              <TfiLocationPin />
              <div>
                <h3 className='text-lg font-medium'>562/11-A</h3>
                <p className='text-sm -mt-1 text-gray-600'>{"TI Mall"}</p>
              </div>
            </div>
            <div className='flex items-center gap-5 p-3'>
              <RiCurrencyFill />
              <div>
                <h3 className='text-lg font-medium'>₹{'50'} </h3>
                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
      </div>
    </div>
  )
}

export default Riding