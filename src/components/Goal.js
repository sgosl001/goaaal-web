import React from 'react';
import GoalModal from './GoalModal';


class Goal extends React.Component {
    render() {
        const { count, goalText, handleOpenModal, showModal, handleCloseModal } = this.props;
        return (
            <div>
                <GoalModal showModal={showModal} handleCloseModal={handleCloseModal} />
                <button onClick={handleOpenModal}>
                    {count}. {goalText}
                </button>
                <button onClick={this.handleRemoveClick}>remove</button>
            </div>
        );
    }
    
    handleRemoveClick = () => {
        const { handleDeleteGoal, goalText } = this.props;
        handleDeleteGoal(goalText);
    }
}

export default Goal;
