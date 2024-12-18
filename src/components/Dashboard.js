import React from "react";

const Dashboard = ({ totalValue, topStock }) => {
    return (
        <div className="p-6 bg-blue-50 rounded-md shadow-md">
            <h1 className="text-3xl font-bold text-gray-800">Portfolio Dashboard</h1>
            <p className="text-xl text-gray-600 mt-2">
                Total Portfolio Value: <span className="font-semibold text-green-600">${totalValue}</span>
            </p>
            <p className="text-md text-gray-600 mt-2">
                Top Performing Stock:{" "}
                <span className="font-semibold text-blue-600">{topStock}</span>
            </p>
        </div>
    );
};

export default Dashboard;
