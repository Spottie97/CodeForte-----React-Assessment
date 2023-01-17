import React from 'react';
import { useDispatch } from 'react-redux';

const AddToCart = ({ product }) => {
    //Making use of the useDispatch hook to get acess to the dispatch function
  const dispatch = useDispatch();

  //Making use of handleClick function 
  const handleClick = () => {
    //I now dispatch an action with the type of "ADD_TO_CART" and the payload of the product
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  // Create/Render a button that will call the handleClick function on click
  return <button onClick={handleClick}>Add to Cart</button>;
};

export default AddToCart;
