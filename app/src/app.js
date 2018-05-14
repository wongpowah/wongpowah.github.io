import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import store, { history } from "./store";

import GuestRoute from "./views/pages/guestroute";
import UserRoute from "./views/pages/userroute";

import Header from "./views/components/header";
import Footer from "./views/components/footer";
import Background from "./views/components/background";

import { Load } from "./loader";

import "./app.css";

const loadPage = loader =>
  Load({ loader, Loading: () => <div className="page-loading" /> });

const Home = loadPage(() => import("./views/pages/landing/home"));
const Signup = loadPage(() => import("./views/pages/landing/signup"));
const Login = loadPage(() => import("./views/pages/landing/login"));
const ForgotPassword = loadPage(() =>
  import("./views/pages/landing/forgotpassword")
);
const ResetPassword = loadPage(() =>
  import("./views/pages/landing/resetpassword")
);
const Profile = loadPage(() => import("./views/pages/user/profile"));
const ChangeEmail = loadPage(() => import("./views/pages/user/changeemail"));
const ChangePassword = loadPage(() =>
  import("./views/pages/user/changepassword")
);

const Content = () => (
  <div id="app">
    <Route path="/" component={Header} />
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
