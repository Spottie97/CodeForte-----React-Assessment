//import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from 'redux';
import cartReducer from './reducers/cart';
//import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from './components/productlist';
import Header from './components/header';

const store = configureStore(cartReducer);

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
