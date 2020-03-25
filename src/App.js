import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Drake', age: 17},
      {name: 'Josh', age: 16}
    ]
  }

  switchNameHandler = () => {
    //console.log('Was clicked!');
    // DONT DO THIS! this.state.persons[0].name = "magen";
    this.setState( { 
      persons: [
        {name: 'Drake', age: 17},
        {name: 'Joshie', age: 16}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Gamesphere! It's sphirical!</Person>
      </div>
    );
  }
}

export default App;
