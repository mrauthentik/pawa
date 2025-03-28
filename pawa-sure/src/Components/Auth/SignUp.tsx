import React from 'react'
import { useNavigate  } from 'react-router-dom'

import logo from '../../assets/images/pawa.svg'

const SignUp: React.FC = ()=>{
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')

    const navigate = useNavigate()
    const handleSignUp = ()=>{
       
        if(password !== confirmPassword){
            alert('Passwords do not match')
            return 
        }else{
           navigate('/signup-success') 
        }
        
        
        console.log('Sign Up')
    }

    return(
        <div className='signup-container'>
            <div className="signup-img">
            <img src={logo} alt='PawaSure Logo' />
            </div>
            <div className="signup-header-text">
                <p>Join PawaSure Today</p>
            </div>
            <div className="signup-mini-text">
                <p>Take full control of your electricity <br />
                with easy payments, smart tracking and <br />
                real-time monitoring
                </p>
            </div>
                <div className="signup-form">
                    <form onSubmit={()=>handleSignUp}>
                        <label htmlFor="fullname">Username</label>
                        <input 
                            type="text" 
                            placeholder='Enter your full name'
                            required
                         />
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            placeholder='Enter your email'
                            required
                         />
                        <label htmlFor="phone">Phone Number</label>
                        <input 
                                type='tel' 
                                placeholder='Enter your phone number' 
                                required
                        />
                        <label htmlFor="password">Password</label>
                        <input 
                            type='password' 
                            placeholder='Enter your password' 
                            required
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                            type="password" 
                            placeholder='Confirm your password' 
                            required
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                        />
                        <button 
                        type='submit' 
                        className='signup-btn' onClick={handleSignUp}>
                            Sign Up
                            </button>
                        <div className="already-a-member">
                        <p>Already a Member? <a href='/signin'>Sign In</a></p>
                        </div>
                    </form>
                
            </div>
        </div>
    )
}
export default SignUp