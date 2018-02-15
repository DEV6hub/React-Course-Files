import React from 'react';
import store from 'store';

export default class SmartAndDumbCombined extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    this.setState({ people: store.get('people') });
  }

  // in this example, display concerns are separated from data concerns
  render() {
    return <Dumb people={this.state.people} />;
  }
}

const Dumb = props => {
  let displayPerson = function(person) {
    return (
      <div key={person.id}>
        {person.fname} {person.lname} is {person.age} years old
      </div>
    );
  };
  return <div>{props.people.map(displayPerson)}</div>;
};
