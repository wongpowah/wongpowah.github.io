import cookies from "browser-cookies";

import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  PROFILE_EDIT_SUCCESS,
  CHANGE_EMAIL_SUCCESS,
  CHANGE_PASSWORD_SUCCESS
} from "../actions/actiontypes";

let initialState = null;

try {
  initialState = JSON.parse(cookies.get("user"));
} catch (error) {}

export default (state = initialState, action) => {
  let { type, user } = action;

  switch (type) {
    case LOGIN_SUCCESS:
    case PROFILE_EDIT_SUCCESS:
    case CHANGE_EMAIL_SUCCESS:
    case CHANGE_PASSWORD_SUCCESS:
      cookies.set("user", JSON.stringify(user));
      return user;
    case LOGIN_FAILED:
    case LOGOUT:
      cookies.erase("user");
      return null;
    default:
      return state;
  }
};
