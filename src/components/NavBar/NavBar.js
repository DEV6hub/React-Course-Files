import React from 'react';
import './NavBar.css';

const NavBar = props => (
  <nav className="navmenu">
    <button>Catalog - {Object.keys(props.shirts).length} saved items</button>
    <button>Cart - {Object.keys(props.cartItems).length} items</button>
  </nav>
);

export default NavBar;
