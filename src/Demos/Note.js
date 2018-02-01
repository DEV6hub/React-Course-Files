import React from 'react';

// use this to illustrate the difference between the two different ways to define and use styles
//import './Demos.css';
//const Note = props => (<div className="note">{props.note}</div>);

const Note = props => <div style={styles.note}>{props.note}</div>;
const styles = {
  note: {
    padding: '5px',
    border: '5px solid lightslategrey',
    margin: '5px',
    backgroundColor: 'lightsteelblue'
  }
};

export default Note;
