import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink as Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from "../../../../actions/actiontypes";
import { login } from "../../../../actions/action.user";

import BubbleTextField from "../../../components/bubbletextfield";

import "./style.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
      loading: false
    };
  }

  async submit() {
    const { onLogin, onLoginSuccess, onLoginFailed } = this.props;
    const { email, password } = this.state;

    onLogin();
    this.setState({ loading: true });

    let [error, user] = await login({ email, password });

    if (error) {
      onLoginFailed(error);
      this.setState({ error, loading: false });
    } else if (user) {
      onLoginSuccess(user);
    }
  }

  render() {
    const { email, password, error, loading } = this.state;

    return (
      <div id="login-wrapper">
        <div id="login">
          <form
            id="login-form"
            onSubmit={event => {
              event.preventDefault();
              this.submit();
            }}
          >
            <BubbleTextField
              id="email"
              className="login-field"
              value={email}
              label="Email"
              onChange={value => this.setState({ email: value.trim() })}
            />
            <BubbleTextField
              id="password"
              className="login-field"
              type="password"
              value={password}
              label="Password"
              onChange={value => this.setState({ password: value.trim() })}
            />
            <Link id="forgot-password-link" to="/forgot-password">
              Forgot your password?
            </Link>
            <div id="error-message">{error}</div>
            {loading ? (
              <div id="login-spinner" />
            ) : (
              <button id="login-button" type="submit">
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLoginSuccess: PropTypes.func.isRequired,
  onLoginFailed: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onLogin: () => dispatch({ type: LOGIN }),
  onLoginSuccess: user => dispatch({ type: LOGIN_SUCCESS, user }),
  onLoginFailed: error => dispatch({ type: LOGIN_FAILED, error })
});

export default connect(() => ({}), mapDispatchToProps)(Login);
