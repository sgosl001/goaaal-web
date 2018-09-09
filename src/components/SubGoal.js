import React from 'react';
import uuid from 'uuid/v4'

class SubGoal extends React.Component {

    handleDeleteSubGoal = (e) => {
        e.preventDefault();
        this.props.deleteSubGoal(this.props.selectedGoal.id, this.props.id)
    }

    render() {
        return(
            <div>
                {this.props.count}. {this.props.text}
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