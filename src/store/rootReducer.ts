import { combineReducers } from "@reduxjs/toolkit";
import test from "./reducers/testSlice";
const cloneRootReducer = combineReducers({
  test,
});

const rootReducer = (state: any, action: any) => {
  // if (action.type === 'authorization/logout') {
  // 	return cloneRootReducer(undefined, action)
  // }

  return cloneRootReducer(state, action);
};

export default rootReducer;
