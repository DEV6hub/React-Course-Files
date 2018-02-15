import React from 'react';
import SmartAndDumbCombined from './SmartAndDumbCombined';
import Smart from './Smart';
import people from './sampleData.json';
import store from 'store';

/**
 * The purpose of this demo is to illustrate how to use
 * composition to split concerns across smart (container)
 * components and dumb (pure functional) components.
 *
 */

export default class SmartAndDumbDemo extends React.Component {
  componentDidMount() {
    store.set('people', people);
  }
  render() {
    console.log('SmartAndDumbDemo::render()');
    //return <SmartAndDumbCombined />;
    return <Smart />;
  }
}
