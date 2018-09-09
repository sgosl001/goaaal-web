import React, { Component } from 'react';
import './App.css';
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
            subGoals: goal.subGoals.filter((subGoal, id) => id !== subGoalId)
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
    const isDisabled = !this.state.goals.length;
    return (
      <div className="App">
        <SimpleStorage parent={this}/>
        <header className="App-header">
          <h1 className="App-title">Goaaal</h1>
        </header>
        <p className="App-intro" hidden={this.state.goals.length > 0}>
          To get started, add a goal.
        </p>
        <form onSubmit={this.handleSubmit}>
            <input
              type="text" 
              name="goal" 
              value={this.state.goal} 
              onChange={this.handleChange}
              placeholder="type a goal..."
            />
            <button className="App-button" 
              disabled={isDisabled}>
                Add Goal
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
    );
  }
}

export default App;
