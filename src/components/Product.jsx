import React from "react";
import "../index.css";

const Product = () => {
  return (
    <div className="card product-card">
      <img
        className="card-img-top product-card-image"
        src="https://picsum.photos/id/237/200/300"
        alt="Product"
      />
      <div className="card-body product-card-details">
        <h2 className="card-title product-card-title">Nom du produit</h2>
        <span className="product-price">29.99 €</span>
        <button className="btn btn-primary add-to-cart-button">Ajouter au panier</button>
      </div>
    </div>
  );
};

export default Product;
