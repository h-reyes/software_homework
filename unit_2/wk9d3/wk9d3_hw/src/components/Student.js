import React from "react";
import Score from "./Score"

const Student= ({student}) => {
    const {name, bio, scores} = student;

    return (
        <div>
            <h2>{name}</h2>
            <p>{bio}</p>
            {scores.map ((score, index) => (
                <Score key = {index} score={score}/>
            )
            )}
        </div>
    );
};

export default Student;
