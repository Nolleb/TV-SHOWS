import React, { useState } from "react";

const DisplayFilters = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);

  const labels = ["Name", "Categories", "Notation", "Publication"];

  const Label = ({ name }) => {
    return (
      <li className={ `${"o-list-inline__item"} ${active === name ? "c-btn" : ""}`} onClick={() => {setActive(name);setToggle(!toggle);}} >
        <button>
          {name}
        </button>
        <span
          className={`${"triangle triangle__bottom"} ${
            toggle === false && active === name ? "u-hide" : ""
          }`}
        />
        <span
          className={`${"triangle triangle__top"} ${
            toggle === true && active === name ? "u-hide" : ""
          }`}
        />
      </li>
    );
  };
const menuFilter = labels.map((label,i) => <Label key={i} name={label} />);

  return (
    <div className="c-filter">
      <ul className="o-list-inline c-filter__list">{menuFilter}</ul>
    </div>
  );
};

export default DisplayFilters;
