import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.updateCounter = this.updateCounter.bind(this);
  }

  updateCounter(e) {
    let myNewCounter = this.props.myCounter;
    const newCounter =
      e.currentTarget.id === 'increment' ? myNewCounter + 1 : myNewCounter - 1;
    this.props.updateTot(newCounter);
  }

  render() {
    return (
      <div>
        <p>Counter: {this.props.myCounter}</p>
        <button onClick={e => this.updateCounter(e)} id="decrement">
          -
        </button>
        <button onClick={e => this.updateCounter(e)} id="increment">
          +
        </button>
      </div>
    );
  }
}

export default Counter;
