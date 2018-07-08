import React, { Component } from "react";
import PropTypes from "prop-types";

import { LoadWhenVisible } from "../../../loader";

import "./style.css";

const LoadSection = (loader, title) =>
  LoadWhenVisible({
    loader,
    Loading: () => <div className="section-loading">{title}</div>
  });

const About = LoadSection(() => import("./about"), "關於");
const Products = LoadSection(() => import("./products"), "產品");
const Contact = LoadSection(() => import("./contact"), "聯絡");

const title = "黃保華針車有限公司";

const titleMap = {
  "#about": "關於",
  "#products": "產品",
  "#contact": "聯絡"
};

class Home extends Component {
  componentDidMount() {
    window.onload = () => this._scrollToHash();
  }

  componentDidUpdate() {
    this._scrollToHash();
  }

  _scrollToHash() {
    const { history } = this.props;
    const hash = history.location.hash || "#headline";
    const element = document.querySelector(hash);
    const subtitle = titleMap[hash] ? ` | ${titleMap[hash]}` : "";

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        document.title = `${title}${subtitle}`;
      });
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

export default Home;
