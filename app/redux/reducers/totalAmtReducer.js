const initState = { total: 0 };

const totalAmtReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_TOTAL":
      return { ...state, ...action.payload };
    case "RESET_TOTAL":
      return { ...initState };
    default:
      return { ...state };
  }
};

export default totalAmtReducer;
