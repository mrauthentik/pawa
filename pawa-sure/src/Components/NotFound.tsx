import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../assets/images/404.svg'

const NotFound:React.FC = ()=>{
    const navigate = useNavigate()
    return(
        <div className='not-found-container'>
            <img src={img} alt="" />
            <div className="header">
                <p>Page Not Found</p>
            </div>
            <div className="mini-text">
                <p>We can't find the page you're looking for <br />
                Let's get you back on track
                </p>
            </div>
                <button onClick={()=> navigate('/dashboard')}>Go to Dashboard</button>   
        </div>
    )
}
export default NotFound