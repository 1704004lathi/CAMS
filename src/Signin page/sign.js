
import React, { useState } from 'react';
import './sign.css';
import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navigation from "../Nav/Navigation";
const Sign = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState(''); // 'success' or 'error'
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/create', {
        username: name, // Ensure fields match backend expectations
        emailId: email,
        password,
        mobileNumber: '', // If mobileNumber is not used, adjust accordingly
      });

      if (response.status === 200) {
        setAlertMessage('Registration successful!');
        setAlertType('success');
        navigate('/Login');
      } else {
        setAlertMessage('Registration failed. Please try again.');
        setAlertType('error');
      }
    } catch (error) {
      setAlertMessage('Error submitting form. Please try again.');
      setAlertType('error');
      console.error('Error submitting form:', error.message);
      console.error('Error details:', error.response ? error.response.data : error);
    }
  };

  return (
    <div className='bls'>
      <Navigation />
    <div className='register-wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>

        {alertMessage && (
          <div className={`register-alert ${alertType}`}>
            {alertMessage}
          </div>
        )}

        <div className='register-input-box'>
          <input
            type="text"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FaUser className='iconmax' />
        </div>
        <div className='register-input-box'>
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FaUser className='iconmax' />
        </div>
        <div className='register-input-box'>
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className='iconmax' />
        </div>

        <button type="submit" className='register-button'>Register</button>
        <div className='register-link'>
          <p>Already have an account? <a href="/login">Sign in</a></p>
        </div>
      </form>
    </div></div>
  );
};

export default Sign;
