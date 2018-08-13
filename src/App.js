import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Goals from './components/Goals';

//TODO add modal for each separate goal
//TODO add array for goal steps
//TODO create percentage for goal completion

class App extends Component {
  constructor() {
    super();  
    this.state = {
      goal: "",
      goals: [],
      showModal: false
      };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }


  handleDeleteGoal = (goalToRemove) => {
    this.setState((prevState) => ({
      goals: prevState.goals.filter((goal) => goalToRemove !== goal)
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault() 
    this.setState((prevState) => ({ goals: prevState.goals.concat(this.state.goal) }));
    this.setState(() => ({ goal: '' }));
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({goal: value}));
  }

  handleOpenModal () {
    this.setState({showModal: true});
  }

  handleCloseModal () {
    this.setState({showModal: false});
  }
  
  render() {
    console.log(this.state.showModal);
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
          handleOpenModal={this.handleOpenModal}
          handleCloseModal={this.handleCloseModal}
          showModal={this.state.showModal}
        />
      </div>
    );
  }
}

export default App;
