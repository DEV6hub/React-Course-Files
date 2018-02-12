import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class RoutingDemo1 extends React.Component {
  // demonstrate how the component and render functions work
  render() {
    console.log('RoutingDemo1');

    // 1) define and display a simple component with no props
    //let User = () => <p>Hello User</p>;
    //return <User />;

    // 2) add props to the component and display them; no route involved
    let User = ({ username }) => <p>Hello {username}</p>;
    //return (<User username="Bob"/>);

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
    //     <p>navigate to "/routing/user" to get started</p>
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
}

// used in conjunction with steps 6 and 7
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
