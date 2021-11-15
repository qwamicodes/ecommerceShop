const ADD_CART = "ADD_CART";
const UPDATE_CART = "UPDATE_CART";
const RESET_CART = "RESET_CART";
const SET_ERROR = "SET_ERROR";
const RESET_ERROR = "RESET_ERROR";
const UPDATE_TOTAL = "UPDATE_TOTAL";
const RESET_TOTAL = "RESET_TOTAL";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";

export const addCart = (data) => {
  return {
    type: ADD_CART,
    payload: data,
  };
};

export const updateCart = (data) => {
  return {
    type: UPDATE_CART,
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

export const updateTotal = (data) => {
  return {
    type: UPDATE_TOTAL,
    payload: data,
  };
};

export const updateCartQuantity = (data) => {
  return {
    type: UPDATE_QUANTITY,
    payload: data,
  };
};
