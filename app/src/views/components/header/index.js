import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Guest from "./guest";
import User from "./user";

class Header extends Component {
  render() {
    const { user } = this.props;
    return user ? <User {...this.props} /> : <Guest {...this.props} />;
  }
}

Header.propTypes = {
  user: PropTypes.shape()
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Header);
