import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class RoutingDemo2 extends React.Component {
  // display route props: match, location, history
  render() {
    console.log('RoutingDemo2');
    let User = props => <p>Hello {props.username}</p>;
    // add a query string and a hash to the location bar in the browser: instrument=guitar#loc
    return (
      <Router>
        <div>
          <Link to="/params">part 1</Link> {' | '}
          <Link to="/params/bob">part 2a</Link> {' | '}
          <Link to="/params/barb">part 2b</Link> {' | '}
          <Link to="/params/bob/allparams">part 3</Link> {' | '}
          <Link to="/params/bob/paramExperiments">part 4</Link>
          <br />
          {/* 1) start simple: simple path, simple render function, simple component */}
          <Route
            exact
            path="/params"
            render={() => (
              <div>
                <User username="Bob" />
                <hr />
              </div>
            )}
          />
          {/* 
          2)  the route path includes a :username param
              the render function accepts a match property
              the component to use the match param
              update the first Route to use exact to make it disappear
          */}
          <Route
            path="/params/:username"
            render={({ match }) => {
              return (
                <div>
                  <User username={match.params.username} />
                  <hr />
                </div>
              );
            }}
          />
          {/* 
          3) render function accepts all params and dumps them to the screen  
              update the second route to use exact to make it disappear
          */}
          <Route
            path="/params/:username/allparams"
            render={({ match, location, history }) => (
              <div>
                <pre>
                  <a name="mat">match:</a>
                  <br />
                  {JSON.stringify(match, null, 2)}
                  <hr />

                  <a name="loc">location:</a>
                  <br />
                  {JSON.stringify(location, null, 2)}
                  <hr />

                  <a name="his">history:</a>
                  <br />
                  {JSON.stringify(history, null, 2)}
                  <hr />
                  <button
                    onClick={() => {
                      history.go(-7);
                    }}
                  >
                    Go Back 7
                  </button>
                </pre>
              </div>
            )}
          />
          {/* 
          4)  
              strict: OFF; click the isExact link, match.isExact (true)
              strict: ON:  click the isExact link, match.isExact (false)
              click the two + hash links and notice the result
              click the 
          */}
          <Route
            path="/params/:username/paramExperiments"
            render={({ match, location, history }) => (
              <div>
                <div>
                  <Link to={location.pathname + '/'}>isExact and strict</Link>{' '}
                  {' | '}
                  <Link to={match.url + '#hash'}>+ hash</Link> {' | '}
                  <Link to={location.pathname + '#hash'}>+ hash</Link> {' | '}
                  <Link to={match.url + '?instrument=guitar'}>
                    + search
                  </Link>{' '}
                  {' | '}
                  <Link to={location.pathname + '?instrument=guitar'}>
                    + search
                  </Link>
                </div>
                <pre>
                  <a name="mat">match:</a>
                  <br />
                  {JSON.stringify(match, null, 2)}
                  <hr />

                  <a name="loc">location:</a>
                  <br />
                  {JSON.stringify(location, null, 2)}
                  <hr />

                  <a name="his">history:</a>
                  <br />
                  {JSON.stringify(history, null, 2)}
                  <hr />
                  <button
                    onClick={() => {
                      history.go(-1);
                    }}
                  >
                    Back
                  </button>
                  <button
                    onClick={() => {
                      history.go(+1);
                    }}
                  >
                    Forward
                  </button>
                  <button
                    onClick={() => {
                      history.go(-7);
                    }}
                  >
                    Go Back 7
                  </button>
                </pre>
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}
