import axios from "axios";
import { useState } from "react";
// import CategoriesCheckbox from "@components/CategoriesCheckbox";
import AdminCategoryPage from "./AdminCategoryPage";

export default function AdminCreateCategoryPage() {
  const [category, setCategory] = useState({
    name: "",
    image: "",
  });

  const postCategory = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/categories`, { ...category })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  };

  //   const [selectedCategories, setSelectedCategories] = useState("");

  return (
    <div>
      <p>Page de création d'une catégorie</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postCategory();
        }}
      >
        <input
          type="text"
          value={category.name}
          placeholder="Nom"
          onChange={(e) =>
            setCategory({
              ...category,
              name: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={category.image}
          placeholder="Image"
          onChange={(e) =>
            setCategory({
              ...category,
              image: e.target.value,
            })
          }
        />
        <input type="submit" value="Créer une catégorie" />
      </form>

      <AdminCategoryPage />
    </div>
  );
}
