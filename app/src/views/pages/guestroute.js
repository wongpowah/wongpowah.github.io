import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const GuestRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={p =>
      props.user ? <Redirect to="/profile" /> : <Component {...p} />
    }
  />
);

GuestRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(GuestRoute);
