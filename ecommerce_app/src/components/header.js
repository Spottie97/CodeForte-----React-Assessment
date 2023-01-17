import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <img src={'../images/cart-icon.svg'} alt={'Cart'} />
      <span>{cartItems.length}</span>
    </div>
  );
};
export default Header;
