import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5524/5524563.png"
          alt="Logo site Football"
          className="logo-site"
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
