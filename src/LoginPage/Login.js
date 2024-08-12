import React, { useState } from 'react';
import './Login.css';
import { FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../Nav/Navigation';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'asd') {
      setMessage('Admin login successful!');
      navigate('/AdminDashboard');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        emailId: email,  // Ensure this matches the backend field
        password
      });

      if (response.status === 200) {
        setMessage('Login successful!');
        navigate('/'); // Redirect to the user's homepage or desired page
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessage('Invalid credentials!');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <Navigation />
      <div className='login-wrapper'>
        <form onSubmit={handleSubmit}>
          <h1 className='login-lg'>Login</h1>
          <div className='login-input-box'>
            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaUser className='icon' />
          </div>
    
          <div className='login-input-box'>
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className='icon' />
          </div>
          <div className='login-remember-forgot'>
            <label><input type='checkbox' />Remember me</label>
            <Link to="/ForgotPasswordPage">Forgot password?</Link>
          </div>
          <button type="submit" className='login-button'>Login</button>
          <div className='login-register-link'>
            <p className='login-do'>Don't have an account? <Link to="/SignIn">Register</Link></p>
          </div>
          {message && <p className='login-message'>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
