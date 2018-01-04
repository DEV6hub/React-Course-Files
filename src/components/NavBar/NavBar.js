import React from 'react';
const NavBar = props => (
  <nav>
    {Object.keys(props.shirts).length} shirts and{' '}
    {Object.keys(props.cartItems).length} cart items
  </nav>
);

export default NavBar;
