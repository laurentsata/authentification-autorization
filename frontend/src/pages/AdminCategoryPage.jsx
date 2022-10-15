import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AdminCategoryPage() {
  const params = useParams();

  const [category, setCategory] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/categories/${params.id}`)
      .then((response) => response.data)
      .then((data) => setCategory(data));
  }, []);

  function updateCategory() {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/categories/${params.id}`, {
      ...category,
    });
  }

  function deleteCategory() {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/categories/${params.id}`);
  }

  return (
    <>
      <p>Page d'une categorie</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateCategory();
        }}
      >
        <input
          type="text"
          value={category.id}
          placeholder="Id"
          onChange={(e) =>
            setCategory({
              ...category,
              id: e.target.value,
            })
          }
        />
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
        <input type="submit" value="Modifier une catégorie" />
      </form>
      <button type="button" onClick={() => deleteCategory()}>
        Supprimer
      </button>
    </>
  );
}
