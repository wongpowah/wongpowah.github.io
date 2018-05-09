import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./menu.css";

class Menu extends Component {
  render() {
    const { accessLevel } = this.props;

    return (
      <div id="user-menu">
        <div>{accessLevel}</div>
      </div>
    );
  }
}

Menu.propTypes = {
  accessLevel: PropTypes.string.isRequired
};

export default connect(({ user }) => ({ accessLevel: user.accessLevel }))(Menu);
