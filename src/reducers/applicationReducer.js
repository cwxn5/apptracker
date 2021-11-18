let initialState = {
  fetchingApplications: true,
  applications: [],
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
        ...state,
        applications: [...state.applications, action.payload],
      };
    case "EDIT_APPLICATION":
      return {
        ...state,
        applications: state.applications.map((item) => {
          if (item.id !== action.id) {
            return item
          }
          return {
            ...item,
            ...action.payload
          }
        }),
      };
    case "DELETE_APPLICATION":
      return {
        ...state,
        applications: state.applications.filter(application => action.id !== application.id)
      };
    case "DELETE_ALL_APPLICATIONS":
      return {
        ...state,
        applications: []
      };
    default:
      return state;
  }
};

export default applicationReducer;
