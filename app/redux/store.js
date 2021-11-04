import { combineReducers } from "redux";

import cartReducer from "./reducers/cartReducer";
import errorReducer from "./reducers/errorReducer";

const allReducers = combineReducers({
  cart: cartReducer,
  error: errorReducer,
});

export default allReducers;
