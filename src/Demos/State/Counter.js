import React, { Component } from 'react';
import './../Demos.css';

class Counter extends Component {
  updateCounter(event) {
    let newCounterValue = this.props.stateValueFromParent;
    if (event.currentTarget.id === DECREMENT) {
      newCounterValue--;
    } else if (event.currentTarget.id === INCREMENT) {
      newCounterValue++;
    }
    // this.props.functionToUpdateParentState is a function
    // that was defined in my parent and passed to me as a prop
    // React doesn't allow two-way data binding
    // React only does one-way data flow, from parent to child
    // Child components can not access parent data directly
    // This demo illustrates the pattern you use when a parent
    // wants to provide a child with WRITE access to its state data
    this.props.functionToUpdateParentState(newCounterValue);
  }

  render() {
    return (
      <div>
        {note1}
        <p>
          <code>this.props.counterValueFromParent</code>:{' '}
          {this.props.counterValueFromParent}
        </p>

        {note2}
        <button id={DECREMENT} onClick={this.updateCounter.bind(this)}>
          {DECREMENT}
        </button>
        <button id={INCREMENT} onClick={this.updateCounter.bind(this)}>
          {INCREMENT}
        </button>
      </div>
    );
  }
}

export default Counter;

const INCREMENT = '+';
const DECREMENT = '-';

const note1 = (
  <div className="note">
    <p>
      I'm the <code>Counter</code> component and I am invoked by my parent,{' '}
      <code>StateDemo</code>.
    </p>
    <p>
      My parent has some <code>state</code> that it passes to me via a{' '}
      <code>prop</code>.
    </p>
  </div>
);
const note2 = (
  <p className="note">
    My parent also passes me a function to call (via{' '}
    <code>this.props.functionToUpdateParentState</code>) when you click the
    buttons below.
  </p>
);
