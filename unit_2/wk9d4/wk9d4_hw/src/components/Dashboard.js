import React from "react";
import { Link } from "react-router-dom";
import stocksData from  "../data/data"

const Dashboard = () => {
    return(
        <div className="dashboard">
            <h1>Dashboard</h1>
            <ul>
                {stocksData.map((stock) => (
                    <li key={stock.symbol}>
                        <Link to={`/stocks/${stock.symbol}`}>
                            {stock.name} ({stock.symbol})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;