import React from "react";
import "../index.css";

const Product = ({title, price, imageSrc}) => {
  return (
    <div className="card product-card">
      <img
        className="card-img-top product-card-image"
        src={imageSrc}
        alt="Product"
      />
      <div className="card-body product-card-details">
        <h2 className="card-title product-card-title">{title}</h2>
        <span className="product-price">{price}</span>
        <button className="btn btn-primary add-to-cart-button">Ajouter au panier</button>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="products">
      <Product
        title="Crampons Nike"
        price="29.99 €"
        imageSrc="C:\Users\teren\Documents\ESTIAM\github-exo-react\src\image\ol.jpg"
      />
      <Product
        title="Ballon de foot Adidas"
        price="14.99 €"
        imageSrc="C:\Users\teren\Documents\ESTIAM\github-exo-react\src\image\ballon.jpg"
      />
      <Product
        title="Maillot de foot PSG"
        price="79.99 €"
        imageSrc="C:\Users\teren\Documents\ESTIAM\github-exo-react\src\image\maillot.jpg"
      />
    </div>
  );
};

export default Products;
