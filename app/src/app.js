import React, { Component } from "react";
import createHistory from "history/createBrowserHistory";

import { Router, Route } from "react-router-dom";

import Header from "./views/components/header";
import Footer from "./views/components/footer";
import Background from "./views/components/background";

import { Load } from "./loader";

import "./app.css";

const history = createHistory();

const titleMap = {
  "#about": "關於",
  "#products": "產品",
  "#contact": "聯絡"
};

const Home = Load({
  loader: () => import("./views/pages/home"),
  Loading: () => <div className="page-loading" />
});

export default class App extends Component {
  componentDidMount() {
    this._unlisten = history.listen(() => {
      const hash = history.location.hash;
      const subtitle = titleMap[hash] ? ` | ${titleMap[hash]}` : "";

      document.title = `黃保華針車有限公司${subtitle}`;
    });
  }

  componentWillUnmount() {
    this._unlisten();
  }

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
