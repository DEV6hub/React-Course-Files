import React, { Component } from 'react';
import Wrapper from './Wrapper';

class WrapperDemo extends Component {
  render() {
    return (
      // The wrapped child component is a wrapper for the h1 and p tags
      <Wrapper>
        <h1>Wrapped Child</h1>
        <p>Lorem ipsum dolerum...</p>
      </Wrapper>
    );
  }
}

export default WrapperDemo;
