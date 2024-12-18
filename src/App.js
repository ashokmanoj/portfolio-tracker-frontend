import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import StockForm from "./components/StockForm";
import StockTable from "./components/StockTable";

function App() {
    const [stocks, setStocks] = useState([]);
    const [totalValue, setTotalValue] = useState(0);

    const addStock = (stock) => {
        setStocks([...stocks, { ...stock, id: Date.now() }]);
        calculateTotalValue([...stocks, stock]);
    };

    const deleteStock = (id) => {
        const updatedStocks = stocks.filter((stock) => stock.id !== id);
        setStocks(updatedStocks);
        calculateTotalValue(updatedStocks);
    };

    const calculateTotalValue = (stocks) => {
        const value = stocks.reduce((sum, stock) => sum + stock.quantity * stock.buyPrice, 0);
        setTotalValue(value);
    };

    return (
        <div className="p-10 bg-gray-100 min-h-screen">
            <Dashboard totalValue={totalValue} topStock="Sample Stock" />
            <div className="mt-6 grid grid-cols-2 gap-10">
                <StockForm onSubmit={addStock} />
                <StockTable stocks={stocks} onDelete={deleteStock} />
            </div>
        </div>
    );
}

export default App;
