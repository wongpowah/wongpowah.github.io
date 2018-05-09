import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import ClassNames from "classnames";

import { resetPassword } from "../../../../actions/action.user";

import TextField from "../../../components/textfield";

import "./style.css";

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    const { match } = this.props;
    const { password, confirm } = this.state;
    const passwordResetId = match && match.params && match.params.id;

    this.setState({ loading: true });

    let [error] = await resetPassword({ password, confirm, passwordResetId });

    if (error) {
      this.setState({ error, loading: false });
    } else {
      this.setState({ success: true });
    }
  }

  render() {
    const { password, confirm, error, loading, success } = this.state;

    return (
      <div id="reset-password-wrapper">
        <div id="reset-password">
          <form
            id="reset-password-form"
            className={ClassNames({ success })}
            onSubmit={event => {
              event.preventDefault();
              this.submit();
            }}
          >
            <div id="reset-password-header">
              <span>Reset Password</span>
            </div>
            <TextField
              id="new-password"
              className="reset-password-field"
              type="password"
              value={password}
              label="New Password"
              onChange={value => this.setState({ password: value.trim() })}
              validate={value => this.checkField(value, "new password")}
            />
            <TextField
              id="confirm"
              className="reset-password-field"
              type="password"
              value={confirm}
              label="Re-enter new Password"
              onChange={value => this.setState({ confirm: value.trim() })}
              validate={value =>
                this.checkField(
                  value,
                  "new password again",
                  () =>
                    password !== value ? "The new passwords do not match" : ""
                )
              }
            />
            <div id="error-message">{error}</div>
            {loading ? (
              <div id="reset-password-spinner" />
            ) : (
              <button id="reset-password-button" type="submit">
                Submit
              </button>
            )}
          </form>
          {success && (
            <div id="reset-password-success">
              <h1>Awesome!</h1>
              Your password has been changed successfully!
              <Link id="reset-password-login" to="/login">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ResetPassword;
