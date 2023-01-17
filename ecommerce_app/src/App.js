import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from './components/productlist';
import Header from './components/header';

function App() {
  return (
    <div className="ecommerce">
      <Header/>
      <ProductList/>
    </div>
  );
}

export default App;
