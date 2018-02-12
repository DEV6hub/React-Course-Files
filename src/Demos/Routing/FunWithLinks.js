/*
this file demonstrates the following:
  - pathless Routes
  - two different ways to define Links
    - the 'to' attribute specified as a string
    - the 'to' attribute specified as an object
  - passing state to a target location with the Link component
  - using the 'location' Route prop to read state variables
  - using the 'match' Route prop to build location aware links
      - link is not active when you're already on the target page
*/

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Here = () => (
  <p>
    You are Here<hr />
  </p>
);
const There = () => (
  <p>
    You are There<hr />
  </p>
);

const FunWithLinks = () => (
  <Router>
    <div>
      {/* Routes with no path always match so */}
      {/* the Links component is always displayed */}
      <Route component={Links} />

      {/* Routes with a path defined will only render the */}
      {/* target component when the url matches the path */}
      <Route path="/here" component={Here} />
      <Route path="/there" component={There} />
      <Route path="/everywhere" component={Everywhere} />
    </div>
  </Router>
);
export default FunWithLinks;

// this component is rendered by a Route
// so it has access to the Route's properties
// location.state will contain whatever arbitrary
// data that is passed from the Link
const Everywhere = ({ location }) => (
  <div>
    <p>
      You are Everywhere<hr />
    </p>
    <p>
      You came from <code>{location.state.arbitraryNameForStateVariable}</code>
    </p>
    <p>
      search: <code>{location.search}</code>
    </p>
    <p>
      hash: <code>{location.hash}</code>
    </p>
  </div>
);

const Links = ({ location }) => (
  <div>
    {/* a simple Route with a string path */}
    {/* match param is null when the url */}
    {/* does not match the route's path */}
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
      children={({ match }) =>
        match ? 'Go There' : <Link to="/there">Go There</Link>
      }
    />

    {' | '}

    {/* a Route with an object path that describes the location to navigate to */}
    {/* the state variables are passed to the target route as properties of the
        location route prop... inside that component, use 
        {location.state.arbitraryNameForStateVariable}
    */}
    <Link
      to={{
        pathname: '/everywhere',
        state: { arbitraryNameForStateVariable: location.pathname },
        search: 'abc=123&def=456',
        hash: 'lksdfhb'
      }}
    >
      Go Everywhere
    </Link>
  </div>
);
