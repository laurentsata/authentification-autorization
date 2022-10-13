/* eslint-disable import/no-unresolved */
import axios from "axios";
import { useState } from "react";
import CategoriesCheckbox from "@components/CategoriesCheckbox";
import { useNavigate } from "react-router-dom";

export default function AdminCreateProductPage() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    categories: [],
    energy_id: "",
  });

  const [selectedCategories, setSelectedCategories] = useState("");

  const postProduct = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/products`, {
        ...product,
        categories: selectedCategories,
      })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
    navigate("/admin/products");
  };

  return (
    <div>
      <p>Page de création d'un produit</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postProduct();
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
              price: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={product.image}
          placeholder="Image du produit"
          onChange={(e) =>
            setProduct({
              ...product,
              image: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={product.description}
          placeholder="Description du produit"
          onChange={(e) =>
            setProduct({
              ...product,
              describe: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={product.energy_id}
          placeholder="Energie"
          onChange={(e) =>
            setProduct({
              ...product,
              energy_id: e.target.value,
            })
          }
        />
        <CategoriesCheckbox
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <input type="submit" value="Créer un produit" />
      </form>
    </div>
  );
}
