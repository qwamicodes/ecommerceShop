const initState = [];

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CART":
      return [...state, ...action.payload];

    default:
      return [...state];
  }
};
