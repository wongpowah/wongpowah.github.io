import React from "react";
import { render } from "react-dom";

import { dispatch } from "./store";
import { APP_LOADED as LOADED } from "./actions/actiontypes";

import { Load } from "./loader";
import { initialize } from "./controllers";

initialize();

window.onload = () => {
  dispatch({ type: LOADED });
  document.getElementById("loader-overlay").remove();
};

const App = Load({
  loader: () => import("./app")
});

render(<App />, document.getElementById("root"));
