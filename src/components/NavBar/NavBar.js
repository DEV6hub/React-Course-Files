import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render(props) {
    let catalogCount = Object.keys(this.props.shirts).length;
    let cartCount = Object.keys(this.props.cartItems).length;
    return (
      <nav className="navmenu">
        <Link to="/">
          <button>Catalog - {catalogCount} saved items</button>
        </Link>
        <Link to="/cart">
          <button>Cart - {cartCount} items</button>
        </Link>
      </nav>
    );
  }
}

NavBar.propTypes = {
  shirts: PropTypes.object.isRequired,
  cartItems: PropTypes.object.isRequired
};
NavBar.defaultProps = {
  shirts: null,
  cartItems: null
};

export default NavBar;
