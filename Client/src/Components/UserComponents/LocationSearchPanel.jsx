import React from 'react'
import { TfiLocationPin } from "react-icons/tfi";
const LocationSearchPanel = (props) => {
  const locations = [
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "22C, Near Malholtra's cafe, Sheryians Coding School, Bhopal",
    "20B, Near Singhai's cafe, Sheryians Coding School, Bhopal",
    "18A, Near Sharma's cafe, Sheryians Coding School, Bhopal",
  ]
  return (
    <div>
        {/* this is just a sample data  */}
        {
            locations.map(function (elem, idx) {
                return <div key={idx} onClick={() => {
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start transition-all duration-500 ease-in-out'>
                    <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><TfiLocationPin size={30} /></h2>
                    <h4 className='font-medium'>{elem}</h4>
                </div>
            })
        }
    </div>
)
}

export default LocationSearchPanel