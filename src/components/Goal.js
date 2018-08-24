import React from 'react';
import Modal from 'react-modal';
import GoalModal from './GoalModal';

class Goal extends React.Component {
    state = {
        subGoal: "",
        subGoals: []
    }

    render() {
        const { count, goalText, handleOpenModal, isModalVisible, handleCloseModal, handleSubGoalChange, handleSubGoalSubmit } = this.props;
        return (
            <div>
                <GoalModal
                    subGoal={this.state.subGoal}
                    subGoals={this.state.subGoals}
                    isModalVisible={isModalVisible}
                    handleOpenModal={handleOpenModal}
                    handleCloseModal={handleCloseModal} 
                    handleSubGoalChange={handleSubGoalChange}
                    handleSubGoalSubmit={handleSubGoalSubmit}
                />
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

    handleSubGoalSubmit = (e) => {
        e.preventDefault() 
        this.setState((prevState) => ({ subGoals: prevState.subGoals.concat(this.state.subGoal) }));
        this.setState(() => ({ subGoal: '' }));
    }
    
    handleSubGoalChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({subGoal: value}));
    }

    componentWillMount(){
        Modal.setAppElement('body');
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('subGoals');
            const subGoals = JSON.parse(json);
            console.log("subgoal mounted")
      
            if (subGoals) {
              this.setState(() => ({ subGoals }));
            }
          } catch (e) {
            //do nothing
        }
    }
    
}

export default Goal;
