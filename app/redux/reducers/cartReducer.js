const initState = [];

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CART":
      return [...state, ...action.payload];
    case "RESET_CART":
      return [...initState];

    default:
      return [...state];
  }
};