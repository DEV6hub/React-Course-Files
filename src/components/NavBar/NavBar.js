import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => (
  <nav>
    <Link to="/">
      <button>Catalog - {Object.keys(props.shirts).length} saved items</button>
    </Link>
    <Link to="/cart">
      <button>Cart - {Object.keys(props.cartItems).length} items</button>
    </Link>
  </nav>
);

export default NavBar;
