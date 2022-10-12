// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import Category from "./Category";

// function Categories() {
//   const [categories, setCategories] = useState([]);
//   //   console.log(categories);
//   const get = () => {
//     axios
//       .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
//       .then((response) => response.data)
//       .then((data) => setCategories(data));
//   };

//   useEffect(() => get(), []);
//   return (
//     <div className="leon">
//       {categories &&
//         categories.map((category) => (
//           <div>
//             {/* {console.log(category.name)} */}
//             <Category
//               key={category.id}
//               name={category.name}
//               image={category.image}
//             />
//           </div>
//         ))}
//     </div>
//   );
// }

// export default Categories;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";

export default function Categories() {
  const [categories, setCategories] = useState("");
  // console.log(categories);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((response) => response.data)
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      {categories &&
        categories.map((category) => (
          <Link to={`/categories/${category.id}`} key={category.id}>
            <Category categories={category} />
          </Link>
        ))}
      {/* <Link to="/admin/categories">
        <p>Vers l'admin</p>
      </Link> */}
    </div>
  );
}
