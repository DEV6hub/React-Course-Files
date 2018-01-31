import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Jsxex from './JSX';
// import Form from './Form';
import Counter from './Counter';

class App extends Component {
  constructor() {
    super();
    this.updateTotal = this.updateTotal.bind(this);
    this.state = {
      counter: 0
    };
  }

  updateTotal(updatedCounter) {
    this.setState({
      counter: updatedCounter
    });
  }

  render() {
    return (
      <div className="App">
        <Counter myCounter={this.state.counter} updateTot={this.updateTotal} />
      </div>
    );
  }
}

export default App;
