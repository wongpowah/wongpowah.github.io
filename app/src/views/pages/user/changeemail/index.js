import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  CHANGE_EMAIL as CHANGE,
  CHANGE_EMAIL_SUCCESS as CHANGE_SUCCESS,
  CHANGE_EMAIL_FAILED as CHANGE_FAILED
} from "../../../../actions/actiontypes";
import { changeEmail } from "../../../../actions/action.user";
import { isEmailValid } from "../../../../utils";

import TextField from "../../../components/textfield";

import "./style.css";

class ChangeEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newEmail: "",
      password: "",
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
      email,
      onProfileEdit,
      onProfileEditSuccess,
      onProfileEditFailed
    } = this.props;
    const { newEmail, password } = this.state;

    onProfileEdit();
    this.setState({ loading: true });

    let [error, user] = await changeEmail({ email, newEmail, password });

    if (error) {
      onProfileEditFailed(error);
      this.setState({ error, loading: false });
    } else if (user) {
      onProfileEditSuccess(user);
      history.push("/profile");
    }
  }

  render() {
    const { email, history } = this.props;
    const { newEmail, password, error, loading } = this.state;

    return (
      <div id="change-email-wrapper">
        <button id="change-email-back" onClick={history.goBack}>
          Back
        </button>
        <div id="change-email">
          <form
            id="change-email-form"
            onSubmit={event => {
              event.preventDefault();
              this.submit();
            }}
          >
            <TextField
              id="old-email"
              className="change-email-field"
              value={email}
              label="Email"
              disabled={true}
            />
            <TextField
              id="email"
              className="change-email-field"
              value={newEmail}
              label="New Email"
              onChange={value => this.setState({ newEmail: value.trim() })}
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
              className="change-email-field"
              type="password"
              value={password}
              label="Password"
              onChange={value => this.setState({ password: value.trim() })}
              validate={value => this.checkField(value, "password")}
            />
            <div id="error-message">{error}</div>
            {loading ? (
              <div id="change-email-spinner" />
            ) : (
              <button id="change-email-button" type="submit">
                Change email
              </button>
            )}
          </form>
        </div>
      </div>
    );
  }
}

ChangeEmail.propTypes = {
  email: PropTypes.string,
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangeEmail);
