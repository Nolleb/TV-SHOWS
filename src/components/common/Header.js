import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="c-page-head">
    <Link to="/" className="btn">
      <h1>TV SHOW APP</h1>
    </Link>
    <Link to="/about" className="btn">
      <h3>About</h3>
    </Link>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
  </div>
);

export default Header;
