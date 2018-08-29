import React from 'react';
import Modal from 'react-modal';

const GoalModal = (props) => (
    <Modal
        isOpen={props.isModalVisible}
        contentLabel="test"
    >
        <div>
            <h1> {props.selectedGoal.goalText} </h1>

            <form>
                <input type="text" name="subgoal" value={props.selectedGoal.subGoal}/>
                <button onClick={() => props.addSubGoal(props.selectedGoal.id, props.selectedGoal.subgoal)}>add subgoal</button>
            </form>

            <div>
                <button onClick={() => props.closeModal()}> X </button>
            </div>
        </div>
    </Modal>
)
export default GoalModal;