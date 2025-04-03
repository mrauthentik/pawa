import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material'; // Import MUI icons
import img from '../../assets/images/pawa.svg';

const SignIn: React.FC = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="signin-container">
            <div className="logo">
                <img src={img} alt="Logo" />
                <div className="header">
                    <p>Welcome Back ⚡</p>
                </div>
                <div className="mini-text">
                    <p>Log in to track your meter, manage payment <br /> and stay powered up</p>
                </div>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Your Email" required />

                    <label htmlFor="password">Password</label>
                    <div className="password-wrapper">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Enter Your Password" 
                            required 
                        />
                        <span 
                            className="eye-icon" 
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </span>
                    </div>

                    <div className="forget">
                        <div className="remember-input">
                            <input type="checkbox" className="check" />
                            <label htmlFor="remember" className="remember-text">Remember Me</label>
                        </div>
                        <Link to="/forgot-password" className="forget-link">Forgot Password?</Link>
                    </div>

                    <button type="submit" onClick={() => navigate('/dashboard')}>Sign in</button>
                    <p className="signin-text">Don't have an account? <Link to="/signup">Sign up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
