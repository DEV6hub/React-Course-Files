import React from 'react';
import PropTypes from 'prop-types';
import './../Demos.css';

class ChildAsClass extends React.Component {
  render() {
    return (
      <div>
        <code>optionalStringProp</code>: {this.props.optionalStringProp}
        <br />
        <code>optionalNumberProp + 10</code>:{' '}
        {this.props.optionalNumberProp + 10}
        <hr />
      </div>
    );
  }
}

export default ChildAsClass;

ChildAsClass.propTypes = {
  optionalStringProp: PropTypes.string,
  optionalNumberProp: PropTypes.number
};

ChildAsClass.defaultProps = {
  optionalStringProp: 'default value from class component',
  optionalNumberProp: 4
};
