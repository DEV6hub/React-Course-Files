import React, { Component } from 'react';
import Counter from './Counter';

class StateDemo extends Component {
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

export default StateDemo;
