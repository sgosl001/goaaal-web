import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Goals from './components/Goals';


class App extends Component {
  state = {
    goal: "",
    goals: []
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
  
  render() {
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
        />
      </div>
    );
  }
}

export default App;
