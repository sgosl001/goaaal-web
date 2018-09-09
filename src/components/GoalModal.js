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

    handleDeleteSubGoal = (e) => {
        e.preventDefault();
        this.props.deleteSubGoal(this.props.selectedGoal.id, this.state.subGoal)
    }

    componentDidUpate(propsPrev, statePrev) {
        const { selectedGoal } = this.props;
        const { selectedGoal:selectedGoalPrev } = propsPrev;

        if (selectedGoal !== selectedGoalPrev) {
            console.log('selectedGoal changed in modal! selectedGoal:', selectedGoal);
        }
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
                            key={uuid()}> {index + 1}. {subGoal}
                            <button
                                className="App-button"
                                onClick={this.handleDeleteSubGoal}
                            > X
                            </button>
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
