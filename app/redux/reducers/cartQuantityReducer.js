const initState = [];



const cartQuantityReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_QUANTITY":
      return updateQuantity(state, action.payload)
    default:
      return [...state]
  }
};

export default cartQuantityReducer;
