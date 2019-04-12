import React, { useState } from "react";
import { connect } from "react-redux";
import {chooseCategory} from "../../redux/actions/CategoryAction";
import {loadCategories} from "../../redux/actions/CategoriesListAction";
import PropTypes from "prop-types";

const SearchFilters = props => {
  const [isSelect, setSelect] = useState(false);
  const { chooseCategory, loadCategories } = props;

  const toggleSelect = () => {
    !isSelect ? setSelect(true) : setSelect(false);
    isSelect?loadCategories('movie'):loadCategories('tv');
    chooseCategory(isSelect);
  };

  return (
    <div className="c-flex-container">
      <form className="c-switch-radio">
        <input
          type="radio"
          id="switch_left"
          name="switchToggle"
          className="c-switch-radio__input"
          value="Movies"
          onChange={() => toggleSelect()}
          checked={!isSelect}
        />
        <label className="c-switch-radio__label" htmlFor="switch_left">
          Movies
        </label>

        <input
          type="radio"
          id="switch_right"
          name="switchToggle"
          className="c-switch-radio__input"
          value="TV shows"
          onChange={() => toggleSelect()}
          checked={isSelect}
        />
        <label className="c-switch-radio__label" htmlFor="switch_right">
          TV shows
        </label>
      </form>
    </div>
  );
};

SearchFilters.propTypes = {
  loadCategories: PropTypes.func.isRequired,
  chooseCategory: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isSelected: state.isSelected,
    genres: state.genres
  };
}

const mapDispatchToProps = {
  chooseCategory,
  loadCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFilters);
