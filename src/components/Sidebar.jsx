import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <a href="#" className="sidebar-menu-link">
            Accueil
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a href="#" className="sidebar-menu-link">
            Produits
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a href="#" className="sidebar-menu-link">
            Contact
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a href="#" className="sidebar-menu-link">
            Ajouter
          </a>
          <ul className="submenu">
            <li>
              <a href="#" className="submenu-link">
                Ajouter maillot
              </a>
            </li>
            <li>
              <a href="#" className="submenu-link">
                Ajouter ballons
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
