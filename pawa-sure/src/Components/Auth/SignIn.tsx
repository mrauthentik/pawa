 import React from 'react'
 import { useNavigate, Link } from 'react-router-dom'
 import img from '../../assets/images/pawa.svg'
 

 const SignIn: React.FC =  ()=>{
    const navigate = useNavigate()
  return (
    <div className="signin-container">
        <div className="logo">
            <img src={img} alt="" />
            <div className="header">
                <p>Welcome Back ⚡</p>
            </div>
            <div className="mini-text">
                <p>Log in to track your meter, manage payment <br />
                and stay powered up
                </p>
            </div>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter Your Email' required/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter Your Password' required/>
                
                 <div className="forget">
                    <div className="remeber-input">
                        <input type="checkbox"  className='check'/>
                        <label htmlFor="remeber" className='remember-text'>Remember Me</label>
                    </div>
                    <Link to='/forgot-password' className='forget-link'>Forgot Password?</Link>
                 </div>
                <button type='submit' onClick={()=> navigate('/dashboard')}>Sign in</button>
                <p className='signin-text'>Don't have an account? <Link to='/signup'>Sign up</Link></p>
            </form>
        </div>
    </div>
  )
 }

 export default SignIn