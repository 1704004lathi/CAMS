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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/signup/create', {
        name,
        email,
        password,
      });

      console.log('Response:', response);
      if (response.status === 201) {
        console.log('User registered successfully');
        navigate('/');
      } else {
        console.log('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
      console.error('Error details:', error.response ? error.response.data : error);
    }
  };

  return (
    <div>
      <Navigation />
    <div className='register-wrapper'>
      
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>

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
    </div>
    </div>
  );
};

export default Sign;