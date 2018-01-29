import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import RoutingDemo from './components/Demos/RoutingDemo';
import './App.css';

export class ShirtShop extends React.Component {
  render() {
    console.log('App::render');
    return (
      <Router>
        <div className="container">
          <div className="mainPageBody">
            <RoutingDemo />
          </div>
        </div>
      </Router>
    );
  }
}

export default ShirtShop;
