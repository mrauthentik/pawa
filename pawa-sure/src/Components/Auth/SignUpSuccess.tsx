import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/images/signup.svg'

const SignUpSuccess: React.FC = ()=>{
    return(
        <div className='signup-success-container'> 
            <img src={img} alt="Success" />
            <div className="signup-success-header">
                <p>Welcome to PawaSure</p>
            </div>
            <div className="signup-success-text">
                <p> Your account is set!✅ <br />
                 Now, let's connect your meter for a <br />
                    seamless experience.
                </p>
            </div>
            <button><Link to="/meter" className='link'>Connect Meter</Link> </button>
        </div>
    )
}

export default SignUpSuccess