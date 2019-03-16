import React, { Component } from "react";
import ClassNames from "classnames";
import debounce from "debounce";

import TeamPhoto from "../../../../resources/teamphoto.png";

import "./style.css";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false, image: null };

    this._scrollHandler = debounce(() => this._onScroll(), true);
  }

  _onScroll() {
    const { scrollY, innerHeight } = window;
    const { offsetTop, offsetHeight } = this.element;

    this.setState({
      show:
        scrollY + innerHeight > offsetTop &&
        scrollY + 60 <= offsetTop + offsetHeight
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this._scrollHandler);
    this._scrollHandler();

    return new Promise(resolve => {
      let image = new Image();
      image.onload = resolve;
      image.onerror = resolve;
      image.src = TeamPhoto;
    }).then(() => {
      this.setState({ image: TeamPhoto });
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._scrollHandler);
  }

  render() {
    const { show, image } = this.state;

    return (
      <div
        ref={r => (this.element = r)}
        id="about"
        className={ClassNames({ show })}
      >
        <div id="about-content">
          {image && <img id="about-image" src={image} alt={"Team"} />}
          <div id="about-info">
            <div id="about-title">關於</div>
            <div id="about-message">
              黃保華針車有限公司創辦已超過七十年，向以經營工業縫紉機本銷及出入口業務，憑著「品質保證」及「服務必盡忠誠」的宗旨，為各廠家，同業提供盡善盡美的服務。力求以高科技，更先進，更完善的製衣設備，以應各用戶日漸多元化，生產高檔產品的更高要求。
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
