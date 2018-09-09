import React from 'react';
import Modal from 'react-modal';

class Goal extends React.Component {
    state={
        completed: false
    }

    render() {
        const { count, id, subGoals, goalText} = this.props;
        return (
            <div>
                <div>
                    <div 
                        onClick={this.handleClick}>
                        {count}. {goalText}
                    </div>
                    <input 
                        hidden={subGoals.length > 0}
                        type="checkbox" 
                        value={this.state.completed} 
                        onClick={!this.state.completed}>
                    </input>
                </div>
                <button
                    className="App-button" 
                    onClick={this.handleRemoveClick}>
                        remove
                </button>
            </div>
        );
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
