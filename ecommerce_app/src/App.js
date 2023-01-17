import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartReducer from './components/reducers/cart';
import ProductList from './components/productlist';
import Header from './components/header';

const store = createStore(cartReducer);

function App() {
  return (
    <Provider store ={store}>
      <div className="eCommerce">
        <Header/>
        <ProductList/>
      </div>
    </Provider>
  );
}

export default App;
