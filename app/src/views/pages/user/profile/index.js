import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink as Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  PROFILE_EDIT as EDIT,
  PROFILE_EDIT_SUCCESS as EDIT_SUCCESS,
  PROFILE_EDIT_FAILED as EDIT_FAILED
} from "../../../../actions/actiontypes";
import { editProfile } from "../../../../actions/action.user";

import TextField from "../../../components/textfield";

import "./style.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    const { name } = props;
    this.state = {
      name,
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
      onProfileEdit,
      onProfileEditSuccess,
      onProfileEditFailed
    } = this.props;
    const { name } = this.state;

    onProfileEdit();
    this.setState({ loading: true });

    let [error, user] = await editProfile({ name });

    if (error) {
      onProfileEditFailed(error);
    } else {
      error = "";
      onProfileEditSuccess(user);
    }

    this.setState({ error, loading: false });
  }

  render() {
    const { email } = this.props;
    const { name, error, loading } = this.state;

    return (
      <div id="profile-wrapper">
        <div id="profile">
          <div id="profile-header">
            <div id="profile-info-wrapper">
              <div id="profile-email">{email}</div>
              <Link id="profile-change-email" to="/changeEmail">
                change email
              </Link>
              <Link id="profile-change-password" to="/changePassword">
                change password
              </Link>
            </div>
          </div>
          <form
            id="profile-form"
            onSubmit={event => {
              event.preventDefault();
              this.submit();
            }}
          >
            <TextField
              id="name"
              className="profile-field"
              value={name}
              label="Name"
              onChange={value => this.setState({ name: value.trim() })}
              validate={value => this.checkField(value, "name")}
            />
            <div id="error-message">{error}</div>
            {loading ? (
              <div id="profile-spinner" />
            ) : (
              <button id="profile-button" type="submit">
                Update Profile
              </button>
            )}
          </form>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  onProfileEdit: PropTypes.func.isRequired,
  onProfileEditSuccess: PropTypes.func.isRequired,
  onProfileEditFailed: PropTypes.func.isRequired
};

const mapStateToProps = ({ user }) => ({ ...user });

const mapDispatchToProps = dispatch => ({
  onProfileEdit: () => dispatch({ type: EDIT }),
  onProfileEditSuccess: user => dispatch({ type: EDIT_SUCCESS, user }),
  onProfileEditFailed: error => dispatch({ type: EDIT_FAILED, error })
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
