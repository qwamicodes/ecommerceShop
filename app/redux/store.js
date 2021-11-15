import { combineReducers } from "redux";

import cartReducer from "./reducers/cartReducer";
import errorReducer from "./reducers/errorReducer";
import totalAmtReducer from "./reducers/totalAmtReducer";

const allReducers = combineReducers({
  cart: cartReducer,
  error: errorReducer,
  amount: totalAmtReducer,
});

export default allReducers;
