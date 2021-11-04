const ADD_CART = "ADD_CART";
const RESET_CART = "RESET_CART";
const SET_ERROR = "SET_ERROR";
const RESET_ERROR = "RESET_ERROR";

export const addCart = (data) => {
  return {
    type: ADD_CART,
    payload: data,
  };
};

export const resetCart = () => {
  return {
    type: RESET_CART,
  };
};

export const setError = (data) => {
  return {
    type: SET_ERROR,
    payload: data,
  };
};

export const resetError = () => {
  return {
    type: RESET_ERROR,
  };
};
