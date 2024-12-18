import React, { useState } from "react";

const StockForm = ({ onSubmit }) => {
    const [stock, setStock] = useState({
        name: "",
        ticker: "",
        quantity: "",
        buyPrice: "",
    });

    const handleChange = (e) => {
        setStock({ ...stock, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(stock);
        setStock({ name: "", ticker: "", quantity: "", buyPrice: "" });
    };

    return (
        <form className="p-6 bg-white rounded-md shadow-md" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Add Stock</h2>
            <div className="mb-4">
                <label className="block text-sm text-gray-600">Stock Name</label>
                <input
                    type="text"
                    name="name"
                    value={stock.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm text-gray-600">Ticker</label>
                <input
                    type="text"
                    name="ticker"
                    value={stock.ticker}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm text-gray-600">Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    value={stock.quantity}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm text-gray-600">Buy Price</label>
                <input
                    type="number"
                    step="0.01"
                    name="buyPrice"
                    value={stock.buyPrice}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Add Stock
            </button>
        </form>
    );
};

export default StockForm;
