import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import uuid from 'uuid/v4';
import Goals from './components/Goals';
import GoalModal from './components/GoalModal';

//TODO add array for goal steps
//TODO create percentage for goal completion
//TODO add alerts
//TODO local storage for subgoals

class App extends Component {
  state = {
      goal: '',
      goals: [],
      selectedGoal: '',
      isModalVisible: false
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

  handleOpenModal = () => {
    console.log('in open modal button click');
    this.setState({isModalVisible: true});
  }

  handleCloseModal = () => {
    console.log('in CLOSE modal button click');
    //e.stopPropagation(); // blocks click from bubbling to parent button which is in parent
    this.setState({isModalVisible: false});
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  selectGoal = (id) => {
    const selectedGoal = this.state.goals.find((goal) => {
      return goal.id === id;
    });
    this.setState(() => ({ selectedGoal }));
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('goals');
      const goals = JSON.parse(json);

      if (goals) {
        this.setState(() => ({ goals }));
      }
    } catch (e) {
      //do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.goals.length !== this.state.goals.length) {
      const json = JSON.stringify(this.state.goals);
      localStorage.setItem('goals', json);
    }
  }

  componentWillUnmount(){}
  
  render() {
    console.log(this.state.isModalVisible);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Goaaal</h1>
        </header>
        <p className="App-intro">
          To get started, add a goal.
        </p>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="goal" value={this.state.goal} onChange={this.handleChange}/>
            <button>Add Goal</button>
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
        />
      </div>
    );
  }
}

export default App;
