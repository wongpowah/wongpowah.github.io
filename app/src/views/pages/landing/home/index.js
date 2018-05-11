import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import About from "./about";
import Products from "./products";
import Contact from "./contact";

import "./style.css";

class Home extends Component {
  componentDidUpdate() {
    this._scrollToHash();
  }

  _scrollToHash() {
    const { history } = this.props;
    const hash = history.location.hash || "#headline";
    const element = document.querySelector(hash);

    if (element) {
      setTimeout(() =>
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      );
    }
  }

  render() {
    return (
      <div id="home-wrapper">
        <div id="headline">
          <span>
            名牌縫紉機總會<br />歷史悠久，信譽素孚
          </span>
        </div>
        <div id="about">
          <About />
        </div>
        <div id="products">
          <Products />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape(),
  loaded: PropTypes.bool
};

const mapStateToProps = ({ loaded }) => ({ loaded });

export default connect(mapStateToProps)(Home);
