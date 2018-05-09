import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./style.css";

const MenuButton = ({ expanded, className, ...props }) => (
  <div
    {...props}
    className={ClassNames("menu-button", { expanded }, className)}
  >
    <div className="menu-line" />
    <div className="menu-line" />
    <div className="menu-line" />
  </div>
);

MenuButton.propTypes = {
  expanded: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired
};

MenuButton.defaultProps = {
  className: ""
};

export default MenuButton;
