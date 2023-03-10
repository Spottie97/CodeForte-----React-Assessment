import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import cartReducer from "./reducers/cart";
import Header from "./components/header";
import ProductList from "./components/productlist";
import Checkout from "./components/checkout";

//There seems to be a issue with redux I am incountering here
const store = createStore(cartReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ProductList />
        <Checkout />
      </div>
    </Provider>
  );
}

export default App;
