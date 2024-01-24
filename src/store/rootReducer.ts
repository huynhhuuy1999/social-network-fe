import { combineReducers } from "@reduxjs/toolkit";
import test from "./reducers/testSlice";
import user from "./reducers/userSlice";
import auth from "./reducers/authSlice";
const cloneRootReducer = combineReducers({
  test,
  user,
  auth,
});

const rootReducer = (state: any, action: any) => {
  return cloneRootReducer(state, action);
};

export default rootReducer;
