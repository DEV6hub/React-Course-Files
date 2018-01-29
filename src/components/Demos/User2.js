import React from 'react';

// incomplete

export default class User2 extends React.Component {
  componentWillReceiveProps(nextProps) {
    // will be true
    let locationChanged = nextProps.location !== this.props.location;
    console.log(nextProps.location);
    console.log(this.props.location);
    console.log(
      'nextProps.location !== this.props.location: ' + locationChanged
    );

    // INCORRECT, will *always* be false because history is mutable.
    //locationChanged = nextProps.history.location !== this.props.history.location;
    console.log(nextProps.history.location);
    console.log(this.props.history.location);
    console.log(
      'nextProps.history.location !== this.props.history.location: ' +
        locationChanged
    );
  }

  render() {
    return (
      <button
        onClick={() => {
          this.props.history.push('/user/Gord');
        }}
      >
        Change History
      </button>
    );
  }
}
