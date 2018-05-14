import React from "react";
import { render } from "react-dom";

import { dispatch } from "./store";
import { APP_LOADED as LOADED } from "./actions/actiontypes";

import { initialize } from "./controllers";

import App from "./app";

initialize();

window.onload = () => {
  dispatch({ type: LOADED });
  document.getElementById("loader-overlay").remove();
};

render(<App />, document.getElementById("root"));
