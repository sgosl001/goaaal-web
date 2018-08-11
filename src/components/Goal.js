import React from 'react';

const Goal = (props) => (
    <div>
        <p>{props.count}. {props.goalText}</p>
    </div>
);

export default Goal;