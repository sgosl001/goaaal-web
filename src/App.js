import React, { Component } from 'react';
import './styles/App.css'
import uuid from 'uuid/v4';
import Goals from './components/Goals';
import GoalModal from './components/GoalModal';
import SimpleStorage from "react-simple-storage";

//TODO create percentage for goal completion
//TODO add alerts

class App extends Component {
  state = {
      goal: '',
      goals: [],
      selectedGoal: '',
      isModalVisible: false,
  };

  handleDeleteGoal = (id) => {
    this.setState((prevState) => ({
      goals: prevState.goals.filter((goal) => goal.id !== id)
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault() 
    this.setState((prevState) => ({ goals: prevState.goals.concat({
      goalText: this.state.goal,
      id: uuid(),
      subGoals: []
    }) }));
    this.setState(() => ({ goal: '' }));
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({goal: value}));
  }

  selectGoal = (id) => {
    const selectedGoal = this.state.goals.find(goal => goal.id === id); 
    this.setState(() => ({ selectedGoal }));
  }

  addSubGoal = (id, subgoal) => {
    let selectedGoal;
    const nextGoals = this.state.goals.map((goal) => {
      if (goal.id === id) {

        selectedGoal = {
          ...goal,
          subGoals: [...goal.subGoals, subgoal]
        };

        return selectedGoal;

      } else {
        return goal;
      }
    });

    this.setState(() => ({
        goals: nextGoals,
        selectedGoal
      }));
  }

  
  deleteSubGoal = (goalId, subGoalId) => {
      let selectedGoal;
      const currentGoals = this.state.goals.map((goal) => {
        if (goal.id === goalId) {

          selectedGoal = {
            ...goal,
            subGoals: goal.subGoals.filter((subGoal) => subGoal.id !== subGoalId)
          };

          return selectedGoal;

        } else {
          return goal;
        }
      });

      this.setState(() => ({
        goals: [...currentGoals],
        selectedGoal
      }));
  }

  closeModal = () => {
    this.setState(() => ({ selectedGoal: '' }) );
  }
  
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Goaaal</h1>
        </header>
        <div className="App">
          <SimpleStorage parent={this}/>
          <p className="App-intro" hidden={this.state.goals.length > 0}>
            To get started, add a goal.
          </p>
          <form className="add-goal-form" onSubmit={this.handleSubmit}>
              <input
                className="add-goal"
                type="text" 
                name="goal" 
                value={this.state.goal} 
                onChange={this.handleChange}
                placeholder="Type a goal..."
              />
              <button 
                className="App-button add-goal__button"
                disabled={!this.state.goal}
              >
                  <i class="material-icons">add</i>
              </button>
          </form>
          <Goals
            goals={this.state.goals}
            handleDeleteGoal={this.handleDeleteGoal}
            handleSelectGoal={this.selectGoal}
            handleSubmit={this.handleSubmit}
          />
          <GoalModal
            isModalVisible={!!this.state.selectedGoal}
            selectedGoal={this.state.selectedGoal}
            closeModal={this.closeModal}
            addSubGoal={this.addSubGoal}
            deleteSubGoal={this.deleteSubGoal}
          />
        </div>
      </div>
    );
  }
}

export default App;
