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

  // in this example, data concerns are mixed with presentation concerns
  render() {
    let displayPerson = function(person) {
      return (
        <div key={person.id}>
          {person.fname} {person.lname} is {person.age} years old
        </div>
      );
    };
    return <div>{this.state.people.map(displayPerson)}</div>;
  }
}
