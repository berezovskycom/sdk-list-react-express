import React from "react";
import classNames from "classnames";
import PropTypes, { string } from "prop-types";
import "./style.scss";

const List = ({ disc, className, children }) => {
  const classes = classNames("list", className, { "list--disc": disc });

  return <ul className={classes}>{children}</ul>;
};

List.propTypes = {
  disc: PropTypes.bool,
  className: string,
  children: PropTypes.node
};

List.defaultProps = {
  disc: false,
  className: "",
  children: <li />
};

export default List;
