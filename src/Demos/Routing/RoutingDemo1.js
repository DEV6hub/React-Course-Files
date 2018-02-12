import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// demonstrate how the component and render functions work
export default class RoutingDemo1 extends React.Component {
  render() {
    console.log('RoutingDemo1::render()');

    let User;
    User = () => <p>Hello User</p>;
    //User = ({ username }) => <p>Hello {username}</p>;

    return (
      <Router>
        <div>
          {/* 1) define and display a simple component with no props */}
          <User />

          {/* 2) add props to the component and display them; no route involved */}
          {/* <User username="Bob"/> */}

          {/* MANUALLY navigate to /routing/user to continue with this demo */}

          {/* 3) add route for /bob using incorrect syntax and show the error */}
          {/* <Route path="/routing/user" component={ <User username="Bob"/> } /> */}

          {/* 4) correct the syntax but lose the username prop */}
          {/* <Route path="/routing/user" component={ User } /> */}

          {/* 5) define the function inline to regain the ability to pass props */}
          {/* <Route path="/routing/user" component={ () => (<User username="Barb" /> ) } /> */}

          {/* used by steps 6 and 7 */}
          {/* {this.buttons()} */}

          {/* 6) a) put username in state so that it will trigger a render when it changes
          6) b) ...switch to User2 to show in the console how the component mounts and unmounts every time it's rendered.
             hint: click the 'update something useless' button; the state change will trigger a render */}
          {/* <Route path="/routing/user" component={ () => (<User username={this.state.username} /> ) } /> */}
          {/* <Route path="/routing/user" component={ () => (<User2 username={this.state.username} /> ) } /> */}
          {/* if the component function is defined inline, React.createElement() is called everytime the function executes */}

          {/* 7) switch to the render prop to solve the unmount/mount problem */}
          {/* <Route path="/routing/user" render={() => <User2 username={this.state.username} />} /> */}
        </div>
      </Router>
    );
  }

  // EVERYTHING below here is used in conjunction with steps 6 and 7
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
