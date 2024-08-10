import React, { useState } from 'react';
import './Login.css';
import { FaLock, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navigation from '../Nav/Navigation';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div>
      <Navigation />
    <div className='login-wrapper'>
      
      <form onSubmit={handleSubmit}>
        <h1 className='login-lg'>Login</h1>
        <div className='login-input-box'>
          <input
            type="text"
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser className='icon' />
        </div>
        <div className='login-input-box'>
          <input
            type="password"
            placeholder='password'
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
      </form>
    </div>
    </div>
  );
};

export default Login;
