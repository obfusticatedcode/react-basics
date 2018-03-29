import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Jones', 
        age: 28
      }, 
      {
        name: 'Alex', 
        age: 29
      }, 
      {
        name: 'Eva', 
        age: 26
      }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
      {
        name: newName, 
        age: 28
      }, 
      {
        name: 'Alex', 
        age: 29
      }, 
      {
        name: 'Eva', 
        age: 27
      }
    ] });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Jones', age: 28 }, 
        { name: event.target.value, age: 29 }, 
        { name: 'Eva', age: 27 }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white', 
      font: 'inherit',
      padding: '8px', 
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button className="button"
          style = { style }
          onClick = {() => this.switchNameHandler('Cory')}>Switch Name</button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}/>
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, 'Grace')}
          changed = {this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'));
  }
}

export default App;
