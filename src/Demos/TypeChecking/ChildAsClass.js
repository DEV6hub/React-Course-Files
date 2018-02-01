import React from 'react';
import PropTypes from 'prop-types';
import './../Demos.css';

class ChildAsClass extends React.Component {
  render() {
    return (
      <div>
        <code>requiredNumberProp</code>: {this.props.requiredNumberProp}
        <br />
        <code>optionalStringProp</code>: {this.props.optionalStringProp}
      </div>
    );
  }
}

export default ChildAsClass;

ChildAsClass.propTypes = {
  requiredNumberProp: PropTypes.number.isRequired,
  optionalStringProp: PropTypes.string
};

ChildAsClass.defaultProps = {
  optionalStringProp: 'default value from class component'
};
