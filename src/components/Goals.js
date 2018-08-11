import React from 'react';
import Goal from './Goal';

const Goals = (props) => (
    <div>
        <h2> Your Goals </h2>
        {props.goals.length === 0 && <p> Please Add a Goal </p> }
        {
            props.goals.map((goal, index) => (
                <Goal
                    key={goal}
                    goalText={goal}
                    count={index + 1}
                />
            ))
        }
    </div>
)

export default Goals;