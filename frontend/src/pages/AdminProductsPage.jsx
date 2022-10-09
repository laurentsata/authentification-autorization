import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AdminProductsPage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products`)
      .then((response) => response.data)
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <div>
      {products ? (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nom</th>
              <th>Prix</th>
              <th>Image</th>
              <th>Description</th>
              <th>Catégories</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                onClick={() => navigate(`/admin/products/${product.id}`)}
              >
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.image}</td>
                <td>{product.describe}</td>
                <td>
                  <ul>
                    {product.categories &&
                      product.categories.map((category) => (
                        <li key={category.id}>{category.nom}</li>
                      ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
      <Link to="/admin/products/create">
        <button type="button">Créer un produit</button>
      </Link>
    </div>
  );
}
