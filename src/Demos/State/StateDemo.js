import React from 'react';
import Counter from './Counter';

class StateDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  updateMyStateVariable(counterValueFromChildComponent) {
    this.setState(
      {
        counter: counterValueFromChildComponent
      },
      () => {
        console.log(
          'callback executes after state is updated: ' + this.state.counter
        );
      }
    );

    // setState is async so reading state immediately after setting it may not provide the correct value
    console.log(
      'sync read... state is not guaranteed to be accurate: ' +
        this.state.counter
    );
  }

  render() {
    return (
      <Counter
        counterValueFromParent={this.state.counter}
        functionToUpdateParentState={this.updateMyStateVariable.bind(this)}
      />
    );
  }
}

export default StateDemo;
