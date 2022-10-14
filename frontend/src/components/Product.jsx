/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from "react";
import "./Product.css";

// eslint-disable-next-line react/prop-types
function Product({ name, price, image, description, category, energy }) {
  return (
    <div className="listProducts">
      <div className="listContainer">
        <div className="listCat">
          {category &&
            category.map((category) => (
              <h2 key={category.ID}>{category.Type}</h2>
            ))}
        </div>
        <div className="listName">
          <div className="listPrice">
            <img className="imgProd" src={image} alt={name} />
          </div>
          <div className="listDescription">
            {/* <div className="name">
              <h3>{name}</h3>
            </div> */}
            <div className="decrip">{description}</div>
          </div>
        </div>
        <div className="listUn">
          <div className="price">{price} EUR</div>
          <img src={energy} alt="thermique / électrique" />
        </div>
      </div>
    </div>
  );
}

export default Product;
