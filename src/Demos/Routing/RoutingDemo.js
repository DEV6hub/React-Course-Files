import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class RoutingDemo extends React.Component {
  render() {
    let demo = 2;
    switch (demo) {
      case 1:
        return this.render1('Using the component and render functions');
        break;
      case 2:
        return this.render2(
          'Understanding route props: match, location, history'
        );
        break;
      case 3:
        return this.render3('Using the children function');
        break;
      default:
        return null;
        break;
    }
  }

  // demonstrate how the component and render functions work
  render1(title) {
    console.log('Demo::render1 ' + title);

    // 1) define and display a simple component with no props
    // let User = () => <p>Hello User</p>;
    // return <User />;

    // 2) add props to the component and display them; no route involved
    let User = ({ username }) => <p>Hello {username}</p>;
    // return (<User username="Bob"/>);

    // 3) add route for /bob using incorrect syntax and show the error
    // return (<Router><div>
    //     <Route path="/routing/user" component={ <User username="Bob"/> } />
    // </div></Router>);

    // 4) correct the syntax but lose the username prop
    // return (<Router><div>
    //     <Route path="/routing/user" component={ User } />
    // </div></Router>);

    // 5) define the function inline to regain the ability to pass props
    // return (<Router><div>
    //     <Route path="/routing/user" component={ () => (<User username="Barb" /> ) } />
    // </div></Router>);

    // 6) a) put username in state so that it will trigger a render...
    // 6) b) ...switch to User2 to show in the console how the component mounts and unmounts every time it's rendered.
    //        hint: click the 'update something useless' button; the state change will trigger a render
    // return (<Router><div>
    //     {this.buttons()}
    //     <p>navigate to "/user" to get started</p>
    //     {/* <Route path="/routing/user" component={ () => (<User username={this.state.username} /> ) } /> */}
    //     {/* <Route path="/routing/user" component={ () => (<User2 username={this.state.username} /> ) } /> */}
    //     {/* if the component function is defined inline, React.createElement() is called everytime the function executes */}
    // </div></Router>);

    // 7) switch to the render prop to solve the unmount/mount problem
    return (
      <Router>
        <div>
          {this.buttons()}
          <Route
            path="/routing/user"
            render={() => <User2 username={this.state.username} />}
          />
        </div>
      </Router>
    );

    return null;
  }
  // used in conjunction with render1()
  constructor() {
    super();
    this.state = {
      username: 'Bob',
      useless: true
    };
  }
  updateUsername(un) {
    this.setState({ username: un });
  }
  updateUseless() {
    this.setState({ useless: !this.state.useless });
  }
  buttons() {
    return (
      <div>
        <button
          onClick={e => {
            this.updateUsername('Sarah');
          }}
        >
          Sarah
        </button>
        <button
          onClick={e => {
            this.updateUsername('Bobby');
          }}
        >
          Bobby
        </button>
        <button
          onClick={e => {
            this.updateUseless('');
          }}
        >
          update something useless
        </button>
      </div>
    );
  }
  // used in conjunction with render1()

  getArticle = () => 'article';
  // display route props: match, location, history
  render2(title) {
    console.log('Demo::render2 ' + title);
    let User = props => <p>Hello {props.username}</p>;
    // add a query string and a hash to the location bar in the browser: instrument=guitar#loc
    return (
      <Router>
        <div>
          <Link to="/routing/params">part 1</Link> {' | '}
          <Link to="/routing/params/bob">part 2a</Link> {' | '}
          <Link to="/routing/params/barb">part 2b</Link> {' | '}
          <Link to="/routing/params/bob/allparams">part 3</Link> {' | '}
          <Link to="/routing/params/bob/paramExperiments">part 4</Link>
          <br />
          {/* 1) start simple: simple path, simple render function, simple component */}
          <Route
            exact
            path="/routing/params"
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
            path="/routing/params/:username"
            render={({ match }) => {
              let article = this.getArticle(match.params.username);
              // if (article) {
              //   return <Article data={ article }/>
              // } else {
              //   return <NotFound />
              // }
              return (
                <div>
                  {article ? <p>article</p> : <p>not found</p>}
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
            path="/routing/params/:username/allparams"
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
            path="/routing/params/:username/paramExperiments"
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

  // demonstrate how the children function works
  render3(title) {
    console.log('Demo::render3 ' + title);
    // 1) two simple components and another one that links to them both
    let Links = () => (
      <div>
        <Link to="/here">Go Here</Link> <Link to="/there">Go There</Link>
      </div>
    );
    let Here = () => <p>You are Here</p>;
    let There = () => <p>You are There</p>;

    return (
      <Router>
        <div>
          {/* 2) each component is associated with a specific route path */}
          <Links />
          {/* <Route path="/here" component={Here} />
          <Route path="/there" component={There} /> */}

          {/* 4) use children() to deactivate links to the url you're already on */}
          <Links2 />

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
                    <code>match.path</code>: NOT null ({match.path})
                  </p>
                )}
                <p>
                  The <code>children</code> function always executes and returns{' '}
                  <em>something</em>, even when <code>match</code> is null.
                </p>
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

// used in conjunction with render3(), step 4
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

// used in conjunction with render1(), steps 6 and 7
class User2 extends React.Component {
  componentDidMount() {
    console.log('User2::componentDidMount');
  }
  componentWillUnmount() {
    console.log('User2::componentWillUnmount');
  }
  render() {
    return <p>Hello {this.props.username}</p>;
  }
}
// used in conjunction with render1(), steps 6 and 7
