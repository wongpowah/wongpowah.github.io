import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink as Link } from "react-router-dom";
import ClassNames from "classnames";
import PropTypes from "prop-types";

import { LOGOUT } from "../../../../actions/actiontypes";
import { logout } from "../../../../actions/action.user";

import MenuButton from "../../menubutton";
import Menu from "./menu";

import "./style.css";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
      showMenu: false
    };

    this._showDropdown = this._showDropdown.bind(this);
    this._hideDropdown = this._hideDropdown.bind(this);
    this._showMenu = this._showMenu.bind(this);
    this._hideMenu = this._hideMenu.bind(this);
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
      (!this._isWithinComponent(event.target, "user-dropdown-button") &&
        !this._isWithinComponent(event.target, "user-dropdown"))
    ) {
      this.setState({ showDropdown: false });

      document.removeEventListener("mousedown", this._hideDropdown);
    }
  }

  _showMenu() {
    this.setState({ showMenu: true });

    document.addEventListener("mousedown", this._hideMenu);
  }

  _hideMenu(event) {
    if (
      !event ||
      (!this._isWithinComponent(event.target, "user-menu-button") &&
        !this._isWithinComponent(event.target, "user-menu-container"))
    ) {
      this.setState({ showMenu: false });

      document.removeEventListener("mousedown", this._hideMenu);
    }
  }

  componentDidMount() {
    const { history } = this.props;

    this._unlisten = history.listen(() => this._hideDropdown());
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this._hideDropdown);

    this._unlisten();
  }

  async submitLogout() {
    const { onLogout } = this.props;

    let [error] = await logout();

    if (!error) {
      onLogout();
    }
  }

  render() {
    const { name, email } = this.props;
    const { showMenu, showDropdown } = this.state;

    return (
      <div id="user-header-wrapper">
        <div id="user-header">
          <MenuButton
            id="user-menu-button"
            expanded={showMenu}
            onClick={() => (showMenu ? this._hideMenu() : this._showMenu())}
          />
          <div
            id="user-menu-container"
            className={ClassNames({ show: showMenu })}
          >
            <Menu />
          </div>
          <div id="user-dropdown-container">
            <div
              id="user-dropdown-button"
              className={ClassNames({ expanded: showDropdown })}
              onClick={() =>
                showDropdown ? this._hideDropdown() : this._showDropdown()
              }
            >
              {name}
            </div>
            <div
              id="user-dropdown"
              className={ClassNames({ show: showDropdown })}
            >
              <div id="user-dropdown-content">
                <div id="user-info-wrapper">
                  <div id="user-info-name">{name}</div>
                  <div id="user-info-email">{email}</div>
                </div>
                <div id="user-nav-wrapper">
                  <div className="user-nav-item">
                    <Link id="user-nav-profile" to="/profile">
                      Profile
                    </Link>
                  </div>
                  <div className="user-nav-item">
                    <span onClick={() => this.submitLogout()}>Sign Out</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired
};

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch({ type: LOGOUT })
});

export default connect(() => ({}), mapDispatchToProps)(User);
