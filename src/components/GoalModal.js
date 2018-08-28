import React from 'react';
import Modal from 'react-modal';

const GoalModal = (props) => (
    <Modal
        isOpen={props.isModalVisible}
        contentLabel="test"
    >
        <div>
            <h1> {props.selectedGoal.goalText} </h1>
        </div>
    </Modal>
)
export default GoalModal;