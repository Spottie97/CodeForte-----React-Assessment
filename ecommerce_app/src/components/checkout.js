import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  // Use the useSelector hook to get the items from the cart state
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className='container'>
      <h1>Checkout</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total: {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h2>
      <button className="btn btn-primary">Place Order</button>
    </div>
  );
};

export default Checkout;
