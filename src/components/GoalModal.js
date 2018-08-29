import React from 'react';
import Modal from 'react-modal';


class GoalModal extends React.Component {
    
    state = {
        subGoal: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addSubGoal(this.props.selectedGoal.id, e);

        this.setState(() => ({
            subGoal: ''
        }));
    }

    handleSubGoalsChange = (e) => {
        const newValue = e.target.value;
        this.setState(() => ({subGoal: newValue}))
    }

    render() {
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
                        <button>add subgoal</button>
                    </form>

                    <div>
                        <button onClick={() => this.props.closeModal()}> X </button>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default GoalModal;