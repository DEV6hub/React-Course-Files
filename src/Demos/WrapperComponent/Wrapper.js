import React, { Component } from 'react';
import './Wrapper.css';

class Wrapper extends Component {
  render() {
    // Just returns the children
    return <div className="childContainer">{this.props.children}</div>;
  }
}

export default Wrapper;
