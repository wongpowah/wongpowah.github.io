import { combineReducers } from "redux";
import loaded from "./reducer.loaded";
import connection from "./reducer.connection";
import user from "./reducer.user";

export default combineReducers({
  loaded,
  connection,
  user
});
