import React from 'react'
import { useNavigate } from 'react-router-dom'  
import img from '../../assets/images/check.svg'

const MeterSuccess: React.FC = ()=>{
    const navigate = useNavigate()
    return(
        <div className='meter-success-container'>
            <img src={img} alt="Check icon" />
            <p className='header'>Meter Added Successfully</p>
            <p className='mini-text'>You're all set! Track, pay, and stay <br />
            powered up.</p>
            <button onClick={()=>navigate('/dashboard')}>Go to Dashboard</button>
        </div>
    )
}
export default MeterSuccess