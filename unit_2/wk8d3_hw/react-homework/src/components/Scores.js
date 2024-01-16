import React from "react";

function Scores(scoreData) {
    return(
        <div>
            {scoreData?.scoreData?.map((score,index) => (
                <ul>
                    <li>
                        {score.date}
                    </li>
                    <li>
                        {score.score}
                    </li>
                </ul>
            )
            )}
        </div>
    )
}
