import React, { Component } from 'react';
import Note from './../Note';

class Counter extends Component {
  updateCounter(event) {
    let newCounterValue = this.props.counterValueFromParent;
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
        <div>
          <code>this.props.counterValueFromParent</code>:{' '}
          {this.props.counterValueFromParent}{' '}
          <button id={DECREMENT} onClick={this.updateCounter.bind(this)}>
            {DECREMENT}
          </button>
          <button id={INCREMENT} onClick={this.updateCounter.bind(this)}>
            {INCREMENT}
          </button>
        </div>
        {note2}
      </div>
    );
  }
}

export default Counter;

const INCREMENT = '+';
const DECREMENT = '-';

const note1 = (
  <Note
    note={
      <div>
        <div>
          I'm the <code>Counter</code> component and I am invoked by my parent,{' '}
          <code>StateDemo</code>. My parent has some <code>state</code> that it{' '}
          passes to me via a <code>prop</code>.
        </div>
      </div>
    }
  />
);
const note2 = (
  <Note
    note={
      <div>
        My parent also passes me a function that I call when you click the
        buttons above, <code>this.props.functionToUpdateParentState</code>{' '}
      </div>
    }
  />
);
