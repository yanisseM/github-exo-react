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
        className="produit-cards"
        title="Crampons Nike"
        price="29.99 €"
        imageSrc="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8922dd3f-207f-4f24-95bc-ee827f9457f5/chaussure-de-football-multi-surfaces-a-crampons-zoom-mercurial-superfly-9-academy-mg-HhlDp2.png"
      />
      <Product
        className="produit-cards"
        title="Ballon de foot Adidas"
        price="14.99 €"
        imageSrc="https://www.cdiscount.com/pdt2/5/6/1/1/700x700/mp52373561/rw/ballon-adidas-euro2020-uniforia-fh7356.jpg"
      />
      <Product
        className="produit-cards"
        title="Maillot de foot PSG"
        price="79.99 €"
        imageSrc="https://www.cdiscount.com/pdt2/3/5/2/1/700x700/mp48158352/rw/maillot-domicile-authentique-psg-2020-21-bleu-nu.jpg"
      />
    </div>
  );
};

export default Products;
