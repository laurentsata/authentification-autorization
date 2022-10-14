import axios from "axios";
import React, { useState, useEffect } from "react";
// import Categories from "./Categories";
import Product from "./Product";
import "./ProductsList.css";

function ProductsList() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/productsdetails`)
      .then((response) => response.data)
      .then((data) => setProducts(data));

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((response) => response.data);
    // .then((data) => setCategories(data));
  };
  useEffect(() => getProducts(), []);
  return (
    <div className="leon">
      {products &&
        products.map((product) => (
          <Product
            key={product.id}
            category={product.categories}
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
            energy={product.energy_id}
            // categories=[{categories &&
            // categories.map((category.Type))}]
          />
        ))}
    </div>
  );
  // console.log(product);
}

export default ProductsList;
