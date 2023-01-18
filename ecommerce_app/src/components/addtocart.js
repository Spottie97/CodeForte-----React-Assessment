import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { useDispatch } from 'react-redux';
import RemoveFromCart from './removefromcart';

const AddToCart = ({ product }) => {
    //Making use of the useDispatch hook to get acess to the dispatch function
  const dispatch = useDispatch();
  //Checking if product is not undefined 
  if(!product) return null;
  //Making use of handleClick function 
  const handleClick = () => {
    //I now dispatch an action with the type of "ADD_TO_CART" and the payload of the product
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  // Create/Render a button that will call the handleClick function on click
  return (
    <div className='container'>
      <div classNam="row">
      <button className="btn btn-primary" onClick={handleClick}>Add to Cart</button>
      <RemoveFromCart productId={product.id}/>
      </div>
    </div>
    );
};

export default AddToCart;

