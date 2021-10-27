const initState = {
  userId: null,
  isLoggedIn: false,
  user: null,
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return { ...state };

    case "RESET_USER":
      return { ...state };

    default:
      return { ...state };
  }
};
