import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import AnyComponent from './AnyComponent';

// Only errors from the render functions are caught by the Error Boundary component
// A single Error Boundary component can have multiple children or each children can have its own Error Boundary parent component depending on the usecase.
// In dev environment, a raw error screen appears right after the Error Boundary component displays the error.
// Note: This does not happen in production and Error Boundary works as intended when app crashes.

class ErrorHandlingDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
          <AnyComponent counter={this.state.counter} max={5} />
        </ErrorBoundary>
        <button onClick={this.incrementCounter.bind(this)}>
          Increment Counter
        </button>
      </div>
    );
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }
}

export default ErrorHandlingDemo;
