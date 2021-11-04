const initState = { errorMessage: null, errorType: null };

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return {
        ...state,
        errorMessage: action.payload.message,
        errorType: action.payload.type,
      };
    case "RESET_ERROR":
      return {
        ...initState,
      };

    default:
      return { ...state };
  }
};
