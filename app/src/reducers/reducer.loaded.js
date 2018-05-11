import { APP_LOADED as LOADED } from "../actions/actiontypes";

export default (state = false, action) => {
  let { type } = action;

  switch (type) {
    case LOADED:
      return true;
    default:
      return state;
  }
};
