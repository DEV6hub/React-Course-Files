import React, { Component } from 'react';
import './ShirtListItem.css';
import Shirt from './../Shirt/Shirt';

class ShirtListItem extends Component {
  onDeleteClick = () => {
    this.props.deleteShirt(this.props.shirt.id);
  };
  onAddClick = () => {
    this.props.addShirtToCart(this.props.shirt);
  };

  render = props => {
    return (
      <div className="shirtItemWrapper">
        <div className="btnWrapper">
          <button className="shirtBtn" onClick={this.onDeleteClick}>
            <i className="fa fa-trash" aria-hidden="true" /> Delete
          </button>
          <button className="shirtBtn" onClick={this.onAddClick}>
            <i className="fa fa-cart-plus" aria-hidden="true" /> Add
          </button>
        </div>
        <Shirt shirt={this.props.shirt} />
      </div>
    );
  };
}
export default ShirtListItem;
