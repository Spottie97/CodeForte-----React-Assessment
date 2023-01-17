import React from 'react';
import { useSelector } from 'react-redux';
import AddToCart from './addtocart';
import RemoveFromCart from './removefromcart';

const Header = () => {
  // Use the useSelector hook to get the items from the cart state
  const cartItems = useSelector((state) => state.cart ? state.cart.items : []);
  // Get the number of items in the cart
  const itemCount = cartItems.length;
  return (
    <div>
      <img src={'../images/cart-icon.svg'} alt={'Cart'} />
      <span>{itemCount}</span>
      <AddToCart/>
      <RemoveFromCart/>
    </div>
  );
};

export default Header;
