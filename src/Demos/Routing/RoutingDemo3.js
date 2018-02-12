import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Note from './../Note';

// demonstrate how the children function works
export default class RoutingDemo3 extends React.Component {
  render() {
    console.log('RoutingDemo3::render()');

    // 1) two simple components and another one that contains links to both
    let Here = () => <p>You are Here</p>;
    let There = () => <p>You are There</p>;
    let Links = () => (
      <div>
        <Link to="/here">Go Here</Link> <Link to="/there">Go There</Link>
      </div>
    );

    return (
      <Router>
        <div>
          {note}

          {/* 2) each component is associated with a specific route path */}
          <Links />
          {/* <Route path="/here" component={Here} />
          <Route path="/there" component={There} /> */}

          {/* 4) use children() to deactivate links to the url you're already on */}
          {/* <Links2 /> */}

          {/* 3) the route below has a children property  */}
          {/* 3) the children function executes ALWAYS, not just when the path matches */}
          {/* 3) when the path doesn't match though, the match param is null */}

          <Route
            path="/here"
            children={({ match, location }) => (
              <div style={{ border: '1px solid black' }}>
                <p>
                  <code>Route.path</code>: /here.
                </p>
                <p>
                  <code>location.pathname</code>: {location.pathname}
                </p>
                {!match && (
                  <p>
                    <code>Route.path != location.pathname</code> so...
                  </p>
                )}
                {match && (
                  <p>
                    <code>Route.path == location.pathname</code> so...
                  </p>
                )}
                {!match ? (
                  <p>
                    <code>match</code>: null
                  </p>
                ) : (
                  <p>
                    <code>match</code>: NOT null <code>match.path</code>:{' '}
                    {match.path}
                  </p>
                )}
              </div>
            )}
          />

          {/* 4) this is not the same thing 
            <div>This always displays too but that's because it isn't associated with a route. 
            Without the route, though, there's no path and no match param so no way to tell if they are equal or not.</div>
            */}
        </div>
      </Router>
    );
  }
}

// used in conjunction with step 4
const Links2 = () => (
  <div>
    <Route
      path="/here"
      children={({ match }) =>
        match ? 'Go Here' : <Link to="/here">Go Here</Link>
      }
    />{' '}
    <Route
      path="/there"
      children={({ match }) =>
        match ? 'Go There' : <Link to="/there">Go There</Link>
      }
    />
  </div>
);

const note = (
  <Note
    note={
      <div>
        The <code>children</code> function always executes and returns{' '}
        <em>something</em>, even when <code>match</code> is null. This means
        that you can do a null check on <code>match</code> and respond
        accordingly.
      </div>
    }
  />
);
