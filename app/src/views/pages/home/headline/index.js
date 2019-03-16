import React, { Component } from "react";
import ClassNames from "classnames";
import debounce from "debounce";

import "./style.css";

class Headline extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false };

    this._scrollHandler = debounce(() => this._onScroll(), true);
  }

  _onScroll() {
    const { scrollY } = window;
    const { offsetTop, offsetHeight } = this.element;

    this.setState({ show: scrollY + 60 <= offsetTop + offsetHeight });
  }

  componentDidMount() {
    window.addEventListener("scroll", this._scrollHandler);
    this._scrollHandler();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._scrollHandler);
  }

  render() {
    const { show } = this.state;

    return (
      <div
        ref={r => (this.element = r)}
        id="headline"
        className={ClassNames({ show })}
      >
        <div id="headline-content">
          <span>名牌縫紉機總會</span>
          <span>歷史悠久，信譽素孚</span>
        </div>
      </div>
    );
  }
}

export default Headline;
