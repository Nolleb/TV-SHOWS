import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="c-page-head">
    <div className="c-navigation">
      <Link to="/" className="btn">
        <h1>Movies & TV shows</h1>
      </Link>
      <div className="c-navigation__links">
        <Link to="/about" className="c-btn c-navigation__link">
          <h5>About</h5>
        </Link>
        <Link to="/favorites" className="c-btn c-navigation__link">
          <h5>Favorites</h5>
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
