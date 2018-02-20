import React, { Component } from 'react';
import './Error.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Return error message
      return <h1 className="error">Something went wrong in component</h1>;
    }
    // Return children components when no errors
    return this.props.children;
  }
}

export default ErrorBoundary;
