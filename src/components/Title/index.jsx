import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./style.scss";

const Title = ({ size, className, text, children }) => {
  const classes = classNames("title", className);
  const content = text || children;

  switch(size) {
    case 1:
      return <h1 className={classes}>{content}</h1>;
    case 2:
      return <h2 className={classes}>{content}</h2>;
    case 3:
      return <h3 className={classes}>{content}</h3>;
    case 4:
      return <h4 className={classes}>{content}</h4>;
    case 5:
      return <h5 className={classes}>{content}</h5>;
    case 6:
      return <h6 className={classes}>{content}</h6>;
    default:
      return <h3 className={classes}>{content}</h3>;
  }
};

Title.propTypes = {
  size: PropTypes.number,
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

Title.defaultProps = {
  size: 1,
  text: "",
  className: "",
  children: <span>Example</span>
};

export default Title;
