/* eslint-disable import/order */
import axios from "axios";
import React, { useState, useEffect } from "react";
import Product from "./Product";
// import "./ProductsList.css";
import { Link } from "react-router-dom";

function ProductsListAdmin() {
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
    <div className="leon1">
      {products &&
        products.map((product) => (
          <Link to={`/admin/products/${product.id}`} key={product.id}>
            <Product
              key={product.id}
              id={product}
              category={product.categories}
              name={product.name}
              image={product.image}
              description={product.description}
              price={product.price}
              energy={product.energy_id}
            />
          </Link>
        ))}
    </div>
  );
}

export default ProductsListAdmin;
