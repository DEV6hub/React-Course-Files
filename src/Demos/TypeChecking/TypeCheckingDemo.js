import React from 'react';
import Note from './../Note';
import PropTypes from 'prop-types';
//import ChildAsClass from './ChildAsClass';

// ChildAsClass (imported above) and Child (defined below) are similar
// ChildAsClass: class-based function; accepts two optional props
// Child: functional component; accepts one optional and one required prop
const Child = props => (
  <div>
    <code>requiredNumberProp</code>: {props.requiredNumberProp}
    <br />
    <code>optionalStringProp</code>: {props.optionalStringProp}
    <hr />
  </div>
);

// propTypes and defaultProps are defined in the exact same way
// for both functional components and class components
Child.propTypes = {
  requiredNumberProp: PropTypes.number.isRequired,
  optionalStringProp: PropTypes.string
};
Child.defaultProps = {
  optionalStringProp: 'default value from functional component'
};

const TypeCheckingDemo = () => (
  <div>
    <Note
      note={
        <div>
          I am the parent and I invoke the <code>Child</code> in different ways;
          some are right and some are wrong. That component accepts optional and
          required properties.
        </div>
      }
    />

    {/* instance 1 passes all expected properties, even the optional ones */}
    <Child
      requiredNumberProp={123}
      optionalStringProp="passed by parent, overrides default"
    />

    {/* instance 2 passes only the required properties, the default is used for the optional prop */}
    <Child requiredNumberProp={123} />

    {/* instance 3 passes no properties */}
    {/* the default is used for the optional prop */}
    {/* check the BROWSER console for the warning */}
    {/* this is just a warning, not an error */}
    {/* does not prevent compilation */}
    {/* <Child /> */}

    {/* <Note note={<div>This class based child component gets NO props.</div>} />
    <ChildAsClass optionalStringProp={10} /> */}

    {/* <Note note={<div>This class based child component gets the wrong data type.</div>} />
    <ChildAsClass optionalNumberProp='this is not be a number' /> */}

    {footnotes}
  </div>
);

export default TypeCheckingDemo;

const footnotes = (
  <div>
    <div>
      You'll see warnings in the browser console if you:
      <ul>
        <li>don't pass anything for a required prop</li>
        <li>pass the wrong data type to a required or optional prop</li>
      </ul>
      <p>
        Compilation will succeed but that doesn't mean your code is correct!{' '}
        <br />Keep your console open during development! <br />win (F12) mac
        (opt + cmd + i)
      </p>
    </div>
    <a
      href="https://reactjs.org/docs/typechecking-with-proptypes.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      built in validators are described here
    </a>
  </div>
);
