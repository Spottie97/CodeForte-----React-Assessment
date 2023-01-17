import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { useDispatch } from 'react-redux';

const RemoveFromCart = ({ productId }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };
//Rendere a remove button to take out items on click
  return (
  <div className="container">
  <div className="row">
    <button className="btn btn-danger" onClick={handleClick}>Remove from Cart</button>
  </div>
</div>
  );
};

export default RemoveFromCart;