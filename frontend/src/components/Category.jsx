/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import "./Category.css";

function Category({ categories }) {
  // console.log(categories);
  return (
    <div className="categories-container">
      <div className="cat-id">
        {" "}
        <p>{categories.id}</p>
      </div>
      <div className="cat-name">
        <p>{categories.name}</p>
      </div>
      {/* <p>{categories.image}</p> */}
    </div>
  );
}
export default Category;
