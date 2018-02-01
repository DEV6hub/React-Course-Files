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
    this.setState({
      counter: counterValueFromChildComponent
    });
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
