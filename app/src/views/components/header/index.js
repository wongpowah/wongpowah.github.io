import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import debounce from "debounce";

import MenuButton from "../menubutton";

import Logo from "../../../resources/logo.svg";

import "./style.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      float: false,
      aboutActive: false,
      agencyActive: false,
      contactActive: false,
      showDropdown: false
    };

    this._scrollHandler = debounce(() => this._onScroll(), true);
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

  _onScroll() {
    const about = document.getElementById("about");
    const agency = document.getElementById("agency");
    const contact = document.getElementById("contact");
    const { scrollY } = window;

    let windowTop = scrollY + 60;
    let aboutActive = false;
    let agencyActive = false;
    let contactActive = false;

    if (contact && windowTop > contact.offsetTop) {
      contactActive = true;
    } else if (agency && windowTop > agency.offsetTop) {
      agencyActive = true;
    } else if (about && windowTop > about.offsetTop) {
      aboutActive = true;
    }

    this.setState({
      float: scrollY > 0,
      aboutActive,
      agencyActive,
      contactActive
    });
  }

  componentDidMount() {
    const { history } = this.props;

    window.addEventListener("scroll", this._scrollHandler);
    this._scrollHandler();

    this._unlisten = history.listen(() => this._hideDropdown());
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._scrollHandler);

    this._unlisten();
  }

  render() {
    const {
      float,
      showDropdown,
      aboutActive,
      agencyActive,
      contactActive
    } = this.state;

    return (
      <div id="header-wrapper" className={ClassNames({ float })}>
        <div id="header">
          <Link id="home-link" to="/">
            <img src={Logo} id="logo" alt="logo" />
            <span>黃保華針車有限公司</span>
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
              className={ClassNames({ active: agencyActive }, "link")}
              style={agencyActive ? { pointerEvents: "none" } : null}
              to="/#agency"
            >
              代理
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
        <Link id="back" to="/" />
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape().isRequired
};

export default Header;
