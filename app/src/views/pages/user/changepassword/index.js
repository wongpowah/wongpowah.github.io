import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  CHANGE_PASSWORD as CHANGE,
  CHANGE_PASSWORD_SUCCESS as CHANGE_SUCCESS,
  CHANGE_PASSWORD_FAILED as CHANGE_FAILED
} from "../../../../actions/actiontypes";
import { changePassword } from "../../../../actions/action.user";

import TextField from "../../../components/textfield";

import "./style.css";

class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      newPassword: "",
      confirm: "",
      error: "",
      loading: false
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
    const {
      history,
      onProfileEdit,
      onProfileEditSuccess,
      onProfileEditFailed
    } = this.props;
    const { password, newPassword, confirm } = this.state;

    onProfileEdit();
    this.setState({ loading: true });

    let [error, user] = await changePassword({
      password,
      newPassword,
      confirm
    });

    if (error) {
      onProfileEditFailed(error);
      this.setState({ error, loading: false });
    } else {
      onProfileEditSuccess(user);
      history.push("/profile");
    }
  }

  render() {
    const { history } = this.props;
    const { password, newPassword, confirm, error, loading } = this.state;

    return (
      <div id="change-password-wrapper">
        <button id="change-password-back" onClick={history.goBack}>
          Back
        </button>
        <div id="change-password">
          <form
            id="change-password-form"
            onSubmit={event => {
              event.preventDefault();
              this.submit();
            }}
          >
            <TextField
              id="password"
              className="change-password-field"
              type="password"
              value={password}
              label="Password"
              onChange={value => this.setState({ password: value.trim() })}
              validate={value => this.checkField(value, "password")}
            />
            <TextField
              id="new-password"
              className="change-password-field"
              type="password"
              value={newPassword}
              label="New Password"
              onChange={value => this.setState({ newPassword: value.trim() })}
              validate={value => this.checkField(value, "new password")}
            />
            <TextField
              id="confirm"
              className="change-password-field"
              type="password"
              value={confirm}
              label="Re-enter new Password"
              onChange={value => this.setState({ confirm: value.trim() })}
              validate={value =>
                this.checkField(
                  value,
                  "new password again",
                  () =>
                    newPassword !== value
                      ? "The new passwords do not match"
                      : password === newPassword
                        ? "The new password is the same as the old password"
                        : ""
                )
              }
            />
            <div id="error-message">{error}</div>
            {loading ? (
              <div id="change-password-spinner" />
            ) : (
              <button id="change-password-button" type="submit">
                Change password
              </button>
            )}
          </form>
        </div>
      </div>
    );
  }
}

ChangePassword.propTypes = {
  history: PropTypes.shape().isRequired,
  onProfileEdit: PropTypes.func.isRequired,
  onProfileEditSuccess: PropTypes.func.isRequired,
  onProfileEditFailed: PropTypes.func.isRequired
};

const mapStateToProps = ({ user }) => ({ ...user });

const mapDispatchToProps = dispatch => ({
  onProfileEdit: () => dispatch({ type: CHANGE }),
  onProfileEditSuccess: user => dispatch({ type: CHANGE_SUCCESS, user }),
  onProfileEditFailed: error => dispatch({ type: CHANGE_FAILED, error })
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
