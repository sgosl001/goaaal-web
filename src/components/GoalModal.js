import React from 'react';
import Modal from 'react-modal';

const GoalModal = (props) => (
    <Modal
        isOpen={props.showModal}
        contentLabel="test"
    >
        <button onClick={props.handleCloseModal}> Close Modal</button>
    </Modal>
)

export default GoalModal;