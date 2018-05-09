import React, { Component } from "react";
import PropTypes from "prop-types";

import About from "./about";
import Products from "./products";
import Contact from "./contact";

import "./style.css";

export default class Home extends Component {
  componentDidMount() {
    setTimeout(() => this._jumpToHash(), 1000);
  }

  componentDidUpdate() {
    this._jumpToHash();
  }

  _jumpToHash() {
    const { history } = this.props;
    const hash = history.location.hash.substring(1) || "headline";
    const element = document.getElementById(hash);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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
  history: PropTypes.shape()
};
