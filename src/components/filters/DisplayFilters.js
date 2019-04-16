import React, { useState } from "react";
import { connect } from "react-redux";
import {sortMoviesbyName, reverseMoviesbyName, sortMoviesbyPopularity, reverseMoviesbyPopularity} from "../../redux/actions/MoviesAction";
import PropTypes from "prop-types";

const DisplayFilters = (props) => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);

  const labels = ["Name", "Popularity", "Notation", "Publication"];

  const {query, sortMoviesbyName, reverseMoviesbyName, sortMoviesbyPopularity, reverseMoviesbyPopularity} = props;

  const handleClick = (label) => {
    setActive(label);
    setToggle(!toggle);
    switch (label) {
      case 'Name':
        if(!toggle){
          sortMoviesbyName(query);
        }else{
          reverseMoviesbyName(query);
        }
        
        break;
      case 'Popularity':
      console.log('Popularity');
      if(!toggle){
        sortMoviesbyPopularity(query);
      }else{
        reverseMoviesbyPopularity(query);
      }
      break;
      case 'Notation':
        break;
      case 'Publication':
      console.log('publication');
      break;
      default:
        console.log('Sorry, we are out of ' + name + '.');
    }
  }
  const Label = ({ name }) => {
    return (
      <li className={ `${"o-list-inline__item"} ${active === name ? "c-btn" : ""}`} onClick={() => handleClick(name) }>
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

DisplayFilters.propTypes = {
  name: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    isSelected: state.isSelected,
    query: state.query
  };
}

const mapDispatchToProps = {
  sortMoviesbyName,
  reverseMoviesbyName,
  sortMoviesbyPopularity,
  reverseMoviesbyPopularity
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayFilters);

// export default DisplayFilters;
