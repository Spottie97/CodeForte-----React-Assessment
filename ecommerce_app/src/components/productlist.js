import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  // State variable to store the list of products
  const [products, setProducts] = useState([]);
  // useEffect hook to fetch data from an API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      // Making a GET request to the API using axios
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    fetchData();
  }, []);
  // JSX to render the list of products
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
