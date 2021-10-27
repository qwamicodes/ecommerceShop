import { combineReducers } from "redux";

import authReducer from "./reducers/authReducer";

const allReducers = combineReducers({
  auth: authReducer,
});

export default allReducers;
