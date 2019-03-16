import React, { Component } from "react";
import PropTypes from "prop-types";

import Headline from "./headline";
import About from "./about";
import Agency from "./agency";
import Contact from "./contact";

class Home extends Component {
  componentDidMount() {
    let scrolled = false;
    let scrollHandler = () => {
      scrolled = true;
      window.removeEventListener("scroll", scrollHandler);
    };

    window.addEventListener("scroll", scrollHandler);

    window.onload = () => {
      if (!scrolled) {
        this._scrollToHash();
      }
    };
  }

  componentDidUpdate() {
    this._scrollToHash();
  }

  _scrollToHash() {
    const { history } = this.props;
    const elementRef = (history.location.hash || "#headline").substr(1);
    const { element } = this[elementRef];

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  render() {
    return (
      <div id="home-wrapper">
        <Headline ref={r => (this.headline = r)} />
        <About ref={r => (this.about = r)} />
        <Agency ref={r => (this.agency = r)} />
        <Contact ref={r => (this.contact = r)} />
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape()
};

export default Home;
