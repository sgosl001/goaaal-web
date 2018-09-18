import React from 'react';
import uuid from 'uuid/v4'

class SubGoal extends React.Component {

    handleDeleteSubGoal = (e) => {
        e.preventDefault();
        this.props.deleteSubGoal(this.props.selectedGoal.id, this.props.id)
    }

    handleSubGoalCheckbox = () => {
        this.props.toggleSubGoalComplete(this.props.selectedGoal.id, this.props.id)
    }

    render() {
        console.log(this.props.completed)
        return(
            <div className="subgoal-container">
                <div style={{
                    display: 'flex'
                }}
                >
                    <div
                        className="subgoal-checkbox"
                        onClick={this.handleSubGoalCheckbox}
                    >
                        {this.props.completed && <i className="material-icons checkmark">done</i>}
                    </div>
                    <div className="subgoal-text">{this.props.text}</div>
                </div>
                <button 
                className="App-button subgoal-remove"
                onClick={this.handleDeleteSubGoal}
                > X
                </button>
            </div>
        )
    }
}

export default SubGoal;