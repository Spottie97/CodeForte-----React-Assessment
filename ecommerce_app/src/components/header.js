import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  // Use the useSelector hook to get the items from the cart state
  const cartItems = useSelector((state) => state.cart.items);
  // Get the number of items in the cart
  const itemCount = cartItems.length;
  return (
    <div>
      <img src={'../images/cart-icon.svg'} alt={'Cart'} />
      <span>{itemCount}</span>
    </div>
  );
};

export default Header;

