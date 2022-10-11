/* eslint-disable react/destructuring-assignment */
import React from "react";

function Category(categories) {
  //   console.log(name);
  return (
    <div className="article-container">
      <p>{categories.name}</p>
      {/* <p>{categories.image}</p> */}
    </div>
  );
}
export default Category;
