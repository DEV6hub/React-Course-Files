import React from 'react';
import ShirtListItem from './ShirtListItem';
import './ShirtList.css';
import { Link } from 'react-router-dom';

class ShirtList extends React.Component {
  constructor() {
    super();
    this.renderShirtItem = this.renderShirtItem.bind(this);
  }
  render = props => null;

  renderShirtItem(key) {
    return (
      <ShirtListItem
        key={key}
        shirt={this.props.shirts[key]}
        deleteShirt={this.props.deleteShirt}
        addShirtToCart={this.props.addShirtToCart}
      />
    );
  }
}

export default ShirtList;
