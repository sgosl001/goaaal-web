import React from 'react';
import GoalModal from './GoalModal';

const Goal = (props) => (
    <div>
        <GoalModal showModal={props.showModal} handleCloseModal={props.handleCloseModal} />
        <button onClick={(e) => { props.handleDeleteGoal(props.goalText); }}>
            {props.count}. {props.goalText}
        </button>
        <button onClick={props.handleOpenModal}>remove</button>
    </div>
);

export default Goal;
