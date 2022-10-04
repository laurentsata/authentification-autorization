import axios from "axios";
import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./ProductsList.css";

function ProductsList() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products-details`)
      .then((response) => response.data)
      .then((data) => setProducts(data));
  };

  useEffect(() => getProducts(), []);
  return (
    <div className="leon">
      {products &&
        products.map((product) => (
          <Product
            key={product.id}
            category={product.category}
            name={product.name}
            image={product.image}
            describe={product.describe}
            price={product.price}
            energy={product.energy_id}
          />
        ))}
    </div>
  );
}

export default ProductsList;
