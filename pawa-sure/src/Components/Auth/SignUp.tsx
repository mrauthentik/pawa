import React from 'react'
import logo from '../../assets/images/home-icon.png'

const SignUp: React.FC = ()=>{
    return(
        <div className='signup-container'>
            <div className="signup-img">
            <img src={logo} alt='PawaSure Logo' />
            </div>
            <div className="signup-header-text">
                <h1>Join PawaSure Today</h1>
            </div>
            <div className="signup-mini-text">
                <p>Take full control of your electricity <br />
                with easy payments, smart tracking and <br />
                real-time monitoring
                </p>

                <div className="signup-form">
                    <form action="#">
                        <label htmlFor="fullname">Full Name</label>
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
                        />
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                            type="password" 
                            placeholder='Confirm your password' 
                            required
                        />
                        <button type='submit'>Sign Up</button>
                        <p>Already a Member? <a href='/login'>Sign In</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignUp