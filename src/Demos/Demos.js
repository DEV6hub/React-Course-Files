import React from 'react';

import RoutingDemo1 from './Routing/RoutingDemo1';
import RoutingDemo2 from './Routing/RoutingDemo2';
import RoutingDemo3 from './Routing/RoutingDemo3';
import FunWithLinks from './Routing/FunWithLinks';
import StateDemo from './State/StateDemo';
import TypeCheckingDemo from './TypeChecking/TypeCheckingDemo';
import FragmentsDemo from './Fragments/FragmentsDemo';

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
          <FragmentsDemo />
          {/* 
            <RoutingDemo1 />
            <RoutingDemo2 />
            <RoutingDemo3 />
            <FunWithLinks />
            <StateDemo />
            <TypeCheckingDemo />
          */}
        </div>
      </div>
    );
  }
}
