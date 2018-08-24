import React from 'react';
import Modal from 'react-modal';

const GoalModal = (props) => (
    <Modal
        isOpen={props.isModalVisible}
        contentLabel="test"
        subGoal={props.subGoal}
        subGoals={props.subGoals}
    >
        <div>
            {props.subGoals.map((subGoal) => subGoal)}
            <form onSubmit={props.handleSubGoalSubmit}>
                <input type="text" name="subgoal" value={props.subGoal} onChange={props.handleSubGoalChange}/>
                <button onClick={props.handleOpenModal}> add SubGoal </button>
            </form>
        </div>
        <button onClick={props.handleCloseModal}> Close Modal</button>
    </Modal>
)
export default GoalModal;