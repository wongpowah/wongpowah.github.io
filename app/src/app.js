import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

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
import NotFound from "./views/pages/notfound";

import "./app.css";

const history = createHistory();

const Content = () => (
  <div id="content-wrapper">
    <Switch>
      <Route path="/" exact component={Home} />
      <GuestRoute path="/signup" exact component={Signup} />
      <GuestRoute path="/login" exact component={Login} />
      <GuestRoute path="/forgot-password" exact component={ForgotPassword} />
      <GuestRoute path="/reset-password/:id" exact component={ResetPassword} />
      <UserRoute path="/profile" exact component={Profile} />
      <UserRoute path="/changeEmail" exact component={ChangeEmail} />
      <UserRoute path="/changePassword" exact component={ChangePassword} />
      <Route component={NotFound} />
    </Switch>
    <Route path="/" component={Footer} />
  </div>
);

export default class App extends Component {
  componentDidMount() {
    setTimeout(() => document.getElementById("loader-overlay").remove(), 2000);
  }

  render() {
    return (
      <Router history={history}>
        <div id="app">
          <Route
            path="/"
            render={() => <Header onHistoryChange={history.listen} />}
          />
          <Content />
          <Background />
        </div>
      </Router>
    );
  }
}
