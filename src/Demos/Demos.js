import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import RoutingDemo from './Routing/RoutingDemo';
import FunWithLinks from './Routing/FunWithLinks';
import StateDemo from './State/StateDemo';
import TypeCheckingDemo from './TypeChecking/TypeCheckingDemo';

import './Demos.css';

const Nav = () => (
  <div style={styles.navmenu}>
    <Link to="/routing">Routing</Link>
    <Link to="/links">Links</Link>
    <Link to="/state">State</Link>
    <Link to="/typechecking">Type Checking</Link>
  </div>
);

export default class Demos extends React.Component {
  render() {
    console.log('App::render');
    return (
      <Router>
        <div className="container">
          <div className="appTitle">
            <h3>the demos page</h3>
          </div>
          <Route component={Nav} />
          <div className="mainPageBody">
            <Route path="/routing" component={RoutingDemo} />
            <Route path="/links" component={FunWithLinks} />
            <Route path="/state" component={StateDemo} />
            <Route path="/typechecking" component={TypeCheckingDemo} />
          </div>
        </div>
      </Router>
    );
  }
}

const styles = {
  navmenu: {
    backgroundColor: 'linen',
    border: '1px solid lightsteelblue',
    padding: '5px',
    display: 'flex',
    justifyContent: 'space-around'
  }
};
