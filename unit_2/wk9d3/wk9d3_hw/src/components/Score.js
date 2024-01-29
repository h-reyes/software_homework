import React from "react";

const Score= ({score}) => {
    const { date, score: scoreValue } = score;

    return (
        <div>
            <p>Date: {date}</p>
            <p>Score: {scoreValue}</p>
        </div>
    );
};

export default Score;