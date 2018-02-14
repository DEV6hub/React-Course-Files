import React, { Fragment } from 'react';
import Note from './../Note';

export default class FragmentsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property1: 'uno',
      property2: 'dos',
      property3: 'tres'
    };
  }

  render() {
    return (
      <div>
        {note1}
        <table>
          <tr>
            <th>One</th>
            <th>Two</th>
            <th>Three</th>
          </tr>
          <tr>{this.renderColumns()}</tr>
        </table>
      </div>
    );
  }

  renderColumns() {
    // this produces the desired output but
    // it also produces a compiler error:
    // Adjacent JSX elements must be wrapped in an enclosing tag
    // return (
    //     <td>{this.state.property1}</td>
    //     <td>{this.state.property2}</td>
    //     <td>{this.state.property3}</td>
    // );

    // this addresses the compiler error but
    // produces the wrong output (nested tr tags)
    // return (
    //     <tr>
    //         <td>{this.state.property1}</td>
    //         <td>{this.state.property2}</td>
    //         <td>{this.state.property3}</td>
    //     </tr>
    // );

    // this provides the right output with no compiler error
    // note that this requires React 16.2 to work properly
    // don't forget to run ```yarn install```
    // return (
    //     <Fragment>
    //         <td>{this.state.property1}</td>
    //         <td>{this.state.property2}</td>
    //         <td>{this.state.property3}</td>
    //     </Fragment>
    // );

    return null;
  }
}

const note1 = (
  <Note note="experiment with the return statements in the renderColumns() function to see how to avoid 1) extraneous wrapper tags and 2) compiler errors that result from trying to return unwrapped array elements" />
);
