import React, { useContext } from 'react'
import { CaptainContext } from '../../Context/CaptainContext'

const CaptainHome = () => {
  const { captain } = useContext(CaptainContext)
  return (
    <div>Hello, Captain</div>
    // <div>Hell {captain.fullname.firstname}</div>
  )
}

export default CaptainHome