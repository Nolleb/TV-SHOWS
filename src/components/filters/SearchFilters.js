import React from "react";
import { connect } from "react-redux";
import * as categoryAction from "../../redux/actions/CategoryAction";

const SearchFilters = (props) => {

  const { isSelected } = props;
  return(
    <div className="c-flex-container">
      <form className="c-switch-radio">
        <input
          type="radio"
          id="switch_left"
          name="switchToggle"
          className="c-switch-radio__input"
          value="Movies"
          onChange="test"
          checked={isSelected}
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
          onChange="{this.toggleState}"
          checked="{this.state.toggle}"
        />
        <label className="c-switch-radio__label" htmlFor="switch_right">
          TV shows
        </label>
      </form>
    </div>
  );
}
  



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
