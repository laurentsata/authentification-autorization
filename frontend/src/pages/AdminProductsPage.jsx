/* eslint-disable import/no-unresolved */
// import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ProductsList from "@components/ProductsList";

export default function Home() {
  return (
    <div>
      <div className="product">
        <ProductsList />
      </div>
      <Link to="/admin/products/create">
        <button type="button">Créer un produit</button>
      </Link>
    </div>
  );
}
