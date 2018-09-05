import React from 'react';
import Modal from 'react-modal';
import uuid from 'uuid/v4'


class GoalModal extends React.Component {
    
    state = {
        subGoal: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addSubGoal(this.props.selectedGoal.id, this.state.subGoal);

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
                        subGoals && this.props.selectedGoal.subGoals.map((subGoal, index) => 
                            <div 
                            key={this.props.selectedGoal.id}> {index + 1}. {subGoal}
                            </div>)
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