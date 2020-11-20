import React from "react";
import PropTypes from "prop-types";
import Title from "../Title";
import "./style.scss";

const Popup = ({ title, children }) => (
  <div className="popup">
    <Title className="popup__title" size={3} text={title} />
    <div className="popup__content">{children}</div>
  </div>
);

Popup.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

Popup.defaultProps = {
  title: "Settings",
};

export default Popup;
