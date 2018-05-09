import { publicMutation, userMutation } from "../controllers/fetcher";
import { isEmailValid } from "../utils";

const userProps =
  "name, email, accessLevel, lastActiveAt, createdAt, updatedAt, deletedAt";

const parseResult = (field, result) => {
  if (result) {
    result = result && result[field];
  }

  return result;
};

export const login = async params => {
  const field = "login";
  const { email, password } = params;
  const props = userProps;
  let error, result;

  if (!email || email.length === 0) {
    error = "Please enter your email";
  } else if (!isEmailValid(email)) {
    error = "Invalid email";
  } else if (!password || password.length === 0) {
    error = "Please enter your password";
  }

  params = { email, password };

  if (!error) {
    [error, result] = await publicMutation({ field, params, props });
  }

  return [error, parseResult(field, result)];
};

export const logout = () => userMutation({ field: "logout" });

export const signup = async params => {
  const field = "signup";
  const { name, email, password, confirm } = params;
  let error;

  if (!name || name.length === 0) {
    error = "Please enter your name";
  } else if (!email || email.length === 0) {
    error = "Please enter your email";
  } else if (!isEmailValid(email)) {
    error = "Invalid email";
  } else if (!password || password.length === 0) {
    error = "Please enter your password";
  } else if (!confirm || confirm.length === 0) {
    error = "Please enter your password again";
  } else if (password !== confirm) {
    error = "the passwords do not match";
  }

  params = { name, email, password };

  if (!error) {
    [error] = await publicMutation({ field, params });
  }

  return [error];
};

export const forgotPassword = async params => {
  const field = "forgotPassword";
  const { email } = params;

  let error;

  if (!email || email.length === 0) {
    error = "Please enter your email";
  } else if (!isEmailValid(email)) {
    error = "Invalid email";
  }

  if (!error) {
    [error] = await publicMutation({ field, params });
  }

  return [error];
};

export const resetPassword = async params => {
  const field = "resetPassword";
  const { password, confirm, passwordResetId } = params;

  let error;

  if (!password || password.length === 0) {
    error = "Please enter your new password";
  } else if (!confirm || confirm.length === 0) {
    error = "Please enter your new password again";
  } else if (password !== confirm) {
    error = "The new passwords do not match";
  }

  params = { password, passwordResetId };

  if (!error) {
    [error] = await publicMutation({ field, params });
  }

  return [error];
};

export const changeEmail = async params => {
  const field = "changeEmail";
  const { email, newEmail, password } = params;
  const props = userProps;
  let error, result;

  if (!newEmail || newEmail.length === 0) {
    error = "Please enter your email";
  } else if (!isEmailValid(newEmail)) {
    error = "Invalid email";
  } else if (email === newEmail) {
    error = "The new email is the same as the old email";
  } else if (!password || password.length === 0) {
    error = "Please enter your password";
  }

  params = { newEmail, password };

  if (!error) {
    [error, result] = await userMutation({ field, params, props });
  }

  return [error, parseResult(field, result)];
};

export const changePassword = async params => {
  const field = "changePassword";
  const { password, newPassword, confirm } = params;
  const props = userProps;
  let error, result;

  if (!password || password.length === 0) {
    error = "Please enter your password";
  } else if (!newPassword || newPassword.length === 0) {
    error = "Please enter your new password";
  } else if (!confirm || confirm.length === 0) {
    error = "Please enter your new password again";
  } else if (newPassword !== confirm) {
    error = "The new passwords do not match";
  } else if (password === newPassword) {
    error = "The new password is the same as the old password";
  }

  params = { password, newPassword };

  if (!error) {
    [error, result] = await userMutation({ field, params, props });
  }

  return [error, parseResult(field, result)];
};

export const editProfile = async params => {
  const field = "editProfile";
  const { name } = params;
  const props = userProps;
  let error, result;

  if (!name || name.length === 0) {
    error = "Please enter your name";
  }

  params = { name };

  if (!error) {
    [error, result] = await userMutation({ field, params, props });
  }

  return [error, parseResult(field, result)];
};
