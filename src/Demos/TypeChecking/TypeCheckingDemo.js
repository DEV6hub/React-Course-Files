import React from 'react';
import PropTypes from 'prop-types';
import ChildAsClass from './ChildAsClass';
const TypeCheckingDemo = () => (
  <div>
    <div className="note">
      I am the parent and I invoke the <code>Child</code> three different ways.
      The child component accepts two properties; one optional and one required.
    </div>
    <hr />

    {/* instance 1 passes all expected properties, even the optional ones */}
    <Child
      requiredNumberProp={123}
      optionalStringProp="passed by parent, overrides default"
    />
    <hr />

    {/* instance 2 passes only the required properties, the default is used for the optional prop */}
    <Child requiredNumberProp={123} />
    <hr />

    {/* instance 3 passes no properties */}
    {/* the default is used for the optional prop */}
    {/* check the BROWSER console for the warning */}
    {/* this is just a warning, not an error */}
    {/* does not prevent compilation */}
    <Child />
    <hr />

    {/* ChildAsClass is essentially the same 
      as the Child component defined below
      but this one is class-based */}
    <ChildAsClass />
    <hr />

    <p>
      The{' '}
      <a
        href="https://reactjs.org/docs/typechecking-with-proptypes.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        docs
      </a>{' '}
      describe all the built in validators.
    </p>
  </div>
);

export default TypeCheckingDemo;

// Child is essentially the same as the
// ChildAsClass component used above
// but this one is a pure function
const Child = props => (
  <div>
    <code>requiredNumberProp</code>: {props.requiredNumberProp}
    <br />
    <code>optionalStringProp</code>: {props.optionalStringProp}
  </div>
);

// propTypes and defaultProps are defined in the exact same way
// for both component definition types: functions and classes

Child.propTypes = {
  requiredNumberProp: PropTypes.number.isRequired,
  optionalStringProp: PropTypes.string
};
Child.defaultProps = {
  optionalStringProp: 'default value from functional component'
};
