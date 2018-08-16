import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Goals from './components/Goals';

//TODO add array for goal steps
//TODO create percentage for goal completion
//TODO add alerts
//TODO local storage for subgoals

class App extends Component {
  state = {
      goal: "",
      goals: [],
      isModalVisible: false
  };

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

    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.goals.length !== this.state.goals.length) {
      const json = JSON.stringify(this.state.goals);
      localStorage.setItem('goals', json);
    }
  }

  componentWillUnmount(){
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    this.saveStateToLocalStorage();
  }
  
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
          handleOpenModal={this.handleOpenModal}
          handleCloseModal={this.handleCloseModal}
          isModalVisible={this.state.isModalVisible}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
