import React, { useState } from 'react';
import axios from 'axios';

const StockForm = ({ isEditing, stock, onStockAdded, onStockUpdated }) => {
  const [name, setName] = useState(isEditing ? stock.name : '');
  const [ticker, setTicker] = useState(isEditing ? stock.ticker : '');
  const [quantity, setQuantity] = useState(isEditing ? stock.quantity : 1); 
  const [buyPrice, setBuyPrice] = useState(isEditing ? stock.buyPrice : '');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newStock = { name, ticker, quantity, buyPrice };

      if (isEditing) {
        await axios.put(`/api/stocks/${stock.id}`, newStock);
        onStockUpdated();
      } else {
        const response = await axios.post('/api/stocks', newStock);
        onStockAdded(response.data);
      }

      // Clear form fields after successful submission
      setName('');
      setTicker('');
      setQuantity(1); 
      setBuyPrice('');

    } catch (error) {
      console.error('Error submitting stock:', error);
      // Handle the error (e.g., display an error message to the user)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="ticker">Ticker:</label>
        <input 
          type="text" 
          id="ticker" 
          value={ticker} 
          onChange={(e) => setTicker(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input 
          type="number" 
          id="quantity" 
          value={quantity} 
          onChange={(e) => setQuantity(parseInt(e.target.value))} 
        />
      </div>
      <div>
        <label htmlFor="buyPrice">Buy Price:</label>
        <input 
          type="number" 
          id="buyPrice" 
          step="0.01" 
          value={buyPrice} 
          onChange={(e) => setBuyPrice(parseFloat(e.target.value))} 
        />
      </div>
      <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default StockForm;