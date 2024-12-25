import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [portfolioValue, setPortfolioValue] = useState(0);

  useEffect(() => {
    const fetchPortfolioValue = async () => {
      try {
        const response = await axios.get('/api/stocks/portfolio-value'); 
        setPortfolioValue(response.data);
      } catch (error) {
        console.error('Error fetching portfolio value:', error); 
      }
    };

    fetchPortfolioValue();
  }, []); 

  return (
    <div>
      <h2>Portfolio Value: ${portfolioValue}</h2> 
      {/* ... other portfolio metrics */} 
    </div>
  );
};

export default Dashboard;