import React from "react";

const DisplayFilters = () => (
  <div className="c-filter">
    <ul className="o-list-inline c-filter__list">
      <li className="o-list-inline__item">
        <button>Name</button>
        <span className="triangle triangle__bottom" />
        <span className="triangle triangle__top" />
      </li>
      <li className="o-list-inline__item">
        <button>Category</button>
        <span className="triangle triangle__bottom" />
        <span className="triangle triangle__top" />
      </li>
      <li className="o-list-inline__item">
        <button>Notation</button>
        <span className="triangle triangle__bottom" />
        <span className="triangle triangle__top" />
      </li>
      <li className="o-list-inline__item">
        <button>Publication</button>
        <span className="triangle triangle__bottom" />
        <span className="triangle triangle__top" />
      </li>
    </ul>
  </div>
);

export default DisplayFilters;
