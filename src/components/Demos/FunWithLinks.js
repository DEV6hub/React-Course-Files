import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export const FunWithLinks = () => (
  <Router>
    <div>
      <Route component={Links} />
      {/* Routes with no path always match */}
      <Route path="/here" component={Here} />
      <Route path="/there" component={There} />
      <Route path="/everywhere" component={Everywhere} />
    </div>
  </Router>
);

const Here = () => <p>You are Here</p>;
const There = () => <p>You are There</p>;

const Everywhere = ({ location }) => (
  <div>
    <p>You are Everywhere</p>
    <p>You came from {location.state.from}</p>
    <p>search: {location.search}</p>
    <p>hash: {location.hash}</p>
  </div>
);

const Links = ({ location }) => (
  <div>
    {/* a simple Route with a string path */}
    <Route
      path="/here"
      children={({ match }) =>
        match ? 'Go Here' : <Link to="/here">Go Here</Link>
      }
    />
    {' | '}

    {/* another simple Route with a string path */}
    {/* uncomment the match line in the children 
        function to render a "location aware" link */}
    <Route
      path="/there"
      children={({ match }) => (
        //match ? "Go There" :
        <Link to="/there">Go There</Link>
      )}
    />
    {' | '}

    {/* a Route with an object path that describes the location to navigate to */}
    {/* the search, hash and state variables are passed to the target route as 
        properties of the location route prop... inside that component, use 
        {location.search}, {location.hash}, {location.state.from}
    */}
    <Link
      to={{
        pathname: '/everywhere',
        search: '?sort=name',
        hash: '#the-hash',
        state: { from: location.pathname }
      }}
    >
      Everywhere
    </Link>
  </div>
);
