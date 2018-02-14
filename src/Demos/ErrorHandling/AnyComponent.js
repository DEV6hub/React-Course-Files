import React, { Component } from 'react';

class AnyComponent extends Component {
  render() {
    if (this.props.counter > this.props.max) {
      // Only errors from the render function get caught by the Error Boundary component
      throw new Error('Counter too high!!');
    }
    return <div>{this.props.counter}</div>;
  }
}

export default AnyComponent;
