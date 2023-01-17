import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartReducer from "./components/reducers/cart";
import Header from './components/header';
import ProductList from './components/productlist';
import Checkout from './components/checkout';

const store = createStore(cartReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
