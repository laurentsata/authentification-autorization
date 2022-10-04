import React from "react";
import "./Product.css";

// { name, price, image, describe, category, energy }
function Product() {
  return (
    <div className="listProducts">
      <div className="listContainer">
        <div className="listCat">
          {/* <h2>{category}</h2>{" "}
        </div>
        <div className="listName">
          <div className="listPrice">
            <img className="imgProd" src={image} alt={name} />
          </div>
          <div className="listDescription">
            <div className="name">
              <h3>{name}</h3>
            </div>
            <div className="decrip">{describe}</div>
          </div>
        </div>
        <div className="listUn">
          <div className="price">{price} EUR</div>
          <img src={energy} alt="thermique / électrique" /> */}
        </div>
      </div>
    </div>
  );
}

export default Product;
