import React, { Component } from "react";
import createHistory from "history/createBrowserHistory";

import { Router, Route } from "react-router-dom";

import Header from "./views/components/header";
import Footer from "./views/components/footer";
import Background from "./views/components/background";

import { Load } from "./loader";

import "./app.css";

const history = createHistory();

const Home = Load({
  loader: () => import("./views/pages/home"),
  Loading: () => <div className="page-loading" />
});

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div id="app">
          <Route path="/" component={Header} />
          <Route path="/" exact component={Home} />
          <Route path="/" component={Footer} />
          <Background />
        </div>
      </Router>
    );
  }
}
