import React, { Component } from "react";
import { connect } from "react-redux";
import ClassNames from "classnames";
import PropTypes from "prop-types";

import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED
} from "../../../../actions/actiontypes";
import { signup } from "../../../../actions/action.user";
import { isEmailValid } from "../../../../utils";

import TextField from "../../../components/textfield";

import "./style.css";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirm: "",
      error: "",
      loading: false,
      success: false
    };
  }

  checkField(value, fieldName, validate) {
    if (value.length === 0) {
      return `Please enter your ${fieldName}`;
    } else if (validate) {
      return validate(value);
    }

    return "";
  }

  async submit() {
    const { onSignup, onSignupSuccess, onSignupFailed } = this.props;
    const { name, email, password, confirm } = this.state;

    onSignup();
    this.setState({ loading: true });

    let [error] = await signup({
      name,
      email,
      password,
      confirm
    });

    if (error) {
      onSignupFailed(error);
      this.setState({ error, loading: false });
    } else {
      onSignupSuccess();
      this.setState({ success: true });
    }
  }

  render() {
    const {
      name,
      email,
      password,
      confirm,
      error,
      loading,
      success
    } = this.state;

    return (
      <div id="signup-wrapper">
        <div id="signup">
          <form
            id="signup-form"
            className={ClassNames({ success })}
            onSubmit={event => {
              event.preventDefault();
              this.submit();
            }}
          >
            <div id="signup-welcome">
              <span>Welcome</span>
            </div>
            <TextField
              id="name"
              className="signup-field"
              value={name}
              label="Name"
              onChange={value => this.setState({ name: value.trim() })}
              validate={value => this.checkField(value, "name")}
            />
            <TextField
              id="email"
              className="signup-field"
              value={email}
              label="Email"
              onChange={value => this.setState({ email: value.trim() })}
              validate={value =>
                this.checkField(
                  value,
                  "email",
                  () => (isEmailValid(value) ? "" : "Invalid email")
                )
              }
            />
            <TextField
              id="password"
              className="signup-field"
              type="password"
              value={password}
              label="Password"
              onChange={value => this.setState({ password: value.trim() })}
              validate={value => this.checkField(value, "password")}
            />
            <TextField
              id="confirm"
              className="signup-field"
              type="password"
              value={confirm}
              label="Re-enter Password"
              onChange={value => this.setState({ confirm: value.trim() })}
              validate={value =>
                this.checkField(
                  value,
                  "password again",
                  () => (password === value ? "" : "The passwords do not match")
                )
              }
            />
            <div id="error-message">{error}</div>
            {loading ? (
              <div id="signup-spinner" />
            ) : (
              <button id="signup-button" type="submit">
                Sign up
              </button>
            )}
          </form>
          {success && (
            <div id="signup-success">Thank you for signing up, {name}.</div>
          )}
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  onSignup: PropTypes.func.isRequired,
  onSignupSuccess: PropTypes.func.isRequired,
  onSignupFailed: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onSignup: () => dispatch({ type: SIGNUP }),
    onSignupSuccess: () => dispatch({ type: SIGNUP_SUCCESS }),
    onSignupFailed: error => dispatch({ type: SIGNUP_FAILED, error })
  };
};

export default connect(() => ({}), mapDispatchToProps)(Signup);
