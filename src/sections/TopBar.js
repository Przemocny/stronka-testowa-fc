import React from 'react';

// deklaracja
const TopBar = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">Nazwa firmy</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">O nas</a></li>
            <li><a href="#">Oferta</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
