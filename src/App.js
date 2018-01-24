import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import ShirtList from './components/ShirtList/ShirtList';
import Shipping from './components/Shipping/Shipping';
import Thanks from './components/Thanks/Thanks';
import Cart from './components/Cart/Cart';
import Config from './components/Config/Config';
import NavBar from './components/NavBar/NavBar';
import store from 'store';
import { guid } from './utils/utils';
import CartItemModel from './model/CartItemModel';
import OrderModel from './model/OrderModel';
import './App.css';

export class ShirtShop extends React.Component {
  constructor() {
    super();
    this.updateCartItem = this.updateCartItem.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
    this.saveShirt = this.saveShirt.bind(this);
    this.deleteShirt = this.deleteShirt.bind(this);
    this.addShirtToCart = this.addShirtToCart.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.clearCart = this.clearCart.bind(this);

    this.state = {
      shirts: {},
      cartItems: {},
      order: {}
    };
  }

  componentDidMount() {
    console.log('App::componentDidMount');
    this.loadDataFromStorage();
  }

  loadDataFromStorage() {
    console.log('App::loadDataFromStorage');

    let storedShirts = store.get('shirts') || {};
    this.setState({ shirts: storedShirts });
    console.log(Object.keys(storedShirts).length + ' shirts loaded into state');

    let storedCartItems = store.get('cartItems') || {};
    this.setState({ cartItems: storedCartItems });
    console.log(
      Object.keys(storedCartItems).length + ' cart items loaded into state'
    );
  }

  logQuantity(itemToCount) {
    let numFields = Object.keys(store.get(itemToCount)).length;
    console.log(numFields + ' ' + itemToCount + ' items now live in storage');
  }

  saveShirt(shirt) {
    console.log('App::saveShirt: ' + JSON.stringify(shirt));
    let shirts = { ...this.state.shirts };
    shirts[shirt.id] = shirt;
    this.setState({ shirts });
    store.set('shirts', shirts);
    this.logQuantity('shirts');
  }

  deleteShirt(key) {
    console.log('App::deleteShirt with id: ' + key);
    const shirts = {};

    this.logQuantity('shirts');
  }

  addShirtToCart(shirt) {
    console.log('App::addShirtToCart: ' + JSON.stringify(shirt));
    let cartItems = { ...this.state.cartItems };
    // search for a cart item that already has a shirt with the incoming shirt's id
    const itemsAsArray = Object.keys(cartItems).map(key => cartItems[key]);
    const existingItem = itemsAsArray.find(
      element => element.shirt.id === shirt.id
    );

    if (existingItem === undefined) {
      console.log('adding a new cart item');
      let newCartItem = new CartItemModel(guid(), shirt, 1);
      cartItems[newCartItem.id] = newCartItem;
    } else {
      console.log('updating an existing cart item');
      const newQuantity = existingItem.quantity + 1;
      const newSubTotal = existingItem.shirt.price * newQuantity;
      let updatedItem = {
        ...existingItem,
        quantity: newQuantity,
        subTotal: newSubTotal
      };
      this.updateCartItem(existingItem.id, updatedItem);
      return;
    }
  }

  updateCartItem(key, updatedItem) {
    console.log('App::updateCartItem: ' + JSON.stringify(updatedItem));
    const cartItems = { ...this.state.cartItems };
    cartItems[key] = updatedItem;
    this.setState({ cartItems });
    store.set('cartItems', cartItems);
    this.logQuantity('cartItems');
  }

  removeCartItem(key) {
    console.log('App::removeCartItem');
    const cartItems = { ...this.state.cartItems };
    delete cartItems[key];
    this.setState({ cartItems });
    store.set('cartItems', cartItems);
    this.logQuantity('cartItems');
  }

  createOrder(shippingInfo) {
    let newOrder = new OrderModel(
      guid(),
      { ...this.state.cartItems },
      shippingInfo
    );
    this.setState({ order: newOrder });
    this.clearCart();
  }

  clearCart() {
    let emptyCart = {};
    this.setState({ cartItems: emptyCart });
    store.set('cartItems', emptyCart);
  }

  render() {
    console.log('App::render');
    return (
      <Router>
        <div className="container">
          <div className="appTitle">
            <h1>React ShirtShop</h1>
          </div>
          <NavBar cartItems={this.state.cartItems} shirts={this.state.shirts} />
          <div className="mainPageBody">
            <Route
              exact
              path="/"
              render={() => (
                <ShirtList
                  shirts={this.state.shirts}
                  deleteShirt={this.deleteShirt}
                  addShirtToCart={this.addShirtToCart}
                />
              )}
            />

            <Route
              path="/shipping"
              render={({ history }) => (
                <Shipping createOrder={this.createOrder} history={history} />
              )}
            />

            <Route
              exact
              path="/thanks"
              render={() => <Thanks order={this.state.order} />}
            />

            <Route
              exact
              path="/config/:shirtId"
              render={({ match }) => (
                <Config
                  shirtId={match.params.shirtId}
                  saveShirt={this.saveShirt}
                  addShirtToCart={this.addShirtToCart}
                />
              )}
            />
            <Route
              path="/cart"
              render={() => (
                <Cart
                  cartItems={this.state.cartItems}
                  updateItem={this.updateCartItem}
                  removeItem={this.removeCartItem}
                />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default ShirtShop;
