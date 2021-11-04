const initState = { message: null, type: null, screen: null };

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
        screen: action.payload.screen,
      };
    case "RESET_ERROR":
      return {
        ...initState,
      };

    default:
      return { ...state };
  }
};

export default errorReducer;
