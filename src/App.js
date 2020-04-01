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

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    // DON'T DO THIS (dosen't work): this.state.persons[0].name = "Joshie";
    // Component class (that we extend) gives us this built-in method - "setState"
    // "Do not mutate state directly. Use setState()"
    this.setState( { 
      persons: [
        {name: 'Drake', age: 17},
        {name: newName, age: 16}
      ],
      otherState: "Some other value"
    })
  }

  nameChangedHandler = (event) => {
    this.setState( { 
      persons: [
        //The target property of the Event interface is a reference to the object that dispatched the event.
        {name: event.target.value, age: 17},
        {name: 'Josh', age: 16}
      ],
      otherState: "Some other value"
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler.bind(this,'The amazing Joshoe')}>Switch Name</button>
        <Person
         name={this.state.persons[0].name} 
         age={this.state.persons[0].age}
         changed={this.nameChangedHandler}/>
        <Person
         name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         click={() => this.switchNameHandler('Joshie')}>
        Gamesphere! It's sphirical!
        </Person>
      </div>
    );
  }
}

export default App;
