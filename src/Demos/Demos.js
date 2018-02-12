import React from 'react';

import RoutingDemo from './Routing/RoutingDemo';
import FunWithLinks from './Routing/FunWithLinks';
import StateDemo from './State/StateDemo';
import TypeCheckingDemo from './TypeChecking/TypeCheckingDemo';

import './Demos.css';

export default class Demos extends React.Component {
  render() {
    console.log('Demos::render');
    return (
      <div className="container">
        <div className="appTitle">
          <h3>the demos page</h3>
        </div>
        <div className="mainPageBody">
          <RoutingDemo />
          {/* 
  <StateDemo />
  <FunWithLinks />
  <TypeCheckingDemo />
*/}
        </div>
      </div>
    );
  }
}
