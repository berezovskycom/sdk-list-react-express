import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.scss";

const emptyFunc = () => {};

const Radio = ({
  tag,
  setFilter,
  className,
}) => {
  const classes = classNames("optionsPanel__radio", className);

  const handleRadio = (cb) => cb({ type: "radio", data: tag });

  return (
    <input
      type="radio"
      className={classes}
      id={`radio-${tag || "seachInput"}`}
      name="tag"
      onClick={() => setFilter && handleRadio(setFilter)}
      onKeyDown={() => setFilter && handleRadio(setFilter)}
      defaultChecked={tag === "all"}
    />
  );
};

Radio.propTypes = {
  tag: PropTypes.string,
  setFilter: PropTypes.func,
  className: PropTypes.string,
};

Radio.defaultProps = {
  tag: "",
  setFilter: emptyFunc(),
  className: emptyFunc(),
};

export default Radio;
