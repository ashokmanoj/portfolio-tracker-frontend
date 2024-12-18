import React from "react";

const StockTable = ({ stocks, onEdit, onDelete }) => {
    return (
        <table className="w-full bg-white rounded-md shadow-md">
            <thead>
                <tr className="bg-gray-100 text-left">
                    <th className="p-4">Name</th>
                    <th className="p-4">Ticker</th>
                    <th className="p-4">Quantity</th>
                    <th className="p-4">Buy Price</th>
                    <th className="p-4">Actions</th>
                </tr>
            </thead>
            <tbody>
                {stocks.map((stock) => (
                    <tr key={stock.id} className="border-b">
                        <td className="p-4">{stock.name}</td>
                        <td className="p-4">{stock.ticker}</td>
                        <td className="p-4">{stock.quantity}</td>
                        <td className="p-4">${stock.buyPrice}</td>
                        <td className="p-4">
                            <button
                                onClick={() => onEdit(stock)}
                                className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(stock.id)}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StockTable;
