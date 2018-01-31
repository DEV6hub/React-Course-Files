import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import RoutingDemo from './components/Demos/RoutingDemo';
import FunWithLinks from './components/Demos/FunWithLinks';

import './App.css';
import './components/NavBar/NavBar.css';

const Nav = () => (
  <div className="navmenu">
    <Link to="/routing">Routing</Link>
    <Link to="/links">Links</Link>
  </div>
);

export default class Demos extends React.Component {
  render() {
    console.log('App::render');
    return (
      <Router>
        <div className="container">
          <div className="appTitle">
            <h1>React Demos</h1>
          </div>
          <Route component={Nav} />
          <div className="mainPageBody">
            <Route path="/routing" component={RoutingDemo} />
            <Route path="/links" component={FunWithLinks} />
          </div>
        </div>
      </Router>
    );
  }
}
