/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { createRef } from "react";
import PropTypes from "prop-types";
import Radio from "../components/Radio";
import Input from "../components/Input";

const Search = ({ setFilter }) => {
  const labelForSearchRef = createRef();

  const handleFocus = () => {
    labelForSearchRef.current.children[0].checked = true;
  };

  return (
    <label className="optionsPanel__label" htmlFor="radio-seachInput" ref={labelForSearchRef}>
      <Radio
        id="radio-seachInput"
      />
      <Input filter={setFilter} handleFocus={handleFocus}/>
    </label>
  );
};

Search.propTypes = {
  setFilter: PropTypes.func.isRequired
};

export default Search;