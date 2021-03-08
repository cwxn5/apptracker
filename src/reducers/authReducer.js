const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      const { uid, displayName } = action.payload;
      return { ...state, user: { uid, displayName } };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default authReducer;