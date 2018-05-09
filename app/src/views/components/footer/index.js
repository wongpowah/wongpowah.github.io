import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink as Link } from "react-router-dom";

import "./style.css";

const Footer = ({ user }) => (
  <div id="footer-wrapper">
    <div id="footer">
      {!user && (
        <div id="signature">
          Made with <span>♥</span> by{" "}
          <Link to="https://Jswifty.github.io" target="_blank">
            John Wong
          </Link>
        </div>
      )}
    </div>
  </div>
);

Footer.propTypes = {
  user: PropTypes.shape()
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Footer);
