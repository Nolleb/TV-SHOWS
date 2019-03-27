import React, { useState } from "react";
import { connect } from "react-redux";
import * as categoryAction from "../../redux/actions/CategoryAction";

const SearchFilters = props => {
  const [isSelect, setSelect] = useState(false);
  const { chooseCategory } = props;

  const toggleSelect = () => {

    !isSelect ? setSelect(true) : setSelect(false);
    console.log("isSelect");
    console.log(isSelect);
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

function mapStateToProps(state) {
  return {
    isSelected: state.isSelected
  };
}

const mapDispatchToProps = {
  chooseCategory: categoryAction.chooseCategory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFilters);
