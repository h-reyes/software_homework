import React from "react";
import { useParams } from "react-router-dom";
import stocksData from "../data/data";

const Stock = () => {
    const {symbol} = useParams();
    const stock = stocksData.find((s) => s.symbol === symbol);

    if (!stock) {
        return <p>Stock not found</p>;
    }

    return (
        <div>
            <h1>{stock.name} ({stock.symbol})</h1>
            <p>Last Price: {stock.lastPrice}</p>
            <p>Change: {stock.change}</p>
            <p>High: {stock.high}</p>
            <p>Low: {stock.low}</p>
            <p>Open: {stock.open}</p>
        </div>
    );
};

export default Stock;