 import React from 'react'
 import { useNavigate, Link } from 'react-router-dom'
 import img from '../../assets/images/pawa.svg'

 const SignIn: React.FC =  ()=>{
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
                <p className='mini-text'>Forgot Password?</p>
                <button type='submit'>Sign in</button>
                <p className='signin-text'>Don't have an account? <Link to='/signup'>Sign up</Link></p>
            </form>
        </div>
    </div>
  )
 }

 export default SignIn