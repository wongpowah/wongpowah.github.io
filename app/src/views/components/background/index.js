import React, { Component } from "react";
import BackgroundImage from "../../../resources/background.png";

import "./style.css";

export default class Background extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundImage: null };
  }

  componentDidMount() {
    new Promise(resolve => {
      let image = new Image();
      image.onload = resolve;
      image.onerror = resolve;
      image.src = BackgroundImage;
    }).then(() => {
      this.setState({ backgroundImage: `url(${BackgroundImage})` });
    });
  }

  render() {
    const { backgroundImage } = this.state;

    return (
      <div id="background-wrapper">
        {backgroundImage && <div id="background" style={{ backgroundImage }} />}
      </div>
    );
  }
}
