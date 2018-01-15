import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = props => {
  let catalogCount = Object.keys(props.shirts).length;
  let cartCount = Object.keys(props.cartItems).length;
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
};

export default NavBar;
