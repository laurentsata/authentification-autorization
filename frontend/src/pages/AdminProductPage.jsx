/* eslint-disable import/no-unresolved */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import moment from "moment";
import CategoriesCheckbox from "@components/CategoriesCheckbox";

export default function AdminProductPage() {
  const params = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  const [selectedCategories, setSelectedCategories] = useState("");

  // Appel API qui récupère le nom, le prix, l'image et la description
  // la publication d'un produit - + catégorie ?
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products/${params.id}`)
      .then((response) => response.data)
      .then((data) => setProduct(data));
  }, []);

  function updateProduct() {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/products/${params.id}`, {
        ...product,
        categories: selectedCategories,
      })
      .then(navigate("/admin/products"));
  }

  function deleteProduct() {
    // Je supprime ce produit de la table product et les lignes relatives à ce produit dans la table de jointure product_category
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/products/${params.id}`);
    navigate("/admin/products");
  }

  return (
    <>
      <button type="button" onClick={() => navigate("/admin/products")}>
        Retour aux produits
      </button>
      <h2>Page d'un produit</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateProduct();
        }}
      >
        <input
          type="text"
          value={product.name}
          placeholder="Nom"
          onChange={(e) =>
            setProduct({
              ...product,
              name: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={product.price}
          placeholder="Prix du produit"
          onChange={(e) =>
            setProduct({
              ...product,
              content: e.target.value,
            })
          }
        />
        {product.categories ? (
          <CategoriesCheckbox
            selectedCategories={product.categories}
            setSelectedCategories={setSelectedCategories}
          />
        ) : (
          ""
        )}

        <input type="submit" value="Modifier le produit" />
      </form>
      <button type="button" onClick={() => deleteProduct()}>
        Supprimer
      </button>
    </>
  );
}
