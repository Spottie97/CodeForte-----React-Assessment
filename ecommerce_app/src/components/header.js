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
      <header className='bg-dark text-white p-4'>
        <h1 className='text-center'>Ecommerce App</h1>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <img src={'../images/cart-icon.svg'} className='text-dark' alt={'Cart'} />
          <span className='text-dark'>{itemCount}</span>
          <div>
            <AddToCart/>
            <RemoveFromCart/>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
