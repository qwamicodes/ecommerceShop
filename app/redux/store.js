import { combineReducers } from "redux";

import cartReducer from "./reducers/cartReducer";

const allReducer = combineReducers({
  cart: cartReducer,
});

export default allReducer;
