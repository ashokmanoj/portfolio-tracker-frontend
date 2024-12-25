import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockForm from './StockForm'; 

const StockList = () => {
    const [stocks, setStocks] = useState([]);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editingStock, setEditingStock] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
        const fetchStocks = async () => {
            try {
              const response = await axios.get('/api/stocks', {
                headers: {
                  Authorization: `Bearer ${user.token}` 
                }
              });
              // ... (rest of the code) ... 
            } catch (error) {
              if (error.response && error.response.status === 401) {
                // Handle unauthorized access (e.g., log the user out) 
                logout(); // Call the logout function from AuthContext 
                navigate('/login'); 
              } 
              // ... (other error handling) ... 
            }
          
            finally {
                setIsLoading(false); // Set loading state to false after fetching data 
              }
        };
        fetchStocks();
    }, []);  

    

  const handleEdit = (stock) => {
    setIsEditing(true);
    setEditingStock(stock);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/stocks/${id}`);
      setStocks(stocks.filter((stock) => stock.id !== id)); 
    } catch (error) {
      console.error('Error deleting stock:', error);
    }
  };

  const handleStockAdded = (newStock) => {
    setStocks([...stocks, newStock]);
  };

  const handleStockUpdated = () => {
    // Refetch the updated stock list from the server
    fetchStocks(); 
  };

  return (
    <div>
    {error && <div className="error-message">{error}</div>} 
    {/* Display error message if present */}
      <table>
        {/* ... (table headers as before) ... */}
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.name}</td>
              <td>{stock.ticker}</td>
              <td>{stock.quantity}</td>
              <td>${stock.buyPrice.toFixed(2)}</td>
              <td>
                <button onClick={() => handleEdit(stock)}>Edit</button>
                <button onClick={() => handleDelete(stock.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <StockForm 
        isEditing={isEditing} 
        stock={editingStock} 
        onStockAdded={handleStockAdded} 
        onStockUpdated={handleStockUpdated} 
      />
    </div>
  );
};

export default StockList;