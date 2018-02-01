import React, { Component } from 'react';
import './Thanks.css';

class Thanks extends Component {
  constructor() {
    super();
    this.renderTableRow = this.renderTableRow.bind(this);
  }

  render() {
    let si = this.props.order.shippingInfo;
    let cartItems = this.props.order.cartItems;
    if (si === undefined && cartItems === undefined) {
      return (
        <div>
          To place a new order, add an item to the cart from your Catalog.
        </div>
      );
    }

    let total = 0;
    let quantities = 0;
    let cartKeys = Object.keys(cartItems);
    if (cartKeys.length > 0) {
      quantities = cartKeys
        .map(key => cartItems[key].quantity)
        .reduce((previous, current) => previous + current);
      total = cartKeys
        .map(key => cartItems[key].subTotal)
        .reduce((previous, current) => previous + current);
    }

    return (
      <div>
        <h2>Thank you for your order</h2>
        {this.renderLineItems(cartKeys, quantities, total)}

        <h2>Shipping Information</h2>
        {this.renderShippingInfo(si)}
      </div>
    );
  }

  renderLineItems(keys, quantities, total) {
    return (
      <table>
        <thead>
          <tr>
            <th>Item No.</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>{keys.map(this.renderTableRow)}</tbody>
        <tfoot>
          <tr>
            <th colSpan="2">Total</th>
            <th>{quantities}</th>
            <th>{total}</th>
          </tr>
        </tfoot>
      </table>
    );
  }

  renderTableRow(key) {
    const cartItem = this.props.order.cartItems[key];
    return (
      <tr key={key}>
        <th>{cartItem.id}</th>
        <td>
          ${cartItem.shirt.price} - {cartItem.shirt.size} -{' '}
          {cartItem.shirt.style} - {cartItem.shirt.color} -{' '}
          {cartItem.shirt.logo}
        </td>
        <td>{cartItem.quantity}</td>
        <td>{cartItem.subTotal}</td>
      </tr>
    );
  }

  renderShippingInfo(si) {
    return (
      <div>
        <address>
          {si.firstName} {si.lastName}
          <br />
          {si.address}
          <br />
          {si.city}, {si.region} {si.zipPostCode} <br />
          {si.country ? si.country.toUpperCase() : ''}
        </address>
        <p>
          <strong>Email:</strong> {si.email}
        </p>
        <p>
          <strong>Phone:</strong> {si.phone}
        </p>
        <p>
          <strong>Special Instructions (if any):</strong>
          {si.specialInstructions}
        </p>
      </div>
    );
  }
}

export default Thanks;
