import React from 'react';
import uuid from 'uuid/v4'

class SubGoal extends React.Component {

    handleDeleteSubGoal = (e) => {
        e.preventDefault();
        this.props.deleteSubGoal(this.props.selectedGoal.id, this.props.id)
    }

    render() {
        console.log(this.props.completed)
        return(
            <div className="subgoal-container">
                <div style={{
                    display: 'flex'
                }}
                >
                    <input
                        type="checkbox"
                        onClick={!this.props.completed}
                    />
                    <div>{this.props.text}</div>
                </div>
                <button 
                className="App-button"
                onClick={this.handleDeleteSubGoal}
                > X
                </button>
            </div>
        )
    }
}

export default SubGoal;