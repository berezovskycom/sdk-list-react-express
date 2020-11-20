import React, { createRef } from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Input = ({ id, filter, handleFocus }) => {
  const seachInputRef = createRef();

  const handleSearchInputChange = (cb) => {
    const { value } = seachInputRef.current;
    const objectToFilter =
      value.length === 0
        ? { type: "radio", data: "all" }
        : { type: "inputText", data: value };
    cb(objectToFilter);
  };

  const handleSearchInputFocus = (cb) => {
    handleFocus();
    handleSearchInputChange(cb);
  };

  return (
    <input
      type="text"
      id={id}
      ref={seachInputRef}
      onChange={() => handleSearchInputChange(filter)}
      onFocus={() => handleSearchInputFocus(filter)}
      className="optionsPanel__search-input"
      placeholder="Search"
    />
  );
};

Input.propTypes = {
  filter: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  id: PropTypes.string
};

Input.defaultProps = {
  id: ""
};

export default Input;
