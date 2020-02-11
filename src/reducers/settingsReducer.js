export default (state = {}, action) => {
  switch (action.type) {
    case "CREATE_SETTINGS":
      return { ...state, ...action.payload };
    case "FETCH_SETTINGS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
