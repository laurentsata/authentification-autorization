/* eslint-disable import/no-unresolved */
import { useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line import/no-extraneous-dependencies
import Select from "react-select";

export default function CategoriesCheckbox({
  // eslint-disable-next-line react/prop-types
  selectedCategories,
  // eslint-disable-next-line react/prop-types
  setSelectedCategories,
}) {
  const [categories, setCategories] = useState("");

  // Récupère la liste des catégories
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((response) => response.data)
      .then((data) => setCategories(data));
  }, []);

  return (
    <Select
      // defaultValue : catégories déjà attribuées à product en db (vide en création de produit)
      defaultValue={selectedCategories}
      // option : catégories proposées dans la liste déroulante
      options={categories}
      // peut choisir plusieurs valeurs
      isMulti
      onChange={setSelectedCategories}
      placeholder="Affecter une ou plusieurs catégories"
    />
  );
}
