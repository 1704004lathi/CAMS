// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const login = (username, password) => {
    // Simulate authentication (replace with your auth logic)
    if (username === 'Lathika_1704' && password === 'lathika@17') {
      setCurrentUser({ username, role: 'admin' });
      navigate('/AdminDashboard');
    } else if (username === 'user' && password === 'user') {
      setCurrentUser({ username, role: 'user' });
      navigate('/UserDashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const value = {
    currentUser,
    login,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
