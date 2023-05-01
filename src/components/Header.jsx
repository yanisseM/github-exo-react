import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="https://www.dynamicmarketing.eu/wp-content/uploads/2018/06/ecommerce.logo_.png"
          alt="Logo e-commerce"
          className="logo-e-commerce"
        />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Rechercher un produit" className="search-input" />
        <button className="search-button">Rechercher</button>
      </div>
      <div className="menu-container">
        <div className="menu-item">Paramètres</div>
        <div className="menu-item">Mon compte</div>
        <div className="menu-item cart">
          <i className="fa fa-shopping-cart" />
          <div className="cart-counter">0</div>
        </div>
      </div>
    </header>
  );
};



export default Header;
