import React from 'react';
import Modal from 'react-modal';

class Goal extends React.Component {
    state={
        completed: false
    }

    render() {
        const { count, id, subGoals, goalText} = this.props;
        return (
            <div className="Container">
                <div style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <div className="checkbox"
                        hidden={subGoals.length > 0} 
                        onClick={this.handleCheckboxClick}
                    >
                        {this.state.completed && <i className="material-icons checkmark">done</i>}
                    </div>
                    <div className="goal-text" onClick={this.handleClick}>
                        {goalText}
                    </div>
                </div>
                <button
                    className="App-button" 
                    onClick={this.handleRemoveClick}>
                        <i className="material-icons"> delete_forever </i>
                </button>
            </div>
        );
    }

    handleCheckboxClick = () => {
        this.setState((prevState) => ({
            completed: !prevState.completed
        }));
    }
    
    handleRemoveClick = () => {
        const { handleDeleteGoal, id } = this.props;
        handleDeleteGoal(id);
    }

    handleClick = () => {
        this.props.handleSelectGoal(this.props.id);
    }

    componentWillMount(){
        Modal.setAppElement('body');
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('subGoals');
            const subGoals = JSON.parse(json);
      
            if (subGoals) {
              this.setState(() => ({ subGoals }));
            }
          } catch (e) {
            //do nothing
        }
    }
    
}

export default Goal;
