import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const UserRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={p => (props.user ? <Component {...p} /> : <Redirect to="/login" />)}
  />
);

UserRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(UserRoute);
