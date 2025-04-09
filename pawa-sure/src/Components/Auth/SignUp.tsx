import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from '../../assets/images/pawa.svg';

const SignUp: React.FC = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent form from reloading the page

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        console.log('Sign Up successful');
        navigate('/signup-success');
    };

    return (
        <div className="signup-container">
            <div className="signup-img">
                <img src={logo} alt="PawaSure Logo" />
            </div>
            <div className="signup-header-text">
                <p>Join PawaSure Today</p>
            </div>
            <div className="signup-mini-text">
                <p>
                    Take full control of your electricity <br />
                    with easy payments, smart tracking, and <br />
                    real-time monitoring
                </p>
            </div>
            <div className="signup-form">
                <form onSubmit={handleSignUp}>
                    <label htmlFor="fullname">Username</label>
                    <input type="text" placeholder="Enter your full name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter your email" required />

                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" placeholder="Enter your phone number" required />

                    {/* Password Field with Eye Icon */}
                    <label htmlFor="password">Password</label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </span>
                    </div>

                    {/* Confirm Password Field with Eye Icon */}
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="password-wrapper">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm your password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </span>
                    </div>

                    <button type="submit" className="signup-btn">
                        Sign Up
                    </button>

                    <div className="already-a-member">
                        <p>
                            Already a Member? <Link to='/signin'> Sign In</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
