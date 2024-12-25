import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Verify the token with the backend (optional)
      // You can make a protected API call here 
      // to verify the token with the backend.

      setUser({ token: storedToken }); 
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post('/api/auth/login', { username, password });
      const token = response.data.token; 
      localStorage.setItem('token', token); 
      setUser({ token }); 
    } catch (error) {
      console.error('Login failed:', error);
      throw error; // Re-throw the error to be handled by the calling component
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;