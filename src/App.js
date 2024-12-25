import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Dashboard from './components/Dashboard';
import StockList from './components/StockList';
import Login from './components/Login';
import Register from './components/Register'; 
import { useAuth } from './AuthContext'; 

function App() {
  const { user } = useAuth();

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route 
            path="/dashboard" 
            element={user ? <Dashboard /> : <Navigate to="/" />} 
          /> 
          <Route 
            path="/stocks" 
            element={user ? <StockList /> : <Navigate to="/" />} 
          /> 
          {/* ... other routes ... */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;