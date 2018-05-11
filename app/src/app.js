import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import store, { history } from "./store";

import GuestRoute from "./views/pages/guestroute";
import UserRoute from "./views/pages/userroute";

import Header from "./views/components/header";
import Footer from "./views/components/footer";
import Background from "./views/components/background";

import Home from "./views/pages/landing/home";
import Signup from "./views/pages/landing/signup";
import Login from "./views/pages/landing/login";
import ForgotPassword from "./views/pages/landing/forgotpassword";
import ResetPassword from "./views/pages/landing/resetpassword";
import Profile from "./views/pages/user/profile";
import ChangeEmail from "./views/pages/user/changeemail";
import ChangePassword from "./views/pages/user/changepassword";

import "./app.css";

const Content = () => (
  <div id="app">
    <Route
      path="/"
      render={() => <Header onHistoryChange={history.listen} />}
    />
    <Switch>
      <Route path="/" exact component={Home} />
      <GuestRoute path="/signup" exact component={Signup} />
      <GuestRoute path="/login" exact component={Login} />
      <GuestRoute path="/forgot-password" exact component={ForgotPassword} />
      <GuestRoute path="/reset-password/:id" exact component={ResetPassword} />
      <UserRoute path="/profile" exact component={Profile} />
      <UserRoute path="/changeEmail" exact component={ChangeEmail} />
      <UserRoute path="/changePassword" exact component={ChangePassword} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
    <Route path="/" component={Footer} />
    <Background />
  </div>
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Content />
        </Router>
      </Provider>
    );
  }
}
