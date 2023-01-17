import React from 'react';
import { useDispatch } from 'react-redux';

const RemoveFromCart = ({ productId }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  return <button onClick={handleClick}>Remove from Cart</button>;
};

export default RemoveFromCart;