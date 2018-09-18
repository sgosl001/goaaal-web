import React from 'react';
import Modal from 'react-modal';

class Goal extends React.Component {
    state = {
        completed: false,
        width: 0
    }

    render() {
        const { count, id, subGoals, goalText} = this.props;
        this.getProgressBarWidth();
        return (
            <div className="Container">
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%"
                }}>
                    <div className="checkbox"
                        hidden={subGoals.length > 0} 
                        onClick={this.handleCheckboxClick}
                    >
                        {this.state.completed && <i className="material-icons checkmark">done</i>}
                    </div>
                    <div style={{
                        width: "100%"
                    }}>
                        <div className="goal-text" onClick={this.handleClick}>
                            {goalText}
                        </div>
                        <div style={{
                            maxWidth: "100%",
                            background: "red"
                        }}>
                            <div style={{
                                background: "#16D9AB",
                                height: "10px",
                                width: this.state.width + "%"
                            }}>
                            </div>
                        </div>
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

    getProgressBarWidth = () => {
        const { subGoals } = this.props;
        let completed = 0;
        for (let i = 0; i < subGoals.length; i++) {
            completed++;
        }
        const width = (completed / subGoals.length) * 100;
        console.log(width);
        this.setState(() => {(
            width
        )});
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
