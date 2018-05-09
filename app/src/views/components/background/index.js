import React, { Component } from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import { connect } from "react-redux";
import BackgroundImage from "../../../resources/background.png";

import "./style.css";

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundImage: null };
  }

  componentDidMount() {
    return new Promise(resolve => {
      let image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => resolve(null);
      image.src = BackgroundImage;
    }).then(() => {
      this.setState({ backgroundImage: `url(${BackgroundImage})` });
    });
  }

  render() {
    const { user } = this.props;
    const { backgroundImage } = this.state;

    return (
      <div id="background-wrapper">
        <div
          id="background"
          className={ClassNames({ user })}
          style={{ backgroundImage }}
        />
      </div>
    );
  }
}

Background.propTypes = {
  user: PropTypes.shape()
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Background);
