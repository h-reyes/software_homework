import React from "react";
import Scores from './Scores';

function Students ({studentData}) {
    return (
        <div>
            {studentData.students[0].map((student, index) => (
                <ul key = {index}>
                    <li>
                        {student?.name}
                    </li>
                    <li>
                        {student?.bio}
                    </li>
                    <li>
                        <Scores scoreData={student.scores}/>
                    </li>
                </ul>
            )
            )}
        </div>
    )
}
export default Students;