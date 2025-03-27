import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../../assets/images/warning.svg'

const FailedMeterNumber: React.FC = () => {
    const navigate = useNavigate()
  return (
    <div className='invalid-container'>
        <img src={img} alt="" />
        <div className="header">
            <p>Invalid Meter Number</p>
        </div>
        <div className="mini-text">
            <p>Please check and try again</p>
        </div>
        <button onClick={()=> navigate('/meter')}> Try Again</button>
    </div>
  )
}

export default FailedMeterNumber
