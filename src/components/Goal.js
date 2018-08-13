import React from 'react';
import GoalModal from './GoalModal';

const Goal = (props) => (
    <div>
        <button 
            onClick={props.handleOpenModal}
        >
            <GoalModal
                showModal={props.showModal}
                handleCloseModal={props.handleCloseModal}
            />
            {props.count}. {props.goalText}</button>
        <button 
            onClick={(e) => {
            props.handleDeleteGoal(props.goalText);
        }}
        >
         remove
        </button>
    </div>
);

export default Goal;