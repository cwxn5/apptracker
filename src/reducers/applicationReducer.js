import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_APPLICATION":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_APPLICATIONS":
      return { ...state, ...action.payload };
    case "CREATE_APPLICATION":
      return { ...state, [action.id]: action.payload };
    case "EDIT_APPLICATION":
      return { ...state, [action.id]: action.payload };
    case "MOVE_APPLICATION":
      const app = state[action.id];
      return { ...state, [action.id]: { ...app, status: action.payload } };
    case "DELETE_APPLICATION":
      return _.omit(state, action.id);
    case "FILTER_APPLICATIONS":
      return { ...action.payload };
    default:
      return state;
  }
};
