import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import MenuButton from "../menubutton";

import Logo from "../../../resources/logo.png";

import "./style.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      float: false,
      aboutActive: false,
      productsActive: false,
      contactActive: false,
      showDropdown: false
    };

    this._scrollHandler = this._scrollHandler.bind(this);
    this._showDropdown = this._showDropdown.bind(this);
    this._hideDropdown = this._hideDropdown.bind(this);
  }

  _isWithinComponent(element, elementId) {
    let node = element;
    let component = document.getElementById(elementId);

    while (node !== null) {
      if (node === component) {
        return true;
      }

      node = node.parentNode;
    }

    return false;
  }

  _showDropdown() {
    this.setState({ showDropdown: true });

    document.addEventListener("mousedown", this._hideDropdown);
  }

  _hideDropdown(event) {
    if (
      !event ||
      (!this._isWithinComponent(event.target, "menu-button") &&
        !this._isWithinComponent(event.target, "menu"))
    ) {
      this.setState({ showDropdown: false });

      document.removeEventListener("mousedown", this._hideDropdown);
    }
  }

  _scrollHandler() {
    const about = document.getElementById("about");
    const products = document.getElementById("products");
    const contact = document.getElementById("contact");
    const { scrollY } = window;

    let windowTop = scrollY + 60;
    let aboutActive = false;
    let productsActive = false;
    let contactActive = false;

    if (contact && windowTop > contact.offsetTop) {
      contactActive = true;
    } else if (products && windowTop > products.offsetTop) {
      productsActive = true;
    } else if (about && windowTop > about.offsetTop) {
      aboutActive = true;
    }

    this.setState({
      float: scrollY > 0,
      aboutActive,
      productsActive,
      contactActive
    });
  }

  componentDidMount() {
    const { history } = this.props;

    window.addEventListener("scroll", this._scrollHandler);
    this._scrollHandler();

    this._unlisten = history.listen(() => this._hideDropdown());

    new Promise(resolve => {
      let image = new Image();
      image.onload = resolve;
      image.onerror = resolve;
      image.src = Logo;
    }).then(() => {
      this.setState({ logo: Logo });
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._scrollHandler);

    this._unlisten();
  }

  render() {
    const {
      logo,
      float,
      showDropdown,
      aboutActive,
      productsActive,
      contactActive
    } = this.state;

    return (
      <div id="header-wrapper" className={ClassNames({ float, loaded: logo })}>
        <div id="header">
          <Link id="home-link" to="/">
            <img id="logo" src={logo} alt="Logo" />
          </Link>
          <MenuButton
            id="menu-button"
            expanded={showDropdown}
            onClick={() =>
              showDropdown ? this._hideDropdown() : this._showDropdown()
            }
          />
          <div id="menu" className={ClassNames({ show: showDropdown })}>
            <Link
              className={ClassNames({ active: aboutActive }, "link")}
              style={aboutActive ? { pointerEvents: "none" } : null}
              to="/#about"
            >
              關於
            </Link>
            <Link
              className={ClassNames({ active: productsActive }, "link")}
              style={productsActive ? { pointerEvents: "none" } : null}
              to="/#products"
            >
              產品
            </Link>
            <Link
              className={ClassNames({ active: contactActive }, "link")}
              style={contactActive ? { pointerEvents: "none" } : null}
              to="/#contact"
            >
              聯絡
            </Link>
            <div id="menu-right" />
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape().isRequired
};

export default Header;
