import { combineReducers } from "redux";
import connection from "./reducer.connection";
import user from "./reducer.user";

export default combineReducers({
  connection,
  user
});
