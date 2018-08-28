import React from 'react';
import Modal from 'react-modal';

class Goal extends React.Component {
    state = {
        subGoal: "",
        subGoals: []
    }

    render() {
        const { count, id, subGoals, goalText} = this.props;
        return (
            <div>
                <div onClick={this.handleClick}>
                    {count}. {goalText}
                </div>
                <button onClick={this.handleRemoveClick}>remove</button>
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

    // handleSubGoalSubmit = (e) => {
    //     e.preventDefault() 
    //     this.setState((prevState) => ({ subGoals: prevState.subGoals.concat(this.state.subGoal) }));
    //     this.setState(() => ({ subGoal: '' }));
    // }
    
    // handleSubGoalChange = (e) => {
    //     const value = e.target.value;
    //     this.setState(() => ({subGoal: value}));
    // }

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
