import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import RoutingDemo from './components/Demos/RoutingDemo';
import { FunWithLinks } from './components/Demos/FunWithLinks';
import './App.css';

export class ShirtShop extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="mainPageBody">
            <RoutingDemo />
            <FunWithLinks />
          </div>
        </div>
      </Router>
    );
  }
}

export default ShirtShop;
