import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Verify the token with the backend (optional)
      const verifyToken = async () => {
        try {
          const response = await axios.get('/api/auth/verify', { 
            headers: {
              Authorization: `Bearer ${storedToken}` 
            }
          }); 
          if (response.status === 200) { 
            setUser({ token: storedToken }); 
          }
        } catch (error) {
          console.error('Token verification failed:', error);
          localStorage.removeItem('token'); 
        }
      };

      verifyToken(); 
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
      throw error; 
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