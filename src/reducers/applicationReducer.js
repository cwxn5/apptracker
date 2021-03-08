import _ from "lodash";
let initialState = {
  fetchingApplications: true,
  applications: {},
};
const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_APPLICATIONS":
      return {
        ...state,
        applications: action.payload,
        fetchingApplications: false,
      };
    case "CREATE_APPLICATION":
      return {
        applications: { ...state.applications, [action.id]: action.payload },
        ...state,
      };
    case "EDIT_APPLICATION":
      return {
        applications: { ...state.applications, [action.id]: action.payload },
        ...state,
      };
    case "MOVE_APPLICATION":
      const app = state[action.id];
      return {
        ...state,
        applications: {
          ...state.applications,
          [action.id]: { ...app, status: action.payload },
        },
      };
    case "DELETE_APPLICATION":
      return {
        ...state,
        applications: _.filter(
          state.applications,
          (value, key) => key !== action.id
        ),
      };
    default:
      return state;
  }
};

export default applicationReducer;
