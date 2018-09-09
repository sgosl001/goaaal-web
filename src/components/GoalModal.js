import React from 'react';
import Modal from 'react-modal';
import SubGoal from './SubGoal'
import uuid from 'uuid/v4'


class GoalModal extends React.Component {
    
    state = {
        subGoal: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addSubGoal(this.props.selectedGoal.id, {
            id: uuid(),
            text: this.state.subGoal,
            completed: false
        });

        this.setState(() => ({
            subGoal: ''
        }));
    }

    handleSubGoalsChange = (e) => {
        const newValue = e.target.value;
        this.setState(() => ({subGoal: newValue}))
    }

    render() {
        const { subGoals } = this.props.selectedGoal;
        const isEnabled = this.state.subGoal.length > 0;
        return(
            <Modal
            isOpen={this.props.isModalVisible}
            contentLabel="test"
            >
                <div>
                    <h1> {this.props.selectedGoal.goalText} </h1>

                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            name="subgoal" 
                            value={this.state.subGoal}
                            onChange={this.handleSubGoalsChange}
                            placeholder="type a subgoal..."
                        />
                        <button disabled={!isEnabled}>add subgoal</button>
                    </form>
                    {
                        subGoals && subGoals.map((subGoal, index) => <SubGoal 
                            key={subGoal.id}
                            count={index + 1} 
                            id={subGoal.id}
                            text={subGoal.text}
                            deleteSubGoal={this.props.deleteSubGoal}
                            selectedGoal={this.props.selectedGoal} 
                            />)
                    }
                    <div>
                        <button onClick={() => this.props.closeModal()}> X </button>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default GoalModal;