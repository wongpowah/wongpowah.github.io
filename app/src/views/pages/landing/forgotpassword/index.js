import React, { Component } from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import { forgotPassword } from "../../../../actions/action.user";
import { isEmailValid } from "../../../../utils";

import TextField from "../../../components/textfield";

import "./style.css";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
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
    const { email } = this.state;

    this.setState({ loading: true });

    let [error] = await forgotPassword({ email });

    if (error) {
      this.setState({ error, loading: false });
    } else {
      this.setState({ success: true });
    }
  }

  render() {
    const { history } = this.props;
    const { email, error, loading, success } = this.state;

    return (
      <div id="forgot-password-wrapper">
        <button id="forgot-password-back" onClick={history.goBack}>
          Back
        </button>
        <div id="forgot-password">
          <form
            id="forgot-password-form"
            className={ClassNames({ success })}
            onSubmit={event => {
              event.preventDefault();
              this.submit();
            }}
          >
            <div id="forgot-password-header">
              <span>
                Please enter the email address that you signed up for your
                account.
              </span>
            </div>
            <TextField
              id="email"
              className="forgot-password-field"
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
            <div id="error-message">{error}</div>
            {loading ? (
              <div id="forgot-password-spinner" />
            ) : (
              <button id="forgot-password-button" type="submit">
                Submit
              </button>
            )}
          </form>
          {success && (
            <div id="forgot-password-success">
              <h1>Great!</h1>
              We’ve sent you a link for reseting your password.
            </div>
          )}
        </div>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  history: PropTypes.shape().isRequired
};

export default ForgotPassword;
