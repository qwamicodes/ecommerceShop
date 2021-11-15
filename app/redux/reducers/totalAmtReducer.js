const initState = { subtotal: 0, tax: 0, total: 0 };

const totalAmtReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_TOTAL":
      return { ...action.payload };
    case "RESET_TOTAL":
      return { ...initState };
    default:
      return { ...state };
  }
};

export default totalAmtReducer;
